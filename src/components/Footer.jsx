import {
  Grid,
  Button,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
import { navItems, socMedIcon } from "../utils/data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Footer = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{
          position: "relative",
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ py: 4 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={4} display="flex">
              {navItems.map((item) => (
                <Button key={item.id}>
                  <Link variant="body1" to={item.path}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              justifyContent={isMediumScreen ? "center" : "end"}
            >
              {socMedIcon.map((icon) => (
                <Button key={icon.id}>
                  <Link to={icon.path}>{icon.media}</Link>
                </Button>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
