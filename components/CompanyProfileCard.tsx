
import React, { useState } from 'react';

interface CompanyProfileCardProps {
  description: string;
}

const CompanyProfileCard: React.FC<CompanyProfileCardProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-slate-900 text-lg font-bold mb-4">Company Profile</h3>
      <p className={`text-slate-600 text-sm leading-relaxed transition-all ${!isExpanded ? 'line-clamp-3' : ''}`}>
        {description}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:underline"
      >
        {isExpanded ? 'Show less' : 'Read more'} 
        <span className={`material-symbols-outlined text-xs transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          keyboard_arrow_down
        </span>
      </button>
    </div>
  );
};

export default CompanyProfileCard;
