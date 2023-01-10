import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Trainers from "./pages/Trainers/Trainers";
import Plans from "./pages/Plans/Plans";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar";

function App() {
   return <Router>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
   </Router>
};

export default App;