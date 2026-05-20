import React from 'react';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img alt="Background" className="w-full h-full object-cover" src="https://static.prod-images.emergentagent.com/jobs/1ba2800b-b251-4dca-825e-67f5e5f01013/images/a6dcbde07ac657938eb5ef43d5d2a6134141f46cd4f5160b48762e54f0719e8e.png" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#F37021]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#00529B]/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="animate-fadeInUp">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#F37021] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical" aria-hidden="true">
                  <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                  <path d="M6.453 15h11.094"></path>
                  <path d="M8.5 2h7"></path>
                </svg>
                Advanced Pharma &amp; Derma Care
              </span>
            </div>
            <h1 className="animate-fadeInUp delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05] font-extrabold text-[#111827]">
              Your<span style={{ display: 'contents' }}> </span><span className="text-[#00529B]">Wellness</span>,<br/>
              Our<span style={{ display: 'contents' }}> </span><span className="relative inline-block">
                <span className="text-[#F37021]">Commitment</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M0 6 Q50 0, 100 4 Q150 8, 200 2" fill="none" stroke="#F37021" strokeWidth="3" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
            <p className="animate-fadeInUp delay-300 text-base sm:text-lg leading-relaxed text-slate-600 max-w-lg">
              Transforming healthcare through cutting-edge pharmaceutical research, breakthrough treatments, and an unwavering commitment to patient well-being.
            </p>
            <div className="animate-fadeInUp delay-400 flex flex-wrap gap-4">
              <button onClick={() => { document.querySelector('#products').scrollIntoView({ behavior: 'smooth' }); }} className="bg-[#00529B] text-white hover:bg-[#003E75] hover:-translate-y-0.5 transition-all duration-300 rounded-full px-8 py-3.5 font-semibold shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer">Explore Products</button>
              <button onClick={() => { document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }} className="border-2 border-[#00529B] text-[#00529B] hover:bg-[#EAF2F8] transition-all duration-300 rounded-full px-8 py-3.5 font-semibold text-sm sm:text-base cursor-pointer">Learn More</button>
            </div>
            <div className="animate-fadeInUp delay-500 flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-[#00529B]" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span>ISO Certified</span>
              </div>
              <div className="w-px h-5 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-[#00529B]" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span>GMP Compliant</span>
              </div>
              <div className="w-px h-5 bg-gray-300"></div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield text-[#00529B]" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                <span>WHO-GMP</span>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block animate-fadeInUp delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00529B]/10 to-[#F37021]/10 rounded-[2rem] blur-2xl"></div>
              <img alt="Healthy glowing skin" className="relative w-full rounded-[2rem] object-cover aspect-[3/4] shadow-2xl" src="https://images.unsplash.com/photo-1728727217834-b190862837a3?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixlib=rb-4.1.0&amp;q=85&amp;w=800" />
              <div className="absolute -left-8 top-1/3 bg-white rounded-2xl p-4 shadow-xl animate-float">
                <div className="text-3xl font-extrabold text-[#00529B]">19+</div>
                <div className="text-xs font-medium text-slate-500">Products</div>
              </div>
              <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float delay-300">
                <div className="text-3xl font-extrabold text-[#F37021]">9+</div>
                <div className="text-xs font-medium text-slate-500">Therapy Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down text-[#00529B] opacity-50" aria-hidden="true">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
