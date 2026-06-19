import React, { useEffect } from 'react';
import FAQSection from '../components/FAQSection';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#FAF2F2]">
      <FAQSection />
    </div>
  );
};

export default FAQ;
