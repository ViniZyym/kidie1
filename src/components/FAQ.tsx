import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "Para que idade o guia é recomendado?",
      answer: "O guia é adequado para crianças de 3 a 12 anos, com adaptações específicas para cada faixa etária. Todas as atividades vêm com orientações de segurança e variações por idade."
    },
    {
      question: "Preciso de materiais especiais para as atividades?",
      answer: "Não! Todas as atividades são pensadas para usar materiais simples que você já tem em casa: papel, lápis, objetos cotidianos, etc. Incluímos um guia de materiais alternativos."
    },
    {
      question: "Quanto tempo por dia preciso dedicar às atividades?",
      answer: "Recomendamos de 30 a 60 minutos por dia, mas você pode adaptar conforme sua rotina. O importante é a consistência, não a duração."
    },
    {
      question: "E se meu filho resistir às atividades no início?",
      answer: "É normal! O guia inclui estratégias específicas para lidar com a resistência inicial e dicas para tornar a transição mais suave e divertida."
    },
    {
      question: "Tem garantia de devolução?",
      answer: "Sim! Oferecemos 30 dias de garantia total. Se não ficar satisfeito com os resultados, devolvemos 100% do seu investimento."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "Você recebe tudo por email imediatamente após a confirmação do pagamento. É um guia prático de alta qualidade que você pode imprimir ou usar no celular/tablet."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Perguntas <span className="text-purple-600">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre o método finlandês
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="font-semibold text-gray-800 pr-8">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-600 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="p-6 bg-white border-t border-gray-200 animate-fade-in">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ainda tem dúvidas?</p>
          <a href="https://api.whatsapp.com/send/?phone=555181015992&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200">
            Entre em Contato Conosco
          </a>
        </div>
      </div>
    </section>
  );
}