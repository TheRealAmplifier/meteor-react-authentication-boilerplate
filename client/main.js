import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import NotFound from '../imports/ui/notfound';
import SignUp from '../imports/ui/signup';
import Login from '../imports/ui/login';
import Application from '../imports/ui/application';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/application'];
const routes = (
  <Router history={ browserHistory }>
    <Route exact path="/" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/application" component={Application} />
    <Route path="*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  const isValidated = !!Meteor.userId();
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

  if ( isAuthenticatedPage && isValidated ) {
    browserHistory.push('/application');
  } else if ( isAuthenticatedPage && !isValidated ) {
    browserHistory.push('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render( routes, document.getElementById('AuthApp') );
});