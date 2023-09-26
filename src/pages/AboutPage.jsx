import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const AboutPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      {/* First Section with IMG */}
      <Grid
        container
        rowSpacing={isSmallScreen ? 2 : 4}
        columnSpacing={isSmallScreen ? 2 : 4}
        justifyContent={"space-between"}
        padding={0}
      >
        <Grid item xs={12}>
          <Typography variant="h1">About me</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg="auto"
          display={"flex"}
          justifyContent={isLargeScreen ? "center" : "end"}
        >
          <img
            src="/img/About Img.png"
            alt="Michael Von Image"
            style={{
              maxWidth: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography variant="body1" color="secondary.main">
            &quot;Hello! I&apos;m Michael Von, a passionate and innovative web
            designer and front-end web developer. With a strong eye for
            aesthetics and an understanding of user experience, I believe that
            good design is not only visually appealing but also user-centric. My
            goal is to merge creativity with technical expertise to craft
            websites that not only look stunning but also provide seamless
            navigation and optimal performance across various devices and
            platforms.
            <br />
            <br />
            If you&apos;re looking for a creative web designer and front-end web
            developer who can transform your digital presence into a compelling
            experience, let&apos;s connect. Together, we can bring your ideas to life
            and make an impact in the digital world.&quot;
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
