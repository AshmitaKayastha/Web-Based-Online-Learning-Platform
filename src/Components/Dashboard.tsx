import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Dashboard Pages
const Overview = () => (
  <div>
    <h2>Overview</h2>
    <p>This is the overview section of the dashboard.</p>
  </div>
);

const Profile = () => (
  <div>
    <h2>Profile</h2>
    <p>Here you can view and edit your profile information.</p>
  </div>
);

const Settings = () => (
  <div>
    <h2>Settings</h2>
    <p>Manage your settings here.</p>
  </div>
);

const NotFound = () => <h2>Page Not Found</h2>;

// Main Dashboard
const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "200px", borderRight: "1px solid #ddd", padding: "20px" }}>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard/overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
        </ul>
      </nav>

      <div style={{ padding: "20px", width: "100%" }}>
        <Switch>
          <Route path="/dashboard/overview" component={Overview} />
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/settings" component={Settings} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" exact>
          <h1>Welcome to the Dashboard</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
