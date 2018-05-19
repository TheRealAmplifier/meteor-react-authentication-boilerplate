import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import NotFound from '../imports/ui/notfound';
import SignUp from '../imports/ui/signup';
import Login from '../imports/ui/login';
import Application from '../imports/ui/application';

const routes = (
  <Router history={ browserHistory }>
    <Route exact path="/" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/application" component={Application} />
    <Route path="*" component={NotFound} />
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render( routes, document.getElementById('AuthApp') );
});