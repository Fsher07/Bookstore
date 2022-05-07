import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zGEtzcRraZqSiwqvyCxg';

export const addApiBook = (book, success) => {
  axios.post(`${URL}/books`, {
    item_id: book.id,
    author: book.author,
    title: book.title,
    category: book.category,
  }).then((result) => { success(result); });
};

export const getApiBook = (success) => {
  axios.get(`${URL}/books`).then((result) => { success(result); });
};

export const deleteApiBook = (id, success) => {
  axios.delete(`${URL}/books/${id}`).then((result) => { success(result); });
};
