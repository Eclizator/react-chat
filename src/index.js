import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import serviceWorker from './serviceWorker';
import 'typeface-roboto'
import './index.css';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, rootEl);
  })
}

serviceWorker();
