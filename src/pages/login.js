import React from "react";
import Layout from "../components/Layout";
import "../styles/login.scss";

const validation = { user: "admin", pass: "123" };

export default (props) => {
  const [user, setUser] = React.useState({});
  const [messageError, setMessageError] = React.useState("");

  const handleClick = () => {
    if (user.user === validation.user && user.pass === validation.pass) {
      setMessageError("");
      props.handleLogin(true);
    } else {
      setMessageError(`User e password incorretos. Os valores corretos são 'admin' e '123'.`);
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
        <button onClick={handleClick}>Login</button>
        <div className={"error"}>
          <p>{messageError}</p>
        </div>
      </div>
    </Layout>
  );
};
