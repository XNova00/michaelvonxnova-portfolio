import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#212529",
      contrastText: "#FBF9F9",
    },
    secondary: {
      main: "#FBF9F9",
      contrastText: "#212529",
    },
  },
  typography: {
    h1: {
      fontFamily: "Inter, sans-serif",
      fontSize: "52px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#FBF9F9",
      "@media (max-width:600px)": {
        fontSize: "32px",
      },
    },
    h2: {
      fontFamily: "Inter, sans-serif",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#FBF9F9",
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
    },
    h3: {
      fontFamily: "Inter, sans-serif",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#FBF9F9",
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

    body3: {
      fontFamily: "Inter, sans-serif",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
    },

    myCustomButton: {
      fontFamily: "Inter, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiPaper-elevation1": {},
          "&.MuiPaper-elevation2": {},
          "&.MuiPaper-elevation3": {},
          "&.MuiPaper-elevation4": {
            boxShadow: "none",
          },
          "&.MuiPaper-elevation5": {},
        },
      },
    },
  },
});
