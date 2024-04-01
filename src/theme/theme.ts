"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

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
      main: '#03c03c',
      light:'#03c03c',
      dark:'#03c03c'
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
    MuiListItemButton:{
      styleOverrides:{
        root:{
          '&:hover':{
            backgroundColor: "transparent"
          }
        }
      }
    }
    ,

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
