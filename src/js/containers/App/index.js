import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from 'js/containers/Layout';
import 'scss/base/base';

export default ({ store }) => (
  <Provider store={store}>
    <Router basename={process.env.BASENAME}>
      <Layout />
    </Router>
  </Provider>
);