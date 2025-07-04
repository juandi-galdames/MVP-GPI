// src/pages/Lexia.jsx
import { useState } from "react";

/* Ajusta si tu FastAPI corre en otro host/puerto */
const API_URL = "http://localhost:8000/ask";

export default function Lexia() {
  /* ----- estado ----- */
  const [chatMode, setChatMode] = useState(false);
  const [input,    setInput]    = useState("");
  const [msgs,     setMsgs]     = useState([]);

  /* ----- enviar pregunta ----- */
  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;

    /* 1. agrega el mensaje del usuario */
    const question = input.trim();
    setMsgs(m => [...m, { role: "user", text: question }]);
    setInput("");

    /* 2. llama al back-end */
    let data;
    try {
      data = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      }).then(r => r.json());
    } catch {
      data = { answer: "Error al conectar con el servidor." };
    }

    /* 3. agrega la respuesta del bot */
    setMsgs(m => [
      ...m,
      {
        role: "bot",
        text: data.answer || "Lo siento, no encontré información.",
        ref:
          data.references?.length
            ? data.references.map(r => `pág.${r.page}`).join(", ")
            : undefined
      }
    ]);
  }

  /* ---------- pantalla landing ---------- */
  if (!chatMode) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center p-8">
        <div className="max-w-4xl w-full bg-darkCard rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="rounded-full bg-white/10 p-4">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8a3 3 0 100 6 3 3 0 000-6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white">LEXIA</h1>
          </div>

          <div className="space-y-6 text-white/80">
            <p className="text-lg">
              LEXIA es un agente especializado en derecho chileno, entrenado con el
              corpus legal completo de Chile. Proporciona respuestas claras y
              actualizadas sobre legislación, jurisprudencia y procedimientos.
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
              Ideal para abogados, estudiantes y ciudadanos que necesiten
              orientación jurídica confiable.
            </p>
          </div>

          <div className="mt-8">
            <button
              onClick={() => setChatMode(true)}
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
    );
  }

  /* ---------- pantalla chat ---------- */
  return (
    <div className="min-h-screen flex flex-col bg-dark p-4">
      <header className="text-white text-2xl font-bold mb-4">LEXIA Chat</header>

      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {msgs.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : ""}>
            <p
              className={`inline-block max-w-xl p-2 rounded-lg ${
                m.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {m.text}
            </p>
            {m.ref && (
              <span className="block text-xs text-gray-400 mt-1">{m.ref}</span>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Escribe tu pregunta…"
          className="flex-1 p-2 rounded-lg bg-white/10 text-white outline-none"
        />
        <button className="bg-accent px-4 rounded-lg text-white">Enviar</button>
      </form>
    </div>
  );
}
