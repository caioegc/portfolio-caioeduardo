import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Stack from "./components/Stack.js";  
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';  

function App() {
  return (
    <div>
      <Header />
      <About />
      <Stack />       
      <Projects />
      <Contact /> 
    </div>
  );
}

export default App;
