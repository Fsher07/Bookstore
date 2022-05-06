const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const DELETE_BOOK = 'bookstore/book/DELETE_BOOK';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = () => ({
  type: ADD_BOOK,
});

export const deleteBook = () => ({
  type: DELETE_BOOK,
});

export default bookReducer;
