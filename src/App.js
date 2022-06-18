import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  const [categories] = useState([
    { name: 'about-me' },
    { name: 'portfolio' },
    { name: 'contact-me' },
    { name: 'resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <Header />
      <main>
      </main>
    </div>
  );
}

export default App;
