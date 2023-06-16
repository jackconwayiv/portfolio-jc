import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Educator from "./components/Educator";
import GameDesigner from "./components/GameDesigner";
import Home from "./components/Home";
import Musician from "./components/Musician";
import Navbar from "./components/Navbar";
import SoftwareDeveloper from "./components/SoftwareDeveloper";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<SoftwareDeveloper />} />
        <Route path="/educator" element={<Educator />} />
        <Route path="/musician" element={<Musician />} />
        <Route path="/designer" element={<GameDesigner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
