import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects.jsx";
import NavBar from "./components/Header/NavBar.jsx";
import { useState } from "react";
import CarouselSkills from "./components/CarouselSkills.jsx";
import TechStack from "./components/TechStack.jsx";
import WorkHistory from "./components/WorkHistory.jsx";


function App() {
  const [islanguage, setIslanguage] = useState('FR');

  return (
    <div>
      <NavBar setIslanguage={setIslanguage} />
      <div className="floral-column floral-column-left"></div>
      <div
        className="floral-column floral-column-right"
      ></div>
      <Header islanguage={islanguage}/>
      <main>
        <CarouselSkills islanguage={islanguage} />
        <TechStack />
        <Projects islanguage={islanguage} />
        <WorkHistory islanguage={islanguage} />
      </main>
    </div>
  );
}

export default App;
