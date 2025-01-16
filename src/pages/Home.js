import React from "react";
import Countries from "../components/countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
    return (    
        <div>    
            <Logo/>
            <Navigation />        
            <Countries/>
            <Footer />
        </div>
    );
};

export default Home;