"use client";
import { Roboto } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    darkprimary: Palette["primary"];
  }

  interface PaletteOptions {
    darkprimary: PaletteOptions["primary"];
  }
}

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    darkprimary: {
      main: "#1f2937",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
