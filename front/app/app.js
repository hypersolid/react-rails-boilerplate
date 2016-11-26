'use strict';

import '_app/assets/stylesheets/app.styl';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '_app/store';
import auth from '_app/lib/auth';

import AboutPageComponent from '_app/components/pages/about';
import LoginComponent from '_app/components/pages/auth';
import LogoutComponent from '_app/components/auth/logout/';
import IndexPageComponent from '_app/components/pages/index';
import MainLayoutComponent from '_app/components/layouts/main';

export default (render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={MainLayoutComponent}>
        <Route component={LoginComponent} path='/'/>
        <Route component={LoginComponent} path='/login'/>
        <Route component={LogoutComponent} path='/logout'/>
        <Route
          component={IndexPageComponent}
          path='/records'
        />
        <Route
          component={AboutPageComponent}
          onEnter={auth.requireAuth}
          path='/about'
        />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container')));
