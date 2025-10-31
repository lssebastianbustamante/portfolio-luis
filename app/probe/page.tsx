'use client';

import { useState } from 'react';

export default function ProbePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [service, setService] = useState<'express' | 'nest' | 'gateway'>('express');
  const [path, setPath] = useState<string>('api/v1/leads');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'>('POST');
  const [payload, setPayload] = useState<string>(JSON.stringify({ name: 'Luis Test', email: 'luis@example.com' }, null, 2));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const url = `/api/${service}/${path.replace(/^\//, '')}`;
      const init: RequestInit = { method };
      if (method !== 'GET') {
        init.headers = { 'Content-Type': 'application/json' };
        init.body = payload;
      }
      const res = await fetch(url, init);
      const contentType = res.headers.get('content-type') || '';
      const text = contentType.includes('application/json') ? JSON.stringify(await res.json(), null, 2) : await res.text();
      if (!res.ok) {
        setError(text || `HTTP ${res.status}`);
        return;
      }
      setResult(text);
    } catch (err: any) {
      setError(err?.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">API Probe</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <select value={service} onChange={e => setService(e.target.value as any)} className="border rounded px-3 py-2">
            <option value="express">express</option>
            <option value="nest">nest</option>
            <option value="gateway">gateway</option>
          </select>
          <select value={method} onChange={e => setMethod(e.target.value as any)} className="border rounded px-3 py-2">
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>PATCH</option>
            <option>DELETE</option>
          </select>
          <input value={path} onChange={e => setPath(e.target.value)} placeholder="path e.g. api/v1/leads" className="border rounded px-3 py-2" />
        </div>
        <textarea value={payload} onChange={e => setPayload(e.target.value)} rows={8} className="border rounded px-3 py-2 w-full font-mono" />
        <button
          type="submit"
          disabled={loading}
          className="bg-portfolio-orange text-white px-4 py-2 rounded disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send request'}
        </button>
      </form>
      {result && (
        <pre className="p-3 bg-portfolio-gray rounded overflow-auto whitespace-pre-wrap break-words">{result}</pre>
      )}
      {error && (
        <pre className="p-3 bg-red-100 text-red-700 rounded overflow-auto whitespace-pre-wrap break-words">{error}</pre>
      )}
    </main>
  );
}
