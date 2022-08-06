import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectPet from "./components/SelectPet";
import PetSitter from "./components/PetSitter";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SelectPet />
      <PetSitter/>
    </div>
  );
}

export default App;
