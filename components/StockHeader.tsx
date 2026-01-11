
import React from 'react';
import { StockData } from '../types';

interface StockHeaderProps {
  stock: StockData;
}

const StockHeader: React.FC<StockHeaderProps> = ({ stock }) => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-xl bg-white p-2 border border-slate-200 shadow-sm flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl font-variation-fill fill">stat_3</span>
          </div>
          <h1 className="text-slate-900 text-4xl font-extrabold tracking-tight">{stock.name} ({stock.symbol})</h1>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <p className="text-slate-900 text-3xl font-bold tracking-tight">${stock.price.toLocaleString()}</p>
          <div className="flex items-center gap-1.5">
            <span className={`text-lg font-bold flex items-center ${stock.change >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
              <span className="material-symbols-outlined text-xl mr-1">
                {stock.change >= 0 ? 'trending_up' : 'trending_down'}
              </span>
              {stock.change >= 0 ? '+' : ''}${Math.abs(stock.change).toFixed(2)} ({stock.changePercent}%)
            </span>
            <span className="text-slate-400 font-medium text-sm ml-2">Today</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center justify-center gap-2 rounded-lg h-11 px-5 border border-slate-200 bg-white text-slate-700 text-sm font-bold hover:bg-slate-50 transition-colors">
          <span className="material-symbols-outlined text-xl">star</span>
          <span>Add to Watchlist</span>
        </button>
        <button className="flex items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
          Alert Me
        </button>
      </div>
    </div>
  );
};

export default StockHeader;
