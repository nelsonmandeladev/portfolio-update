import React from 'react'
import { motion } from 'framer-motion'

interface AboutProps {
  darkMode: boolean
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          IT'S MORE ABOUT <span className="text-blue-500">PASSION</span>
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Coding passion"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 md:pl-8"
          >
            <h3 className="text-2xl font-semibold mb-4">Hi there, I'm SONFACK Nelson Mandela</h3>
            <p className="mb-4">
              I'm a full-stack Python/JavaScript developer. Since three years already, my passion has to continuously explore new technologies and methodologies, ensuring I stay at the forefront of the industry. I thrive on solving complex problems and creating efficient, scalable solutions that make a real impact.
            </p>
            <p className="mb-4">
              Whether it's diving deep into a new programming language, mastering a new framework, or contributing to open-source projects, I'm always eager to learn and grow. My enthusiasm and collaborative spirit allow me to deliver innovative and robust applications.
            </p>
            <p>
              My journey as a developer has embraced challenges as opportunities to learn and grow. I'm enthusiastic about collaborating with other talented professionals and am always open to new ideas and perspectives. My goal is to keep pushing the boundaries of what's possible with code and to create meaningful solutions that make a difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About