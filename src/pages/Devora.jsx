import React from 'react';
import { useNavigate } from 'react-router-dom';

const Devora = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-dark">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-darkCard rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-full bg-white/10 p-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white">DEVORA</h1>
            </div>
            
            <div className="space-y-6 text-white/80">
              <p className="text-lg">
                DEVORA es un agente especializado en desarrollo de software, diseñado para asistir a desarrolladores 
                en todas las etapas del proceso de programación. Desde la planificación hasta el debugging, 
                DEVORA proporciona soluciones técnicas precisas y mejores prácticas de código.
              </p>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Capacidades principales:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Asistencia en programación y debugging</li>
                  <li>Revisión y optimización de código</li>
                  <li>Explicación de conceptos técnicos</li>
                  <li>Recomendaciones de mejores prácticas</li>
                  <li>Soporte en arquitectura de software</li>
                </ul>
              </div>

              <p className="text-lg">
                Perfecto para desarrolladores de todos los niveles, desde principiantes hasta expertos, 
                que buscan mejorar su código y resolver problemas técnicos de manera eficiente.
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => navigate('/chat/devora')}
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

export default Devora; 