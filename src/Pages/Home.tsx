import { Product } from "../Components/Favorites";
import ProductCard from "../Components/ProductCard";
import products from "../Data/Product.json";
import "./Home.css";

const addToFavorites = (product: Product) => {
  // Implementation of adding a product to favorites
  console.log(`Adding ${product.name} to favorites`);
};

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
      <div className="container">
        <div className="cards">
          {productsArray.map((product) => (
            <ProductCard
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              addToFavorites={() => addToFavorites(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
