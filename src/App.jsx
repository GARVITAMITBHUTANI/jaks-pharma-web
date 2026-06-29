import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
import FAQ from './pages/FAQ';
import ExpertAdvice from './pages/ExpertAdvice';
import WhatsAppButton from './components/WhatsAppButton';
import MissionStatement from './pages/MissionStatement';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="App selection:bg-[#00529B] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/expert-advice" element={<ExpertAdvice />} />
          <Route path="/mission" element={<MissionStatement />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
