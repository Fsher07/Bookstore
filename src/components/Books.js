import React from "react";
import styles from "./Books.module.css";

const Books = props => {
  return (
    console.log(props),
    <li className="book-rows" key={props.id}>
      <div className="book-info">
        <p className={styles.bookCategory}>{props.book.category}</p>
        <h3 className={styles.bookTitle}>{props.book.title}</h3>
        <p className={styles.author}>{props.book.author}</p>
        <button className={styles.btn} style={{border:'none', padding:'0'}}>Comment</button>
        <button className={styles.btn}>Remove</button>
        <button className={styles.btn}>Edit</button>
      </div>
      <div className="book-progress">
        <div className="book-progress-icon"></div>
        <div className="book-progress-text">{props.book.progress}%</div>
      </div>
      <div className="book-progress-info">
        <p className={styles.chapterText1}>CURRENT CHAPTER</p>
        <p className={styles.chapterText2}>{props.book.currentChapter}</p>
        <button className={styles.uptadeBtn}>UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Books;