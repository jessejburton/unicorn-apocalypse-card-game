import React from 'react';
import ReactDOM from 'react-dom';

// Database
import { firebase } from './firebase/firebase';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Routing
import AppRouter, { history } from './routers/AppRouter';

// Store
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Actions
import { login, logout } from './actions/auth';
import { startAddPlayer, startSetPlayers } from './actions/players';
import { startSetGames } from './actions/games';

// Pages
import LoadingPage from './components/pages/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Destructure the User
    const {
      uid,
      displayName = '',
      email = '',
      photoURL = ''
    } = user;

    // Log the user in and get the necessary data
    Promise.all([
      store.dispatch(login({ uid, displayName, email, photoURL })),
      store.dispatch(startAddPlayer({ uid, displayName, email, photoURL })),
      store.dispatch(startSetPlayers()),
      store.dispatch(startSetGames())
    ]).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/menu');
      }
    });

  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
