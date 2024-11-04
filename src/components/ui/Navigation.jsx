import * as React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';

export default function Navigation({ setActiveSection, activeSection }) {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-neonGreen"
        >
          JG
        </motion.div>
        <div className="hidden md:flex gap-6">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onSetActive={() => setActiveSection(item.toLowerCase())}
              className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                activeSection === item.toLowerCase() ? 'text-neonGreen' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
