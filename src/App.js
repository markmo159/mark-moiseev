import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import AboutMe from './Screens/AboutMe';
import Portfolio from './Screens/Portfolio';
import Contact from './Screens/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;