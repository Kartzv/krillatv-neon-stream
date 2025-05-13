
import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight, User } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Assinante há 6 meses",
    quote: "A KrillaTV revolucionou minha experiência. Canais estáveis e imagem perfeita. O suporte responde rápido quando preciso.",
    rating: 5
  },
  {
    id: 2,
    name: "Roberta Almeida",
    role: "Assinante há 1 ano",
    quote: "Depois de testar várias plataformas, encontrei na KrillaTV a melhor qualidade. O catálogo é imenso e sempre atualizado.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    role: "Assinante há 3 meses",
    quote: "Estabilidade impecável! Assisto em 4K sem travamentos. Recomendo para quem busca qualidade e preço justo.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-krilla-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            O que dizem nossos <span className="text-krilla-purple text-glow">Clientes</span>
          </h2>
          <p className="text-lg text-white/80">
            Confira o que nossos usuários têm a dizer sobre a KrillaTV
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Desktop slider (3 cards visible) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-b from-krilla-dark-blue/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 h-full flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-krilla-purple/20 flex items-center justify-center">
                      <User className="w-6 h-6 text-krilla-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-krilla-purple fill-krilla-purple" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-white/80 italic flex-grow">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          
          {/* Mobile slider (1 card visible) */}
          <div className="md:hidden relative">
            <div className="overflow-hidden relative h-64">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                    idx === activeIndex 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="bg-gradient-to-b from-krilla-dark-blue/50 to-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex space-x-4 items-center">
                        <div className="w-12 h-12 rounded-full bg-krilla-purple/20 flex items-center justify-center">
                          <User className="w-6 h-6 text-krilla-purple" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-white/60">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-krilla-purple fill-krilla-purple" : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    
                    <p className="text-white/80 italic">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-krilla-dark-blue flex items-center justify-center border border-white/10"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-krilla-purple flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
