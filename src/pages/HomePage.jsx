import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { techStackIcons } from "../utils/Data";

export const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: {
            xs: "32px",
            md: "64px",
          },
          marginBottom: {
            xs: "32px",
            md: "64px",
          },
          // height: "100vh",

          // gap: {
          //   xs: "32px",
          //   md: "64px",
          //   lg: "128px",
          // },
          display: "flex",
          flexDirection: "column",
          // justifyContent: "end",
        }}
      >
        <Grid
          container
          rowSpacing={isSmallScreen ? 2 : 8}
          columnSpacing={isSmallScreen ? 2 : 8}
          direction="row"
        >
          <Grid
            item
            xs={12}
            lg={7}
            display={"flex"}
            flexDirection={"column"}
            gap={isSmallScreen ? 2 : 4}
            // rowSpacing={isSmallScreen ? 2 : 4}
          >
            <Typography variant="h1">Creative Designer & Developer</Typography>
            <Typography variant="h2">
              I’m a web designer & front-end web developer based in Baguio City,
              Philippines.
            </Typography>
            <Box
              sx={{
                display: { sm: "block", lg: "flex" },
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="secondary.main">
                Tech Stack
              </Typography>
              <Divider
                orientation="vertical"
                sx={{
                  borderWidth: "0.1px",
                  display: { xs: "none", md: "none", lg: "flex" },
                  height: { xs: "0.5px", md: "24px" },
                  marginLeft: "16px",
                  borderColor: "secondary.main",
                }}
              />
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                {techStackIcons.map((item) => (
                  <ListItem key={item} disableGutters={true}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg="auto"
            display={"flex"}
            justifyContent={"center"}
            disableGutter={true}
          >
            <img src="/img/Hero Img.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
