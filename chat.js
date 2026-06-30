// api/chat.js
// This runs on Vercel's server, NEVER in the browser — so your API key stays hidden.
// The key is read from an environment variable you set in the Vercel dashboard,
// not from this file, so it's safe to commit this code to a public GitHub repo.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, history } = req.body || {};
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'A "message" string is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY' });
  }

  // Keep a short rolling history for context (optional, last 6 turns)
  const contents = [];
  if (Array.isArray(history)) {
    history.slice(-6).forEach(turn => {
      contents.push({
        role: turn.role === 'bot' ? 'model' : 'user',
        parts: [{ text: turn.text }]
      });
    });
  }

  contents.push({
    role: 'user',
    parts: [{
      text: `You are StudyMate AI, a friendly, encouraging study tutor for students preparing for exams. Keep answers clear, concise (under 120 words unless asked for more detail), and educational. Use simple language and a short example where it helps.\n\nStudent: ${message}`
    }]
  });

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error:', data);
      return res.status(502).json({ error: 'AI provider returned an error' });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
      || "Sorry, I couldn't generate a response right now — try rephrasing your question.";

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Failed to reach AI provider' });
  }
}
