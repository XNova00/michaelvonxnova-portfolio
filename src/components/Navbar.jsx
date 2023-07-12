import { AppBar, Box, Toolbar, Button, Container } from "@mui/material";

import { Link } from "react-router-dom";
import { navItems } from "../utils/Data";

export const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "64px 100px",
            boxShadow: "none",
          }}
          disableGutters={true}
          variant="regular"
        >
          <Box>
            <img src="/img/Logo.png" alt="Logo" />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                gap: "64px",
              },
            }}
          >
            {navItems.map((item) => (
              <Button key={item}>
                <Link variant="body1" to={item.path}>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
