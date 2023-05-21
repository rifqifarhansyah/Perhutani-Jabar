import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import perhutaniPanjangPutih from '../../../assets/perhutaniPanjangPutih.png';
import perhutaniPutih from '../../../assets/perhutani-putih.png';
import bumnPutih from '../../../assets/bumn-putih.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="footer-container container mx-auto flex justify-between items-center py-4">
        <div className="footer-container-a flex mx-auto justifiy-between items-center">
          <div className="footer-logo-container">
            <div className="footer-container-b">
              <div className="footer-container-1">
                <img src={perhutaniPutih} alt="Perhutani Logo" className="perhutaniFooter" />
                <img src={perhutaniPanjangPutih} alt="Perhutani Panjang Logo" className="perhutaniPanjangFooter" />
                <img src={bumnPutih} alt="BUMN Logo" className="bumnFooter" />
              </div>
              <div className="footer-container-2">
                <p className="text-white desc-footer">Perhutani Jawa Barat dan Banten merupakan salah satu cabang wilayah dari Badan Usaha Milik Negara berbentuk Perusahaan Umum (Perum) yang memiliki tugas dan wewenang untuk mengelola sumberdaya hutan negara di Provinsi Jawa Barat dan Banten.</p>
              </div>
              <div className="footer-container-3 mx-auto">
                <ul className="nav mt-4 nav-social">
                  <li className="nav-item"><a href="https://www.facebook.com/perumperhutani/" target="" className="nav-link"><FaFacebook size={25} className='sosmed' /></a></li>
                  <li className="nav-item"><a href="https://twitter.com/perumperhutani" target="" className="nav-link"><FaTwitter size={25}  className='sosmed' /></a></li>
                  <li className="nav-item"><a href="https://www.instagram.com/perumperhutani/?hl=id" target="" className="nav-link"><FaInstagram size={25}  className='sosmed' /></a></li>
                  <li className="nav-item"><a href="https://www.tiktok.com/@perum.perhutani" target="" className="nav-link"><FaTiktok size={25}  className='sosmed' /></a></li>
                  <li className="nav-item"><a href="https://www.youtube.com/channel/UCmMvplsIxDZLQeusTWlLE2w" target="" className="nav-link"><FaYoutube size={25}  className='sosmed' /></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-container-c">
              <div className="footer-column">
                <h4 className="fq-bold mb-4 text-white">OBYEK KERJASAMA</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">Tanah</li>
                  <li className="nav-item">Bangunan</li>
                  <li className="nav-item">Jalan</li>
                  <li className="nav-item">Kios</li>
                  <li className="nav-item">Sertifikat</li>
                  <li className="nav-item">Alamat</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="fq-bold mb-4 text-white">PERJANJIAN</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">Nomor</li>
                  <li className="nav-item">Tanggal</li>
                  <li className="nav-item">Skema Kerja Sama</li>
                  <li className="nav-item">Nama</li>
                  <li className="nav-item">Nomor Identitas Mitra</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4 className="fq-bold mb-4 text-white">ANGGARAN</h4>
                <ul className="nav flex-column">
                  <li className="nav-item">Nilai</li>
                  <li className="nav-item">Pajak Pendapatan Negara</li>
                  <li className="nav-item">PBB</li>
                  <li className="nav-item">Target Pendapatan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-text-container">
        <p className="text-white text-center">
          © 2023 - Perhutani Jawa Barat dan Banten
        </p>
      </div>
    </footer>
  );
};

export default Footer;
