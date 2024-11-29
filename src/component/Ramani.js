import React from "react";
import { Helmet } from "react-helmet";

const Ramani = () => {
  return (
    <div>
      <Helmet
        title="Ramani"
        meta={[{ name: "description", content: "Ramani" }]}
      />
      <div>My Last Name is Ramani</div>
    </div>
  );
};

export default Ramani;
