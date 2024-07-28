// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
    
    <h3>Éducation</h3>
    <ul>
      <li><strong>Master en Technologies de l'Information</strong></li>
      <li><strong>Licence en Ingénierie des Systèmes d'Information et des Logiciels</strong></li>
    </ul>
    
    <h3>Expérience Professionnelle</h3>
    <div>
      <h4>Analyste de Données chez IRSM</h4>
      <ul>
        <li>Analyse et interprétation des données pour soutenir les décisions stratégiques</li>
        <li>Développement de modèles analytiques pour optimiser les processus.</li>
        <li>Présentation des résultats aux parties prenantes.</li>
      </ul>
    </div>
    <div>
      <h4>Analyste et Développeur chez Compos Solution</h4>
      <ul>
        <li>Analyse des besoins des clients et développement de solutions logicielles sur mesure.</li>
        <li>Collaboration avec les équipes techniques pour garantir la bonne mise en œuvre des projets.</li>
        <li>Amélioration continue des processus de développement et d'analyse.</li>
      </ul>
    </div>

    <h3>Compétences</h3>
    <ul>
      <li><strong>Analyse de Données :</strong> Analyse statistique, interprétation de données, modélisation.</li>
      <li><strong>Développement de Logiciels :</strong> Python, Java, Odoo16, React,html,css,javascript,sql.</li>
      <li><strong>Gestion de Projets :</strong> Planification, coordination, suivi des progrès.</li>
    </ul>

    <h3>Langues</h3>
    <ul>
      <li>Arabe (Courant)</li>
      <li>Français (Moyen)</li>
      <li>Anglais (Moyen)</li>
    </ul>
  </div>
  );
};

export default About;
