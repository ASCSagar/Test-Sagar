import React, { useEffect, useState } from "react";

const GoogleCalender = () => {
  const [googleLoaded, setGoogleLoaded] = useState(false);
  let tokenClient;

  useEffect(() => {
    const loadGoogleScripts = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log("Google Identity Services script loaded.");
        setGoogleLoaded(true);
      };
      document.body.appendChild(script);

      const aScript = document.createElement("script");
      aScript.src = "https://apis.google.com/js/api.js";
      aScript.async = true;
      aScript.defer = true;
      aScript.onload = () => {
        window.gapi.load("client", () => {
          window.gapi.client
            .init({
              apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
              discoveryDocs: [process.env.REACT_APP_GOOGLE_DISCOVERY_URL],
            })
            .then(() => {
              console.log("Google API client initialized.");
            });
        });
      };
      document.body.appendChild(aScript);
    };

    loadGoogleScripts();
  }, []);

  const handleClick = () => {
    if (!googleLoaded) {
      alert("Google Identity Services not loaded yet. Please wait.");
      return;
    }

    // Initialize the token client if it doesn't already exist
    if (!tokenClient) {
      tokenClient = window.google.accounts.oauth2.initTokenClient({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        scope: process.env.REACT_APP_GOOGLE_SCOPES,
        callback: (response) => {
          if (response.error) {
            console.error("Error during token request:", response.error);
            return;
          }
          console.log("Access token acquired:", response.access_token);
          createEvent();
        },
      });
    }

    // Request access token
    tokenClient.requestAccessToken();
  };

  const createEvent = async () => {
    const event = {
      summary: "Sagar Ramani",
      location: "1/C Satyam Apartment Alkapuri",
      description: "Sagar Ishwarbhai Ramani",
      start: {
        dateTime: "2024-11-28T09:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: "2024-11-28T09:00:00-07:00",
        timeZone: "America/Los_Angeles",
      },
    };

    try {
      const response = await window.gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });
      console.log("Event created:", response);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Add Event</button>
    </div>
  );
};

export default GoogleCalender;
