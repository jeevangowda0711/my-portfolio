'use client'

import { useState, useCallback } from 'react';
import { loadFull } from "tsparticles";
import dynamic from 'next/dynamic';
import Navigation from '../components/ui/Navigation';

// Dynamically import Particles
const Particles = dynamic(() => import('react-tsparticles'), { ssr: false });

// Import sections
import Hero from '../components/ui/Hero';
import Experience from '../components/ui/Experience';
import Projects from '../components/ui/Projects';
import Skills from '../components/ui/Skills';
import Contact from '../components/ui/Contact';

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
    dates: "April 2022 - May 2022",
    description: [
      "Led effective daily check-ins with developers to assess ongoing tasks and roadblocks, fostering a collaborative environment that empowered the team to resolve issues quickly and improve project momentum.",
      "Implemented structured communication protocols during daily calls, contributing to a cohesive team environment; established regular updates to ensure all development activities are clearly tracked and reported."
    ],
    link: "https://www.klimb.io"
  },
  {
    title: "Machine Learning Intern",
    company: "Celestial V Solutions",
    dates: "December 2021 - January 2022",
    description: [
      "Developed a big data visualization system, improving decision-making efficiency by 15%."
    ],
    link: "https://www.celestialv.com/"
  },
];

const projects = [
  {
    title: "Visionary Mate",
    description: "AI-Powered Accessibility Assistance & Multimodal Interaction Platform Platform",
    details: [
      "Engineered an integrated platform combining Visionary for AI-powered navigation and personal assistance and Multimodal Mate for advanced media processing, enhancing accessibility and engagement by 40%.",
      "Developed Visionary’s voice-only navigation with Mapbox API and Google Cloud Text-to-Speech, providing real-time GPS guidance and AI-driven image analysis, increasing user interaction efficiency by 30%.",
      "Built a Retrieval-Augmented Generation (RAG) pipeline for Multimodal Mate using HuggingFace and Llama-Index, achieving 95% accuracy in document-based responses and enabling efficient text and multimedia analysis with advanced OCR."
    ],
    badges: ["Python", "FastAPI", "HuggingFace", "Llama-Index", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/jeevangowda0711/Visionary_MATE"
  },
  {
    title: "Resume Analyzer & Job Matcher",
    description: "AI-Powered Resume Analyzer & Job Description Matching Platform",
    details: [
      "Led the full-stack development of an AI-powered resume analyzer and job matcher utilizing FastAPI, MongoDB, and Google Gemini API, improving resume parsing accuracy by 30%.",
      "Built a responsive frontend using Svelte and integrated backend services using Docker for consistent environment deployment, enhancing system scalability and reducing deployment time by 40%.",
      "Developed a secure, containerized architecture handling over 1000 concurrent requests with optimized API performance, streamlining resume and job data processing for faster matching results."
    ],
    badges: ["Python", "FastAPI", "MongoDB", "Svelte", "Docker", "Google Gemini API"],
    link: "https://github.com/jeevangowda0711/resume-analyzer-job-matcher"
  },
  {
    title: "Movies Recommendation System",
    description: "An Movies Recommender Platform with 10,000 movies",
    details: [
      "Developed a Movie Recommender System, processing a combined dataset of over 10,000 movie entries.", 
      "Applied machine learning techniques for collaborative filtering, leveraging a similarity matrix computed from a dataset of 5,000 movies to personalize user recommendations.", 
      "Designed and deployed a Streamlit web application, integrating real-time data fetching from TMDB API to display movie posters, enhancing user experience through interactive elements."
    ],
    badges: ["Python", "Streamlit"],
    link: "https://github.com/jeevangowda0711/MoviesRecommendation"
  },
  {
    title: "Movie Rating Service",
    description: "A system where users can rate movies fetched from TMDB, with separate roles for users and admins for enhanced control and management.",
    details: [
      "User Authentication & Role Management: JWT-based registration and login with role-based access for users and admins.",
      "Movie Management with TMDB: Fetch popular movies from TMDB API and enable users to rate them. Admins have the ability to manage movie entries and user ratings.",
      "Rating System & File Handling: Users can add, update, and delete their ratings; file uploads supported for movie details.",
      "Pagination & Responsive Frontend: Implements paginated view for movie data with a user-friendly interface."
    ],
    badges: ["Python", "Flask", "PostgreSQL", "JWT", "SQLAlchemy", "HTML/CSS", "JavaScript"],
    link: "https://github.com/jeevangowda0711/Movie-Rating-Service"
  },
  {
    title: "Vegapunk AI Chatbot",
    description: "A Conversational AI inspired by Dr. Vegapunk from the anime One Piece",
    details: [
      "Text-based Conversations: Chat with the AI, ask it anything, and enjoy custom responses tailored to Dr. Vegapunk’s personality from One Piece.",
      "Image Processing: Upload images for analysis, and the AI will generate insightful responses based on the content of the image.",
      "Anime-Themed UI: The application features a custom design inspired by Egghead Island, with Monkey D. Luffy taking the spotlight!",
      "Gemini AI Integration: Powered by Google’s Gemini 1.5 Flash, it brings intelligent and creative conversations directly to your screen."
    ],
    badges: ["Python", "Streamlit", "Pillow", "Google Gemini API"],
    link: "https://github.com/jeevangowda0711/Vegapunk---chatbot"
  },
  {
    title: "Visionary - Blind Assistance Application",
    description: "An AI-powered system to assist visually impaired users in navigating their environment using speech recognition, image processing, and geolocation technologies.",
    details: [
      "Real-Time Audio and Video Processing: Users can record audio and capture images for real-time analysis using the Gemini API to describe surroundings and detect objects.",
      "Voice Navigation Assistance: Geolocation support with Mapbox and Google Places provides navigation instructions and nearby points of interest.",
      "Motion and Gesture Detection: Supports device motion detection and tactile gestures for intuitive control without a visual interface.",
      "Text-to-Speech and Multilingual Support: Real-time audio responses in multiple languages, including dynamic language detection for personalized user experience."
    ],
    badges: ["Python", "FastAPI", "Gemini AI", "Mapbox", "Google Places", "Google Cloud TTS", "JavaScript", "TailwindCSS"],
    link: "https://github.com/jeevangowda0711/Visionary"
  },
];

// Main Component
export default function Component() {
  const [activeSection, setActiveSection] = useState('hero');

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

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
            shape: { type: ["circle", "triangle", "star", "square", "polygon"] },
            opacity: { value: 0.7 },
            size: { value: 10 },
            move: { enable: true, speed: 2 },
          },
        }}
      />

      {/* Navigation Section */}
      <Navigation setActiveSection={setActiveSection} activeSection={activeSection} />

      {/* Sections */}
      <section id="hero" className="center-container min-h-screen">
        <Hero />
      </section>

      <section id="experience" className="center-container bg-background/50">
        <Experience experiences={experiences} />
      </section>

      <section id="projects" className="center-container">
        <Projects projects={projects} />
      </section>

      <section id="skills" className="center-container bg-background/50">
        <Skills />
      </section>

      <section id="contact" className="center-container">
        <Contact />
      </section>
    </div>
  );
}
