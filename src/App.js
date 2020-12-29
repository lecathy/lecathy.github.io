import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/header';
import AboutMe from './components/aboutMe/aboutMe';
import Interests from './components/interests/interests';
import Experience from './components/experience/experience';
import ContactMe from './components/contactMe/contactMe';

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
      <ContactMe />
    </div>
  );
}

export default App;
