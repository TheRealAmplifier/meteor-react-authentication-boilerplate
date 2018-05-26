import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';

import NotFound from '../imports/ui/notfound';
import SignUp from '../imports/ui/signup';
import Login from '../imports/ui/login';
import Application from '../imports/ui/application';

const unauthenticatedPages = ['/', '/login', '/signup'];
const authenticatedPages = ['/application'];
const onEnterPublicPage = () => {
  if ( Meteor.userId() ) {
    browserHistory.replace('/application');
  }
};
const onEnterPrivatePage = () => {
  if ( !Meteor.userId() ) {
    browserHistory.replace('/');
  }
}
const routes = (
  <Router history={browserHistory}>
    <Route exact path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={SignUp} onEnter={onEnterPublicPage} />
    <Route path="/application" component={Application} onEnter={onEnterPrivatePage}/>
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Router>
);

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/application');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
});

Meteor.startup(() => {
  ReactDOM.render( routes, document.getElementById('AuthApp') );
});