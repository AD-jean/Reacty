import React from "react";
import Countries from "../components/countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return (    
        <div>    
            <Logo/>
            <Navigation />        
            <Countries/>
        </div>
    );
};

export default Home;