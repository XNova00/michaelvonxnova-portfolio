import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ProjectPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        rowSpacing={isSmallScreen ? 2 : 4}
        columnSpacing={isSmallScreen ? 2 : 4}
        justifyContent={"space-between"}
      >
        <Grid item sm={12}>
          <Typography variant="h1">Project</Typography>
        </Grid>
        <Grid item sm={12} lg="auto">
          <img
            src="/img/About Img.png"
            alt="Michael Von Image"
            style={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item sm={12} lg={7}>
          <Typography variant="body1" color="secondary.main">
            "Hello! I'm Michael Von, a passionate and innovative web designer
            and front-end web developer. With a strong eye for aesthetics and a
            understanding of user experience. I believe that good design is not
            only visually appealing but also user-centric. My goal is to merge
            creativity with technical expertise to craft websites that not only
            look stunning but also provide seamless navigation and optimal
            performance across various devices and platforms.
            <br />
            <br />
            If you're looking for a creative web designer and front-end web
            developer who can transform your digital presence into a compelling
            experience, let's connect. Together, we can bring your ideas to life
            and make an impact in the digital world."
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
