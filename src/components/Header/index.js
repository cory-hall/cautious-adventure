import React from 'react';

import Nav from '../Nav';

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;



  return (
    <div className='h-80 flex flex-col justify-between text-white'>
      <p className='text-2xl py-10 text-center'>Hello, My name is Cory.</p>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} />
    </div>
  )
}

export default Header;