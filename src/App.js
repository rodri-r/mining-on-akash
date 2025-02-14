// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import MiningStats from './components/MiningStats';
import MiningNews from './components/MiningNews';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="logo-container">
          <img src="https://www.liblogo.com/img-logo/ak2647ad24-akash-network-logo-akash-network-price-today-official-live-akt-price-chart-in-usd.png" alt="Akash Logo" />
        </div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<MiningStats />} />
            <Route path="/news" element={<MiningNews />} />
            <Route path="/articles/:id" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
