import { useQuery } from 'react-query';
import { getBooks } from './actions';

export const useBooks = (params, options) => {
  return useQuery(['books', params], () => getBooks(params), options);
};
