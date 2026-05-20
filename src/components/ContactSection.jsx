import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EAF2F8]/50 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F37021]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00529B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative z-10">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-[#F37021]"></span>
                <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Contact Us</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-6">Let's Connect For Better Health</h2>
              <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                Whether you have a question about our products, want to partner with us, or need clinical support, our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00529B] shadow-sm flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827]">Email Us</h4>
                    <p className="text-[#6B7280]">info@jakspharma.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#00529B] shadow-sm flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111827]">Business Hours</h4>
                    <p className="text-[#6B7280]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00529B]/20 focus:border-[#00529B] outline-none transition-all bg-[#F9FAFB] focus:bg-white" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#111827] mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00529B]/20 focus:border-[#00529B] outline-none transition-all bg-[#F9FAFB] focus:bg-white" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#111827] mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00529B]/20 focus:border-[#00529B] outline-none transition-all bg-[#F9FAFB] focus:bg-white" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#111827] mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#00529B]/20 focus:border-[#00529B] outline-none transition-all bg-[#F9FAFB] focus:bg-white resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="w-full py-3.5 px-6 rounded-lg text-white font-semibold bg-[#00529B] hover:bg-[#003A6E] transition-colors shadow-md hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
