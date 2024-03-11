import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}
export default function ProductCard({
  image,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Edit</Button>
        <Button size="medium">Favourite</Button>
      </CardActions>
    </Card>
  );
}
