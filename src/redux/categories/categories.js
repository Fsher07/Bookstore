const STATUS = 'bookstore/categories/STATUS';

const initialState = { books: [] };

export const statusAction = () => ({
  type: STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoriesReducer;
