import '../App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BooksList from './BooksList';
import AddBook from './AddBook';
import Categories from '../pages/Categoriespage';

function BookStoreContainer() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route path="/books" element={<BooksList />} />
          </Routes>
          <Routes>
            <Route path="/books" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default BookStoreContainer;
