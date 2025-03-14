import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};
export default App;