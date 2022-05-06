const STATUS = 'bookstore/categories/STATUS';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const statusAction = () => ({
  type: STATUS,
});

export default categoriesReducer;
