import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

import React, { Component } from 'react';

import NotFound from '../ui/notfound';
import SignUp from '../ui/signup';
import Login from '../ui/login';
import Application from '../ui/application';

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
};
export const onAuthChange = (isAuthenticated) => {
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
};
export const routes = (
  <Router history={browserHistory}>
    <Route exact path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/signup" component={SignUp} onEnter={onEnterPublicPage} />
    <Route path="/application" component={Application} onEnter={onEnterPrivatePage}/>
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Router>
);
