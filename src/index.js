import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './components/App';
=======
import App from './App';
>>>>>>> 1e2babf40ceab07bc4695fad0c7c1ca9b5224da2
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto'
import './index.css';
ReactDOM.render(
<App />, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
