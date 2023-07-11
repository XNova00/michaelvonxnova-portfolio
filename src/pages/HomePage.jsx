import { Container, Typography } from "@mui/material";
import { ArrowTopButton } from "../components/CustIconSvg";

export const HomePage = () => {
  return (
    <>
      <Container
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
      </Container>
    </>
  );
};
