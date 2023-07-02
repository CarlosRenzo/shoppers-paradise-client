export interface Product {
  name: string;
  description: string;
  category: string;
  urlImg: string;
  price: number;
  stock: number;
}

export interface createProduct {
  name: string;
  description: string;
  category: string;
  urlImg: string;
  price: number;
  stock: number;
}

export interface updateProduct {
  description: string;
  price: number;
  stock: number;
}
