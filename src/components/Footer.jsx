import {
  Container,
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import { Link } from "react-router-dom";
import { navItems, socMedIcon } from "../utils/Data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {/* <Container maxWidth="lg">
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} sm={4} direction="row">
            <img src="/img/Logo.png" alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={4} direction="row">
            <Grid container justifyContent="flex-end" spacing={2}>
              <Grid item>
                {navItems.map((item) => (
                  <Button key={item}>
                    <Link variant="body1" to={item.path}>
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </Grid>
              <Grid item xs={12} sm={4} direction="row">
                {socMedIcon.map((icon) => (
                  <Button key={icon}>{icon.media}</Button>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container> */}
      {/* <Container
        sx={{
          position: "fixed",
          bottom: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            rowSpacing={isSmallScreen ? 2 : 4}
            columnSpacing={isSmallScreen ? 2 : 4}
          >
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              {navItems.map((item) => (
                <Button key={item}>
                  <Link variant="body1" to={item.path}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent={isMediumScreen ? "center" : "end"}
            >
              {socMedIcon.map((icon) => (
                <Button key={icon}>
                  <Link to={icon.path}>{icon.media}</Link>
                </Button>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container> */}

      <Box
        sx={{
          position: "relative",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ py: 4 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={4} display="flex">
              {navItems.map((item) => (
                <Button key={item}>
                  <Link variant="body1" to={item.path}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent={isMediumScreen ? "center" : "end"}
            >
              {socMedIcon.map((icon) => (
                <Button key={icon}>
                  <Link to={icon.path}>{icon.media}</Link>
                </Button>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
