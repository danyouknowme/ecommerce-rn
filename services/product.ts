import axios from 'axios';

export const getAllProducts = async () => {
  const response = await axios.get('https://ecommhuay.herokuapp.com/api/v1/products');
  return response;
};

export const getProductById = async (id: string) => {
  const response = await axios.get(`https://ecommhuay.herokuapp.com/api/v1/products/${id}`);
  return response;
};
