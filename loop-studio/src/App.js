import React from 'react';
import GlobalStyle from './GlobalStyles';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
      <About />
    </div>
  );
};

export default App;
