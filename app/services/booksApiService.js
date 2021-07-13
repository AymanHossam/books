import axios from 'axios';

axios.defaults.params = { format: 'json' };
axios.defaults.baseURL = 'https://openlibrary.org/api';

export const getBooks = params => {
  return axios.get('/books', { params });
};
