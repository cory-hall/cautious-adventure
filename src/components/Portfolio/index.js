import React from 'react';
import { projects } from '../../utils/projects';

function Portfolio() {
  return (
    <section>
      <div className='container m-8'>
        <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
          <h1 className='text-2xl font-bold text-center m-4'>
            Apps I've Built
          </h1>
          <p className=''>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className='flex flex-wrap -m-4'>
          {projects.map((project) => (
            <a
              href={project.live}
              key={project.image}
              className='sm:w-1/2 w-100 p-4'>
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-white-800 bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
                    {project.name}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;