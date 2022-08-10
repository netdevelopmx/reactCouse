import { createStore, combineReducers , applyMiddleware } from 'redux';
import expensesReducer from '../reduces/expenses';
import filtersReducer from '../reduces/filters';
import thunk from 'redux-thunk';
import authReducer from '../reduces/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
