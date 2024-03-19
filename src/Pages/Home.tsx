import { Product } from "../Components/Favorites";
import { useState, useEffect } from "react";
import { getAllProducts } from "../API/productsAPI";
import ProductCard from "../Components/ProductCard";
import products from "../Data/Product.json";
import "./Home.css";

const addToFavorites = (product: Product) => {
  // Implementation of adding a product to favorites
  console.log(`Adding ${product.name} to favorites`);
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const productsArray = products.products.data.items;

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
          {productsArray.map((product) => (
            <ProductCard
              key={product.id}
              _id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              addToFavorites={() =>
                addToFavorites({ ...product, _id: product.id })
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
