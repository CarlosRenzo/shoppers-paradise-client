import {
  Product,
  createProduct,
  updateProduct,
} from "../interfaces/product.interface";

export type State = {
  products: Product[];
};

export type Actions = {
  setProducts: (products: Product[]) => void;
  createProduct: (product: createProduct) => void;
  //deleteProduct: (id: number) => void;
  //getProduct: (id: number) => void;
  //getProducts: () => void;
  //updateProduct: (id: number, product: updateProduct) => void;
};
