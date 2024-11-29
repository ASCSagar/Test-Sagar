import React from "react";
import { Helmet } from "react-helmet";

const Sagar = () => {
  return (
    <div>
      <Helmet
        title="Sagar Ramani"
        meta={[{ name: "description", content: "Sagar Ramani" }]}
      />
      <div>My First Name is Sagar</div>
    </div>
  );
};

export default Sagar;
