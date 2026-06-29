import React, { useState } from 'react';

const ProductModal = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Dimmed Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-[2rem] shadow-2xl relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12 animate-fadeInUp">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="aspect-square bg-[#F9FAFB] border border-gray-100 rounded-[1.5rem] flex items-center justify-center p-8 relative overflow-hidden group">
            <img 
              src={(product.images && product.images[activeImage]) || (!product.images && activeImage === 0 ? product.image_url : '') || 'https://placehold.co/600x600/FAF2F2/00529B?text=Coming+Soon'} 
              alt={product.name} 
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 justify-center">
              {product.images.map((imgUrl, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(idx)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-xl border-2 flex items-center justify-center overflow-hidden transition-all bg-white cursor-pointer ${activeImage === idx ? 'border-[#00529B] shadow-md scale-105' : 'border-gray-100 hover:border-gray-300'}`}
                >
                  <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-contain mix-blend-multiply p-2" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F37021]/10 text-[#F37021] text-xs font-bold uppercase tracking-widest mb-4 w-fit">
            {product.therapy_area}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-2 leading-tight pr-8">
            {product.name}
          </h1>
          <p className="text-lg text-[#00529B] font-medium mb-6">{product.tagline}</p>
          
          <p className="text-base text-[#6B7280] leading-relaxed mb-8">
            {product.description}
          </p>
          
          <div className="bg-[#FAF2F2]/50 rounded-xl p-6 mb-8 border border-gray-100">
            <h3 className="font-bold text-[#111827] mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#00529B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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
          
          <div className="flex">
            <div className="w-full border border-gray-100 rounded-xl p-5 bg-[#F9FAFB]">
              <div className="text-sm text-[#6B7280] font-medium mb-2">Packaging</div>
              <div className="font-bold text-[#111827] text-lg">{product.packaging}</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;
