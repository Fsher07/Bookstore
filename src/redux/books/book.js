import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const DELETE_BOOK = 'bookstore/book/DELETE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    category: 'Fiction',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    progress: 75,
    currentChapter: 'Chapter 7',
  },
  {
    id: uuidv4(),
    category: 'Fiction',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    progress: 75,
    currentChapter: 'Chapter 1',
  },
  {
    id: uuidv4(),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: 75,
    currentChapter: 'Chapter 13',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload: {
    ...payload,
    id: uuidv4(),
  },
});

export const deleteBookAction = (id) => ({
  type: DELETE_BOOK,
  id,
});

export default bookReducer;
