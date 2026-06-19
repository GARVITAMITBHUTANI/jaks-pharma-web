import React, { useState } from 'react';

const faqs = [
  {
    question: "What sets JAKS Pharma Dermatology products apart?",
    answer: "JAKS Pharma Dermatology products are distinguished by cutting-edge formulations, backed by scientific research. We prioritize innovation, efficacy, and a patient-centric approach to address a wide range of dermatological concerns."
  },
  {
    question: "Are JAKS Pharma Dermatology products safe?",
    answer: "Yes, safety is paramount to us. Our products undergo rigorous testing and adhere to the highest industry standards. We are committed to ensuring the safety and well-being of patients using our dermatological solutions."
  },
  {
    question: "How can healthcare professionals collaborate with JAKS Pharma?",
    answer: "We welcome collaborations with healthcare professionals. If you're interested in partnering with us or learning more about our products, please visit our 'Contact Us' page. Our team is ready to assist you."
  },
  {
    question: "Do you offer educational resources for healthcare professionals?",
    answer: "Absolutely. JAKS Pharma is dedicated to providing ongoing education and support to healthcare professionals. Explore our resources, webinars, and training programs to stay informed about the latest developments in dermatology."
  },
  {
    question: "What types of skin conditions do JAKS Pharma Dermatology products address?",
    answer: "Our product range is designed to tackle a spectrum of skin conditions, including but not limited to acne, hyperpigmentation, dryness, and more. Explore our product pages for detailed information on each solution's targeted benefits."
  },
  {
    question: "Are JAKS Pharma Dermatology products suitable for all skin types?",
    answer: "Yes, we understand the diversity of skin types. Our products are carefully formulated to be inclusive and effective across various skin tones and types. Consult with your healthcare provider to determine the best products for your specific needs."
  },
  {
    question: "What support does JAKS Pharma offer for patients undergoing treatment?",
    answer: "We prioritize the patient experience. Our website features helpful guides, FAQs, and resources to support individuals throughout their treatment journey. Additionally, our customer support team is ready to assist with any inquiries."
  },
  {
    question: "Are JAKS Pharma Dermatology products available internationally?",
    answer: "JAKS Pharma products are available in select regions. To check product availability in your country, please refer to our distribution information on the website or contact our customer support team for assistance."
  },
  {
    question: "How can I stay updated on new product launches and updates from JAKS Pharma?",
    answer: "Stay connected with us by subscribing to our newsletter and following our social media channels. We regularly share updates, promotions, and information about new product launches."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF2F2] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-[#F37021]"></span>
            <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Support & Insights</span>
            <span className="h-px w-8 bg-[#F37021]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4 reveal-left">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border transition-all duration-300 rounded-xl overflow-hidden ${openIndex === index ? 'border-[#00529B] shadow-md' : 'border-gray-200 hover:border-[#00529B]/30'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-[#111827] pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 transition-transform duration-300 w-6 h-6 rounded-full flex items-center justify-center border ${openIndex === index ? 'bg-[#00529B] text-white border-[#00529B] rotate-180' : 'bg-gray-50 text-[#00529B] border-gray-200'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed pt-2 border-t border-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
