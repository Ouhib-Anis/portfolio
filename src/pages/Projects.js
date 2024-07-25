// src/pages/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Mes Projets</h2>
      <div className="project-list">
        <div className="project-item">
          <h3>Projet 1</h3>
          <p>Description du projet 1.</p>
        </div>
        <div className="project-item">
          <h3>Projet 2</h3>
          <p>Description du projet 2.</p>
        </div>
        {/* Ajoutez d'autres projets ici */}
      </div>
    </section>
  );
};

export default Projects;
