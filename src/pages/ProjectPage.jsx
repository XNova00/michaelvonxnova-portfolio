import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { projectContent } from "../utils/Data";

export const ProjectPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {/* <Grid
        container
        rowSpacing={isSmallScreen ? 2 : 4}
        columnSpacing={isSmallScreen ? 2 : 4}
        justifyContent={"space-between"}
      >
        <Grid item sm={12}>
          <Typography variant="h1">Project</Typography>
        </Grid>
        {projectContent.map((projects) => (
          <>
          {projects.isLeft == false ? (
            <Grid item sm={12} lg={5}>
              <Typography variant="h2">{projects.title}</Typography>
              <Typography variant="body1" color="secondary.main">
                {projects.text}
              </Typography>
            </Grid>
            <Grid item sm={12} lg="auto">
              <img
                src={projects.image}
                alt="images"
                style={{
                  maxWidth: "100%",
                }}
              />
            </Grid>
          ) : null }
            
          </>
        ))}
      </Grid> */}
      <Grid
        container
        rowSpacing={isSmallScreen ? 2 : 4}
        columnSpacing={isSmallScreen ? 2 : 4}
        justifyContent={"space-between"}
        padding={0}
      >
        <Grid item xs={12}>
          <Typography variant="h1">Project</Typography>
        </Grid>
        {projectContent.map((item, index) => (
          <Grid
            container
            item
            key={index}
            rowSpacing={isSmallScreen ? 2 : 4}
            justifyContent={"space-between"}
          >
            {item.isLeft == false ? (
              <Grid item xs={12} lg="auto">
                <img
                  src={item.image}
                  alt="images"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </Grid>
            ) : null}
            <Grid item xs={12} lg={6}>
              <Typography variant="h1" color="secondary.main">
                {item.title}
              </Typography>
              <Typography variant="body1" color="secondary.main">
                {item.text}
              </Typography>
            </Grid>

            {item.isLeft == true ? (
              <Grid item xs={12} lg="auto">
                <img
                  src={item.image}
                  alt="images"
                  style={{
                    maxWidth: "100%",
                  }}
                />
              </Grid>
            ) : null}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
