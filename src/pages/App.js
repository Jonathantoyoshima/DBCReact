import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./login.js";
import Dashboard from "./dashboard.js";
import Dragon from "./dragon.js";

export default () => {
  const [logged, setLogged] = React.useState(false);
  const handleLogin = (evt) => {
    setLogged(evt);
  };
  return (
    <Router>
      <Switch>
        <Route path='/dragon/:id' render={() => (logged ? <Dragon /> : <Redirect to='/' />)} />
        <Route path='/dragon' render={() => (logged ? <Dragon /> : <Redirect to='/' />)} />
        <Route path='/dashboard' render={() => (logged ? <Dashboard /> : <Redirect to='/' />)} />
        <Route path='/'>
          <Login handleLogin={handleLogin} />
        </Route>
      </Switch>
    </Router>
  );
};
