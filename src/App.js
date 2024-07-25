import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactUs from './pages/Contact'; // Assurez-vous que c'est le bon nom de composant
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Assurez-vous d'utiliser ContactUs */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
