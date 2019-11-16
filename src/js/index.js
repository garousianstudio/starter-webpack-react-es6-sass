import 'whatwg-fetch';
import 'svgxuse';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'js/containers/App';
import store from './store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store}/>
    </AppContainer>,
    document.getElementById('root')
  )
};

render(App);

if (module.hot) {
  module.hot.accept('js/containers/App', () => {
    const NextApp = require('js/containers/App').default;
    render(NextApp);
  });
}