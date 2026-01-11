
import React, { useState } from 'react';

interface TradeWidgetProps {
  currentPrice: number;
  symbol: string;
}

const TradeWidget: React.FC<TradeWidgetProps> = ({ currentPrice, symbol }) => {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [quantity, setQuantity] = useState(10);
  const [orderType, setOrderType] = useState('Market Order');

  const estimatedCost = quantity * currentPrice;
  const buyingPower = 12450.00;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6">
      <div className="flex h-12 items-center justify-center rounded-xl bg-slate-100 p-1 mb-6">
        <button 
          onClick={() => setSide('buy')}
          className={`flex flex-1 h-full items-center justify-center rounded-lg px-4 text-sm font-bold transition-all ${
            side === 'buy' ? 'bg-white shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Buy
        </button>
        <button 
          onClick={() => setSide('sell')}
          className={`flex flex-1 h-full items-center justify-center rounded-lg px-4 text-sm font-bold transition-all ${
            side === 'sell' ? 'bg-white shadow-sm text-rose-500' : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="text-slate-500 text-xs font-bold uppercase mb-1.5 block">Order Type</label>
          <select 
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="form-select w-full rounded-xl border-slate-200 bg-white text-slate-900 focus:ring-primary focus:border-primary text-sm"
          >
            <option>Market Order</option>
            <option>Limit Order</option>
            <option>Stop Loss</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-slate-500 text-xs font-bold uppercase block">Quantity (Shares)</label>
          <div className="flex items-center rounded-xl border border-slate-200 px-3 h-12 bg-white focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <input 
              className="w-full border-none focus:ring-0 bg-transparent text-slate-900 font-bold" 
              type="number" 
              value={quantity}
              onChange={(e) => setQuantity(Math.max(0, parseInt(e.target.value) || 0))}
            />
            <span className="text-slate-400 text-xs font-bold">{symbol}</span>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl mt-2 flex flex-col gap-2 border border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm font-medium">Market Price</span>
            <span className="text-slate-900 text-sm font-bold">${currentPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm font-medium">Estimated {side === 'buy' ? 'Cost' : 'Credit'}</span>
            <span className="text-slate-900 text-sm font-bold">${estimatedCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="border-t border-slate-200 my-1"></div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 text-sm font-medium">Buying Power</span>
            <span className="text-slate-900 text-sm font-bold">${buyingPower.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <button className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-all hover:brightness-110 ${side === 'buy' ? 'bg-primary shadow-primary/30' : 'bg-rose-500 shadow-rose-500/30'}`}>
          Execute {side === 'buy' ? 'Buy' : 'Sell'} Order
        </button>
      </div>
    </div>
  );
};

export default TradeWidget;
