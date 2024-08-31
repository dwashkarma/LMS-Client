import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProviders from "@/providers/ThemeProviders";
import SessionProviders from "@/providers/SessionProvider";
import { ToastProvider } from "@/providers/ToastProvider";
import NextThemeProvider from "@/providers/NextThemes";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LMS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProviders>
          <SessionProviders>
            <ToastProvider />
            <NextThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
            >
              {children}
            </NextThemeProvider>
          </SessionProviders>
        </ThemeProviders>
      </body>
    </html>
  );
}
