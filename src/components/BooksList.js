import React from "react";
import Books from "./Books";
const BooksList = props => {
    return (
        <ul>
          {props.books.map(book => (
           <Books 
              key={book.id}
              book={book}
           />
          ))}
        </ul>
    );
}

export default BooksList;