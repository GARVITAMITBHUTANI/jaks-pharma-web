import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'Products', href: 'products' },
    { label: 'Therapy Areas', href: 'therapy' },
    { label: 'Education Hub', href: 'education' },
    { label: 'Contact', href: 'contact' }
  ];

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={scrollToTop} className="flex items-center gap-2 group bg-transparent border-none cursor-pointer focus:outline-none">
            <span className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              <span className="text-[#00529B]">JAKS</span><span className="text-[#F37021]">.</span>
            </span>
            <span className="text-xs font-semibold text-[#6B7280] uppercase tracking-[0.15em] hidden sm:block">Pharma</span>
          </button>
          
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-[#00529B] transition-colors duration-300 relative group bg-transparent border-none cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37021] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          
          <button onClick={() => handleNavClick('contact')} className="hidden lg:inline-flex bg-[#F37021] text-white hover:bg-[#D9611B] hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg border-none cursor-pointer">
            Contact Us
          </button>
          
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-700 bg-transparent border-none cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu" aria-hidden="true">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button 
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#00529B] hover:bg-[#EAF2F8] rounded-lg transition-colors border-none bg-transparent cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick('contact')} className="w-full bg-[#F37021] border-none cursor-pointer text-white rounded-full py-3 text-sm font-semibold mt-2">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
