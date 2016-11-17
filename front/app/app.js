'use strict';

import '_app/assets/stylesheets/app.styl';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from '_app/containers';
import store from '_app/store';

import MainLayoutComponent from '_app/components/layouts/main';

import IndexPageComponent from '_app/components/pages/index';
import AboutPageComponent from '_app/components/pages/about';
import FaqPageComponent from '_app/components/pages/faq';

export default (render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route component={MainLayoutComponent}>
      <Route component={App}>
        <Route component={IndexPageComponent} path='/'/>
        <Route component={AboutPageComponent} path='/about'/>
        <Route component={FaqPageComponent} path='/faq'/>
      </Route>
    </Route>
  </Router>
  </Provider>
), document.getElementById('container')));
