import React from 'react';
import Books from './Books';

const BooksList = (props) => {
  const books = props;
  return (
    <ul>
      {books.books.map((book) => (
        <Books
          book={book}
          key={book.id}
        />
      ))}
    </ul>
  );
};

export default BooksList;
