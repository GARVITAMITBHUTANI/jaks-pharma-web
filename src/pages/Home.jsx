import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProductShowcase from '../components/ProductShowcase';
import TherapyAreas from '../components/TherapyAreas';
import WhyChooseUs from '../components/WhyChooseUs';
import EducationHub from '../components/EducationHub';
import ContactSection from '../components/ContactSection';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

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
      <EducationHub />
      <ContactSection />
    </main>
  );
};

export default Home;
