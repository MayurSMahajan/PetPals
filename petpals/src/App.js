import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectPet from "./components/SelectPet";
import PetSitter from "./components/PetSitter";
import PetOwner from "./components/PetOwner";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/pet-sitter" element={<PetSitter />} />
          <Route path="/pet-owner" element={<PetOwner />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
