import React from 'react';
import { Lightbulb, Heart, Palette, CheckCircle } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Estimula a Imaginação",
      description: "Atividades criativas que despertam o potencial imaginativo das crianças",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Fortalece Laços Familiares",
      description: "Momentos especiais que aproximam pais e filhos através de experiências compartilhadas",
      color: "from-pink-400 to-red-500"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Promove Desenvolvimento Criativo",
      description: "Técnicas comprovadas que estimulam diferentes áreas do cérebro infantil",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: "Atividades Práticas e Fáceis",
      description: "Guia passo a passo com materiais simples que você já tem em casa",
      color: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transforme a Rotina da Sua <span className="text-purple-600">Família</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os benefícios comprovados do nosso método finlandês
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}