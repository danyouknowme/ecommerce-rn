import axios from 'axios';

export const getAllProducts = () => {
  const response = axios.get('https://fakestoreapi.com/products');
  return response;
};

export const getProductById = (id: string) => {
  const response = axios.get(`https://fakestoreapi.com/products/${id}`);
  return response;
};

export const checkFilteredSearchEngine = (productTitle: string, searchInput: string) => {
  return productTitle.toLowerCase().includes(searchInput.toLowerCase());
};
