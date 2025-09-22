import { createTheme, type ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
 cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#00ffe3",
    },
    secondary: {
      main: "#f9ff00",
    },
    background: {
      default: "#072cfb",
      paper: "#8c8c8c",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
  },
  typography: {
    h5: {
      fontFamily: "Droid Serif",
    },
  },
};

export const theme = createTheme(themeOptions);