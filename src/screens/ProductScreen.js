import React from "react";
import {
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
Divider,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import products from "../products";
import Ratings from "../components/Ratings";

const ProductScreen = () => {
  const navigate = useNavigate();
  const params = useParams();

  const product = products.find((p) => p._id === params.id);
  return (
    <Container sx={{ mt: 10 }}>
      <Button
        sx={{ color: "black" }}
        variant="text"
        onClick={() => {
          navigate(-1);
        }}
      >
        GO BACK
      </Button>

      <Card key={product._id} sx={{height: 512, p: 1, display: "flex"}} >

        <CardMedia
          sx={{ width: 368, height: 256}}
          image={product.image}
        />

<Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>

            <Typography variant="h6" sx={{mb: 2}}>
            {product.name}

            </Typography>
            <Divider sx={{ m: 2}}/>

            <Ratings
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />
          <Divider sx={{ m: 2}}/>
          <Typography>
            {product.price}
          </Typography>
          <Typography variant="body1" paragraph sx={{noWrap: false}}>
            {product.description}
          </Typography>
        
        </CardContent>
</Box>
      </Card>

    </Container>
  );
};

export default ProductScreen;
