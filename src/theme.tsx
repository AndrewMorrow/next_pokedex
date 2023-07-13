"use client";
import { Roboto } from "next/font/google";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    darkPrimary: Palette["primary"];
  }

  interface PaletteOptions {
    darkPrimary: PaletteOptions["primary"];
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
    darkPrimary: {
      main: "#1f2937",
    },
    primary:{
      main: "#1076BD",
    }
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
