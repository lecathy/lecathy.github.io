import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './components/aboutMe';
import Interests from './components/interests';

function App() {

  useEffect(() => {
    document.title = "Cathy Le"
  }, []);

  return (
    <div>
      <Header />
      <AboutMe />
      <Interests />
    </div>
  );
}

export default App;
