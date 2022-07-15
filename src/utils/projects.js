import forkthatorc from '../../src/assets/images/project-screenshots/FTO-Screenshot.png';
import foxy from '../../src/assets/images/project-screenshots/Foxy-Screenshot.png';
import fforecast from '../../src/assets/images/project-screenshots/FinancialForecast-Screenshot.png';
import techblog from '../../src/assets/images/project-screenshots/TechBlogger-Screenshot.png';
import notetaker from '../../src/assets/images/project-screenshots/NoteTaker-Screenshot.png';
import thoughtboxer from '../../src/assets/images/project-screenshots/tb-screenshot.jpg';

export const projects = [
  {
    image: forkthatorc,
    name: 'Fork That Orc',
    tech: 'SQL, Sequelize, MySQL2, Express, CRUD Methodology, Browserify',
    repo: 'https://github.com/cory-hall/fork-that-orc',
    live: 'https://fork-that-orc.herokuapp.com/',
    desc: 'This was my second group project. I was primarily in charge of the back end JavaScript work with a dash of Handlebars and styling.'
  },
  {
    image: foxy,
    name: 'Foxy',
    tech: 'HTML, CSS, External API Calls',
    repo: 'https://github.com/cory-hall/Foxy',
    live: 'https://cory-hall.github.io/Foxy/',
    desc: 'This was my first group project. I was primarily in charge of the back end coding as well as handling the API information.'
  },
  {
    image: fforecast,
    name: 'Financial Forecast',
    tech: 'MongoDB, Express, Node, Heroku',
    repo: 'https://github.com/cory-hall/financial-forecast',
    live: 'https://intense-temple-00113.herokuapp.com/',
    desc: 'This project was designed to learn about creating a PWA and leveraging a service worker as well as a manifest to allow for user interactivity while offline.'
  },
  {
    image: techblog,
    name: 'The Tech Bloggers',
    tech: 'MVC, ORM, Password Hashing, HTML Templating',
    repo: 'https://github.com/cory-hall/the-tech-bloggers',
    live: 'https://the-tech-bloggers.herokuapp.com/',
    desc: 'The aim of the project was to get practice with the Model-View-Controller Paradigm as well as Object Relational Mapping to create a Content Management System.'
  },
  {
    image: notetaker,
    name: 'The Only Note Taking App',
    tech: 'Express, JEST, RESTful API, CRUD',
    repo: 'https://github.com/cory-hall/the-only-note-taking-app',
    live: 'https://the-only-note-taking-app.herokuapp.com/',
    desc: 'The main purpose of this project was to display my ability when it comes to understanding and creating code around the Express.js library.'
  },
  {
    image: thoughtboxer,
    name: 'Totally Accurate Weather App',
    tech: 'React, Node, Express, Apollo GraphQL, Tailwind CSS',
    repo: 'https://github.com/cory-hall/thought-boxer',
    live: 'https://thoughtboxer.herokuapp.com/',
    desc: 'This was our final group project and a functioning full stack web site. This app is used to settle any debate that is on your mind with public opinion.'
  }
]
