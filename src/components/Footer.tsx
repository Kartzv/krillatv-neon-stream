
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-krilla-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              <span className="text-krilla-purple text-glow">Krilla</span>TV
            </h2>
            <p className="text-white/50 mt-2">A melhor experiência em IPTV</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Política de Privacidade
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-krilla-purple/20 transition-colors">
                <span className="text-white">F</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-krilla-purple/20 transition-colors">
                <span className="text-white">I</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-krilla-purple/20 transition-colors">
                <span className="text-white">T</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-white/50 text-sm">
            Copyright © {new Date().getFullYear()} KrillaTV. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Este site não armazena nenhum conteúdo protegido por direitos autorais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
