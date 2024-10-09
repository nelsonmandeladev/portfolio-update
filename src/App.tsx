import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Compagnons from './components/Compagnons'
import Positions from './components/Positions'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Compagnons darkMode={darkMode} />
        <Positions darkMode={darkMode} />
      </motion.div>
      <footer className={`py-6 ${darkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
          </a>
          <a href="mailto:example@example.com">
            <Mail className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-black'}`} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App