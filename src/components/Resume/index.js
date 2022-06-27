import React from 'react';
import { images } from '../../assets/images/logos';

function Resume() {

  return (
    <section className='flex flex-col items-center bg-color w-2/3 radius p-10'>
      <div className='flex flex-col items-center justify-center w-full m-4'>
        <a className='text-center text-2xl text-white font-bold' href='https://github.com/cory-hall/cautious-adventure/blob/main/src/assets/resume/Resume.docx?raw=true'>Download My Resume</a>
      </div>
      <div className='flex flex-col items-center w-full m-4'>
        <h1 className='text-2xl text-white font-medium mb-4'>
          My Skills
        </h1>
        <ul className='text-xl'>
          <li className='m-2 text-center'>Version Control / Git</li>
          <li className='m-2 text-center'>RESTful API Systems</li>
          <li className='m-2 text-center'>AGILE Development Lifecycle</li>
          <li className='m-2 text-center'>CRUD Methodology</li>
          <li className='m-2 text-center'>Unit Testing</li>
          <li className='m-2 text-center'>Content Management Systems</li>
          <li className='m-2 text-center'>Single Page Applications</li>
          <li className='m-2 text-center'>Progressive Web Apps</li>
        </ul>
      </div>
      <h1 className='text-center text-2xl text-white font-medium m-4'>
        Technical Proficiencies
      </h1>
      <div className='flex flex-wrap items-center justify-around md:w-2/3'>

        {images.map((image) => (
          <img key={image} className='m-4 resume-img' src={image} alt='technology logo'></img>
        ))}
      </div>
      <p className='w-full text-black text-right mt-4'>All icons from <a href='icons8.com'>icons8.com</a></p>
    </section>
  )
}

export default Resume;