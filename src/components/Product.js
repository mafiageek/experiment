import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 288, height: 288 }} key={product._id}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        component={Link}
        to={`/product/${product._id}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          component={Link}
          to={`/product/${product._id}`}
          sx={{ textDecoration: "none", color: "black" }}
        >
          {product.name}
        </Typography>
        <Ratings
          value={product.rating}
          text={`${product.numReviews} reviews`}
        />
        <Typography variant="h6" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
