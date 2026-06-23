import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = products.find(p => p.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError('Product not found in Database');
    }
    setLoading(false);
  }, [id]);

  if (loading) return <div className="min-h-screen py-32 flex items-center justify-center text-[#00529B] font-bold text-2xl">Loading Product Data...</div>;
  
  if (error || !product) {
    return (
      <div className="min-h-screen py-32 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-[#111827] mb-4">Product Not Found</h1>
        <p className="text-lg text-[#6B7280] mb-8">{error}</p>
        <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#00529B] hover:bg-[#003A6E] transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  // Exact Devonia aesthetic color mapping
  const getProductTheme = (code) => {
    const themes = {
      'KERA01': { bgPastel: '#e5e7eb', cardPastel: '#d1d5db', primary: '#2b2b29' },
      'FACIOXUV': { bgPastel: '#ffedd5', cardPastel: '#fed7aa', primary: '#ea580c' },
      'FACIOXFW': { bgPastel: '#e0f2fe', cardPastel: '#bae6fd', primary: '#0284c7' },
      'FACIOXSB': { bgPastel: '#ffedd5', cardPastel: '#fed7aa', primary: '#ea580c' },
      'FACIOXHA': { bgPastel: '#dbeafe', cardPastel: '#bfdbfe', primary: '#2563eb' },
      'FACIOXVITC': { bgPastel: '#fef3c7', cardPastel: '#fde68a', primary: '#d97706' },
      'EGLANCEEYE': { bgPastel: '#d1fae5', cardPastel: '#a7f3d0', primary: '#059669' },
      'RELUMIA': { bgPastel: '#f3e8ff', cardPastel: '#e9d5ff', primary: '#7e22ce' },
      'CLINDERAN': { bgPastel: '#fce7f3', cardPastel: '#fbcfe8', primary: '#db2777' },
      'NIGRINIL': { bgPastel: '#ffe4e6', cardPastel: '#fecdd3', primary: '#e11d48' },
      'FLUTIJAKSCREAM': { bgPastel: '#dbeafe', cardPastel: '#bfdbfe', primary: '#2563eb' },
      'FLUTIJAKSLOTION': { bgPastel: '#dbeafe', cardPastel: '#bfdbfe', primary: '#2563eb' },
      'KERAJAKSM': { bgPastel: '#e5e7eb', cardPastel: '#d1d5db', primary: '#2b2b29' },
      'EMOLUXOC': { bgPastel: '#dcfce7', cardPastel: '#bbf7d0', primary: '#16a34a' },
    };
    return themes[code] || { bgPastel: '#f1f5f9', cardPastel: '#e2e8f0', primary: '#0f172a' };
  };

  const theme = getProductTheme(product.product_code);
  const mainImage = (product.images && product.images[activeImage]) || (!product.images && activeImage === 0 ? product.image_url : '') || 'https://placehold.co/600x600/FAF2F2/00529B?text=Coming+Soon';

  return (
    <main 
      className="py-16 lg:py-24 min-h-screen relative overflow-hidden transition-colors duration-700"
      style={{ background: `linear-gradient(135deg, #f8fafc 0%, ${theme.bgPastel} 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <Link to="/#products" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium mb-8 sm:mb-12 transition-colors border-none bg-transparent cursor-pointer">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE - IMAGE */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4">
            <div 
              className="aspect-[3/4] rounded-3xl flex items-center justify-center p-8 sm:p-12 relative overflow-hidden group shadow-sm border border-white/40 transition-colors duration-700"
              style={{ backgroundColor: theme.cardPastel }}
            >
              {/* Devonia 'circlish' white backdrop to prevent the pastel color from darkening the photo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full bg-white opacity-95 pointer-events-none transition-transform duration-700 group-hover:scale-105"></div>
              
              <img 
                src={mainImage} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 hover:scale-110 relative z-10" 
              />
              
              {/* Optional Pause/Play pill like Devonia */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-2 font-bold text-sm text-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Pause
              </div>
            </div>
            {/* Thumbnails (if multiple) */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 justify-center mt-4">
                {product.images.map((imgUrl, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 flex-shrink-0 rounded-xl border-2 flex items-center justify-center overflow-hidden transition-all bg-white cursor-pointer ${activeImage === idx ? 'border-[#00529B] shadow-md scale-105' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="w-full lg:w-[55%] lg:pt-6">
            <div className="flex items-center gap-4 mb-3">
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight transition-colors duration-700"
                style={{ color: theme.primary }}
              >
                {product.name}
              </h1>
            </div>
            
            <p 
              className="text-2xl sm:text-3xl font-serif italic mb-4 transition-colors duration-700"
              style={{ color: theme.primary, opacity: 0.9 }}
            >
              {product.tagline}
            </p>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium max-w-xl">
              {product.composition}
            </p>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-12 shadow-sm border border-white relative overflow-hidden">
              {/* Red left border like Devonia */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#dc2626]"></div>
              <p className="text-lg sm:text-xl text-slate-700 italic font-medium leading-relaxed">
                "{product.description}"
              </p>
            </div>
            
            <div>
              <h3 className="text-[13px] font-bold text-slate-800 uppercase tracking-widest mb-4">
                Active Indications &amp; Information
              </h3>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white shadow-sm space-y-5">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Indications</h4>
                  <p className="text-slate-700 font-medium">{product.indications}</p>
                </div>
                <div className="pt-5 border-t border-slate-200/60">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Packaging</h4>
                  <p className="text-slate-700 font-medium">{product.packaging}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;