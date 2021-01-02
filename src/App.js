import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import Header from './components/header/header';
import AboutMe from './components/aboutMe/aboutMe';
import Interests from './components/interests/interests';
import Experience from './components/experience/experience';
import ContactMe from './components/contactMe/contactMe';
import MyFooter from './components/footer/myFooter';

function App() {

  useEffect(() => {
    document.title = "Cathy Le"
  }, []);

  return (
    <div>
      <NavBar />
      <Header />
      <AboutMe />
      <Interests />
      <Experience />
      <ContactMe />
      <MyFooter />
    </div>
  );
}

export default App;
