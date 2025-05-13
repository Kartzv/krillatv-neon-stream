
import React from "react";
import { Tv, Monitor, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-krilla-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sobre a <span className="text-krilla-purple text-glow">KrillaTV</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-8">
            A KrillaTV é uma plataforma moderna de IPTV com acesso a milhares de canais, 
            filmes e séries com qualidade HD, ultra HD e 4K e suporte personalizado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-krilla-dark-blue/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 transition-transform hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-krilla-purple to-krilla-blue flex items-center justify-center">
                <Tv className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Compatibilidade Total</h3>
              <p className="text-white/70">
                Suporte para Xtream Codes e M3U em diversos dispositivos
              </p>
            </div>
            
            <div className="bg-krilla-dark-blue/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 transition-transform hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-krilla-purple to-krilla-blue flex items-center justify-center">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Alta Qualidade</h3>
              <p className="text-white/70">
                Conteúdo em HD, Ultra HD e 4K com transmissão estável
              </p>
            </div>
            
            <div className="bg-krilla-dark-blue/50 rounded-xl p-6 backdrop-blur-sm border border-white/5 transition-transform hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-krilla-purple to-krilla-blue flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Suporte Dedicado</h3>
              <p className="text-white/70">
                Atendimento personalizado para resolver qualquer problema
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 py-10 relative overflow-hidden rounded-2xl bg-gradient-to-r from-black to-krilla-dark-blue border border-krilla-purple/30">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-krilla-purple via-transparent to-transparent"></div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Quanto você gastaria assinando todos esses serviços?
            </h3>
          </div>
          
          <div className="marquee-container relative overflow-hidden">
            <div className="flex space-x-12 animate-marquee">
              {/* Streaming logos - add them twice for continuous animation */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center space-x-12 animate-glow">
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Netflix</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Prime</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Disney+</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">HBO Max</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Star+</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Paramount+</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Globoplay</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Apple TV+</div>
                  <div className="w-24 h-24 flex items-center justify-center text-white bg-gradient-to-br from-krilla-purple/20 to-krilla-blue/20 rounded-xl p-2">Discovery+</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 mb-8">
            <h4 className="text-3xl md:text-5xl font-bold text-white">
              💸 Total: <span className="text-krilla-purple text-glow">R$ 300+</span> por mês!
            </h4>
            
            <p className="text-xl md:text-2xl mt-4 mb-8 text-white/90 max-w-2xl mx-auto">
              Na KrillaTV você assiste tudo isso e muito mais por apenas 
              <span className="text-krilla-purple font-bold"> R$ 39,90</span>/mês.
            </p>
            
            <Button className="text-lg py-6 px-8 bg-krilla-purple hover:bg-krilla-purple/90 text-white font-semibold rounded-xl">
              Quero economizar agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
