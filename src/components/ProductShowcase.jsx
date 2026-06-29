import React, { useState } from 'react';
import { products, productCategories } from '../data/products';
import ProductModal from './ProductModal';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.therapy_area === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-[#F37021]"></span>
            <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Our Range</span>
            <span className="h-px w-8 bg-[#F37021]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">Premium Clinical Solutions</h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Scientifically proven formulations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border-none cursor-pointer ${
                activeCategory === category 
                  ? 'bg-[#00529B] text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-[#FAF2F2] hover:text-[#00529B]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
          {filteredProducts.map((product, index) => (
            <button 
              key={product.id} 
              onClick={() => setSelectedProduct(product)}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 delay-${index * 100} flex flex-col h-full text-left`}
            >
              <div className="relative aspect-square p-6 bg-gradient-to-br from-[#FAF2F2] to-white flex items-center justify-center">
                <img 
                  src={product.image_url || 'https://images.unsplash.com/photo-1611078716333-e91807d4b0f9?q=80&w=600&auto=format&fit=crop'} 
                  alt={product.name}
                  className={`w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 ${!product.image_url ? 'opacity-30 mix-blend-luminosity' : ''}`}
                />
                {!product.image_url && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[#00529B] font-bold text-lg rotate-[-15deg] opacity-20 border-2 border-[#00529B] px-4 py-1 rounded">COMING SOON</span>
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-[#00529B]/10 text-[#00529B] text-xs font-semibold px-3 py-1 rounded-full">
                  {product.product_code}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#111827] mb-2 group-hover:text-[#00529B] transition-colors">{product.name}</h3>
                <p className="text-sm text-[#475569] mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-end mt-auto">
                  <div className="flex items-center text-sm font-semibold text-[#00529B] group-hover:text-[#F37021] transition-colors">
                    Know More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-xl font-bold text-[#111827] mb-2">No products found</h3>
            <p className="text-[#6B7280]">We couldn't find any products in this category.</p>
          </div>
        )}
      </div>
      {/* Render the sleek modal! */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductShowcase;
