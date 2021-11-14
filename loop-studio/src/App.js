import React from 'react';
import GlobalStyle from './GlobalStyles';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Hero />
    </div>
  );
};

export default App;
