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
      main: "hsl(var(--chart-2))",
    },
    secondary: {
      main: "hsl(var(--chart-2))",
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: "10px",
          backgroundColor: "hsl(var(--dark))",
          borderColor: "hsl(var(--light))",
        },

        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "hsl(var(--dark))",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "hsl(var(--borders))",
            borderRadius: "10px",
          },
        },
      },
    },
  },
});
