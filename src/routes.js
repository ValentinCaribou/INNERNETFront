import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import NotFoundPage from "./containers/NotFoundPage.js";
import FormPage from "./containers/FormPage";
import Dashboard from "./containers/DashboardPage";
import AboutPage from "./containers/AboutPage";
// import CustomerListPage from "./containers/CustomerListPage";
// import CustomerFormPage from "./containers/CustomerFormPage";


export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="form" component={FormPage} />
      {/*<Route path="customer" component={CustomerFormPage} />*/}
      {/*<Route path="customer/:id" component={CustomerFormPage} />*/}
      {/*<Route path="customers" component={CustomerListPage} />*/}
      <Route path="about" component={AboutPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);
