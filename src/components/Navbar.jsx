import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoSvg from '../assets/LOGO JAKS (CDR) (1).svg';

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
    { label: 'Home', href: 'top', isPage: false },
    { label: 'About', href: 'about', isPage: false },
    { label: 'Products', href: 'products', isPage: false },
    { label: 'Therapy Areas', href: 'therapy', isPage: false },
    { label: 'Education Hub', href: '/articles', isPage: true },
    { label: 'Expert Advice', href: '/expert-advice', isPage: true },
    { label: 'FAQ', href: '/faq', isPage: true }
  ];

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false);
    
    if (link.isPage) {
      navigate(link.href);
      return;
    }

    const sectionId = link.href;
    // Use state-based navigation for 100% reliable scrolling in Home.jsx
    navigate('/', { state: { scrollTo: sectionId } });
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={scrollToTop} className="flex items-center gap-2 group bg-transparent border-none cursor-pointer focus:outline-none h-full">
            <img src={logoSvg} alt="Jaks Pharma Logo" className="h-full w-auto object-contain scale-[2] lg:scale-[2.8] origin-left transition-transform duration-300" />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-gray-700 hover:text-[#00529B] transition-colors duration-300 relative group bg-transparent border-none cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F37021] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          <button onClick={() => handleNavClick({ href: 'contact', isPage: false })} className="hidden lg:inline-flex bg-[#F37021] text-white hover:bg-[#D9611B] hover:-translate-y-0.5 transition-all duration-300 rounded-full px-6 py-2.5 text-sm font-semibold shadow-md hover:shadow-lg border-none cursor-pointer">
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
              onClick={() => handleNavClick(link)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#00529B] hover:bg-[#F9FAFB] rounded-lg transition-colors border-none bg-transparent cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => handleNavClick({ href: 'contact', isPage: false })} className="w-full bg-[#F37021] border-none cursor-pointer text-white rounded-full py-3 text-sm font-semibold mt-2">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
