import axios from 'axios';

const API = '/api';

export const getProducts = () => axios.get(`${API}/products.json`);
export const getCategories = () => axios.get(`${API}/categories.json`);