import React from 'react'
import { motion } from 'framer-motion'

interface CompagnonsProps {
  darkMode: boolean
}

const Compagnons: React.FC<CompagnonsProps> = ({ darkMode }) => {
  const technologies = [
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  ]

  return (
    <section className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          MY DAY TO DAY <span className="text-blue-500">COMPAGNONS</span>
        </motion.h2>
        <div className="mb-8">
          <ul className="flex justify-center space-x-4">
            <li className={`px-4 py-2 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-full`}>All</li>
            <li className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-full`}>PL and Frameworks</li>
            <li className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-full`}>DB</li>
            <li className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-full`}>Platform</li>
            <li className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-full`}>Productivity</li>
            <li className={`px-4 py-2 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} rounded-full`}>Others</li>
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex flex-col items-center p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} shadow-lg`}
            >
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-2" />
              <p className="text-center font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Compagnons