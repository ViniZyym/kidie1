import React, { useState } from 'react';
import { Lightbulb, Heart, Palette, CheckCircle, Star, Quote, AlertTriangle, Zap, Target, Minus, Plus, Mail, Phone, Instagram, Facebook, Users, Sparkles, Gift, Check } from 'lucide-react';

const Header = () => {
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

          {/* Video Container */}
          <div className="mt-12 w-full max-w-xs mx-auto p-2 bg-black rounded-3xl shadow-2xl">
            <div className="relative" style={{ paddingBottom: '177.777778%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/z0dM6_y1n1I?si=d2b2sX8r-x5l8W0M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
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
};

const ProblemSolution = () => {
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
};

const Benefits = () => {
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
};

const OfferCard = () => {
  const bonuses = [
    "30 Atividades Exclusivas Detalhadas",
    "Guia de Materiais Alternativos",
    "Calendário de Atividades Imprimível",
    "Dicas de Segurança para Cada Idade",
    "Acesso à Comunidade Exclusiva de Pais"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                🔥 OFERTA ESPECIAL - TEMPO LIMITADO
              </div>
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
                  <span className="text-2xl line-through opacity-60">De R$ 38,00</span>
                  <span className="text-4xl font-bold text-yellow-300">R$ 19,00</span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-2">
                COMPRAR AGORA
              </button>

              <p className="text-sm font-bold text-yellow-300 text-center mt-2">50% DE DESCONTO PARA A SEGUNDA TURMA</p>

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
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <div className="relative">
                  <Star className="w-5 h-5 text-gray-300" />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                  </div>
              </div>
            </div>
            <p className="text-sm opacity-75">
              Baseado em mais de 1000 avaliações de famílias satisfeitas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      location: "São Paulo, SP",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Em apenas 15 dias, meus filhos já estavam brincando mais juntos e pedindo menos tablet. Incrível!"
    },
    {
      name: "Carlos Mendes",
      location: "Rio de Janeiro, RJ", 
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "O guia é muito prático e fácil de seguir. Nossa família nunca esteve tão unida!"
    },
    {
      name: "Ana Paula Costa",
      location: "Belo Horizonte, MG",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=150&h=150&fit=crop&crop=face",
      rating: 4.5,
      text: "As atividades são divertidas e educativas. Minha filha desenvolveu muito a criatividade!"
    },
    {
      name: "Roberto Santos",
      location: "Porto Alegre, RS",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Método finlandês realmente funciona. Recomendo para todos os pais preocupados!"
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O Que os Pais Estão <span className="text-purple-600">Falando</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de 1000 famílias já transformaram suas vidas com nosso método
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex space-x-1 mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <div className="relative">
                    <Star className="w-4 h-4 text-gray-300" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                )}
                {[...Array(5 - Math.ceil(testimonial.rating))].map((_, i) => (
                  <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-purple-200 absolute -top-2 -left-2" />
                <p className="text-gray-700 italic leading-relaxed pl-4">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

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

  const toggleItem = (index) => {
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
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-300">30 Dias Sem Telas</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O método finlandês que está transformando famílias ao redor do Brasil. 
              Reconecte-se com seus filhos através de atividades criativas e divertidas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kidie.educa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579068215684" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kidieeduca@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+55 51 8101-5992</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-purple-900/30 rounded-lg">
              <h5 className="font-semibold text-purple-300 mb-2">Atendimento</h5>
              <p className="text-sm text-gray-300">
                Segunda à Sexta: 9h às 18h<br />
                Sábado: 9h às 14h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 30 Dias Sem Telas. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Desenvolvido com 💜 para famílias que querem se reconectar
          </p>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <style>
        {`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #8B5CF6;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #7C3AED;
        }
        `}
      </style>
      <div className="min-h-screen">
        <Header />
        <ProblemSolution />
        <Benefits />
        <OfferCard />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default App;
