import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#212529",
      contrastText: "#F6EFEF",
    },
    secondary: {
      main: "#F6EFEF",
      contrastText: "#212529",
    },
  },
  typography: {
    h1: {
      fontFamily: "Inter, sans-serif",
      fontSize: "96px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#F6EFEF",
      "@media (max-width:600px)": {
        fontSize: "52px",
      },
    },
    h2: {
      fontFamily: "Inter, sans-serif",
      fontSize: "42px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#F6EFEF",
      "@media (max-width:600px)": {
        fontSize: "32px",
      },
    },
    h3: {
      fontFamily: "Inter, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#F6EFEF",
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
  },
  button: {
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 600,
    "@media (max-width:600px)": {
      fontSize: "16px",
    },
  },
});
