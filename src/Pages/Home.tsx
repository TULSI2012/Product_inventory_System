import ProductCard from "../Components/ProductCard";
import products from "../Data/Product.json";
import "./Home.css";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
      <div className="container">
        <div className="cards">
          {productsArray.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
