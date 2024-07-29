"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 375,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1440,
    },
  },
  typography: {
    fontFamily: [
      "var(--font-catamaran), sans-serif",
      "var(--font-lora), sans-serif",
    ].join(","),
  },
});

const AppTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppTheme;
