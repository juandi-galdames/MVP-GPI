import React from 'react';
import { useNavigate } from 'react-router-dom';

const Marketia = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-darkCard rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-white/10 p-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white">MARKETIA</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                MARKETIA es un agente especializado en marketing digital y estrategias de mercado. 
                Diseñado para ayudar a profesionales y empresas a optimizar sus campañas publicitarias, 
                analizar tendencias de mercado y desarrollar estrategias efectivas de marketing.
              </p>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Capacidades principales:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Análisis de mercado y competencia</li>
                  <li>Optimización de campañas publicitarias</li>
                  <li>Estrategias de marketing digital</li>
                  <li>Análisis de métricas y KPIs</li>
                  <li>Recomendaciones de contenido</li>
                </ul>
              </div>

              <p className="text-lg">
                Ideal para profesionales de marketing, emprendedores y empresas que buscan 
                maximizar su impacto en el mercado digital y mejorar sus estrategias de marketing.
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => navigate('/chat/marketia')}
                className="bg-accent hover:bg-accentHover text-white px-8 py-4 rounded-lg font-medium text-lg transition flex items-center gap-2"
              >
                Ir al Chat
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketia; 