import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectPage } from "./pages/ProjectPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="About" element={<AboutPage />} />
      <Route path="About" element={<ProjectPage />} />
    </Routes>
  );
};
