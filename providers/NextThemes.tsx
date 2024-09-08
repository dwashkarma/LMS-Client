"use client";
import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
function NextThemeProvider({ children, ...otherProps }: ThemeProviderProps) {
  return <ThemeProvider {...otherProps}>{children}</ThemeProvider>;
}

export default NextThemeProvider;
