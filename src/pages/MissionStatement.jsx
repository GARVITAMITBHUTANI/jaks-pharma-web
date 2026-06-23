import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MissionStatement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAF2F2] pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/#about" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#00529B] font-medium mb-8 sm:mb-12 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F37021] block mb-3">
            Our Purpose
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] uppercase leading-[1.1] mb-8">
            Mission <span className="text-[#00529B]">Statement.</span>
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-slate-600 font-sans">
            At Jaks Pharma, we believe true beauty and wellness are born at the intersection of rigorous science and uncompromising care. We don’t just manufacture formulations; we engineer confidence. As a fast-growing pharmaceutical leader specializing in advanced skincare, aesthetics, and targeted wellness solutions, our mission is simple: to deliver clinical-grade excellence that elevates your everyday life.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] uppercase tracking-tight mb-8">
            Our Core <span className="text-[#F37021]">Pillars</span>
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#00529B] mb-2">Clinical-Grade Quality</h3>
              <p className="text-slate-600 leading-relaxed font-sans">We hold our formulations to the highest standard. Every batch is a testament to precision, purity, and proven efficacy, ensuring healthcare professionals and consumers receive nothing but the best.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00529B] mb-2">Advanced Skincare & Health</h3>
              <p className="text-slate-600 leading-relaxed font-sans">From breakthrough dermatological therapies to restorative nutraceuticals, our portfolio is meticulously designed to protect, heal, and revitalize from the inside out.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00529B] mb-2">Uncompromising Ethics & Integrity</h3>
              <p className="text-slate-600 leading-relaxed font-sans">Trust is our ultimate currency. We operate with absolute transparency, ensuring that our clinical research, sourcing, and partnerships reflect the highest ethical standard in the industry.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00529B] mb-2">Values-Driven Innovation</h3>
              <p className="text-slate-600 leading-relaxed font-sans">Growth means nothing without purpose. Our decisions are rooted in long-term responsibility—to our patients, our doctor community, and the healthcare ecosystem.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#00529B] mb-2">Synergy in Teamwork</h3>
              <p className="text-slate-600 leading-relaxed font-sans">Our progress is fueled by a high-performance culture of shared ownership. By uniting brilliant scientific minds with a dedicated, agile field force, we transform complex biochemistry into accessible, life-enhancing products.</p>
            </div>
          </div>
        </div>

        {/* From the Founder's Desk */}
        <div className="border-t-4 border-[#00529B] bg-white p-8 sm:p-12 shadow-sm relative">
          <svg className="absolute top-8 left-8 w-12 h-12 text-slate-100 -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] uppercase tracking-tight mb-8">
              From the Founder's Desk
            </h2>
            <blockquote className="text-xl sm:text-2xl font-serif italic text-[#00529B] mb-8 border-l-4 border-[#F37021] pl-6">
              "True leadership in pharmaceuticals isn't just about market share; it's about earning trust through every single molecule we deliver."
            </blockquote>
            <div className="space-y-4 text-slate-600 leading-relaxed font-sans">
              <p>
                Jaks Pharma was forged on a simple, powerful vision: to bridge the gap between premium, luxury aesthetics and clinical efficacy.
              </p>
              <p>
                Driven by over 25 years of deep industry expertise across India's leading pharmaceutical giants, our leadership team established Jaks Pharma to challenge the status quo. We operate on a philosophy of strict accountability, deliberate excellence, and rapid market evolution. By combining cutting-edge chemical compositions with a "Clinical Luxury" design aesthetic, we are proud to build a modern pharma legacy that never compromises on quality, ethics, or human care.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MissionStatement;
