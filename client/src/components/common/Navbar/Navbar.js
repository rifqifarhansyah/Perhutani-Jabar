import React from 'react';
import perhutaniPanjang from '../../../assets/perhutani.png';
import perhutani from '../../../assets/icon.png';
import bumn from '../../../assets/bumn.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={perhutani} alt="Perhutani Logo" className="h-6 w-auto mr-2 img-small logo-perhutani" />
          <img src={perhutaniPanjang} alt="Perhutani Panjang Logo" className="h-6 w-auto perhutani-panjang-navbar" />
        </div>
        <div className="navbar-menu-container mx-auto flex justify-between items-center">
          <div className="navbar-judul mx-auto flex justify-between items-center">
            <ul className="flex mx-auto flex justify-between items-center">
              <li className="flex-grow mx-auto flex justify-between items-center">
                <a href="/" className="text-white hover:text-gray-400 navbar-item">
                  Home
                </a>
              </li>
              <li className="flex-grow">
                <a href="/about" className="text-white hover:text-gray-400 navbar-item">
                  Properti
                </a>
              </li>
              <li className="flex-grow">
                <a href="/contact" className="text-white hover:text-gray-400 navbar-item">
                  Download
                </a>
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
