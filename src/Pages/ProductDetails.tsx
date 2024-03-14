import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <img>{product.image}</img>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button>Favourite</button>
      <button>Add To Cart</button>
    </div>
  );
}
export default ProductDetails;
