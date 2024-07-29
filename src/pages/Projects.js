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
          <p>Élaboration d’un outil pédagogique pour la simulation de gestion des transactions dans une base de données en utilisant java swing</p>
        </div>
        <div className="project-item">
          <h3>Projet 2</h3>
          <p>Conception et réalisation d’une application web de gestion des charges pédagogique des enseignants en utilisant html, css, js, PHP, MySQL</p>
        </div>

        <div className="project-item">
          <h3>Projet 3</h3>
          <p>Développement de la gestion des formations dans un établissement RH avec Odoo 16</p>
        </div>
        <div className="project-item">
          <h3>Projet 4</h3>
          <p>Personnalisation de la gestion commerciale avec Odoo 16</p>
        </div>
        
        {/* Ajoutez d'autres projets ici */}
      </div>
    </section>
  );
};

export default Projects;
