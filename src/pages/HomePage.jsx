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
      <Grid
        container
        rowSpacing={isSmallScreen ? 2 : 2}
        columnSpacing={isSmallScreen ? 2 : 2}
        direction="row"
        display={"flex"}
        justifyContent={"space-between"}
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
                borderColor: "secondarhy.main",
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
          // sx={{
          //   display: "flex",
          //   justifyContent: "center",
          // }}
        >
          <img src="/img/Hero Img.png" alt="" />
        </Grid>
      </Grid>
    </>
  );
};
