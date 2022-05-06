import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddBook.module.css';
import { addBookAction } from '../redux/books/book';

const AddBook = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const authorRef = useRef(null);
  const addBookHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const author = authorRef.current.value;
    if (title && category) {
      dispatch(addBookAction({ title, category, author }));
    } else return;
    document.getElementById('titleBox').value = '';
    document.getElementById('authorBox').value = '';
    document.getElementById('selectBox').value = '';
  };

  return (
    <div className="addBook">
      <h3 className={styles.title}>ADD NEW BOOK</h3>
      <form onSubmit={addBookHandler}>
        <input className={styles.box} type="text" ref={titleRef} id="titleBox" name="title" placeholder="Book title" />
        <input className={styles.box} type="text" ref={authorRef} id="authorBox" name="author" placeholder="Author" />
        <select name="category" id="selectBox" ref={categoryRef} className={styles.placeholder} defaultValue="Category">
          <option value="Category" disabled>Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <button type="submit" className={styles.btn}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
