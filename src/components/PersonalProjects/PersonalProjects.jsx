import React, { useState } from "react";
import styles from "./PersonalProjects.module.css";
import projects from "../../experienceData/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter projects based on category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  return (
    <section className={styles.container} id="projects">
   
        <div className={styles.titleSection}>
          <h2 className={styles.title}>My Projects</h2>
         
        </div>
      

     

      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, id) => (
          <div
            key={id}
            className={styles.projectWrapper}
            onMouseEnter={() => setHoveredProject(id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <ProjectCard 
              project={project} 
              isHovered={hoveredProject === id}
              index={id}
            />
          </div>
        ))}
      </div>

      
    </section>
  );
};