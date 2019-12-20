import React from "react";
import { Helmet } from "react-helmet";

export default () => (
  <>
    <Helmet>
      <title>My Website</title>
      <meta name="description" content="The description of my website" />
    </Helmet>
    <div>Hello world!</div>
  </>
);
