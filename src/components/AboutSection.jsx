import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full bg-white text-[#111827] py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-Column Top Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F37021] block mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] uppercase leading-[1.1]">
              Four Principles, <br />
              <span className="text-[#00529B]">Lived Daily.</span>
            </h2>
          </div>
          <div className="lg:pt-2">
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
              Not slogans on a wall — the standard every formulation, decision, and relationship is measured against.
              Behind every prescription is a person, and our commitment to science, quality, and ethics ensures we never compromise on patient outcomes.
            </p>
          </div>
        </div>

        {/* 4-Column Premium Value Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-gray-100">

          {/* Pillar 1 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#00529B]/5 flex items-center justify-center text-[#00529B] font-extrabold text-xl tracking-tighter">
              Sc
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              Science-Oriented
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              From bench to bedside, our formulations are grounded in evidence, not assumption. We follow data and clinical evidence, not trends.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#F37021]/5 flex items-center justify-center text-[#F37021] font-extrabold text-xl tracking-tighter">
              Ql
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              Quality, Always
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              Quality is not a department — it is the foundation of everything we manufacture. Compliance is our minimum; excellence is our standard.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#00529B]/5 flex items-center justify-center text-[#00529B] font-extrabold text-xl tracking-tighter">
              Et
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              Ethics, Non-Negotiable
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              Integrity is not negotiable — not in our research, not in our practices, not in our relationships with any partner.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#F37021]/5 flex items-center justify-center text-[#F37021] font-extrabold text-xl tracking-tighter">
              Pt
            </div>
            <h3 className="text-base font-bold text-[#111827] uppercase tracking-wide">
              Patient-Centric
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-sans">
              Behind every prescription is a person. We don't just manufacture medicine — we manufacture hope, recovery, and renewed life.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;