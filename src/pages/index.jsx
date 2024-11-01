'use client'

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';
import dynamic from 'next/dynamic';
// Dynamically import Particles
const Particles = dynamic(() => import('react-tsparticles'), { ssr: false });


// Swiper imports
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CardSlider from '../components/ui/CardSlider';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Github, Linkedin, Mail, ExternalLink, Send
} from 'lucide-react';

import {
  Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Input, Textarea,} from "../components/ui/ui-components"

import Skills from "../components/ui/Skills";

// Experience and Projects Data
const experiences = [
  {
    title: "Associate Product Manager",
    company: "Klimb.io",
    dates: "May 2022 - November 2022",
    description: [
      "Revamped the dashboard and settings interface, resulting in a 25% decrease in user inquiries about platform navigation; streamlined user engagement processes, which improved response time by 15% across support teams.",
      "Executed daily monitoring of website performance metrics, analyzing error logs and crash reports, which improved response times to critical issues by 40%, contributing to a more stable recruitment management system.",
      "Conducted a weekly review of development team tasks, optimizing workflow and reallocating resources to high-priority items; this resulted in a 15% increase in task completion rates across the board."
    ],
    link: "https://www.klimb.io"
  },
  {
    title: "Associate Product Manager Intern",
    company: "Klimb.io",
    dates: "March 2022 - May 2022",
    description: [
      "Led effective daily check-ins with developers to assess ongoing tasks and roadblocks, fostering a collaborative environment that empowered the team to resolve issues quickly and improve project momentum.",
      "Implemented structured communication protocols during daily calls, contributing to a cohesive team environment; established regular updates to ensure all development activities are clearly tracked and reported."
    ],
    link: "https://www.klimb.io"
  },
  {
    title: "Celestial V Solutions",
    company: "Klimb.io",
    dates: "December 2021 - January 2022",
    description: [
      "Developed a big data visualization system, improving decision-making efficiency by 15%."
    ],
    link: "https://www.celestialv.com/"
  },
  // Add more experiences here
]

const projects = [
  {
    title: "Visionary Mate",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/Visionary_MATE"
  },
  {
    title: "Resume Analyzer Job Matcher",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/resume-analyzer-job-matcher"
  },
  {
    title: "Movie Rating Service",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/Movie-Rating-Service"
  },
  {
    title: "Movies Recommendation System",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/MoviesRecommendation"
  },
  // Add more projects here
]

// Main Component
export default function Component() {
  const [activeSection, setActiveSection] = useState('hero');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-gray-200">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: "#50fa7b" },
            shape: { type: "square" },
            opacity: { value: 0.5 },
            size: { value: 10 },
            move: { enable: true, speed: 4 },
          },
        }}
      />

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-border/40">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
                  offset={-70}
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
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
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
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Github className="h-5 w-5 text-neonGreen" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/jeevan-gowda-9873491a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Linkedin className="h-5 w-5 text-neonGreen" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:jeevangowda0711@gmail.com"
                target="_blank"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Mail className="h-5 w-5 text-neonGreen" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      
      </section>

      {/* Experience Section */}
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


{/* Projects Section */}
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




       {/* Skills Section */}
       <section id="skills" className="py-20 bg-background/50">
        <Skills />
       </section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-md mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-neonGreen">Get In Touch</h2>
              <p className="text-gray-400">I'm currently looking for new opportunities. Feel free to reach out!</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-200">Name</label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">Message</label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? <span>Sending...</span> : <span>Send Message</span>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
