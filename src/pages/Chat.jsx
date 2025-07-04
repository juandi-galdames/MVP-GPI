import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import TypewriterText from '../components/TypewriterText';

const Chat = () => {
  const { llm } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `¡Hola! Soy ${llm?.toUpperCase() || 'LEXIA'}, tu asistente especializado. ¿En qué puedo ayudarte hoy?`,
      isTyping: false
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const aiMessage = {
        role: 'assistant',
        content: 'Esta es una respuesta simulada. De momento la API al modelo no esta disponible',
        isTyping: true
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleTypingComplete = (index) => {
    setMessages(prev => prev.map((msg, i) => 
      i === index ? { ...msg, isTyping: false } : msg
    ));
  };

  return (
    <div className="fixed inset-0 flex bg-dark">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-0 left-0 w-full h-16 flex items-center px-4 z-50 text-white/80 hover:text-white bg-darkCard border-b border-white/10"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-darkCard border-r border-white/10 p-4 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:relative md:flex flex-col justify-between z-50`}>
        <div>
          <div className="hidden md:flex items-center gap-2 mb-6">
            <div className="rounded-full bg-white/10 p-2">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636" />
              </svg>
            </div>
            <span className="font-bold text-white">{llm?.toUpperCase() || 'LEXIA'}</span>
          </div>
          <button className="w-full bg-accent hover:bg-accentHover text-white px-4 py-2 rounded-lg font-medium transition">
            Nueva conversación
          </button>
        </div>

        {/* Logo and Name at bottom */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <div className="rounded-full bg-white/10 p-2">
            <img 
              src="https://imgur.com/MdihqgL.png" 
              alt="PraxIA Logo" 
              className="w-6 h-6"
            />
          </div>
          <span className="font-bold">PraxIA</span>
        </button>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 md:pt-4 pt-16">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3xl rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-accent text-white'
                    : 'bg-darkCard text-white/80'
                }`}
              >
                {message.role === 'assistant' && message.isTyping ? (
                  <TypewriterText 
                    text={message.content} 
                    onComplete={() => handleTypingComplete(index)}
                  />
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-darkCard text-white/80 rounded-lg p-4">
                <LoadingSpinner />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-dark border-t border-white/10 p-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="w-full bg-darkCard text-white rounded-lg py-3 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-accent hover:text-accentHover disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat; 