
import React from "react";
import { CreditCard, Mail, Play, CirclePlay } from "lucide-react";

const steps = [
  {
    icon: <CreditCard className="w-12 h-12 text-krilla-purple" />,
    title: "Escolha seu plano",
    description: "Selecione o plano que atende às suas necessidades"
  },
  {
    icon: <Mail className="w-12 h-12 text-krilla-purple" />,
    title: "Receba seu login",
    description: "Suas credenciais serão enviadas por WhatsApp ou email"
  },
  {
    icon: <CirclePlay className="w-12 h-12 text-krilla-purple" />,
    title: "Faça login na KrillaTV",
    description: "Conecte via M3U ou Xtream em seu dispositivo preferido"
  },
  {
    icon: <Play className="w-12 h-12 text-krilla-purple" />,
    title: "Aproveite!",
    description: "Assista a milhares de canais, filmes e séries em HD"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 bg-krilla-dark-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Como <span className="text-krilla-purple text-glow">Funciona</span>
          </h2>
          <p className="text-lg text-white/80">
            Começar a usar a KrillaTV é simples e rápido
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-krilla-purple/20 h-full flex flex-col items-center text-center group hover:border-krilla-purple/50 transition-all">
                  <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-krilla-purple to-krilla-blue flex items-center justify-center text-white font-bold z-10">
                    {index + 1}
                  </div>
                  
                  <div className="mb-6 transform group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/70">
                    {step.description}
                  </p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-krilla-purple to-krilla-blue"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-krilla-purple mb-6">
            Compatível com Smart TVs, Android, iOS, TV Box, Roku e Computadores
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/80">Smart TVs</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/80">Android</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/80">iPhone/iPad</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/80">TV Box</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/80">Roku</span>
            </div>
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10">
              <span className="text-white/80">Windows/Mac</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
