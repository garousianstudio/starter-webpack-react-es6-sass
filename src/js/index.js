import 'whatwg-fetch';
import 'svgxuse';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import reducers from '@/reducers';
import App from '@/components/app';

import 'scss/main';

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // chrome redux devtools extension
	applyMiddleware(ReduxThunk));

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
  module.hot.accept('@/components/app', () => {
    const NextApp = require('@/components/app').default;
    render(NextApp);
  });
}