import { Box } from "@mui/material";
import "./App.css";
import { MainRoutes } from "./MainRoutes";
import Navbar from "./components/Navbar";
// import { HomePage } from "./components/HomePage";

function App() {
  return (
    <Box>
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
