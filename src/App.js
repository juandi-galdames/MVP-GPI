import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GPTDetail from './pages/GPTDetail';
import Lexia from './pages/Lexia';
import Devora from './pages/Devora';
import Marketia from './pages/Marketia';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gpt/:id" element={<GPTDetail />} />
            <Route path="/lexia" element={<Lexia />} />
            <Route path="/devora" element={<Devora />} />
            <Route path="/marketia" element={<Marketia />} />
            <Route path="/chat/:llm" element={<Chat />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
