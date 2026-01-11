
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIInsight = async (symbol: string, name: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a professional, concise market analyst insight for the stock ${name} (${symbol}). Focus on recent performance and outlook in 2 sentences. Return ONLY the insight text.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "Consensus remains positive as technical indicators suggest a period of consolidation before the next earnings cycle.";
  }
};

export const getCompanySummary = async (symbol: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, professional company profile for ${symbol} in one paragraph.`,
    });
    return response.text;
  } catch (error) {
    return null;
  }
};
