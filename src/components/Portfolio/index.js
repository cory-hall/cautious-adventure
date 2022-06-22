import React from 'react';
import { projects } from '../../utils/projects';
import githubLogo from '../../assets/images/GitHub-Mark-64px.png'

function Portfolio() {
  return (
    <section>
      <div className=" w-full p-10 text-center">
        <div className="flex flex-col mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium text-white">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap justify-around">
          {projects.map((project) => (
            <div className="flex relative w-full md:w-1/3 h-80 mb-5 md:m-5">
              <img
                alt="project screenshot"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="flex flex-col justify-around items-center px-8 py-10 relative z-10 w-full border-4 border-black bg-white opacity-0 hover:opacity-90">
                <h2 className="text-lg title-font font-medium text-black mb-1">
                  <a href={project.live}>{project.name}</a>
                </h2>
                <h1 className="text-lg font-medium text-black mb-3">
                  {project.tech}
                </h1>
                <a href={project.repo}>
                  <img src={githubLogo} width='48px' height='48px' alt='github logo'></img>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio;