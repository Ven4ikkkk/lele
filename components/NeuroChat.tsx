import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X, Sparkles, Loader2 } from 'lucide-react';
import { getSkinAdvice } from '../services/aiService';
import { ChatMessage } from '../types';

const NeuroChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Приветствую. Я NeuroAI. Готов проанализировать потребности вашей кожи. Что вас беспокоит?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getSkinAdvice(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <section id="neuro-ai" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 bg-pink-600 hover:bg-pink-500 text-white px-6 py-4 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all transform hover:scale-105"
        >
          <div className="relative">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
          <span className="font-bold tracking-wider uppercase">Спросить NeuroAI</span>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] glass-panel bg-black/90 border border-pink-500/30 rounded-2xl flex flex-col shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 border-b border-white/10 bg-gradient-to-r from-pink-900/50 to-purple-900/50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-pink-400" />
              <h3 className="font-bold text-white tracking-wider">NEURO<span className="text-pink-400">AI</span></h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl p-3 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-pink-600 text-white rounded-br-none' 
                    : 'bg-zinc-800 text-gray-200 border border-white/10 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-zinc-800 rounded-xl p-3 flex gap-2 items-center text-xs text-pink-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Анализ...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-black/40 border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Спросите о составе..."
                className="flex-1 bg-zinc-900 border border-white/20 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors placeholder-gray-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-pink-600 rounded-full text-white hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NeuroChat;