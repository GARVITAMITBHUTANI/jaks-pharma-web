import React from 'react';
import relumiaSvg from '../assets/relumia.svg';

const therapies = [
  { id: 1, name: 'Acne Care', icon: '✨' },
  { id: 2, name: 'Anti Aging', icon: '⏳' },
  { id: 3, name: 'Anti Allergy', icon: '🛡️' },
  { id: 4, name: 'Anti Fungal', icon: '🍄' },
  { id: 5, name: 'Hair Care', icon: '💆' },
  { id: 6, name: 'Hyperpigmentation', icon: '☀️' },
  { id: 7, name: 'Psoriasis', icon: '🧬' },
  { id: 8, name: 'Skin Manifestations', icon: '🔍' },
  { id: 9, name: 'Vitiligo', icon: '☯️' }
];

const TherapyAreas = () => {
  return (
    <section id="therapy" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-[#F37021]"></span>
            <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Specialized Treatments</span>
            <span className="h-px w-8 bg-[#F37021]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">Comprehensive Therapy Areas</h2>
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0 reveal-left">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-[#faf2f2]">
              <img src={relumiaSvg} alt="Therapy Areas" className="absolute inset-0 w-full h-full object-contain p-12 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00529B]/95 via-[#00529B]/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-3">Targeted Solutions</h3>
                <p className="text-white/80 leading-relaxed">
                  Our extensive portfolio covers the full spectrum of dermatological needs with precision and care.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal-right">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
              {therapies.map((therapy, index) => (
                <div key={therapy.id} className={`group bg-[#F9FAFB] p-6 rounded-2xl border border-gray-100 hover:border-[#00529B] hover:bg-[#00529B] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer delay-${(index % 3) * 100}`}>
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-bottom-left">{therapy.icon}</div>
                  <h3 className="text-[#111827] font-bold group-hover:text-white transition-colors">{therapy.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapyAreas;
