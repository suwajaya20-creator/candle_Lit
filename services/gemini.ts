
import { GoogleGenAI, Type } from "@google/genai";

export const getScentRecommendation = async (mood: string, setting: string) => {
  // Safely check for the API key to avoid reference errors in different environments
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
  
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Scent recommendations will be unavailable.");
    return {
      vibeName: "Pure Tranquility",
      notes: ["Unscented", "Natural Wax", "Clean Air"],
      description: "We're currently perfecting our AI sommelier. Please check back soon for a custom recommendation!"
    };
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a candle scent profile for someone feeling ${mood} in a ${setting} environment. 
      Provide a name for this vibe and three key scent notes.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            vibeName: { type: Type.STRING },
            notes: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            description: { type: Type.STRING }
          },
          required: ["vibeName", "notes", "description"]
        }
      }
    });

    const text = response.text || "{}";
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};
