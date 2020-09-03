import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/pages/login.scss";

const validation = { user: "admin", pass: "123" };

export default (props) => {
  const [user, setUser] = React.useState({});

  const handleClick = () => {
    if (user.user === validation.user && user.pass === validation.pass) {
      props.handleLogin(true);
    } else {
      props.handleLogin(false);
    }
  };
  return (
    <Layout>
      <div className={"box"}>
        <h1>Login</h1>
        <div className={"form"}>
          <p>User:</p>
          <input type='text' onChange={(e) => setUser({ ...user, user: e.currentTarget.value })} />
          <p>Password:</p>
          <input type='password' onChange={(e) => setUser({ ...user, pass: e.currentTarget.value })} />
        </div>
        <Link onClick={handleClick} to={"/dashboard"}>
          Login
        </Link>
      </div>
    </Layout>
  );
};
