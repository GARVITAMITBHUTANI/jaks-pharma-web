import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EAF2F8]/50 rounded-l-[4rem] -z-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div className="relative animate-fadeInUp">
            <div className="relative">
              <img alt="Dermatology Lab" className="w-full rounded-3xl object-cover aspect-[4/3] shadow-lg" src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixlib=rb-4.1.0&amp;q=85&amp;w=800" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#F37021]/30 rounded-3xl -z-10"></div>
            </div>
          </div>
          <div className="space-y-6 animate-fadeInUp delay-200">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#F37021]">About JAKS Pharma</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-[#111827] leading-tight">An Innovative &amp;<span style={{ display: 'contents' }}> </span><span className="text-[#00529B]">New Age</span> Company</h2>
            <p className="text-base leading-relaxed text-slate-600">JAKS Pharma Private Limited was founded by <strong>Jayant Kumar</strong> with the aim to transform healthcare through cutting-edge pharmaceutical research, breakthrough treatments, and a commitment to patient well-being.</p>
            <p className="text-base leading-relaxed text-slate-600">We envision a world where no disease is incurable and every patient can live a healthier and happier life. Our core values of Patient Centricity, Quality, Integrity, and Innovation with Ethics serve as the foundation of everything we do.</p>
            <button onClick={() => { document.querySelector('#products').scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex bg-[#00529B] text-white hover:bg-[#003E75] hover:-translate-y-0.5 transition-all duration-300 rounded-full px-8 py-3 font-semibold shadow-md hover:shadow-lg text-sm cursor-pointer">Explore Our Range</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp delay-300">
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00529B]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] flex items-center justify-center mb-4 group-hover:bg-[#00529B] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart text-[#00529B] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-[#111827] mb-2">Patient Centricity</h4>
            <p className="text-sm leading-relaxed text-slate-500">Every solution is designed with the patient at the centre of our thinking.</p>
          </div>
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00529B]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] flex items-center justify-center mb-4 group-hover:bg-[#00529B] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-microscope text-[#00529B] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <path d="M6 18h8"></path>
                <path d="M3 22h18"></path>
                <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
                <path d="M9 14h2"></path>
                <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
                <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-[#111827] mb-2">Innovation</h4>
            <p className="text-sm leading-relaxed text-slate-500">Relentless pursuit of groundbreaking solutions through scientific curiosity.</p>
          </div>
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00529B]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] flex items-center justify-center mb-4 group-hover:bg-[#00529B] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-[#00529B] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-[#111827] mb-2">Integrity</h4>
            <p className="text-sm leading-relaxed text-slate-500">Transparent practices and ethical standards guide every decision we make.</p>
          </div>
          <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#00529B]/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] flex items-center justify-center mb-4 group-hover:bg-[#00529B] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb text-[#00529B] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-[#111827] mb-2">Quality</h4>
            <p className="text-sm leading-relaxed text-slate-500">We believe quality is the only parameter that shapes an organization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
