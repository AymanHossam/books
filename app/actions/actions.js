import BooksApiService from '../services';

export const getBooks = async params => {
  const { data } = await BooksApiService.getBooks(params);
  return data;
};
