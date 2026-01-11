
import React from 'react';
import { TrendingStock } from '../types';

interface TrendingListProps {
  stocks: TrendingStock[];
}

const TrendingList: React.FC<TrendingListProps> = ({ stocks }) => {
  return (
    <div className="px-2">
      <h4 className="text-slate-900 text-sm font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-lg">trending_up</span>
        Trending Markets
      </h4>
      <div className="flex flex-col gap-4">
        {stocks.map((stock) => (
          <div key={stock.symbol} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-700 group-hover:bg-primary group-hover:text-white transition-colors">
                {stock.symbol}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{stock.name}</p>
                <p className="text-[10px] text-slate-400">{stock.sector}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-900">${stock.price.toFixed(2)}</p>
              <p className={`text-[10px] font-bold ${stock.changePercent >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingList;
