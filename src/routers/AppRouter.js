import React from 'react';

// Routing
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Pages
import LoginPage from '../components/pages/LoginPage';
import GamePage from '../components/pages/GamePage';
import MainMenuPage from '../components/pages/MainMenuPage';
import NewGamePage from '../components/pages/NewGamePage';
import NotFoundPage from '../components/pages/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/menu" component={MainMenuPage} />
        <PrivateRoute path="/new" component={NewGamePage} />
        <PrivateRoute path="/play/:id" component={GamePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
