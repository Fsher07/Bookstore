import React from 'react';
import ReactDOM from 'react-dom/client';
import BookStoreContainer from './components/BookstoreContainer';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BookStoreContainer />
    </Router>
  </React.StrictMode>
);

