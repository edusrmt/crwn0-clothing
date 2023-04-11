import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
  products: [],
  setAllProducts: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products: products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};