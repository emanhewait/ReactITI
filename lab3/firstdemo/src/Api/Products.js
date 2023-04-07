import axios from "axios";

let baseUrl = "http://localhost:3005/product";

const getAllProducts = () => axios.get(baseUrl);
const getProductById = (productId) => axios.get(`${baseUrl}/${productId}`);
const addProduct = (product) => axios.post(baseUrl, product);
const deleteProduct = (productId) => axios.delete(`${baseUrl}/${productId}`);
const editProduct = (productId, product) =>
  axios.put(`${baseUrl}/${productId}`, product);

export const productsAPI  = {
  getAllProducts,
  getProductById,
  editProduct,
  deleteProduct,
  addProduct,
};