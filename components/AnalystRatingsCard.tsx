
import React from 'react';
import { StockData } from '../types';

interface AnalystRatingsCardProps {
  ratings: StockData['ratings'];
  insight: string;
  priceTargets: StockData['priceTargets'];
  isLoading?: boolean;
}

const AnalystRatingsCard: React.FC<AnalystRatingsCardProps> = ({ ratings, insight, priceTargets, isLoading }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <h3 className="text-slate-900 text-lg font-bold">Analyst Ratings</h3>
          <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Consensus: {ratings.consensus}
          </div>
        </div>
        <p className="text-slate-500 text-xs font-medium italic">Based on 38 analyst opinions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <RatingRow label="BUY" percentage={ratings.buy} color="bg-primary" />
            <RatingRow label="HOLD" percentage={ratings.hold} color="bg-slate-400" />
            <RatingRow label="SELL" percentage={ratings.sell} color="bg-rose-400" />
          </div>
          
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className={`text-slate-600 text-xs leading-relaxed ${isLoading ? 'blur-sm select-none' : ''}`}>
              <span className="font-bold text-primary">Analyst Insight:</span> {insight}
            </p>
            {isLoading && <p className="text-[10px] text-primary font-bold mt-1">Regenerating insight...</p>}
          </div>
        </div>

        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
          <h4 className="text-slate-900 text-sm font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">target</span>
            Price Targets (12 Months)
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
              <PriceTargetStat label="High" value={priceTargets.high} />
              <PriceTargetStat label="Average" value={priceTargets.avg} isPrimary />
              <PriceTargetStat label="Low" value={priceTargets.low} />
            </div>
            
            <div className="relative pt-6 px-2">
              <div className="h-1.5 w-full bg-slate-200 rounded-full relative">
                <div className="absolute h-1.5 bg-primary/40 rounded-full" style={{ left: '15%', right: '15%' }}></div>
                <div className="absolute -top-1 size-3.5 bg-primary border-2 border-white rounded-full shadow-sm" style={{ left: '45%' }}></div>
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-[10px] text-slate-400 font-bold">${priceTargets.yearLow} (52w Low)</span>
                <span className="text-[10px] text-slate-400 font-bold">${priceTargets.yearHigh} (52w High)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RatingRow = ({ label, percentage, color }: { label: string; percentage: number; color: string }) => (
  <div className="flex items-center gap-4">
    <span className="w-12 text-xs font-bold text-slate-500">{label}</span>
    <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${percentage}%` }}></div>
    </div>
    <span className="w-8 text-xs font-bold text-slate-900">{percentage}%</span>
  </div>
);

const PriceTargetStat = ({ label, value, isPrimary }: { label: string; value: number; isPrimary?: boolean }) => (
  <div className="flex flex-col">
    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</span>
    <span className={`text-lg font-bold ${isPrimary ? 'text-primary' : 'text-slate-900'}`}>${value.toFixed(2)}</span>
  </div>
);

export default AnalystRatingsCard;
