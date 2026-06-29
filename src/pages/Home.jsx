import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProductShowcase from '../components/ProductShowcase';
import TherapyAreas from '../components/TherapyAreas';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactSection from '../components/ContactSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50; // Try for up to 2.5 seconds
    
    const tryScroll = () => {
      const targetHash = location.hash || (location.state && location.state.scrollTo ? '#' + location.state.scrollTo : null);
      
      if (targetHash) {
        const el = document.querySelector(targetHash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100; // Account for navbar
          window.scrollTo({ top: y, behavior: 'auto' });
          return; // Success, stop polling
        }
      } else {
        // We do NOT force scroll to top here anymore. If there is no hash, we let the browser 
        // handle standard scroll restoration natively, which prevents unwanted jumping!
        return; 
      }
      
      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 50);
      }
    };
    
    // Start polling immediately
    tryScroll();
  }, [location]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal')) {
            entry.target.classList.add('animate-fadeInUp');
          } else if (entry.target.classList.contains('reveal-left')) {
            entry.target.classList.add('animate-slideInLeft');
          } else if (entry.target.classList.contains('reveal-right')) {
            entry.target.classList.add('animate-slideInRight');
          }
          entry.target.classList.remove('section-hidden');
          entry.target.classList.add('section-visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      el.classList.add('section-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <AboutSection />
      <ProductShowcase />
      <TherapyAreas />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
};

export default Home;
