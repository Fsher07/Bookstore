import '../App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import BooksList from './BooksList';

const BookStroeContainer = () => {
  const [books, setTodos] = useState([]);
  const addBook = (title,author,category) => {
    const newBook = {
      id: uuidv4(),
      category: category,
      title: title,
      author: author,
      completed: false
    };
    setTodos([...books, newBook]);
  };
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <BooksList books={books} />
          </div>
      </div>
    </>
  );
}

export default BookStroeContainer;