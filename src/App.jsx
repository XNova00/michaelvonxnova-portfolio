import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MainRoutes } from "./MainRoutes";

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

      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
