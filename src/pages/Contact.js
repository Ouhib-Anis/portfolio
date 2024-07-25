import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Assurez-vous d'avoir le CSS approprié

const ContactUs = () => {
  const form = useRef();
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_446251r', 'template_1o089fd', form.current, 'DgFzf5BG1nW6islQK')
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Message envoyé avec succès!');
        form.current.reset(); // Réinitialise le formulaire après l'envoi
        setError(''); // Réinitialise le message d'erreur
      }, (error) => {
        console.log('FAILED...', error.text);
        setError('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      {error && <p className="error-message">{error}</p>}
      <form ref={form} onSubmit={sendEmail}>
       
        <label>Nom</label>
        <input type="text" name="to_name" placeholder="Votre Nom" required />
        <label>Email</label>
        <input type="email" name="from_name" placeholder="Votre Email" required />
        <label>Message</label>
        <textarea name="message" placeholder="Votre Message" required />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};

export default ContactUs; // Assurez-vous d'exporter le composant ContactUs
