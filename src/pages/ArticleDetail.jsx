import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Article not found.</h2>
        <Link to="/" className="text-[#00529B] hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <main className="py-24 lg:py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/#education" className="inline-flex items-center text-sm font-semibold text-[#6B7280] hover:text-[#00529B] transition-colors mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Education Hub
        </Link>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F37021]/10 text-[#F37021] text-xs font-bold uppercase tracking-widest mb-6">
            {article.category}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-center gap-6 text-sm text-[#6B7280] font-medium">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              {article.author}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {article.date}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {article.readTime}
            </div>
          </div>
        </div>

        <div className="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-xl relative">
          {article.videoUrl ? (
            <iframe 
              className="absolute inset-0 w-full h-full" 
              src={article.videoUrl} 
              title={article.title} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          ) : (
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          )}
        </div>

        <div className="prose prose-lg max-w-none text-[#4B5563] leading-relaxed">
          <p className="text-xl leading-relaxed text-[#111827] font-medium mb-6">
            {article.content.split('.')[0]}.
          </p>
          <p>
            {article.content.split('.').slice(1).join('.')}
          </p>

          {/* Placeholder for more content to make the page look substantial */}
          <h2 className="text-2xl font-bold text-[#111827] mt-10 mb-4">Clinical Evidence</h2>
          <p>
            The rigorous formulation processes behind these dermatological advancements ensure that patients receive the highest standard of care. Efficacy is not just measured by immediate relief, but by the long-term restoration of the skin's natural defenses.
          </p>
          
          <div className="bg-[#EAF2F8]/50 border-l-4 border-[#00529B] p-6 my-8 rounded-r-xl italic text-[#111827]">
            "Dermatology is not merely about treating the surface; it's about understanding the complex cellular environment underneath and providing the right active ingredients to restore balance."
          </div>

          <h2 className="text-2xl font-bold text-[#111827] mt-10 mb-4">Conclusion</h2>
          <p>
            By adopting a preventative and clinically-backed approach, we can manage symptoms more effectively and improve overall patient outcomes. Always consult with your dermatologist before beginning any new treatment regimen.
          </p>
        </div>

      </div>
    </main>
  );
};

export default ArticleDetail;
