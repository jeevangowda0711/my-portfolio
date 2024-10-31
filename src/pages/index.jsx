'use client'

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { Link } from 'react-scroll';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

import {
  Github, Linkedin, Mail, ExternalLink, Send
} from 'lucide-react';

import {
  Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Badge, Tabs, TabsList, TabsTrigger, TabsContent, Input, Textarea, Progress,
} from "../components/ui/ui-components"

// Experience and Projects Data
const experiences = [
  {
    title: "Associate Product Manager",
    company: "Klimb.io",
    dates: "Apr 2022 - Nov 2022",
    description: [
      "Revamped dashboard interface, reducing user inquiries by 25%",
      "Improved critical issue response time by 40%",
      "Increased task completion rates by 15%"
    ],
    link: "https://www.klimb.io"
  },
  {
    title: "Associate Product Manager Intern",
    company: "Klimb.io",
    dates: "Apr 2022 - Nov 2022",
    description: [
      "Revamped dashboard interface, reducing user inquiries by 25%",
      "Improved critical issue response time by 40%",
      "Increased task completion rates by 15%"
    ],
    link: "https://www.klimb.io"
  },
  {
    title: "Celestial V Solutions",
    company: "Klimb.io",
    dates: "Apr 2022 - Nov 2022",
    description: [
      "Revamped dashboard interface, reducing user inquiries by 25%",
      "Improved critical issue response time by 40%",
      "Increased task completion rates by 15%"
    ],
    link: "https://www.klimb.io"
  },
  // Add more experiences here
]

const projects = [
  {
    title: "Visionary Mate",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/visionary-mate"
  },
  {
    title: "Mate",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/visionary-mate"
  },
  {
    title: "Vis",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/visionary-mate"
  },
  {
    title: "Resume Analyzer",
    description: "AI-Powered Accessibility Platform",
    details: "Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing.",
    badges: ["Python", "FastAPI", "HuggingFace", "Tailwind CSS"],
    link: "https://github.com/jeevangowda0711/visionary-mate"
  },
  // Add more projects here
]

// Main Component
export default function Component() {
  const [activeSection, setActiveSection] = useState('hero')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize particle effect
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  // Skill levels
  const skills = {
    programming: ["Python", "JavaScript", "MySQL", "PostgreSQL", "HTML/CSS", "C"],
    webDevelopment: ["Flask", "FastAPI", "Streamlit", "RESTful APIs", "JWT"],
    dataScience: ["pandas", "NumPy", "polars", "Matplotlib", "seaborn", "BeautifulSoup", "plotly", "Collaborative Filtering", "HuggingFace", "Llama-Index"],
    databasesCloud: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS", "GCP", "SQLAlchemy"],
    tools: ["Git", "GitHub", "Jira", "Tableau", "Excel", "MS SQL", "VS Code", "Trello", "Slack"],
    projectManagement: ["Agile", "User Stories", "Wireframes", "PRDs", "VAPT Reports"]
  }
  

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
        // className="absolute inset-0 -z-10"
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
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="default" size="lg">Explore My Work</Button>
              </Link>
              <Button asChild={true} href="/resume.pdf" download variant="outline" size="lg">
              Download Resume
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

      {/* Experience Section with Slider */}
      <section id="experience" className="py-20 bg-background/50">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Experience</h2>
            <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }} navigation loop>
              {experiences.map((exp, index) => (
                <SwiperSlide key={index}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company} | {exp.dates}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-gray-400">
                        {exp.description.map((desc, idx) => <li key={idx}>{desc}</li>)}
                      </ul>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-neonGreen mt-4 block">Learn more</a>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with Slider */}
      <section id="projects" className="py-20">
        <div className="container px-4">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Featured Projects</h2>
            <Swiper slidesPerView={1} spaceBetween={10} pagination={{ clickable: true }} navigation loop>
              {projects.map((proj, index) => (
                <SwiperSlide key={index}>
                  <Card className="group hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {proj.title}
                        <a href={proj.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-neonGreen" />
                        </a>
                      </CardTitle>
                      <CardDescription>{proj.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">{proj.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.badges.map((badge, idx) => <Badge key={idx}>{badge}</Badge>)}
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-20 bg-background/50">
  <div className="container px-4">
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="space-y-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Skills</h2>
      <Tabs defaultValue="programming" className="w-full">
        {/* Skill Category Tabs */}
        <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="programming">Programming</TabsTrigger>
          <TabsTrigger value="webDevelopment">Web Development</TabsTrigger>
          <TabsTrigger value="dataScience">Data Science</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="projectManagement">Product Mangement</TabsTrigger>
        </TabsList>
        
        {/* Display Sub-Skills as Symbols in Each Tab */}
        {Object.entries(skills).map(([category, skillList]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="flex flex-wrap gap-4">
              {skillList.map((skill, index) => (
                <Badge key={index} className="bg-gray-800 text-neonGreen px-4 py-2 rounded-md">
                  {skill}
                </Badge>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  </div>
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
  )
}
