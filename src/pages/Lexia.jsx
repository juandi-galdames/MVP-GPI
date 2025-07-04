import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lexia = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-darkCard rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-white/10 p-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white">LEXIA</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                LEXIA es un agente especializado en derecho chileno, entrenado con el corpus legal completo de Chile. 
                Nuestro asistente está diseñado para proporcionar información precisa y actualizada sobre legislación, 
                jurisprudencia y procedimientos legales.
              </p>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Capacidades principales:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Análisis de casos legales</li>
                  <li>Interpretación de leyes y reglamentos</li>
                  <li>Asesoría en procedimientos legales</li>
                  <li>Actualizaciones sobre jurisprudencia</li>
                  <li>Explicación de términos legales</li>
                </ul>
              </div>

              <p className="text-lg">
                Ideal para abogados, estudiantes de derecho y ciudadanos que necesiten orientación legal precisa y confiable.
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => navigate('/chat/lexia')}
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

export default Lexia; 