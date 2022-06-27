import React from 'react';
import Typewriter from 'typewriter-effect';



import Nav from '../Nav';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;



  return (
    <div className='h-80 flex flex-col justify-between text-white'>
      <p className='text-2xl md:text-4xl pt-10 text-center'>Hello, My name is Cory.</p>
      <p className='text-2xl md:text-4xl text-center'> I like to create...</p>
      <div className='text-center text-2xl md:text-4xl mb-4'>
        <Typewriter
          options={{
            strings: ['adaptive designs.', 'elegant solutions.', 'content management systems.', 'clean code.', 'clear documentation.', 'RESTful architectural styles.', 'logical information architecture', 'single page applications'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} />
    </div>
  )
}

export default Header;