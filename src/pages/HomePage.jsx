import { Box, Grid, ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { techStackIcons } from "../utils/data";

export const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        rowSpacing={isSmallScreen ? 2 : 4}
        columnSpacing={isSmallScreen ? 2 : 4}
        direction="row"
        display="flex"
        justifyContent={"space-between"}
      >
        <Grid
          item
          xs={12}
          lg={6}
          display={"flex"}
          flexDirection={"column"}
          gap={isSmallScreen ? 2 : 4}
        >
          <Typography variant="h1">Creative Designer & Developer</Typography>
          <Typography variant="h3">
            I’m a web designer & front-end web developer based in Baguio City,
            Philippines.
          </Typography>

          <Typography variant="body1" color="secondary.main">
            Tech Stack
          </Typography>
          <Box sx={{
            display: "flex",
          }}>
          {techStackIcons.map((item) => (
            <ListItem key={item.id}>{item.icon}</ListItem>
          ))}
          </Box>
        </Grid>
        <Grid item xs={12} lg="auto">
          <img
            src="/img/Hero Img.png"
            alt=""
            style={{
              maxWidth: "100%",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
