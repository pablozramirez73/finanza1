
import React from 'react';
import { NewsItem } from '../types';

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ news }) => {
  return (
    <div>
      <h3 className="text-slate-900 text-xl font-bold mb-6">Recent News</h3>
      <div className="flex flex-col gap-4">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-xl border border-slate-200 p-4 flex gap-4 items-start hover:shadow-md transition-shadow cursor-pointer group">
            <div className="w-24 h-24 rounded-lg bg-slate-100 overflow-hidden shrink-0">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${item.source === 'Financial Times' ? 'text-primary bg-primary/10' : 'text-slate-500 bg-slate-100'}`}>
                  {item.source}
                </span>
                <span className="text-slate-400 text-xs">{item.time}</span>
              </div>
              <h4 className="text-slate-900 font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-slate-500 text-xs line-clamp-2">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
