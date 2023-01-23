import React from "react";
import products from "../products";
import Product from "../components/Product";
import { Typography, Grid, Container } from "@mui/material";

const HomeScreen = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" sx={{ pt: 2, pb: 2 }}>
        {" "}
        LATEST PRODUCTS
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeScreen;
