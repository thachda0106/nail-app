import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <Backdrop sx={{ color: "white", zIndex: 9999 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingSpinner;
