import { BrowserRouter, Switch, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage.jsx";
// import AboutMe from "./pages/About/AboutMe";
// import Project from "./pages/Projects/Project";
// import Footer from "./components/Footer/Footer";
// import ProjectsSlider from "./components/ProjectsContainer/ProjectsSlider";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ABout from "./components/About/ABout";
import ProjectsSlider from "./components/ProjectsContainer/ProjectsSlider";
import ContactMe from "./components/ContactForm/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <ABout />
      <ProjectsSlider />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
