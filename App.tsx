
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StockHeader from './components/StockHeader';
import PriceHistoryCard from './components/PriceHistoryCard';
import AnalystRatingsCard from './components/AnalystRatingsCard';
import KeyStatsSection from './components/KeyStatsSection';
import CompanyProfileCard from './components/CompanyProfileCard';
import NewsSection from './components/NewsSection';
import TradeWidget from './components/TradeWidget';
import TrendingList from './components/TrendingList';
import Footer from './components/Footer';
import { INITIAL_STOCK, MOCK_NEWS, TRENDING_STOCKS } from './constants';
import { StockData } from './types';
import { getAIInsight } from './services/geminiService';

const App: React.FC = () => {
  const [currentStock, setCurrentStock] = useState<StockData>(INITIAL_STOCK);
  const [isAnalysing, setIsAnalysing] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query) return;
    setIsAnalysing(true);
    
    // In a real app, we'd fetch actual stock price data here.
    // For this demo, we'll keep the mock numbers but refresh the AI insight.
    const newInsight = await getAIInsight(query, query);
    
    setCurrentStock(prev => ({
      ...prev,
      symbol: query.toUpperCase(),
      name: `${query.toUpperCase()} Corp.`,
      analystInsight: newInsight || prev.analystInsight
    }));
    
    setIsAnalysing(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onSearch={handleSearch} />
      
      <main className="flex-1 max-w-[1280px] mx-auto w-full px-4 md:px-6 py-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <a className="text-slate-500 text-sm font-medium hover:underline" href="#">Markets</a>
          <span className="text-slate-400 text-sm">/</span>
          <a className="text-slate-500 text-sm font-medium hover:underline" href="#">Stocks</a>
          <span className="text-slate-400 text-sm">/</span>
          <span className="text-slate-900 text-sm font-bold">{currentStock.name} ({currentStock.symbol})</span>
        </div>

        <StockHeader stock={currentStock} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <PriceHistoryCard symbol={currentStock.symbol} />
            <AnalystRatingsCard 
              ratings={currentStock.ratings} 
              insight={currentStock.analystInsight} 
              priceTargets={currentStock.priceTargets}
              isLoading={isAnalysing}
            />
            <KeyStatsSection stock={currentStock} />
            <CompanyProfileCard description={currentStock.description} />
            <NewsSection news={MOCK_NEWS} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 flex flex-col gap-6">
              <TradeWidget currentPrice={currentStock.price} symbol={currentStock.symbol} />
              
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-slate-900 text-sm font-bold">Analyst Outlook</h4>
                  <span className="text-emerald-500 text-[10px] font-extrabold uppercase bg-emerald-50 px-2 py-1 rounded">Bullish</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden flex">
                    <div className="h-full bg-primary" style={{ width: `${currentStock.ratings.buy}%` }}></div>
                    <div className="h-full bg-slate-300" style={{ width: `${currentStock.ratings.hold}%` }}></div>
                    <div className="h-full bg-rose-400" style={{ width: `${currentStock.ratings.sell}%` }}></div>
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>{currentStock.ratings.buy}% Buy</span>
                  <span>{currentStock.ratings.hold}% Hold</span>
                  <span>{currentStock.ratings.sell}% Sell</span>
                </div>
              </div>

              <TrendingList stocks={TRENDING_STOCKS} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
