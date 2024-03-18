import ProductCard from "../Components/ProductCard";
import { useFavoriteProducts } from "../context/FavoriteProductsContext";

export default function FavoritePage() {
  const { favoriteProducts } = useFavoriteProducts();

  return (
    <div>
      <h1>Favorite Products</h1>
      <div>
        {favoriteProducts.map((productId) => (
          <ProductCard key={productId} id={productId} />
        ))}
      </div>
    </div>
  );
}
