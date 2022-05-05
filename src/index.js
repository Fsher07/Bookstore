import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookStoreContainer from './components/BookstoreContainer';
import store from './redux/configureStore';

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BookStoreContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
