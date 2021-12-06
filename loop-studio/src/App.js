import React from 'react';
import GlobalStyle from './GlobalStyles';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Creations/Projects';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
