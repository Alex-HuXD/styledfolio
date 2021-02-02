import GlobalStyle from "./GlobalStyle";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage.jsx";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutMe from "./pages/About/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <HomePage />
      <AboutMe />
    </BrowserRouter>
  );
}

export default App;
