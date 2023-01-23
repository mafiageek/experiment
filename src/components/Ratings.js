import React from "react";
import { Box, Rating, Typography } from "@mui/material";

const Ratings = ({ value, text }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Rating name="simple-controlled" value={value} />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default Ratings;
