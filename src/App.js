import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Snow from './components/Snow'
import Footer from './components/Footer';

import particles from './utils/particles';


function App() {
  const [categories] = useState([
    { name: 'about' },
    { name: 'projects' },
    { name: 'contact' },
    { name: 'resume' },
    { name: 'snow' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  const renderPage = () => {
    if (currentCategory === 'about') {
      return <About />
    }
    if (currentCategory === 'projects') {
      return <Projects />
    }
    if (currentCategory === 'contact') {
      return <Contact />
    }
    if (currentCategory === 'resume') {
      return <Resume />
    }
    if (currentCategory === 'snow') {
      return <Snow />
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
