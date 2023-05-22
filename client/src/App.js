import './App.css';
import React from 'react';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
// import Home from './components/Homepage/Homepage';
import Download from './components/Download/Download';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Download />
      <Footer />
    </div>
  );
}

export default App;
