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
      <Routes>
         <Route index element={<Home />}/>
         <Route path="about" element={<About />}/>
         <Route path="contact" element={<Contact />}/>
         <Route path="gallery" element={<Gallery />}/>
         <Route path="trainers" element={<Trainers />}/>
         <Route path="plans" element={<Plans />}/>
         <Route path="plans" element={<Plans />}/>
         <Route path="*" element={<NotFound />}/>
      </Routes>
   </Router>
};

export default App;