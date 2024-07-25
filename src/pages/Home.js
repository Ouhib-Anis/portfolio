// src/pages/Home.js
import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.PNG'; // Assurez-vous d'avoir une image de profil dans ce chemin

const Home = () => {
  return (
    <section id="home" className="home">
      <img src={profileImage} alt="Profil" className="profile-image" />
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Je suis Ouhib Anis, un développeur passionné.</p>
    </section>
  );
};

export default Home;
