import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMe from "./pages/About/AboutMe";
import Project from "./pages/Projects/Project";
import Footer from "./components/Footer/Footer";
import ProjectsSlider from "./components/ProjectsContainer/ProjectsSlider";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <HomePage />
      <AboutMe />
      <ProjectsSlider />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
