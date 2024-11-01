// 'use client' is not necessary here unless you're using client-only APIs

import React from 'react';
import {
  FaPython,
  FaJsSquare,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaAws,
  FaGit,
  FaGithub,
  FaJira,
  FaTrello,
  FaSlack,
  FaKey,
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiMysql,
  SiC,
  SiFlask,
  SiFastapi,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiPolars,
  SiMongodb,
  SiGooglecloud,
  SiSqlalchemy,
  SiTableau,
  SiMicrosoftexcel,
  SiVisualstudiocode,
  SiHuggingface,
} from 'react-icons/si';

// Import Tabs components from your ui-components
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './ui-components';

const skillsData = {
  programming: [
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "HTML/CSS", icon: <FaHtml5 /> },
    { name: "C", icon: <SiC /> },
  ],
  webDevelopment: [
    { name: "Flask", icon: <SiFlask /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Streamlit", icon: <SiStreamlit /> },
    { name: "RESTful APIs", icon: <FaDatabase /> },
    { name: "JWT", icon: <FaKey /> },
  ],
  dataScience: [
    { name: "pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "polars", icon: <SiPolars /> },
    // Add appropriate icons or replace with valid ones
    { name: "Matplotlib", icon: <FaJsSquare /> },
    { name: "seaborn", icon: <FaJsSquare /> },
    { name: "BeautifulSoup", icon: <FaJsSquare /> },
    { name: "plotly", icon: <FaJsSquare /> },
    { name: "Collaborative Filtering", icon: <FaJsSquare /> },
    { name: "HuggingFace", icon: <SiHuggingface /> },
    { name: "Llama-Index", icon: <FaJsSquare /> },
  ],
  databasesCloud: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "GCP", icon: <SiGooglecloud /> },
    { name: "SQLAlchemy", icon: <SiSqlalchemy /> },
  ],
  tools: [
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Jira", icon: <FaJira /> },
    { name: "Tableau", icon: <SiTableau /> },
    { name: "Excel", icon: <SiMicrosoftexcel /> },
    { name: "MS SQL", icon: <FaDatabase /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Trello", icon: <FaTrello /> },
    { name: "Slack", icon: <FaSlack /> },
  ],
  projectManagement: [
    // Add appropriate icons or replace with valid ones
    { name: "Agile", icon: <FaJsSquare /> },
    { name: "User Stories", icon: <FaJsSquare /> },
    { name: "Wireframes", icon: <FaJsSquare /> },
    { name: "PRDs", icon: <FaJsSquare /> },
    { name: "VAPT Reports", icon: <FaJsSquare /> },
  ],
};

function Skills() {
  return (
    <div className="skills-section">
      <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Skills</h2>
      <Tabs defaultValue="programming" className="mt-6">
        <TabsList className="flex flex-wrap">
          {Object.keys(skillsData).map((category) => (
            <TabsTrigger key={category} value={category} className="capitalize">
              {category.replace(/([A-Z])/g, ' $1')}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(skillsData).map(([category, skillList]) => (
          <TabsContent key={category} value={category}>
            <div className="skill-category mt-4">
              <div className="flex flex-wrap gap-4">
                {skillList.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Skills;
