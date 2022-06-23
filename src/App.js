import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import particles from './utils/particles';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const [categories] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  const renderPage = () => {
    if (currentCategory === 'about') {
      return <About />
    }
    if (currentCategory === 'portfolio') {
      return <Portfolio />
    }
    if (currentCategory === 'contact') {
      return <Contact />
    }
  }


  const particlesInit = async (main) => {

    await loadFull(main);
  };

  return (
    <div className='flex flex-col justify-between content-between'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particles}
      />
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main className='flex items-center content-center justify-center flex-col'>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
