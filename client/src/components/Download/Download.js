import React from "react";
import download from "../../assets/download.png";
import cianjurCard from "../../assets/cianjurCard.png";
import indramayuCard from "../../assets/indramayuCard.png";
import sukabumiCard from "../../assets/sukabumiCard.png";
import bogorCard from "../../assets/bogorCard.png";
import majalengkaCard from "../../assets/majalengkaCard.png";
import ciamisCard from "../../assets/ciamisCard.png";
import tasikmalayaCard from "../../assets/tasikmalayaCard.png";
import garutCard from "../../assets/garutCard.png";
import bandungCard from "../../assets/bandungCard.png";
import bantenCard from "../../assets/bantenCard.png";
import purwakaCard from "../../assets/purwakartaCard.png";
import sumedangCard from "../../assets/sumedangCard.png";
import dataCianjur from "../../assets/Cianjur.xlsx";
import dataIndramayu from "../../assets/Indramayu.xlsx";
import dataSukabumi from "../../assets/Sukabumi.xlsx";
import dataBogor from "../../assets/Bogor.xlsx";
import dataMajalengka from "../../assets/Majalengka.xlsx";
import dataCiamis from "../../assets/Ciamis.xlsx";
import dataTasikmalaya from "../../assets/Tasikmalaya.xlsx";
import dataGarut from "../../assets/Garut.xlsx";
import dataBandung from "../../assets/Bandung Selatan.xlsx";
import dataBanten from "../../assets/Banten.xlsx";
import dataPurwakarta from "../../assets/Purwakarta.xlsx";
import dataSumedang from "../../assets/Sumedang.xlsx";

const Download = () => {
  return (
    <div>
      <div className="header-navbar">
        <img src={download} alt="Download" />
      </div>
      <div className="container-baris1">
        <div className="container-baris1-kolom1">
          <div className="gambar-download">
            <img src={cianjurCard} alt="Cianjur" />
            <a
              href={dataCianjur}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris1-kolom2">
          <div className="gambar-download">
            <img src={indramayuCard} alt="Indramayu" />
            <a
              href={dataIndramayu}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris1-kolom3">
          <div className="gambar-download">
            <img src={sukabumiCard} alt="Sukabumi" />
            <a
              href={dataSukabumi}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris1-kolom4">
          <div className="gambar-download">
            <img src={bogorCard} alt="Bogor" />
            <a
              href={dataBogor}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div className="container-baris2">
        <div className="container-baris2-kolom1">
          <div className="gambar-download">
            <img src={majalengkaCard} alt="Majalengka" />
            <a
              href={dataMajalengka}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris2-kolom2">
          <div className="gambar-download">
            <img src={ciamisCard} alt="Ciamis" />
            <a
              href={dataCiamis}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris2-kolom3">
          <div className="gambar-download">
            <img src={tasikmalayaCard} alt="Tasikmalaya" />
            <a
              href={dataTasikmalaya}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris2-kolom4">
          <div className="gambar-download">
            <img src={garutCard} alt="Garut" />
            <a
              href={dataGarut}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      <div className="container-baris3">
        <div className="container-baris3-kolom1">
          <div className="gambar-download">
            <img src={bandungCard} alt="Bandung" />
            <a
              href={dataBandung}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris3-kolom2">
          <div className="gambar-download">
            <img src={bantenCard} alt="Banten" />
            <a
              href={dataBanten}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris3-kolom3">
          <div className="gambar-download">
            <img src={purwakaCard} alt="Purwakarta" />
            <a
              href={dataPurwakarta}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
        <div className="container-baris3-kolom4">
          <div className="gambar-download">
            <img src={sumedangCard} alt="Sumedang" />
            <a
              href={dataSumedang}
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
