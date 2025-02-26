import { createTheme } from "@mui/material"

export const shades = {
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
  },
  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006"
},
neutral : {
  100: "#f5f5f5",
  200: "#ecebeb",
  300: "#e2e1e1",
  400: "#d9d7d7",
  500: "#cfcdcd",
  600: "#a6a4a4",
  700: "#7c7b7b",
  800: "#535252",
  900: "#292929"
},
};

const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500]
    },
    secondary: {
      main: shades.secondary[500]
    },
    info: {
      main: shades.neutral[500],
      dark: shades.neutral[700]
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: ['Fauna One', 'sans-serif'].join(','),
    h1: {
      fontSize: 48,
      fontFamily: ['Cinzel', 'sans-serif'].join(','),

    },
    h2: {
      fontSize: 36,
      fontFamily: ['Cinzel', 'sans-serif'].join(','),

    },
    h3: {
      fontSize: 20,
      fontFamily: ['Cinzel', 'sans-serif'].join(','),
    }
  }
});

export default theme;