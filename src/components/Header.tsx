import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Link } from 'react-scroll'

interface HeaderProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`py-4 ${darkMode ? 'bg-black' : 'bg-white'} fixed w-full z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold">NM</h1>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['home', 'about', 'experiences', 'portfolio'].map((section) => (
              <motion.li key={section} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer hover:text-blue-500"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </motion.button>
      </div>
    </header>
  )
}

export default Header