import React from 'react';
import { Check, Star, Gift } from 'lucide-react';

export default function OfferCard() {
  const bonuses = [
    "30 Atividades Exclusivas Detalhadas",
    "Guia de Materiais Alternativos",
    "Calendário de Atividades Imprimível", 
    "Dicas de Segurança para Cada Idade",
    "Acesso à Comunidade Exclusiva de Pais"
  ];

  return (
    <section id="offer-section" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                🔥 OFERTA ESPECIAL - TEMPO LIMITADO
              </div>
            </div>
            
            {/* Product Image */}
            <div className="flex justify-center mb-6">
              <img 
                src="/produto png.png" 
                alt="Guia 30 Dias Sem Telas - Mundo Sem Telas" 
                className="w-64 h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Adquira Agora o Guia Completo!
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Transforme a rotina da sua família em apenas 30 dias
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                  <span className="text-2xl line-through opacity-60">De R$37,80</span>
                  <span className="text-4xl font-bold text-yellow-300">R$18,90</span>
                </div>
                <p className="text-center md:text-left text-sm opacity-75">
                  Ou 12x de R$1,58 sem juros
                </p>
              </div>

              <a 
                href="https://www.ggcheckout.com/checkout/v2/yggq2GQ0doXgrFlw4t3B" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6 text-center"
              >
                💳 COMPRAR AGORA - 50% OFF
              </a>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-green-300 mb-2">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Garantia de 30 dias</span>
                </div>
                <p className="text-sm opacity-75">
                  100% do seu dinheiro de volta se não ficar satisfeito
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Gift className="w-6 h-6 mr-2 text-yellow-300" />
                Bônus Exclusivos Inclusos:
              </h3>
              <ul className="space-y-3">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <p className="text-sm opacity-75">
              Baseado em mais de 500 avaliações de famílias satisfeitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}