import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found.</h2>
        <Link to="/" className="text-[#00529B] hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <main className="py-24 lg:py-32 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#products" className="inline-flex items-center text-sm font-semibold text-[#6B7280] hover:text-[#00529B] transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Products
        </Link>

        <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-xl border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 aspect-square bg-[#EAF2F8]/30 rounded-[1.5rem] flex items-center justify-center p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00529B]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <img 
              src={product.image || 'https://placehold.co/600x600/EAF2F8/00529B?text=Coming+Soon'} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F37021]/10 text-[#F37021] text-xs font-bold uppercase tracking-widest mb-6">
              {product.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-10">
              <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Active Ingredients</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-center text-[#6B7280]">
                    <svg className="w-5 h-5 text-[#00529B] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-[#00529B] hover:bg-[#003A6E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Request a Sample
              </button>
              <button className="flex-1 justify-center items-center px-8 py-4 border-2 border-[#00529B]/20 text-base font-semibold rounded-full text-[#00529B] bg-white hover:border-[#00529B] hover:bg-[#EAF2F8] transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
