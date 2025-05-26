import { NextResponse } from 'next/server'
import { generateScript } from '@/configs/AIModel' 

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    console.log('Prompt:', prompt);

    let script = '';
    await generateScript(prompt, (chunk) => {
      script += chunk;
    });

    // Try to parse as JSON, but if it fails, return as plain text
    let json;
    try {
      json = JSON.parse(script);
    } catch (e) {
      json = { text: script };
    }

    return NextResponse.json({ result: json });
  } catch (e) {
    console.error('API Error:', e);
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}