import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import playersReducer from '../reducers/players';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      players: playersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
