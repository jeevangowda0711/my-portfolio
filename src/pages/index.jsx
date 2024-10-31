'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
// import type { Engine } from 'tsparticles-engine'
import { Link } from 'react-scroll'
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ExternalLink,
  ChevronDown,
  Stars,
  Sparkles,
  Send,
} from 'lucide-react'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Input,
  Textarea,
  Progress,
} from "../components/ui/ui-components"

export default function Component() {
  const [activeSection, setActiveSection] = useState('hero')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const skills = {
    programming: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'C', level: 75 },
    ],
    web: [
      { name: 'React', level: 85 },
      { name: 'FastAPI', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Node.js', level: 75 },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 dark text-gray-200">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50 },
            color: { value: "#50fa7b" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
      />
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            opacity: 0,
          },
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#50fa7b" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#50fa7b",
              opacity: 0.2,
              width: 1,
            },
          },
        }}
        className="absolute inset-0 -z-10"
      /> */}

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
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="default" size="lg">
                  Explore My Work
                </Button>
              </Link>
              <Button asChild={true} href="/resume.pdf" download variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center gap-4 pt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/jeevangowda0711"
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Github className="h-5 w-5 text-neonGreen" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/in/jeevan-gowda-9873491a6/"
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Linkedin className="h-5 w-5 text-neonGreen" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:jeevangowda0711@gmail.com"
                aria-label="Email"
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
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Associate Product Manager</CardTitle>
                  <CardDescription>
                    Klimb.io | Apr 2022 - Nov 2022
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    <li>Revamped dashboard interface, reducing user inquiries by 25%</li>
                    <li>Improved critical issue response time by 40%</li>
                    <li>Increased task completion rates by 15%</li>
                  </ul>
                </CardContent>
              </Card>
              {/* Add more experience cards here if needed */}
            </div>
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
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Visionary Mate
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>AI-Powered Accessibility Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Enhanced accessibility and engagement by 40% through AI-powered navigation and media processing
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>FastAPI</Badge>
                    <Badge>HuggingFace</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
              {/* Add more project cards here if needed */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with Progress Bars */}
      <section id="skills" className="py-20 bg-background/50">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Skills</h2>
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="data">Data Science</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
              {Object.entries(skills).map(([category, categorySkills]) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid gap-4">
                    {categorySkills.map((skill) => (
                      <Card key={skill.name} className="group hover:shadow-lg transition-all">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <p className="font-medium text-neonGreen">{skill.name}</p>
                            <span className="text-sm text-gray-400">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-neonGreen">Get In Touch</h2>
              <p className="text-gray-400">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-200">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-gray-800 border-gray-700 text-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-gray-800 border-gray-700 text-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[100px] bg-gray-800 border-gray-700 text-gray-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        Sending... <Send className="h-4 w-4 animate-pulse" />
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </span>
                    )}
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
