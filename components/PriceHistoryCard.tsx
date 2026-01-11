
import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceHistoryCardProps {
  symbol: string;
}

const PriceHistoryCard: React.FC<PriceHistoryCardProps> = ({ symbol }) => {
  const [timeframe, setTimeframe] = useState('1D');

  // Generate some realistic looking random walk data for the chart
  const data = useMemo(() => {
    let currentPrice = 185 + Math.random() * 10;
    const points = timeframe === '1D' ? 40 : timeframe === '1W' ? 50 : 60;
    const result = [];
    
    for (let i = 0; i < points; i++) {
      currentPrice += (Math.random() - 0.5) * 2;
      result.push({
        time: i,
        price: parseFloat(currentPrice.toFixed(2))
      });
    }
    return result;
  }, [timeframe, symbol]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-slate-900 text-lg font-bold">Price History</h3>
        <div className="flex h-9 items-center justify-center rounded-lg bg-slate-100 p-1">
          {['1D', '1W', '1M', '1Y'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`flex h-full items-center justify-center rounded-md px-4 text-xs font-bold uppercase transition-all ${
                timeframe === tf ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#137fec" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#137fec" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="time" hide />
            <YAxis 
              domain={['dataMin - 2', 'dataMax + 2']} 
              hide 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              labelStyle={{ display: 'none' }}
            />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#137fec" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
        
        <div className="flex justify-between px-2 mt-4">
          <p className="text-slate-400 text-[10px] font-bold">9:00 AM</p>
          <p className="text-slate-400 text-[10px] font-bold">11:00 AM</p>
          <p className="text-slate-400 text-[10px] font-bold">1:00 PM</p>
          <p className="text-slate-400 text-[10px] font-bold">3:00 PM</p>
          <p className="text-slate-400 text-[10px] font-bold">5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default PriceHistoryCard;
