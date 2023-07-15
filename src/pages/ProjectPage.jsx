import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { projectContent } from "../utils/Data";

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
        {projectContent.map ((projects, index) => (
          <><Grid item sm={12} lg={5} sx={{ order: index % 2 === 0 ? 1 : 2 }}>
            <Typography variant="h2" >
              {projects.title}
            </Typography>
            <Typography variant="body1" color="secondary.main">
              {projects.text}
            </Typography>
          </Grid><Grid item sm={12} lg="auto" sx={{ order: index % 2 === 0 ? 2 : 1 }}>
              <img
                src={projects.image}
                alt="images"
                style={{
                  maxWidth: "100%",
                }} />
            </Grid></>
        ))}
      </Grid>
    </>
  );
};
