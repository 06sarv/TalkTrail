import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI model
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

// This function now uses your local Ollama instance for sentiment analysis
export async function analyzeSentiment(text: string): Promise<string> {
  console.log("Analyzing sentiment with Ollama...");
  
  const ollamaPrompt = `
  Analyze the sentiment of the following text and respond with only one word: POSITIVE, NEGATIVE, or NEUTRAL.
  Text: "${text}"
  `;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3', // Or another model you have installed
        prompt: ollamaPrompt,
        stream: false,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    const sentiment = data.response.trim().toUpperCase();
    
    // Ensure the response is one of the expected values
    if (['POSITIVE', 'NEGATIVE', 'NEUTRAL'].includes(sentiment)) {
        return sentiment;
    }
    
    return 'NEUTRAL'; // Default to neutral if the response is unexpected

  } catch (error) {
    console.error("Error calling Ollama API:", error);
    // Fallback to a simple rule-based system if Ollama fails
    const lowerText = text.toLowerCase();
    if (lowerText.includes('happy') || lowerText.includes('great')) return 'POSITIVE';
    if (lowerText.includes('sad') || lowerText.includes('frustrated')) return 'NEGATIVE';
    return 'NEUTRAL';
  }
}

// Simulates a real-world Speech-to-Text API call
export async function transcribeAudio(audioData: string): Promise<string> {
  console.log("Transcribing audio data...");
  const mockTranscripts = [
    "I'm feeling really frustrated and sad today after I tripped and fell in the park. It just ruined everything.",
    "Today was so great! I got so much done at work and felt really productive.",
    "Just feeling a bit neutral. Nothing much happened, but that's okay too.",
  ];
  return mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)];
}

// Generates a unique perspective using the Gemini API
export async function generatePerspective(text: string, sentiment: string): Promise<string> {
  console.log("Generating a unique perspective with Gemini...");
  
  const prompt = `
  You are an empathetic and wise AI assistant named TalkTrail. Your goal is to provide a unique, positive, and actionable alternative perspective on a user's journal entry.

  The user's entry is: "${text}"
  The detected sentiment is: "${sentiment}"

  Based on the entry and sentiment, provide a short, single-paragraph response that offers a new way to look at the situation. Do not just offer platitudes like "don't worry." Be creative and provide a fresh, empowering viewpoint.
  `;

  try {
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return "I couldn't generate a unique perspective right now. Please try again later.";
  }
}