import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Books from './Books';
import { getBooksAction } from '../redux/books/book';

const BooksList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAction());
  }, [dispatch]);
  return (
    <ul>
      {books.length > 0 ? books.map((book) => (
        <Books
          key={book.id}
          book={book}
          id={book.id}
        />
      )) : ''}
    </ul>
  );
};

export default BooksList;
