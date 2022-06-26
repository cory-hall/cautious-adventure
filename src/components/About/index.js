import React from "react";
import portpic from '../../assets/images/port-pic.JPG';

function About() {
  return (
    <section className="flex flex-wrap justify-around items-center p-10 w-5/6 bg-color radius" >
      <h1 className="text-3xl text-center text-white font-bold pb-4 w-full">Who am I?</h1>
      <div className="md:w-1/3 mr-4">
        <img className='rounded-2xl block mx-auto' src={portpic} alt='Cory Hall'></img>
      </div>
      <div className="md:w-1/2">
        <p className="p-2 text-xl">
          I am an aspiring web developer, who through deliberate practice and dedication am working towards becoming a full fledged web developer.
          I am a recent recipient of a Full Stack Web Development certificate from a coding boot camp hosted by Michigan State University.
          My plan for success is to use the foundational web development skills as well as other general skills that I have learned in the work force
          to create beautiful and responsive web sites all created by a carefully crafted and well maintained codebase.
        </p>
      </div>
    </section>
  )
}

export default About;