import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className="mx-auto max-w-4xl">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>

      <footer className="App-footer p-4 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Saravjeet Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
