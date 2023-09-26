import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
// import { MainRoutes } from "./MainRoutes";
import { Container, CssBaseline } from "@mui/material";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectPage } from "./pages/ProjectPage";

// import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
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
      <Container maxWidth="lg">
        <CssBaseline />
          <Navbar />
          <HomePage />
          <AboutPage />
          <ProjectPage />
          <Footer />
      </Container>
    </>
  );
}

export default App;
