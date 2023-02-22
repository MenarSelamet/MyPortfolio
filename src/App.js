import React from "react";
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
