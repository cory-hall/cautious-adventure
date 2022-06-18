import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from '../../utils/particles.json';

function Header() {
  const particlesInit = async (main) => {

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  }

  return (
    <div className='header'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particles}
      />
      <p className='header-text'>Hello, My name is Cory.</p>
    </div>
  )
}

export default Header;