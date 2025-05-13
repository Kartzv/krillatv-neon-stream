
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-krilla-dark/80 to-krilla-dark"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo placeholder */}
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-krilla-purple to-krilla-blue shadow-lg animate-float">
            <h1 className="text-3xl font-bold text-white">KTV</h1>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="text-krilla-purple text-glow">KrillaTV</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8">
            Assista filmes, séries e canais ao vivo com qualidade e estabilidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-lg py-6 px-8 bg-krilla-purple hover:bg-krilla-purple/90 text-white font-semibold rounded-xl">
              Assinar Agora
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-krilla-purple text-krilla-purple hover:bg-krilla-purple/10 font-semibold rounded-xl">
              <Play className="mr-2 h-5 w-5" /> Testar Grátis
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-krilla-purple animate-pulse"></div>
              <p className="text-white/80">Mais de 10.000 canais e conteúdos disponíveis</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-krilla-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
