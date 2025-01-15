import React from 'react'
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

const Contact = () => {
    return (    
      <div>    
        <Logo/>
        <Navigation />  
        <h1>Contactez-Nous</h1>
          <from action="" method="post">
            <div className='div-group'>
              <p><em>Saisissez les Informations</em></p>
              <label for='name'>FirstName:< input id='firstname' type='text' placeholder='FirstName' required/></label>
              <label for='name'>LastName:< input id='lastname' type='text' placeholder='LastName' required/></label>
              <label for='name'>Email:< input id='email' type='email' placeholder='Enter your email' required/></label>
            </div>
            <div className='div-group'>
              <p><em>Comments</em></p>
              <textarea name='' id='' cols={30} rows={3} placeholder='Comments ...'></textarea>
            </div>
          </from>
          <Footer />
      </div>
    );
};

export default Contact;
