import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const Articles = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Blog', 'News & Updates', 'Resources', 'Videos'];

  const filteredArticles = activeTab === 'All'
    ? articles
    : articles.filter(article => article.category === activeTab);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="py-24 lg:py-32 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 reveal section-visible">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-[#F37021]"></span>
            <span className="text-sm font-bold text-[#F37021] uppercase tracking-widest">Education Hub</span>
            <span className="h-px w-8 bg-[#F37021]"></span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6">
            Clinical Articles & Insights
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Explore our comprehensive library of dermatological research, clinical guidelines, and advanced skincare methodologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal section-visible">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                  ? 'bg-[#00529B] text-white shadow-md'
                  : 'bg-white text-[#6B7280] border border-gray-200 hover:border-[#00529B] hover:text-[#00529B]'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="relative aspect-video overflow-hidden flex-shrink-0">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {article.category === 'Videos' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-90 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-[#00529B] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-3">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mb-3 group-hover:text-[#00529B] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-[#475569] mb-6 line-clamp-3">
                  {article.content}
                </p>
                <div className="mt-auto">
                  <Link to={`/article/${article.id}`} className="group/btn inline-flex items-center text-sm font-semibold text-[#F37021] hover:text-[#D9611B] transition-colors">
                    {article.category === 'Videos' ? 'Watch Video' : 'Read Full Article'}
                    <svg className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Articles;