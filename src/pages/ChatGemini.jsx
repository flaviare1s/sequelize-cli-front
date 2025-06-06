import { useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

export default function ChatGemini() {
  const [input, setInput] = useState('');
  const [resposta, setResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/gemini', { prompt: input });
    setResposta(res.data.result);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <Link 
        to="/" 
        className="inline-block mb-4 text-blue-600 hover:underline"
      >
        &larr; Voltar
      </Link>

      <h1 className="text-2xl font-bold mb-4">Fale com Gtzinho (IA)</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua pergunta"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Enviar
        </button>
      </form>
      {resposta && (
        <div className="bg-gray-100 p-4 rounded shadow">
          <strong>Resposta:</strong>
          <p className="mt-2 whitespace-pre-line">{resposta}</p>
        </div>
      )}
    </div>
  );
}
