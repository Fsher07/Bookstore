import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/book';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: bookReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
