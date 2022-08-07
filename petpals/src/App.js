import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import PetSitter from "./components/PetSitter";
import PetOwner from "./components/PetOwner";
import PetOwnerForm from "./components/PetOwnerForm";
import PetSitterForm from "./components/PetSitterForm";
import FeedbackForm from "./components/FeedbackForm";
import SentRequests from "./components/SentRequests";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/pet-sitter" element={<PetSitter />} />
          <Route exact path="/pet-owner" element={<PetOwner />} />
          <Route exact path="/pet-owner-form" element={<PetOwnerForm />} />
          <Route exact path="/pet-sitter-form" element={<PetSitterForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/sent-requests" element={<SentRequests />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
