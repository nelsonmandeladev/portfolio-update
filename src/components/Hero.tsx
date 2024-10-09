import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Link } from 'react-scroll'

interface HeroProps {
  darkMode: boolean
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const languages = ["Python", "JavaScript", "TypeScript"];
  const [currentLanguage, setCurrentLanguage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLanguage((prev) => (prev + 1) % languages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={`py-20 ${darkMode ? 'bg-black' : 'bg-white'} min-h-screen flex items-center`}>
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Full-stack{' '}
          <motion.span
            key={currentLanguage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 inline-block"
          >
            {languages[currentLanguage]}
          </motion.span>{' '}
          Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Comfortable using one of the most used and fast growing stack in software development particularly in the web. Being full stack developer give and incredible opportunity to participate in each stage of an app development from analyzing, planning, developing, testing and maintaining.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-x-4"
        >
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} font-semibold`}
            >
              About me
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} font-semibold`}
          >
            Download my CV
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <ArrowDown className="w-8 h-8 mx-auto cursor-pointer" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero