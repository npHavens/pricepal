import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import App from '../components/App.jsx';
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
  module.hot.accept('../components/App.jsx', () => {
    const NextApp = require('../components/App.jsx').default;
    render(NextApp);
  })
};