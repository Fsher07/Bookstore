const STATUS = 'CHECK_STATUS';

const initialState = [];

const statusAction = () => ({
  type: STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS:
      return state;
    default:
      return state;
  }
};
