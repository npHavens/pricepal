import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from '../components/container/App.jsx';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App);

if (module.hot) {
  module.hot.accept('../components/container/App.jsx', () => {
    const NextApp = require('../components/container/App.jsx').default;
    render(NextApp);
  })
};