import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './Books.module.css';
import { deleteBookAction } from '../redux/books/book';

const Books = (props) => {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, category, title, author, progress, currentChapter,
  } = book;
  return (
    <li className="book-rows">
      <div className="book-info">
        <p className={styles.bookCategory}>{category}</p>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.author}>{author}</p>
        <button type="button" className={styles.btn} style={{ border: 'none', padding: '0' }}>Comment</button>
        <button onClick={() => dispatch(deleteBookAction(id))} type="button" className={styles.btn}>Remove</button>
        <button type="button" className={styles.btn}>Edit</button>
      </div>
      <div className="book-progress">
        <div className="book-progress-icon" />
        <div className="book-progress-text">
          {progress}
          %
        </div>
      </div>
      <div className="book-progress-info">
        <p className={styles.chapterText1}>CURRENT CHAPTER</p>
        <p className={styles.chapterText2}>{currentChapter}</p>
        <button type="button" className={styles.uptadeBtn}>UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Books.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;
