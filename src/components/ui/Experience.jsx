import { motion } from 'framer-motion';
import CardSlider from './CardSlider';

const Experience = ({ experiences }) => (
  <section id="experience" className="py-20 bg-background/50">
    <div className="container px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Experience</h2>
        <CardSlider items={experiences} type="experience" />
      </motion.div>
    </div>
  </section>
);

export default Experience;
