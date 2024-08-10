"use client";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/config/theme";
const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviders;
