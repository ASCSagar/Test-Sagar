import React from "react";
import emailjs from "emailjs-com";

const EmailTemplate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("---Result---->", result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          alert("Something went wrong!", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <form class="formContainer" onSubmit={handleSubmit}>
        <h2>Send me a message. Let's have a chat!</h2>
        <div class="formElement">
          <label for="from_name">Name</label>
          <input
            type="text"
            id="from_name"
            name="name"
            placeholder="name"
            required
          />
        </div>

        <div class="formElement">
          <label>E-mail</label>
          <input
            type="email"
            id="from_email"
            name="email"
            placeholder="email"
            required
          />
        </div>

        <div className="formElement">
          <label>Phone</label>
          <input
            type="tel"
            id="from_phone"
            name="phone"
            placeholder="phone"
            required
          />
        </div>

        <div class="formElement">
          <label for="message">Message</label>
          <textarea
            name="message"
            rows="8"
            cols="30"
            placeholder="message"
            required
          />
        </div>
        <button type="submit" className="formButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailTemplate;
