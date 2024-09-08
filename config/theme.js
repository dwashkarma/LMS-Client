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
      main: colors["primary"],
    },
    secondary: {
      main: colors["secondary"],
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderHoverColor": colors["primary"],
          "--TextField-brandBorderFocusedColor": colors["primary"],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "10px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "var(--TextField-brandBorderHoverColor)",
          },
        },
      },
    },
  },
});
