import React from 'react';

const WhyChooseUs = () => {
  const certifications = [
    { title: 'ISO 9001:2015', desc: 'Quality Management Certified' },
    { title: 'GMP', desc: 'Good Manufacturing Practice' },
    { title: 'WHO-GMP', desc: 'World Health Organization Standards' }
  ];

  return (
    <section className="py-24 bg-[#00529B] relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop')] opacity-10 mix-blend-multiply bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-[#F37021]"></span>
            <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Why Choose Us</span>
            <span className="h-px w-8 bg-[#F37021]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Certified Excellence</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            We adhere to the highest global standards to ensure that every product we deliver meets stringent quality and safety benchmarks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {certifications.map((cert, index) => (
            <div key={index} className={`bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-white hover:text-[#00529B] transition-all duration-300 group delay-${index * 100}`}>
              <div className="w-16 h-16 mx-auto bg-[#F37021] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">{cert.title}</h3>
              <p className="text-white/70 group-hover:text-[#6B7280] transition-colors">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
