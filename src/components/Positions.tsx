import React from 'react'
import { motion } from 'framer-motion'

interface PositionsProps {
  darkMode: boolean
}

const Positions: React.FC<PositionsProps> = ({ darkMode }) => {
  const positions = [
    {
      company: 'KeyMax Sarl',
      period: 'May 2023 - Present',
      role: 'Full-stack web developer',
    },
    {
      company: 'EVAGROUP Consulting sarl',
      period: 'January 2024 - March 2024',
      role: 'Frontend developer',
    },
    {
      company: 'KIRI-SYSTEM',
      period: 'December 2023 - April 2024',
      role: 'Frontend developer',
    },
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
          POSITIONS <span className="text-blue-500">ALREADY TAKEN</span>
        </motion.h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          It has been a nice journey until now on this stage of my career. Every step has represented a huge opportunity to
          learn from other developers, my own self as well. Each challenge, difficulty has been converted into opportunities
          to grow in this great field.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
            >
              <h3 className="text-xl font-semibold mb-2">{position.company}</h3>
              <p className="text-gray-500 mb-2">{position.period}</p>
              <p className="font-medium">{position.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Positions