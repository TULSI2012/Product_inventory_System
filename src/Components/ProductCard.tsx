import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
}
export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#f4e8e1" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#6e2f22">
          {name}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 250 }} image={image} title={name} />
      <CardContent>
        <Typography variant="h5" color="#6e2f22">
          <span style={{ fontFamily: "fantsy" }}>{`$${price}`}</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="medium">Learn More</Button>
        <Button size="medium">Favourite</Button>
      </CardActions>
    </Card>
  );
}
