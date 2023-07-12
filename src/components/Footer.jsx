import { Container, Grid, Button } from "@mui/material";

import { Link } from "react-router-dom";
import { navItems, socMedIcon } from "../utils/Data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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

      <footer>
        <Container
          maxWidth="lg"
          sx={{
            paddingTop: {
              xs: "32px",
              md: "64px",
            },
            paddingBottom: {
              xs: "32px",
              md: "64px",
            },
          }}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            rowSpacing={isSmallScreen ? 2 : 4}
            columnSpacing={isSmallScreen ? 2 : 4}
          >
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent={isMobile ? "center" : "start"}
            >
              <img src="/img/Logo.png" alt="Logo" />
            </Grid>
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
              justifyContent={isMobile ? "center" : "end"}
            >
              {socMedIcon.map((icon) => (
                <Button key={icon}>
                  <Link to={icon.path}>{icon.media}</Link>
                </Button>
              ))}
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};
