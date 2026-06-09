import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full bg-white text-[#111827] py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-Column Top Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F37021] block mb-3">
              Our Story &amp; Mission
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] uppercase leading-[1.1]">
              Bridging Clinical Efficacy <br />
              <span className="text-[#00529B]">With Premium Healthcare</span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
              Founded in August 2023, Jaks Pharma Private Limited was born out of a singular, disruptive vision:
              to bridge the gap between rigorous clinical efficacy and a premium healthcare experience. With over
              two decades of deep-rooted industry expertise anchoring our leadership, we don’t just manufacture
              pharmaceutical products—we architect milestones in patient care.
              <br /><br />
              We specialize in advanced, cutting-edge chemical compositions, focusing intensely on high-performance
              dermatology and aesthetic medicine. Jaks Pharma represents the next generation of healthcare—operating
              with absolute accountability and a relentless drive to convert medical insights into real-world wellness.
            </p>
          </div>
        </div>

        {/* 3-Column Premium Value Pillars (The Jaks Edge) */}
        <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">

          {/* Pillar 1 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#00529B]/5 flex items-center justify-center text-[#00529B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              Science Meets Sophistication
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              We bring a "clinical luxury" approach to medicine. Every formulation in our pipeline is
              designed with a minimalist, premium presentation, backed strictly by ironclad, peer-reviewed
              scientific data.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#F37021]/5 flex items-center justify-center text-[#F37021]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              90-Day Execution Standard
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              Driven by a high-performance leadership philosophy and an agile, tech-driven supply chain,
              we turn critical market insights into active, doctor-trusted clinical solutions faster than standard
              industry timelines.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#00529B]/5 flex items-center justify-center text-[#00529B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              Recognized Excellence
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              Honored as the Emerging Pharma Company of the Year (2026). This milestone reflects our
              rapid market integration, premium quality metrics, and soaring trust among the medical community.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;