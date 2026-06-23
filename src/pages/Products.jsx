import React, { useEffect } from 'react';
import ProductShowcase from '../components/ProductShowcase';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-20 bg-[#F9FAFB]">
      <div className="py-8">
        <ProductShowcase />
      </div>
    </main>
  );
};

export default Products;
