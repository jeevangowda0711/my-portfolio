import React, { useState } from 'react';
import {
  FaPython,
  FaJsSquare,
  FaDatabase,
  FaHtml5,
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
  SiNextdotjs,
  SiReact,
  SiSvelte,
  SiPowerbi,
} from 'react-icons/si';
import { FaLightbulb } from 'react-icons/fa'; // Placeholder icon for skills without specific icons
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './ui-components';

const skillsData = {
  productManagement: [
    { name: "User Research & Empathy", icon: <FaLightbulb /> },
    { name: "Product Roadmapping & Feature Prioritization", icon: <FaLightbulb /> },
    { name: "Market & Competitive Analysis", icon: <FaLightbulb /> },
    { name: "Data-Driven Decision Making", icon: <FaLightbulb /> },
    { name: "Stakeholder Management & Cross-Functional Collaboration", icon: <FaLightbulb /> },
    { name: "Agile Methodologies & Requirements Gathering", icon: <FaLightbulb /> },
    { name: "Wireframing & Prototyping", icon: <FaLightbulb /> },
    { name: "Go-to-Market Strategy", icon: <FaLightbulb /> },
    { name: "Customer Journey Mapping", icon: <FaLightbulb /> },
    { name: "Problem Solving & Critical Thinking", icon: <FaLightbulb /> },
  ],
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
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "React", icon: <SiReact /> },
    { name: "Svelte", icon: <SiSvelte /> },
    { name: "Taipy", icon: <FaLightbulb /> }, // Placeholder icon for Taipy
  ],
  dataScience: [
    { name: "pandas", icon: <SiPandas /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "polars", icon: <SiPolars /> },
    { name: "Matplotlib", icon: <FaLightbulb /> }, // Replace if a specific Matplotlib icon is available
    { name: "seaborn", icon: <FaLightbulb /> },    // Replace if a specific seaborn icon is available
    { name: "BeautifulSoup", icon: <FaLightbulb /> }, // Replace if a specific BeautifulSoup icon is available
    { name: "plotly", icon: <FaLightbulb /> },     // Replace if a specific plotly icon is available
    { name: "Collaborative Filtering", icon: <FaLightbulb /> },
    { name: "HuggingFace", icon: <SiHuggingface /> },
    { name: "Llama-Index", icon: <FaLightbulb /> }, // Placeholder icon for Llama-Index
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
  toolsVersionControl: [
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Jira", icon: <FaJira /> },
    { name: "Excel", icon: <SiMicrosoftexcel /> },
    { name: "MS SQL", icon: <FaDatabase /> },
    { name: "VS Code", icon: <SiVisualstudiocode /> },
    { name: "Trello", icon: <FaTrello /> },
    { name: "Slack", icon: <FaSlack /> },
  ],
  dataAnalyticsVisualization: [
    { name: "Excel", icon: <SiMicrosoftexcel /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Tableau", icon: <SiTableau /> },
    { name: "PowerBI", icon: <SiPowerbi /> },
  ],
};

function Skills() {
  const [selectedTab, setSelectedTab] = useState("productManagement");

  return (
    <div className="skills-section">
      <h2 className="text-3xl font-bold tracking-tighter text-center text-neonGreen">Skills</h2>
      <Tabs defaultValue="productManagement" className="mt-6">
        <TabsList className="flex flex-wrap justify-center">
          {Object.keys(skillsData).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className={`capitalize ${selectedTab === category ? 'highlighted-tab' : ''}`}
              onClick={() => setSelectedTab(category)}
            >
              {category.replace(/([A-Z])/g, ' $1')}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(skillsData).map(([category, skillList]) => (
          <TabsContent key={category} value={category}>
            <div className="skill-category mt-4">
              <div className="skills-icons">
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
