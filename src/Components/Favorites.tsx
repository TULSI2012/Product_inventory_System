import { useState } from "react";
import ProductCard from "./ProductCard";

// Assuming you have a Product.ts file or similar
export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
}

export default function FavoritePage() {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const addToFavorites = (product: Product) => {
    setFavoriteProducts((prevFavorites) => [...prevFavorites, product]);
  };

  return (
    <div>
      <h1>Favorite Products</h1>
      {favoriteProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          addToFavorites={addToFavorites}
        />
      ))}
    </div>
  );
}
