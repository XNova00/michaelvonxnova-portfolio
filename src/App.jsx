import { Box } from "@mui/material";
import "./App.css";
import { MainRoutes } from "./MainRoutes";
import Navbar from "./components/Navbar";
// import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <Box>
      {/* <AnimatedCursor
        outerStyle={{
          border: "2px solid #FBF9F9",
        }}
        outerSize={6}
        color="251, 249, 249"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={5}
      /> */}
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
