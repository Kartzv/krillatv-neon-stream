
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-krilla-purple text-glow">Krilla</span>TV
          </h1>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">
            Início
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            Sobre
          </a>
          <a href="#plans" className="text-white/80 hover:text-white transition-colors">
            Planos
          </a>
          <a href="#how" className="text-white/80 hover:text-white transition-colors">
            Como Funciona
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contato
          </a>
        </nav>

        <div className="hidden md:block">
          <a href="#plans">
            <Button className="bg-krilla-purple hover:bg-krilla-purple/90 text-white">
              Assinar Agora
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-black/95 flex flex-col md:hidden z-40 p-4 animate-fade-in">
          <div className="flex flex-col space-y-4 py-8">
            <a
              href="#home"
              className="text-white text-xl py-2 px-4 hover:bg-krilla-dark-blue rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#about"
              className="text-white text-xl py-2 px-4 hover:bg-krilla-dark-blue rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#plans"
              className="text-white text-xl py-2 px-4 hover:bg-krilla-dark-blue rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Planos
            </a>
            <a
              href="#how"
              className="text-white text-xl py-2 px-4 hover:bg-krilla-dark-blue rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              className="text-white text-xl py-2 px-4 hover:bg-krilla-dark-blue rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="text-white text-xl py-2 px-4 hover:bg-krilla-dark-blue rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </a>
            <div className="pt-4">
              <a href="#plans">
                <Button className="w-full bg-krilla-purple hover:bg-krilla-purple/90 text-white">
                  Assinar Agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
