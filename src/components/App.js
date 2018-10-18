import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, } from 'react-router-dom';
import WelcomePage from '../containers/WelcomePage';
import ChatPage from '../containers/ChatPage';
import configureStore from '../store';

const store = configureStore();

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const App = ({ classes }) => (
  <Provider store = {store}>
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(App);

