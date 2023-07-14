import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import { navItems } from "../utils/Data";
import { Link } from "react-router-dom";

import { useTheme } from "styled-components";
import { Container } from "@mui/material";

const drawerWidth = "100%";

function Navbar(props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        height: "100%",
        backgroundColor: "primary.main",
        boxShadow: "none",
      }}
    >
      <Box sx={{ py: 3 }}>
        <img src="/img/creative.von.svg" alt="" style={{ width: "160px" }} />
      </Box>
      <Divider
        sx={{
          backgroundColor: "transparent",
          borderStyle: "none",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          margin: "24px auto",
        }}
      >
        {navItems.map((item) => (
          <Button
            component={Link}
            key={item}
            to={item.path}
            sx={{
              "&&&": {
                fontFamily: "Inter, sans-serif",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 400,
                color: "secondary.main",
                "@media (max-width:600px)": {
                  fontSize: "16px",
                },
              },
            }}
          >
            {item.name}
          </Button>
        ))}
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="static"
        sx={{
          pt: 4,
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters={true}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src="/img/creative.von.svg"
              alt=""
              // style={{ width: "40px" }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                component={Link}
                key={item}
                to={item.path}
                sx={{
                  "&&&": {
                    fontFamily: "Inter, sans-serif",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    color: "secondary.main",
                    "@media (max-width:600px)": {
                      fontSize: "16px",
                    },
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
