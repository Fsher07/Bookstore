import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookStoreContainer from './components/BookstoreContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BookStoreContainer />
      </Router>
    </div>
  );
}

export default App;
