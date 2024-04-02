"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";


// Augment the palette to include an customGray color
declare module '@mui/material/styles' {
  interface Palette {
    customGray: Palette['primary'];
  }

  interface PaletteOptions {
    customGray?: PaletteOptions['primary'];
  }
}


// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     customGray: true;
//   }
// }



const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    // secondary:"#03c03c",
    secondary: {
      main: "#03c03c",
      light: "#03c03c",
      dark:" #027524",
    },
    customGray:{
      main: "#696969",
      light: "#9DA8B7",
      dark: "#303740",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "0px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
