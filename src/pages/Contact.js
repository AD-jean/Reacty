import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Contact = () => {
    return (    
      <div>    
        <Logo />
        <Navigation />  
        <main>
          <h1>Contactez-nous</h1>
          <form action="" method="post">
            <div className='div-group'>
              <p><em>Saisissez les Informations</em></p>
              <label htmlFor='firstname'>
                Prénom:
                <input id='firstname' type='text' placeholder='Prénom' required />
              </label>
              <label htmlFor='lastname'>
                Nom de famille:
                <input id='lastname' type='text' placeholder='Nom de famille' required />
              </label>
              <label htmlFor='email'>
                Email:
                <input id='email' type='email' placeholder='Entrez votre email' required />
              </label>
            </div>
            <div className='div-group'>
              <p><em>Commentaires</em></p>
              <textarea name='' id='' cols={30} rows={3} placeholder='Commentaires ...'></textarea>
            </div>
            <button type="submit">Soumettre</button>
          </form>
        </main>
        <Footer />
      </div>
    );
};

export default Contact;
