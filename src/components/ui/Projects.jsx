import { motion } from 'framer-motion';
import CardSlider from './CardSlider';

const Projects = ({ projects }) => (
  <section id="projects" className="py-20">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Featured Projects</h2>
        <CardSlider items={projects} type="projects" />
      </motion.div>
    </div>
  </section>
);

export default Projects;
