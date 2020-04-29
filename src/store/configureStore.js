import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
