import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import '../styles/contact.css';
import Footer from '../components/Footer';

const Contact = () => {
    return (    
      <div>    
        <Logo />
        <Navigation />  
        <main className="contact-page">
        <div className="contact-form-container">
          <h2>Restez en contact avec Jeancking</h2>
          <p>Inscrivez-vous pour recevoir les dernières nouvelles</p>
          <form>
            <input type="text" placeholder="Nom..." required />
            <input type="text" placeholder="Prénom..." required />
            <input type="email" placeholder="Email..." required />
            <button type="submit">S'ABONNER</button>
          </form>
        </div>
        </main>
      <Footer />
    </div>
    );
};

export default Contact;
