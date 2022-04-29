import React from "react";
import styles from "./AddBook.module.css";

const AddBook = props => {
  return (
    <div className="addBook">
      <h3 className={styles.title}>ADD NEW BOOK</h3>
      <form>
          <input className={styles.box} type="text" name="title" placeholder="Book title" />
          <select name="category" className={styles.placeholder} defaultValue="Category">
            <option value="Category" disabled>Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>
          <button className={styles.btn}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;