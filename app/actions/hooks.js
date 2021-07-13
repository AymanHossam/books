import { useQuery } from 'react-query';
import { getBooks } from './actions';

export const useBooks = params => {
  return useQuery(['books', params], () => getBooks(params));
};
