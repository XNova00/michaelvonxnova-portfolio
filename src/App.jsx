import { Box } from "@mui/material";
import "./App.css";
import { MainRoutes } from "./MainRoutes";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <MainRoutes />
      <Footer />
    </Box>
  );
}

export default App;
