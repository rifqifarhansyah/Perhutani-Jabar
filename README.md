# MAGENTA - BATCH 1 - 2023
<h2 align="center">
   <a href="https://perhutani-jabar.vercel.app/" target="_blank">Perhutani Jawa Barat dan Banten</a>
</h2>
<hr>

## Table of Contents
1. [General Info](#general-information)
2. [Creator Info](#creator-information)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Setup](#setup)
6. [Usage](#usage)
7. [Video Capture](#videocapture)
8. [Screenshots](#screenshots)
9. [Structure](#structure)
10. [Project Status](#project-status)
11. [Room for Improvement](#room-for-improvement)
12. [Acknowledgements](#acknowledgements)
13. [Contact](#contact)

<a name="general-information"></a>

## General Information
Repository ini dibuat untuk memenuhi tugas Magang Generasi Bertalenta (MAGENTA) - Batch 1 tahun 2023 - Perum Perhutani Regional Jawa Barat dan Banten. Website ini hanya terdiri dari 3 page, yaitu : `HomePage`, `PropertiPage`, serta `DownloadPage`. `HomePage` merupakan tampilan awal dari website, sedangkan `PropertiPage` merupakan tampilan yang berisi titik-titik dimana terdapat properti milik Perhutani Jawa Barat dan Banten. Sementara `DownloadPage` merupakan tampilan yang berisi link download laporan kerja Perhutani Jawa Barat dan Banten.
 
<a name="creator-information"></a>

## Creator Information

| Nama                        | NIM      | E-Mail                      |
| --------------------------- | -------- | --------------------------- |
| Mohammad Rifqi Farhansyah   | 13521166 | 13521166@std.stei.itb.ac.id |

<a name="features"></a>

## Features
- `Membuka peta` yang menampilkan aset-aset Perhutani Jawa Barat dan Banten
- Pop up `informasi detail` yang berisi nama objek, alamat, luas tanah, dll
- `Mendownload laporan kerja` Perhutani Jawa Barat dan Banten

<a name="technologies-used"></a>

## Technologies Used
* [React](https://react.dev/) - versi 18.2.0
* [tailwind](https://tailwindcss.com/) - versi 3.3.2

> Note: The version of the libraries above is the version that we used in this project. You can use the latest version of the libraries.

<a name="setup"></a>

## Setup
1. Clone Repository ini dengan menggunakan command berikut
   ```sh
   git clone https://github.com/rifqifarhansyah/Perhutani-Jabar.git
   ```
2. Buka Folder "client" di Terminal
3. Install Packages yang diperlukan
   ```sh
   npm install
   ```
4. Jalanakan Aplikasi dengan menggunakan command
   ```sh
   npm start
   ```
5. Buka [http://localhost:3000](http://localhost:3000) pada Browser Anda
6. Cara alternatif dapat melalui pranala [berikut](https://perhutani-jabar.vercel.app/)

<a name="usage"></a>

## Usage
1. Pada `HomePage`, Anda dapat memperoleh informasi umum mengenai Perhutani Jawa Barat dan Banten
2. Terdapat tombol `SetView` di bagian kiri peta pada `PropertiPage` untuk memilih view dari peta
3. Setelah memilih view kota yang hendak digunakan, akan muncul `marker-marker` tertentu
4. `PopUp informasi detail` dapat dilihat dengan mengklik `marker` yang diinginkan
5. Anda juga dapat mendownload laporan kerja Perhutani Jawa Barat dan Banten pada `DownloadPage`


<a name="videocapture"></a>

## Video Capture
<nl>

![Perhutani Jabar dan Banten](https://github.com/rifqifarhansyah/Perhutani-Jabar/blob/main/img/perhutani.gif?raw=true)

<a name="screenshots"></a>

## Screenshots
<p>
    <p>Gambar 1. HomePage</p>
    <img src="/img/SS1.png/">
    <nl>
    <p>Gambar 2. PropertiPage</p>
    <img src="/img/SS2.png/">
    <nl>
    <p>Gambar 3. Dropdown SetView</p>
    <img src="/img/SS3.png/">
    <nl>
    <p>Gambar 4. PopUp Detail Information</p>
    <img src="/img/SS4.png/">
    <nl>
    <p>Gambar 5. DownloadPage</p>
    <img src="/img/SS5.png/">
    <nl>
</p>

<a name="structure"></a>

## Structure
```bash
│   App.css
│   App.js
│   App.test.js
│   index.css
│   index.js
│   logo.svg
│   reportWebVitals.js
│   setupTests.js
│
├───assets
│       1.png
│       10.png
│       11.png
│       12.png
│       2.png
│       3.png
│       4.png
│       5.png
│       6.png
│       7.png
│       8.png
│       9.png
│       Bandung Selatan.xlsx
│       Bandung Utara.xlsx
│       bandungCard.png
│       Banten.xlsx
│       bantenCard.png
│       bghijau.png
│       bgputih.png
│       Bogor.xlsx
│       bogorCard.png
│       bumn-abu.png
│       bumn-putih.png
│       bumn.png
│       Ciamis.xlsx
│       ciamisCard.png
│       Cianjur.xlsx
│       cianjurCard.png
│       Divre.xlsx
│       download.png
│       Garut.xlsx
│       garutCard.png
│       home1.png
│       home2.png
│       icon.png
│       img1.png
│       Indramayu.xlsx
│       indramayuCard.png
│       Kuningan.xlsx
│       logo-panjang.png
│       Majalengka.xlsx
│       majalengkaCard.png
│       perhutani-abu.png
│       perhutani-putih.png
│       perhutani.png
│       perhutaniPanjangPutih.png
│       properti.png
│       Purwakarta.xlsx
│       purwakartaCard.png
│       Sukabumi.xlsx
│       sukabumiCard.png
│       Sumedang.xlsx
│       sumedangCard.png
│       Tasikmalaya.xlsx
│       tasikmalayaCard.png
│
├───components
│   ├───common
│   │   │   index.js
│   │   │
│   │   ├───Footer
│   │   │       Footer.js
│   │   │
│   │   └───Navbar
│   │           Navbar.js
│   │
│   ├───Download
│   │       Download.js
│   │
│   ├───Homepage
│   │       Homepage.js
│   │
│   └───Properties
│           defaultMarker.js
│           markerKota.js
│           popupStyles.js
│           Properties.js
│           propertiKota.js
│
└───pages
        Homepage.tsx
        Properties.tsx
```

<a name="project-status">

## Project Status
Project is: _complete_

<a name="room-for-improvement">

## Room for Improvement
Perbaikan yang dapat dilakukan pada program ini adalah:
- Menambahkan fitur-fitur serta membersihkan data yang digunakan

<a name="acknowledgements">

## Acknowledgements
- Terima kasih kepada Tuhan Yang Maha Esa

<a name="contact"></a>

## Contact
<h4 align="center">
  Contact : mrifki193@gmail.com<br/>
  2023
</h4>
<hr>
