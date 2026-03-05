import { BrowserRouter, Routes, Route } from "react-router-dom";
import LearnGenetics from "./Components/LearnGenetics";
import DNA from "./Components/DNA";
import About from "./Components/About";
import Home from "./Components/Home"; 
import Counselling from "./Components/Counselling";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/learn-genetics" element={<LearnGenetics />} />
        <Route path="/dna" element={<DNA />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/counselling" element={<Counselling />} />
    
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
