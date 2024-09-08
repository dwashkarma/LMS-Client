import { createTheme } from "@mui/material/styles";
import tailwindConfig from "@/tailwind.config";
import { outlinedInputClasses } from "@mui/material";

const {
  theme: {
    extend: { colors },
  },
} = tailwindConfig;

export const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(var(--primary))",
    },
    secondary: {
      main: "hsl(var(--secondary))",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderHoverColor": "hsl(var(--primary))",
          "--TextField-brandBorderFocusedColor": "hsl(var(--primary))",
        },
        borderRadius: "10px",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        borderRadius: "10px",
        notchedOutline: {
          borderRadius: "10px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
            borderRadius: "10px",
          },
        },
      },
    },
  },
});
