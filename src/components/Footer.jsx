import { Box, Container, Button, IconButton, Typography } from "@mui/material";

import { buttonIcon, navItems } from "../utils/Data";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        {/* <Grid container>
          <Grid sm={12} md={4}>
            <img src="/img/Logo.png" alt="Logo" />
          </Grid>
          <Grid sm={12} md={4}>
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
          </Grid>
          <Grid sm={12} md={4}>
            {buttonIcon.map((item) => (
              <IconButton key={item}>{item.media}</IconButton>
            ))}
          </Grid>
        </Grid> */}
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>
            <img src="/img/Logo.png" alt="Logo" />
          </Box>
          <Box
            sx={{
              display: {
                sm: "block",
                md: "flex",
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
          <Box
            sx={{
              display: {
                sm: "block",
                md: "flex",
              },
            }}
          >
            {buttonIcon.map((item) => (
              <IconButton key={item}>{item.media}</IconButton>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1" color="secondary.main">
            Copyright 2023 . All right reserved.
          </Typography>
        </Box>
      </Container>
    </>
  );
};
