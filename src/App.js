import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifecation from './components/qualifecation/Qualifecation';
import Testemonial from './components/testmonial/Testemonial';
import Contect from './components/contect/Contect';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrolup/Scrollup';

const App = () => {
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualifecation />
      <Testemonial />
      <Contect />
    </main>
    <Footer />
    <Scrollup />
    </>
  )
}

export default App