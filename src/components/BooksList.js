import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <ul>
      {books.map((book) => (
        <Books
          key={book.id}
          book={book}
          id={book.id}
        />
      ))}
    </ul>
  );
};

export default BooksList;
