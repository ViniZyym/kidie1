import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-bounce">
          <Heart className="w-8 h-8" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse">
          <Users className="w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-300">
          <Sparkles className="w-10 h-10" />
        </div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            O Método Finlandês para acabar com o{' '}
            <span className="text-yellow-300">vício das crianças</span> em telas
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            O guia prático de 30 dias com atividades diárias comprovadas cientificamente 
            para reconectar pais e filhos, promovendo desenvolvimento criativo longe das telas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Quero Transformar Minha Família! 🚀
            </button>
            <p className="text-sm opacity-75">Mais de 10.000 famílias já transformaram suas vidas!</p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </header>
  );
}