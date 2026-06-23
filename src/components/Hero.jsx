import React, { useState, useEffect } from 'react';

// Relative imports targeting your local assets folder cleanly
import relumiaImg from '../assets/Relumia.png';
import flutijaksLotionImg from '../assets/Flutijaks.png';
import logoSvg from '../assets/LOGO JAKS (CDR) (1).svg';
import relumiaSvg from '../assets/relumia.svg';
import emoluxOcSvg from '../assets/emolux oc.svg';
import nigrinilSvg from '../assets/Nigrinil.svg';
import clinderaNSvg from '../assets/clindera n.svg';
import facioxUvSvg from '../assets/Faciox uv.svg';
import facioxSbSvg from '../assets/faciox sb.svg';

const slides = [
  {
    id: 1,
    tagline: 'Jaks Pharma Private Limited',
    titleLine1: 'Science you ',
    titleHighlight1: 'can trust.',
    titleLine2: 'Care you ',
    titleHighlight2: 'can feel.',
    description: 'Every molecule we develop is backed by rigorous research and an unwavering commitment to scientific integrity — because behind every prescription is a person.',
    customComponent: () => (
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 bg-[#FAF2F2]/30">
        <div className="w-full max-w-md lg:max-w-lg bg-white rounded-xl shadow-[0_30px_70px_-25px_rgba(10,103,144,0.35)] overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-500">
          <div className="bg-white text-[#111827] p-6 sm:p-8 flex justify-between items-center border-b border-gray-100">
            <div>
              <div className="font-mono text-xs tracking-widest uppercase text-[#5C6B7A]">Certificate of Standards</div>
              <div className="font-bold text-lg sm:text-xl mt-1.5 tracking-tight">Jaks Pharma — Quality Charter</div>
            </div>
            <div className="font-mono text-xs text-[#5C6B7A] text-right">REF / 2026-JP</div>
          </div>
          <div className="p-6 sm:p-8">
            {[
              { label: 'Scientific rigor', value: 'Evidence-based' },
              { label: 'Manufacturing quality', value: 'GMP standard' },
              { label: 'Ethical conduct', value: 'Zero deviation' },
              { label: 'Patient outcome focus', value: 'Primary metric' },
            ].map((row, i) => (
              <div key={i} className={`flex justify-between items-center py-4 ${i !== 3 ? 'border-b border-gray-100' : ''} text-[15px] sm:text-base`}>
                <span className="text-[#5C6B7A] font-medium">{row.label}</span>
                <span className="font-mono font-bold flex items-center gap-3 text-[#074A68]">
                  {row.value}
                  <span className="text-[10px] tracking-widest bg-[#EAF3EC] text-[#2E7D4F] px-2.5 py-1 rounded-full border border-[#2E7D4F]/20">PASS</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    stats1: '100%',
    stats1Label: 'Evidence-led',
    stats2: '0',
    stats2Label: 'Deviations',
    cropClass: 'object-center'
  },
  {
    id: 2,
    tagline: 'Advanced Skin Brightening Science',
    titleLine1: 'Clinical Luxury. ',
    titleHighlight1: 'Advanced',
    titleLine2: 'Cellular ',
    titleHighlight2: 'Antioxidants.',
    description: 'Scientifically formulated skin brightening nutraceutical utilizing premium Opitac® L-Glutathione from Japan to combat hyperpigmentation and oxidative stress.',
    image: relumiaSvg,
    stats1: '500mg',
    stats1Label: 'Glutathione',
    stats2: 'Japan',
    stats2Label: 'Opitac® Res',
    cropClass: 'object-contain',
    blend: true
  },
  {
    id: 3,
    tagline: 'Advanced Oil Control Hydration',
    titleLine1: 'Balanced Hydration. ',
    titleHighlight1: 'Zero Shine.',
    titleLine2: 'Regulates ',
    titleHighlight2: 'Sebum.',
    description: 'A scientifically formulated oil-control emollient designed specifically for oily and acne-prone skin, providing deep hydration without clogging pores.',
    image: emoluxOcSvg,
    stats1: 'Oil-Free',
    stats1Label: 'Formula',
    stats2: 'Non',
    stats2Label: 'Comedogenic',
    cropClass: 'object-contain',
    blend: true
  },
  {
    id: 4,
    tagline: 'Clinical Purity Protocols',
    titleLine1: 'Science ',
    titleHighlight1: 'Backed.',
    titleLine2: 'Skin ',
    titleHighlight2: 'Approved.',
    description: 'Faciox UV is a smart sunscreen that provides ultimate defence against harmful UV rays. A silicone-based water-resistant formula with SPF 50 and PA+++.',
    image: facioxUvSvg,
    stats1: 'SPF 50',
    stats1Label: 'PA+++',
    stats2: '0%',
    stats2Label: 'Fillers Used',
    cropClass: 'object-contain',
    blend: true
  },
  {
    id: 5,
    tagline: 'Advanced Pigmentation Science',
    titleLine1: 'Luminous ',
    titleHighlight1: 'Radiance.',
    titleLine2: 'Flawless ',
    titleHighlight2: 'Tone.',
    description: 'FACIOX Skin Brightening Serum unlocks a luminous, even-toned complexion. This advanced serum transforms skin vitality and reveals natural radiance.',
    image: facioxSbSvg,
    stats1: '3x',
    stats1Label: 'Active Act',
    stats2: '0',
    stats2Label: 'Dark Spots',
    cropClass: 'object-contain',
    blend: true
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="top" className="relative min-h-[100dvh] w-full flex flex-col bg-[#faf2f2] text-[#111827] overflow-hidden pt-16 lg:pt-20 group/section">

      {/* INNER CONTENT GRID WRAPPER */}
      <div className="flex-grow w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between">

        {/* LEFT NAVIGATION BUTTON */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-4 top-[20%] sm:top-[25%] lg:top-1/2 -translate-y-1/2 z-40 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white text-[#00529B] hover:bg-[#00529B] hover:text-white border-2 border-[#00529B] rounded-none shadow-md transition-all duration-200 cursor-pointer outline-none"
          aria-label="Previous Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* RIGHT NAVIGATION BUTTON */}
        <button
          onClick={handleNextSlide}
          className="absolute right-4 top-[20%] sm:top-[25%] lg:top-1/2 -translate-y-1/2 z-40 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white text-[#00529B] hover:bg-[#00529B] hover:text-white border-2 border-[#00529B] rounded-none shadow-md transition-all duration-200 cursor-pointer outline-none"
          aria-label="Next Slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* LEFT CONTENT PANEL */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 py-8 lg:py-4 space-y-3 sm:space-y-4 lg:space-y-3 relative z-20 order-2 lg:order-1">

          <div className="h-[24px] overflow-hidden flex items-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#F37021]">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                <path d="M6.453 15h11.094"></path>
                <path d="M8.5 2h7"></path>
              </svg>
              {slide.tagline}
            </span>
          </div>

          <div className="w-full min-h-[75px] sm:min-h-[90px] xl:min-h-[125px] flex items-center overflow-hidden">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] tracking-tight leading-[1.1] font-extrabold text-[#111827] whitespace-pre-line">
              {slide.titleLine1}<span style={{ display: 'contents' }}> </span><span className="text-[#00529B]">{slide.titleHighlight1}</span><br />
              {slide.titleLine2}<span style={{ display: 'contents' }}> </span><span className="relative inline-block">
                <span className="text-[#F37021]">{slide.titleHighlight2}</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="6" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 6 Q50 0, 100 4 Q150 8, 200 2" fill="none" stroke="#F37021" strokeWidth="3" strokeLinecap="round"></path>
                </svg>
              </span>
            </h1>
          </div>

          <div className="w-full min-h-[55px] sm:min-h-[45px] flex items-start overflow-hidden">
            <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600 max-w-md font-sans">
              {slide.description}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#00529B]/5 border border-[#00529B]/10 px-3 py-2 rounded-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00529B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span className="text-[10px] sm:text-xs font-bold text-[#00529B] tracking-wide">
              Advancing Dermatology &amp; Aesthetic Science
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
            <button
              onClick={() => { document.querySelector('#products').scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto bg-[#00529B] text-white hover:bg-[#003E75] transition-all duration-200 px-6 py-2.5 text-xs font-semibold shadow-sm rounded-none border-none cursor-pointer"
            >
              Shop Collection
            </button>
            <button
              onClick={() => { document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}
              className="w-full sm:w-auto border-2 border-[#00529B] text-[#00529B] hover:bg-white transition-all duration-200 px-6 py-2.5 text-xs font-semibold rounded-none cursor-pointer"
            >
              Discover More
            </button>
          </div>
        </div>

        {/* RIGHT DISPLAY PANEL */}
        <div className="w-full lg:w-[50%] relative aspect-[16/10] lg:aspect-auto min-h-[240px] sm:min-h-[360px] lg:min-h-full overflow-hidden order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-gray-200/20">

          {slide.customComponent ? (
            slide.customComponent()
          ) : slide.image ? (
            <img
              alt="Hero Slide Showcase"
              className={`w-full h-full ${slide.blend ? 'object-contain mix-blend-multiply p-4 sm:p-8 lg:p-12' : 'object-contain p-4 sm:p-8 lg:p-12'} ${slide.cropClass} absolute inset-0 transition-all duration-700`}
              src={slide.image}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#00529B]/5">
              <span className="text-[9px] font-black tracking-[0.3em] uppercase text-[#00529B]/30 animate-pulse">
                JAKS Clinical Asset Frame
              </span>
            </div>
          )}

          {/* Floating Stat Card 1 */}
          <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 bg-white border border-gray-100 px-4 py-2 sm:px-5 sm:py-2.5 rounded-none z-20 shadow-sm">
            <div className="text-lg sm:text-xl font-black text-[#00529B] leading-none">{slide.stats1}</div>
            <div className="text-[9px] font-medium text-slate-500 mt-0.5 leading-none">{slide.stats1Label}</div>
          </div>

          {/* Floating Stat Card 2 */}
          <div className="absolute right-4 top-4 sm:right-6 sm:top-6 bg-white border border-gray-100 px-4 py-2 sm:px-5 sm:py-2.5 rounded-none z-20 shadow-sm">
            <div className="text-lg sm:text-xl font-black text-[#F37021] leading-none">{slide.stats2}</div>
            <div className="text-[9px] font-medium text-slate-500 mt-0.5 leading-none">{slide.stats2Label}</div>
          </div>
        </div>

      </div>

      {/* DEDICATED BOTTOM PAGINATION TRACK */}
      <div className="w-full flex items-center justify-center py-4 bg-[#FAF2F2] border-t border-gray-200/10 z-20 relative">
        <div className="flex items-center gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 border-none cursor-pointer ${currentSlide === index ? 'bg-[#F37021] scale-125 w-5' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>



    </section>
  );
};

export default Hero;