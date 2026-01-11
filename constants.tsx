
import { StockData, NewsItem, TrendingStock } from './types';

export const INITIAL_STOCK: StockData = {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: 189.43,
  change: 1.24,
  changePercent: 0.66,
  marketCap: '2.98T',
  peRatio: 29.41,
  divYield: '0.51%',
  avgVolume: '58.4M',
  description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod.',
  analystInsight: 'Strong revenue growth in services and higher-than-expected margins for the latest product cycle drive the positive outlook.',
  ratings: {
    buy: 72,
    hold: 21,
    sell: 7,
    consensus: 'Strong Buy'
  },
  priceTargets: {
    high: 225.00,
    avg: 204.15,
    low: 178.00,
    yearLow: 143.90,
    yearHigh: 199.62
  }
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    source: 'Financial Times',
    time: '2h ago',
    title: 'Vision Pro Sales Exceed Early Estimates from Analysts',
    summary: 'New supply chain data suggests that the latest spatial computing hardware is seeing stronger than expected demand in enterprise markets...',
    imageUrl: 'https://picsum.photos/seed/apple1/400/300'
  },
  {
    id: '2',
    source: 'Reuters',
    time: '5h ago',
    title: 'Technical Analysis: AAPL Finds Strong Support at the 50-Day Moving Average',
    summary: 'Investors are keeping a close eye on the $185 level as major institutional buyers step in following the recent market dip...',
    imageUrl: 'https://picsum.photos/seed/apple2/400/300'
  }
];

export const TRENDING_STOCKS: TrendingStock[] = [
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 172.50, changePercent: -2.31, sector: 'EV Manufacturing' },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 884.20, changePercent: 4.12, sector: 'Semiconductors' },
  { symbol: 'MSFT', name: 'Microsoft', price: 415.10, changePercent: 0.15, sector: 'Software' },
  { symbol: 'AMZN', name: 'Amazon', price: 178.22, changePercent: 1.02, sector: 'E-commerce' }
];
