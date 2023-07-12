import { Container, Grid, Typography } from "@mui/material";
import { ArrowTopButton } from "../components/CustIconSvg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "64px",
          paddingBottom: "64px",
          gap: "64px",
        }}
        disableGutters={true}
      >
        <Typography variant="h1">Creative Designer & Developer</Typography>
        <Typography variant="h2">
          I’m a web designer & front-end web developer based in Baguio City,
          Philippines.
        </Typography>
        <ArrowTopButton />
      </Container> */}
      <Container
        maxWidth="lg"
        sx={{
          marginTop: {
            xs: "32px",
            md: "64px",
            lg: "128px",
          },
          marginBottom: {
            xs: "32px",
            md: "64px",
            lg: "128px",
          },
          display: "flex",
          flexDirection: "column",
          gap: {
            xs: "32px",
            md: "64px",
            lg: "128px",
          },
        }}
      >
        <Grid
          container
          rowSpacing={isSmallScreen ? 2 : 4}
          columnSpacing={isSmallScreen ? 2 : 4}
        >
          <Grid item>
            <Typography variant="h1">Creative Designer & Developer</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">
              I’m a web designer & front-end web developer based in Baguio City,
              Philippines.
            </Typography>
          </Grid>
          <Grid item>
            <ArrowTopButton />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
