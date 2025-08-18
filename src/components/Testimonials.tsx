import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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
            Mais de 500 famílias já transformaram suas vidas com nosso método
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
}