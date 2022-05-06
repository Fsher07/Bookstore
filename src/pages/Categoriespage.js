import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusAction } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <button onClick={() => { dispatch(statusAction()); }} type="button" className="categoryBtn">Check Status</button>
      <p>
        {status}
      </p>
    </div>
  );
};

export default Categories;
