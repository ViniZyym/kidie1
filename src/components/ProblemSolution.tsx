import React from 'react';
import { AlertTriangle, Zap, Heart, Target } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Vício em Telas e Dopamina",
      description: "Crianças desenvolvem dependência das telas devido aos picos de dopamina, prejudicando o desenvolvimento natural"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sedentarismo e Falta de Conexão",
      description: "Mais de 7 horas diárias em telas causam distanciamento familiar e problemas de saúde"
    }
  ];

  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Desenvolvimento de Atenção e Foco",
      description: "Atividades que desenvolvem concentração e habilidades de resolução de problemas de forma natural"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Atividades Energizantes e Reconexão",
      description: "30 dias de atividades práticas que estimulam movimento, criatividade e fortalecem laços familiares"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Do Problema para a <span className="text-purple-600">Solução</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforme os desafios do mundo digital em oportunidades de crescimento familiar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-8 text-center">😟 Os Problemas</h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-red-500">{problem.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{problem.title}</h4>
                    <p className="text-gray-600">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-8 text-center">✨ A Solução</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-purple-600">{solution.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}