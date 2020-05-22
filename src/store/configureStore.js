import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import emittersReducer from '../reducers/emitters';
import emitterModesReducer from '../reducers/emittermodes';
import generatorsReducer from '../reducers/generators';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      emitters: emittersReducer,
      emittermodes: emitterModesReducer,
      generators: generatorsReducer,
      users: usersReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
