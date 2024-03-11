import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductDetails from "./ProductDetails"; // Assuming you have a component for product details

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* Your main page content */}
          {/* Example ProductCard usage */}
          <ProductCard image="image-url" name="Product Name" price="19.99" />
        </Route>
        <Route path="/product-details/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
