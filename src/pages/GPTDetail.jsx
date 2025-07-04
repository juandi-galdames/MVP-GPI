import React from 'react';
import { useParams } from 'react-router-dom';
import { mockGPTs } from '../data/mockData';

const GPTDetail = () => {
  const { id } = useParams();
  const gpt = mockGPTs.find(g => g.id === parseInt(id));

  if (!gpt) {
    return (
      <div className="container py-16">
        <div className="bg-darkCard rounded-xl p-10 text-center text-white shadow-xl">
          <h1 className="text-2xl font-bold text-accent mb-4">GPT no encontrado</h1>
          <p className="text-white/70">El GPT que buscas no existe o fue removido.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen py-16">
      <div className="container flex flex-col items-center">
        <div className="bg-darkCard rounded-2xl shadow-2xl p-10 w-full max-w-2xl flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-2xl">
              {gpt.name[0]}
            </span>
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{gpt.name}</h1>
              <div className="flex gap-4 text-white/70 text-sm">
                <span>{gpt.category.charAt(0).toUpperCase() + gpt.category.slice(1)}</span>
                <span>{gpt.rating} ★</span>
                <span>{gpt.reviews} reseñas</span>
              </div>
            </div>
          </div>
          <p className="text-white/90 text-lg">{gpt.description}</p>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Características</h2>
            <ul className="list-disc list-inside space-y-1 text-white/80">
              {gpt.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button className="bg-accent hover:bg-accentHover text-white px-6 py-3 rounded font-medium text-lg transition self-start mt-4">Probar ahora</button>
        </div>
      </div>
    </div>
  );
};

export default GPTDetail; 