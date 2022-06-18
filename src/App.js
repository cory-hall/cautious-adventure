import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  const [categories] = useState([
    { name: 'about' },
    { name: 'portfolio' },
    { name: 'contact' },
    { name: 'resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0].name);

  const renderPage = () => {
    if (currentCategory === 'about') {
      return <About />
    }
    if (currentCategory === 'portfolio') {
      return <Portfolio />
    }
  }

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} 
        />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
