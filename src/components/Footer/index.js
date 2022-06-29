import React from 'react';
import github from '../../assets/images/GitHub-Mark-Light-64px.png'
import linkedin from '../../assets/images/In-White-72.png'
import overflow from '../../assets/images/240px-Stack_Overflow_icon.png'

function Footer() {

  return (
    <div>
      <div className='h-40 py-20 flex flex-row justify-evenly items-center text-white'>
        <a href='https://github.com/cory-hall' target='_blank' rel="noreferrer">
          <img src={github} width='64' height='64' alt='github logo'></img>
        </a>
        <a href='https://www.linkedin.com/in/cory-hall-dev/' target='_blank' rel="noreferrer">
          <img src={linkedin} width='64' height='64' alt='linkedin logo'></img>
        </a>
        <a href='https://stackoverflow.com/users/14038394/cory-hall' target='_blank' rel="noreferrer">
          <img src={overflow} width='64' height='64' alt='stack overflow logo'></img>
        </a>
      </div>
      <p className='pt-5 ml-4 text-white'>©️ Cory Hall 2022</p>
    </div>
  )
}

export default Footer;
