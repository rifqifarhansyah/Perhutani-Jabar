import React, { useRef, useState, useEffect } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import properti from "../../assets/properti.png";
import { dataCianjur, dataBanten, dataCiamis, dataGarut } from "./markerKota";

const SetViewDropdown = ({ handleViewChange }) => {
  const [selectedView, setSelectedView] = useState("Cianjur");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutsideDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      window.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  const handleViewClick = (view) => {
    setSelectedView(view);
    setIsDropdownOpen(false);
    handleViewChange(view);
  };

  return (
    <div className="dropdown-gabung" ref={dropdownRef}>
        <div
        className="flex items-center justify-between w-40 rounded-lg py-2 px-2 cursor-pointer dropdown-button"
        onClick={toggleDropdown}
        style={{ display: "flex" }}
      >
        <div className="flex items-center">
          <span className="ml-2 text-sm">{selectedView}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
        <div className="dropdown-container">
            <div
        className={`absolute left-0 w-40 bg-gray-800 rounded shadow-lg dp ${isDropdownOpen ? "open" : ""}`}
        style={{ pointerEvents: isDropdownOpen ? "auto" : "none"}}
      >
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Cianjur")}
        >
          Cianjur
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Indramayu")}
        >
          Indramayu
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Sukabumi")}
        >
          Sukabumi
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Bogor")}
        >
          Bogor
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Majalengka")}
        >
          Majalengka
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Ciamis")}
        >
          Ciamis
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Tasikmalaya")}
        >
          Tasikmalaya
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Garut")}
        >
          Garut
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Bandung")}
        >
          Bandung
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Banten")}
        >
          Banten
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Purwakarta")}
        >
          Purwakarta
        </div>
        <div
          className="px-4 text-sm cursor-default hover:bg-gray-700 dropdown"
          onClick={() => handleViewClick("Sumedang")}
        >
          Sumedang
        </div>
        </div>
      </div>
      <style jsx>{`
        .dp {
          border-radius: 0.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .dp.open {
          opacity: 1;
        }
        .dropdown {
          background-color: #fff;
          transition: background-color 0.3s ease;
          color: #005840;
          border-color: #005840;
          margin: 0.25rem 0;
        }
        .dropdown:hover {
          background-color: darkgreen;
          cursor: pointer;
          color: #fff;
        }
        .dropdown-button {
          transition: background-color 0.3s ease;
          margin-top: 610px;
        }
        .dropdown-button:hover {
          background-color: dar
        }  
      `}</style>
    </div>
  );
};

const Properties = () => {
  const mapRef = useRef();
    const[markerCianjur, setMarkerCianjur] = useState([dataCianjur]);
    const[markerCiamis, setMarkerCiamis] = useState([dataCiamis]);
    const[markerGarut, setMarkerGarut] = useState([dataGarut]);
    const[markerBanten, setMarkerBanten] = useState([dataBanten]);

  const handleSetView = (view) => {
    const map = mapRef.current;
    if (map) {
      switch (view) {
        case "Cianjur":
            map.setView([-6.8172090073665625, 107.14300671982625], 15);
            break;
        case "Indramayu":
            map.setView([-6.349416470398102, 108.32795240128955], 15);
            break;
        case "Sukabumi":
            map.setView([-6.927980579304388, 106.93224355621845], 15);
            break;
        case "Bogor":
            map.setView([-6.59655091258548, 106.8052778347784], 15);
            break;
        case "Majalengka":
            map.setView([-6.838025527254184, 108.22842688528338], 15);
            break;
        case "Ciamis":
            map.setView([-7.329331185638051, 108.33223985457002], 15);
            break;
        case "Tasikmalaya":
            map.setView([-7.348397491052044, 108.22382286183527], 15);
            break;
        case "Garut":
            map.setView([-7.217542170358903, 107.9058082357118], 15);
            break;
        case "Bandung":
            map.setView([-6.917251238308427, 107.62084063685353], 15);
            break;
        case "Banten":
            map.setView([-6.03638461803804, 106.15379718709931], 15);
            break;
        case "Purwakarta":
            map.setView([-6.53996605457835, 107.44680432073024], 15);
            break;
        case "Sumedang":
            map.setView([-6.837403663003791, 107.92668260639434], 15);
            break;
        default:
            map.setView([-6.8172090073665625, 107.14300671982625], 15);
          break;
      }
    }
  };

  useEffect(() => {

    setMarkerCianjur(markerCianjur);
    setMarkerBanten(markerBanten);
    setMarkerCiamis(markerCiamis);
    setMarkerGarut(markerGarut);
  }, [markerCianjur, markerBanten, markerCiamis, markerGarut]);


  return (
    <div>
      <div className="header-navbar">
        <img className="header-properti" src={properti} alt="Properti" />
      </div>
      <section className="map-component">
        <div className="set-view-container">
          <SetViewDropdown handleViewChange={handleSetView} />
        </div>
        <div className="map">
          <MapContainer center={[-6.8172090073665625, 107.14300671982625]} zoom={15} scrollWheelZoom={false} ref={mapRef}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerCianjur}
            {markerBanten}
            {markerCiamis}
            {markerGarut}
          </MapContainer>
        </div>
      </section>
      <style jsx>{`
        .map-component {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 16px;
          margin-top: -150px;
          margin-bottom: -150px;
        }
        .set-view-container {
          margin-right: 10px;
          flex: 1;
        }
        .map {
            flex: 1;
        }
        .set-view-container {
            margin-top: -870px;
        }
      `}</style>
    </div>
  );
};

export default Properties;
