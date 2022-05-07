import { addApiBook, getApiBook, deleteApiBook } from './api';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const DELETE_BOOK = 'bookstore/book/DELETE_BOOK';
const GET_BOOKS = 'bookstore/book/GET_BOOKS';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  let books;
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: state.books.concat(action.payload) };
    case DELETE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.id) };
    case GET_BOOKS:
      books = Object.keys(action.payload).map((id) => ({
        id,
        title: action.payload[id][0].title,
        author: action.payload[id][0].author,
        category: action.payload[id][0].category,
      }));
      return { ...state, books };
    default:
      return state;
  }
};

export const addBookAction = (book) => (dispatch) => {
  addApiBook(book, () => {
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  });
};

export const deleteBookAction = (id) => (dispatch) => {
  deleteApiBook(id, () => {
    dispatch({
      type: DELETE_BOOK,
      id,
    });
  });
};

export const getBooksAction = () => (dispatch) => {
  getApiBook((results) => {
    dispatch({
      type: GET_BOOKS,
      payload: results.data,
    });
  });
};

export default bookReducer;
