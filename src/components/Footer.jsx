import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/LOGO JAKS (CDR) (1).svg';

const Footer = () => {
  return (
    <footer className="relative bg-[#FAF2F2] text-gray-900 border-t border-gray-100">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="w-12 h-12 rounded-full bg-[#F37021] hover:bg-[#D9611B] text-white flex items-center justify-center shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up" aria-hidden="true">
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path>
          </svg>
        </button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 -ml-4">
              <img src={logoSvg} alt="Jaks Pharma Logo" className="h-[80px] lg:h-[100px] w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-gray-600 max-w-md">JAKS Pharma Private Limited is committed to transforming healthcare through cutting-edge pharmaceutical research, breakthrough treatments, and unwavering dedication to patient well-being.</p>
            <p className="text-sm text-gray-500 font-medium">Founded by Jayant Kumar</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00529B] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/#about" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">About Us</Link></li>
              <li><Link to="/#products" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Products</Link></li>
              <li><Link to="/#therapy" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Therapy Areas</Link></li>
              <li><Link to="/#contact" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#00529B] mb-5">Therapy Areas</h4>
            <ul className="space-y-3">
              <li><Link to="/#therapy" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Acne Care</Link></li>
              <li><Link to="/#therapy" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Anti Aging</Link></li>
              <li><Link to="/#therapy" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Hair Care</Link></li>
              <li><Link to="/#therapy" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Psoriasis</Link></li>
              <li><Link to="/#therapy" className="text-sm text-gray-600 hover:text-[#F37021] transition-colors duration-300">Vitiligo</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} JAKS Pharma Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500 hover:text-[#00529B] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-gray-500 hover:text-[#00529B] transition-colors cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
