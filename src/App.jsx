import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'

function App() {

  return (
    <div className="mx-auto max-w-4xl">
      <Navbar/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
