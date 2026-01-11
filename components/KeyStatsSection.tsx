
import React from 'react';
import { StockData } from '../types';

interface KeyStatsSectionProps {
  stock: StockData;
}

const KeyStatsSection: React.FC<KeyStatsSectionProps> = ({ stock }) => {
  const stats = [
    { label: 'Market Cap', value: stock.marketCap },
    { label: 'P/E Ratio', value: stock.peRatio },
    { label: 'Div Yield', value: stock.divYield },
    { label: 'Avg Volume', value: stock.avgVolume },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col gap-1 hover:shadow-sm transition-shadow">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{stat.label}</p>
          <p className="text-slate-900 text-lg font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyStatsSection;
