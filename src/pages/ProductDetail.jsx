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

  return (
    <main className="py-24 lg:py-32 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        


        <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="aspect-square bg-white border border-gray-100 rounded-[1.5rem] flex items-center justify-center p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF2F2] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <img 
                src={(product.images && product.images[activeImage]) || (!product.images && activeImage === 0 ? product.image_url : '') || 'https://placehold.co/600x600/FAF2F2/00529B?text=Coming+Soon'} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500" 
              />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 justify-center">
              {[0, 1, 2].map((idx) => {
                const imgUrl = (product.images && product.images[idx]) || (!product.images && idx === 0 ? product.image_url : '');
                return (
                  <button 
                    key={idx} 
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl border-2 flex items-center justify-center overflow-hidden transition-all bg-white cursor-pointer ${activeImage === idx ? 'border-[#00529B] shadow-md scale-105' : 'border-gray-100 hover:border-gray-300'}`}
                  >
                    <img src={imgUrl || `https://placehold.co/150x150/FAF2F2/00529B?text=Image+${idx+1}`} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply p-2" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F37021]/10 text-[#F37021] text-xs font-bold uppercase tracking-widest mb-6">
              {product.therapy_area}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-[#00529B] font-medium mb-6">{product.tagline}</p>
            
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="bg-[#FAF2F2]/50 rounded-xl p-6 mb-8 border border-gray-100">
              <h3 className="font-bold text-[#111827] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00529B]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Detailed Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#111827]">Composition:</h4>
                  <p className="text-[#475569] text-sm">{product.composition}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111827]">Indications:</h4>
                  <p className="text-[#475569] text-sm">{product.indications}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-xl p-4 bg-[#F9FAFB]">
                <div className="text-xs text-[#6B7280] font-medium mb-1">Product Code</div>
                <div className="font-bold text-[#111827] text-sm truncate">{product.product_code}</div>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 bg-[#F9FAFB]">
                <div className="text-xs text-[#6B7280] font-medium mb-1">Packaging</div>
                <div className="font-bold text-[#111827] text-sm truncate">{product.packaging}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default ProductDetail;