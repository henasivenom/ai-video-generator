// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

let abortController = null;

export async function generateScript(prompt, onChunk) {
  abortController = new AbortController();
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-flash-preview-05-20';
  const contents = [
    {
      role: 'user',
      parts: [
        { text: prompt },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
    signal: abortController.signal,
  });

  try {
    for await (const chunk of response) {
      if (onChunk) onChunk(chunk.text);
    }
  } catch (e) {
    if (abortController.signal.aborted) {
      // Generation halted by user.
    } else {
      throw e;
    }
  }
}

export function haltScriptGeneration() {
  if (abortController) {
    abortController.abort();
    abortController = null;
  }
}

