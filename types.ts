
export interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: string;
  peRatio: number;
  divYield: string;
  avgVolume: string;
  description: string;
  analystInsight: string;
  ratings: {
    buy: number;
    hold: number;
    sell: number;
    consensus: string;
  };
  priceTargets: {
    high: number;
    avg: number;
    low: number;
    yearLow: number;
    yearHigh: number;
  };
}

export interface NewsItem {
  id: string;
  source: string;
  time: string;
  title: string;
  summary: string;
  imageUrl: string;
}

export interface TrendingStock {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  sector: string;
}
