import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';

const ExpertAdvice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-[#FAF2F2]">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-[#F37021]"></span>
            <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Consult Our Specialists</span>
            <span className="h-px w-8 bg-[#F37021]"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6">Expert Advice</h1>
          <p className="text-lg text-slate-600 mb-12">
            Have a specific dermatological concern or need personalized product recommendations? 
            Reach out to our clinical experts below and we will get back to you with tailored advice.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ExpertAdvice;
