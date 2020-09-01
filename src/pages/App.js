import React from "react";
import Login from "./login.js";

export default () => {
  const handleLogin = (evt) => {
    console.log(evt);
  };
  return <Login handleLogin={handleLogin} />;
};
