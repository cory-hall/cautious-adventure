import React from 'react';
import { images } from '../../assets/images/logos';

function Resume() {

  return (
    <section className='flex flex-col items-center bg-color w-5/6 radius p-10'>
      <div className='flex flex-col items-center justify-center w-full m-4'>
        <a className='text-center text-2xl font-bold' href='https://github.com/cory-hall/cautious-adventure/blob/main/src/assets/resume/Resume.docx?raw=true'>Download My Resume</a>
      </div>
      <div className='flex flex-col items-center w-full m-4'>
        <h1 className='text-2xl font-medium mb-4'>
          My Skills
        </h1>
        <ul>
          <li>Version Control</li>
          <li>RESTful API</li>
          <li>AGILE Development Lifecycle</li>
          <li>CRUD Methodology</li>
          <li>Unit Testing</li>
          <li></li>

        </ul>
      </div>
      <h1 className='text-center text-2xl font-medium m-4'>
        Technical Proficiencies
      </h1>
      <div className='flex flex-col md:flex-row flex-wrap items-center justify-around'>

        {images.map((image) => (
          <img className='m-4 resume-img' src={image} alt='technology logo'></img>
        ))}
      </div>
    </section>
  )
}

export default Resume;