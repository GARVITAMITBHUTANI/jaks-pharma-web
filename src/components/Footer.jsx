import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#003A6E] text-white">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-12 h-12 rounded-full bg-[#F37021] hover:bg-[#D9611B] text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up" aria-hidden="true">
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight">
                <span className="text-white">JAKS</span><span className="text-[#F37021]">.</span>
              </span>
              <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">Pharma</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-md">JAKS Pharma Private Limited is committed to transforming healthcare through cutting-edge pharmaceutical research, breakthrough treatments, and unwavering dedication to patient well-being.</p>
            <p className="text-sm text-white/40">Founded by Jayant Kumar</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/#about" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">About Us</Link></li>
              <li><Link to="/#products" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Products</Link></li>
              <li><Link to="/#therapy" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Therapy Areas</Link></li>
              <li><Link to="/#education" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Education Hub</Link></li>
              <li><Link to="/#contact" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">Therapy Areas</h4>
            <ul className="space-y-3">
              <li><Link to="/#therapy" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Acne Care</Link></li>
              <li><Link to="/#therapy" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Anti Aging</Link></li>
              <li><Link to="/#therapy" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Hair Care</Link></li>
              <li><Link to="/#therapy" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Psoriasis</Link></li>
              <li><Link to="/#therapy" className="text-sm text-white/50 hover:text-[#F37021] transition-colors duration-300">Vitiligo</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} JAKS Pharma Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
