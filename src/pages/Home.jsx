import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const specialists = [
  {
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" /></svg>
    ),
    title: 'LEXIA',
    desc: 'Entrenado con el corpus legal completo de Chile. Ideal para abogados, estudiantes de derecho y ciudadanos.',
    color: 'accent',
    path: '/lexia'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    title: 'DEVORA',
    desc: 'Especialista en desarrollo de software. Asistente experto en programación, debugging y mejores prácticas de código.',
    color: 'accent',
    path: '/devora'
  },
  {
    icon: (
      <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
    ),
    title: 'MARKETIA',
    desc: 'Experto en estrategias de marketing digital, análisis de mercado y optimización de campañas publicitarias.',
    color: 'accent',
    path: '/marketia'
  },
];

const faqs = [
  {
    question: "¿Qué es PraxIA?",
    answer: "PraxIA es una plataforma que ofrece Agentes especializados en diferentes áreas: derecho chileno , desarrollo de software  y marketing digital. Cada LLM está entrenado específicamente para su área de expertise."
  },
  {
    question: "¿Cómo funciona?",
    answer: "Simplemente selecciona el Agente especializado que necesitas, accede a su chat y comienza a hacer preguntas. Cada asistente está diseñado para proporcionar respuestas precisas y especializadas en su área."
  },
  {
    question: "¿Es gratuito?",
    answer: "Actualmente estamos en fase de MVP, ofreciendo acceso gratuito a todos los Agentes para que puedas probar sus capacidades y darnos feedback."
  },
  {
    question: "¿Qué tan precisas son las respuestas?",
    answer: "Cada Agente ha sido entrenado con datos específicos de su área. Por ejemplo, LEXIA está entrenado con el corpus legal completo de Chile, mientras que DEVORA está especializado en las mejores prácticas de desarrollo de software."
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark min-h-[60vh] flex flex-col md:flex-row items-center justify-between container py-16 gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            <br />Inteligencia Artificial<br />Especializada
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl">
            Conecta con agentes expertos en derecho, desarrollo y marketing. Obtén respuestas precisas y especializadas para impulsar tu crecimiento profesional.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/lexia')}
              className="bg-accent hover:bg-accentHover text-white px-6 py-3 rounded font-medium text-lg transition"
            >
              Probar Demo
            </button>
            <button className="border border-white text-white px-6 py-3 rounded font-medium text-lg transition flex items-center gap-2">
              <span>Ver Video</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="https://i.imgur.com/IzL7vps.png" alt="PraxIA" className="w-96 h-96" />
        </div>
      </section>

      {/* Specialists Section */}
      <section className="bg-[#181b2a] py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">Nuestros agentes Especialistas</h2>
          <p className="text-center text-white/70 mb-10">Encuentra el experto que necesitas para resolver tus dudas.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((s, i) => (
              <div key={i} className="bg-darkCard rounded-xl p-6 flex flex-col gap-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className={`rounded-full bg-white/10 p-3`}>{s.icon}</div>
                  <span className="font-semibold text-lg text-white">{s.title}</span>
                </div>
                <p className="text-white/80 text-sm flex-1">{s.desc}</p>
                <button 
                  onClick={() => navigate(s.path)}
                  className="text-left text-sm font-medium text-accent hover:underline flex items-center gap-1"
                >
                  Probar ahora <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-dark py-16">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-white">Preguntas Frecuentes</h2>
          <p className="text-center text-white/70 mb-10">Resuelve tus dudas sobre PraxIA</p>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-darkCard rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-accent transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 