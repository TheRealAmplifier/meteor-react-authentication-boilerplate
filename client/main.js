import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import createBrowserHistory from 'history/createBrowserHistory';

import NotFound from '../imports/ui/notfound';
import SignUp from '../imports/ui/signup';
import Login from '../imports/ui/login';


const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render( routes, document.getElementById('AuthApp') );
});