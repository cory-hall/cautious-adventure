import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from '../../utils/particles.json';
import Nav from '../Nav';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  const particlesInit = async (main) => {

    await loadFull(main);
  };


  return (
    <div className='h-80 flex flex-col justify-between text-white'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particles}
      />
      <p className='text-2xl py-10 text-center'>Hello, My name is Cory.</p>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} />
    </div>
  )
}

export default Header;