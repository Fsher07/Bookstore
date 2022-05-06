import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/book';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  books: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
