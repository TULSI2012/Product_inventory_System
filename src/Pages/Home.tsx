import { Product } from "../Components/Favorites";
import ProductCard from "../Components/ProductCard";
import { getAllProducts } from "../API/productsAPI";
import { useState, useEffect } from "react";
import { ProductType } from "../types/product";
import "./Home.css";

const addToFavorites = (product: Product) => {
  // Implementation of adding a product to favorites
  console.log(`Adding ${product.name} to favorites`);
};
const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="cards">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id || ""}
              image={product.image}
              name={product.name}
              price={product.price}
              addToFavorites={() => product._id && addToFavorites(product)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
