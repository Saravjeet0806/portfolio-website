import { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
     
      <Skills />
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
