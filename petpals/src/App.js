import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PetOwner from "./components/PetOwner";
import PetSitter from "./components/PetSitter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/pet-sitter" element={<PetSitter />} />
          <Route path="/pet-owner" element={<PetOwner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
