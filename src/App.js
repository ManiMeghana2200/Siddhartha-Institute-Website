import React from 'react';
import './theme.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Programs from './components/Programs';
import Academics from './components/Academics';
import CampusLife from './components/CampusLife';
import Placements from './components/Placements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BeyondOrdinary from './components/BeyondOrdinary';

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Main />
      <BeyondOrdinary />
      <About />
      <Programs />
      <Academics />
      <CampusLife />
      <Placements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
