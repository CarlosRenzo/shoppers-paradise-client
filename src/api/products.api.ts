import axios from "axios";
import { URL } from "../config";
import {
  createProduct,
  updateProduct,
} from "../common/interfaces/product.interface";

const url = URL + "/products";

export const createProductRequest = async (product: createProduct) =>
  await axios.post(url, product);

export const deleteProductRequest = async (id: number) =>
  await axios.delete(`${url}/${id}`);

export const getProductRequest = async (id: number) =>
  await axios.get(`${url}/${id}`);

export const getProductsRequest = async () => await axios.get(url);

export const updateProductRequest = async (
  id: number,
  product: updateProduct
) => await axios.put(`${url}/${id}`, product);
