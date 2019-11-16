import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostList from '../PostList';
import NotFound from 'js/components/404';
import 'scss/base/base';

export default ({ store }) => (
  <Provider store={store}>
    <Router basename={process.env.BASENAME}>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);