"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["var(--font-catamaran), sans-serif"].join(","),
  },
});

const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
