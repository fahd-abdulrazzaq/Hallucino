import { useState } from 'react';
import { hallucinations } from '../data/hallucinations';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [mode, setMode] = useState('wild');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const pool = hallucinations[mode];
    const random = pool[Math.floor(Math.random() * pool.length)];
    setResult(random);
  };

  return (
    <main style={{ maxWidth: 600, margin: 'auto', padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🤯 Hallucinations</h1>
      <p>Type a question and get a totally made-up answer.</p>

      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Ask anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ padding: '0.5rem', width: '100%' }}
          required
        />

        <div style={{ marginTop: '1rem' }}>
          <label>Choose Mode:</label>
          <select value={mode} onChange={(e) => setMode(e.target.value)} style={{ marginLeft: '0.5rem' }}>
            <option value="wild">Wild</option>
            <option value="plausible">Plausible</option>
            <option value="disturbing">Disturbing</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Hallucinate
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '2rem', background: '#eee', padding: '1rem', borderRadius: '8px' }}>
          <strong>Hallucination:</strong>
          <p>{result}</p>
        </div>
      )}
    </main>
  );
}
