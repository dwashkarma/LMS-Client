import { createTheme } from "@mui/material/styles";
import tailwindConfig from "@/tailwind.config";

const {
  theme: {
    extend: { colors },
  },
} = tailwindConfig;
export const theme = createTheme({
  palette: {
    primary: {
      main: colors["primary"],
    },
    secondary: {
      main: colors["secondary"],
    },
  },
  typography: {
    fontFamily: "inherit",
  },
});
