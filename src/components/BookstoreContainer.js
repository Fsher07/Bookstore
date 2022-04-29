import '../App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import BooksList from './BooksList';
import AddBook from './AddBook';
import Categories from '../pages/Categories';
import { Router, Route, Routes } from 'react-router-dom';

class BookStoreContainer extends React.Component {
  state = {
    books: [
      {
        id: uuidv4(),
        category: "Fiction",
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        progress: '75',
        currentChapter: 'Chapter 7',
      },
      {
        id: uuidv4(),
        category: "Fiction",
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        progress: '75',
        currentChapter: 'Chapter 1',
      },
      {
        id: uuidv4(),
        category: "Action",
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        progress: '75',
        currentChapter: 'Chapter 13',
      },
    ],
  };
  render() {
    return (
      <>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/categories" element={<Categories />} />
            </Routes>
            <Routes>
              <Route path="/books" element={<BooksList books={this.state.books} />} />
            </Routes>
            <Routes>
              <Route path="/books" element={<AddBook />} />
            </Routes>
          </div>
        </div>
      </>
    );
  };
}

export default BookStoreContainer;