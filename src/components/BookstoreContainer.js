import '../App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import BooksList from './BooksList';
import AddBook from './AddBook';
import Categories from '../pages/Categoriespage';

class BookStoreContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: uuidv4(),
          category: 'Fiction',
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
          progress: 75,
          currentChapter: 'Chapter 7',
        },
        {
          id: uuidv4(),
          category: 'Fiction',
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          progress: 75,
          currentChapter: 'Chapter 1',
        },
        {
          id: uuidv4(),
          category: 'Action',
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          progress: 75,
          currentChapter: 'Chapter 13',
        },
      ],
    };
  }

  render() {
    const allbooks = this.state;
    return (
      <>
        <div className="App">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/categories" element={<Categories />} />
              <Route path="/books" element={<BooksList books={allbooks.books} />} />
            </Routes>
            <Routes>
              <Route path="/books" element={<AddBook />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

export default BookStoreContainer;
