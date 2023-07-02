import { create } from "zustand";
import { Actions, State } from "../common/types/product.type";
import { Product, createProduct } from "../common/interfaces/product.interface";
import { createProductRequest } from "../api/products.api";

export const useProductStore = create<State & Actions>((set) => ({
  products: [],
  setProducts: (products: Product[]) => set(() => ({ products })),
  createProduct: async (product: createProduct) => {
    const createdProduct = await createProductRequest(product);
    

    set((state) => ({ products: [...state.products, product] }));
  },
}));
