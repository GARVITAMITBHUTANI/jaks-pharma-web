import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ArticleDetail from './pages/ArticleDetail';
import Articles from './pages/Articles';
  
function App() {
  return (
    <Router>
      <div className="App selection:bg-[#00529B] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
