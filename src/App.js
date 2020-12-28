import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Interests from './components/interests';
import Experience from './components/experience';

function App() {

  useEffect(() => {
    document.title = "Cathy Le"
  }, []);

  return (
    <div>
      <Header />
      <AboutMe />
      <Interests />
      <Experience />
    </div>
  );
}

export default App;
