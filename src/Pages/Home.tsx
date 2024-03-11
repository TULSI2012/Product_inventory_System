import ProductCard from "../Components/ProductCard";
import Candy from "../assets/Candy.jpg";
import products from "../Data/Product.json";
import "../Components/Home.css";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <>
      <div className="container">
        <div className="cards">
          {productsArray.map((product) => (
            <ProductCard
              image={Candy}
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
