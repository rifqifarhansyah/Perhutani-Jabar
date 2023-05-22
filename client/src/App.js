import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Properties from './components/Properties/Properties';
import Home from './components/Homepage/Homepage';
import Download from './components/Download/Download';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/download" element={<Download />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
