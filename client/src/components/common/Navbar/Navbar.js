import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import perhutaniPanjang from '../../../assets/perhutani.png';
import perhutani from '../../../assets/icon.png';
import bumn from '../../../assets/bumn.png';

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setActiveItem('home');
    } else if (pathname === '/properties') {
      setActiveItem('properties');
    } else if (pathname === '/download') {
      setActiveItem('download');
    }
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container flex">
        <div className="flex items-center">
          <img src={perhutani} alt="Perhutani Logo" className="h-6 w-auto mr-2 img-small logo-perhutani" />
          <img src={perhutaniPanjang} alt="Perhutani Panjang Logo" className="h-6 w-auto perhutani-panjang-navbar" />
        </div>
        <div className="navbar-menu-container mx-auto flex justify-between items-center">
          <div className="navbar-judul mx-auto flex justify-between items-center">
            <ul className="flex mx-auto flex justify-between items-center">
              <li className={`flex-grow mx-auto flex justify-between items-center ${activeItem === 'home' ? 'active' : ''}`}>
                <NavLink exact to="/" className="text-white hover:text-gray-400 navbar-item">
                  Home
                </NavLink>
              </li>
              <li className={`flex-grow ${activeItem === 'properties' ? 'active' : ''}`}>
                <NavLink to="/properties" className="text-white hover:text-gray-400 navbar-item">
                  Properti
                </NavLink>
              </li>
              <li className={`flex-grow ${activeItem === 'download' ? 'active' : ''}`}>
                <NavLink to="/download" className="text-white hover:text-gray-400 navbar-item">
                  Download
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center">
          <img src={bumn} alt="BUMN Logo" className="h-6 w-auto mr-2 img-medium logo-bumn" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
