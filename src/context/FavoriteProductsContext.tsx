import React, { createContext, useState, useContext } from "react";

const FavoriteProductsContext = createContext();

export const useFavoriteProducts = () => useContext(FavoriteProductsContext);

export const FavoriteProductsProvider = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (productId) => {
    setFavoriteProducts((prevFavorites) => [...prevFavorites, productId]);
  };

  const removeFromFavorites = (productId) => {
    setFavoriteProducts((prevFavorites) =>
      prevFavorites.filter((id) => id !== productId)
    );
  };

  const isProductFavorite = (productId) => favoriteProducts.includes(productId);

  return (
    <FavoriteProductsContext.Provider
      value={{
        favoriteProducts,
        addToFavorites,
        removeFromFavorites,
        isProductFavorite,
      }}
    >
      {children}
    </FavoriteProductsContext.Provider>
  );
};
