import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from "./ui-components";
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => (
  <section id="about" className="min-h-screen flex items-center justify-center pt-20">
    <div className="container px-4 py-32 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-neonGreen">
          Jeevan Gowda Hemanth Kumar
        </h1>
        <p className="text-xl text-gray-400 max-w-[600px] mx-auto">
          Aspiring Product Manager & Software Engineer
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              Explore My Work
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>
        <div className="flex justify-center gap-4 pt-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/jeevangowda0711"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <Github className="h-7 w-7 text-neonGreen" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/jeevan-gowda-9873491a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <Linkedin className="h-7 w-7 text-neonGreen" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:jeevangowda0711@gmail.com"
            target="_blank"
            className="p-4 rounded-full bg-gray-800 hover:bg-gray-700"
          >
            <Mail className="h-7 w-7 text-neonGreen" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
