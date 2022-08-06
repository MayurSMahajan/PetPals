import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectPet from "./components/SelectPet";
import BecomeSitter from "./components/BecomeSitter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SelectPet />
      <BecomeSitter/>
    </div>
  );
}

export default App;
