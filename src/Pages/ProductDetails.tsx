import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useParams, useNavigate } from "react-router-dom";
import { deleteProduct, getProductById } from "../API/productsAPI";
import { ProductType } from "../types/product";
import { BeatLoader } from "react-spinners";
import "./ProductDetails.css";

const ProductDetail = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await getProductById(id);

        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      const response = await deleteProduct(id);
      console.log("🚀 ~ handleDelete ~ response:", response);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {product ? (
        <div className="Container">
          <div className="CardContainer">
            <Card sx={{ maxWidth: 500, backgroundColor: "#f4e8e1" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image={product.image}
                  alt="Product Image"
                />
              </CardActionArea>
            </Card>
          </div>
          <div className="CardContainer">
            <Card
              sx={{
                maxWidth: "500px",
                backgroundColor: "#f4e8e1",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#6e2f22"
                >
                  <span style={{ fontFamily: "fantsy" }}>{product.name}</span>
                </Typography>
                <Typography variant="h5" color="#dea107">
                  <span style={{ fontFamily: "fantsy", marginBottom: "20px" }}>
                    {product.description}
                  </span>
                </Typography>
                <Typography variant="h5" color="#6e2f22">
                  <span style={{ fontFamily: "fantsy" }}>${product.price}</span>
                </Typography>
              </CardContent>
              <IconButton
                edge="end"
                aria-label="favourite"
                style={{ color: "#FFC0CB", marginBottom: "20px" }}
                onClick={handleDelete}
              >
                <FavoriteIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Card>
          </div>
        </div>
      ) : (
        <BeatLoader color="#36d7b7" />
      )}
    </>
  );
};

export default ProductDetail;
