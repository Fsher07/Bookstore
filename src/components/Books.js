import React from "react";

const Books = props => {
  return (
    <li>
      <h3>{props.book.title}</h3>
      <p>{props.book.author}</p>
      <p>{props.book.category}</p>
    </li>
  );
};

export default Books;