import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { projectContent } from "../utils/data";

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
        padding={0}
      >
        <Grid item xs={12}>
          <Typography variant="h1">Project</Typography>
        </Grid>
        {projectContent.map((item) => (
          <Grid
            container
            item
            key={item.id}
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
