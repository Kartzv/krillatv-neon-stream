
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Whatsapp, Mail, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-krilla-dark-blue to-krilla-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Entre em <span className="text-krilla-purple text-glow">Contato</span>
          </h2>
          <p className="text-lg text-white/80">
            Estamos à disposição para tirar suas dúvidas e ajudar você a começar
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-white/70 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-krilla-purple"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-krilla-purple"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white focus:outline-none focus:border-krilla-purple"
                  placeholder="Sua mensagem..."
                />
              </div>
              
              <Button type="submit" className="w-full py-6 bg-krilla-purple hover:bg-krilla-purple/90 text-white font-semibold rounded-xl">
                <MessageSquare className="mr-2 h-5 w-5" /> Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="order-1 md:order-2 flex flex-col">
            <div className="bg-gradient-to-r from-black to-krilla-dark-blue/50 p-8 rounded-xl border border-white/10 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Precisa de ajuda?
              </h3>
              
              <p className="text-white/80 mb-8">
                Nossa equipe está pronta para te ajudar com qualquer dúvida sobre nossos serviços. 
                Entre em contato por WhatsApp ou email para atendimento rápido.
              </p>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-black/30 rounded-lg border border-krilla-purple/20 hover:border-krilla-purple/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
                    <Whatsapp className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">WhatsApp</h4>
                    <p className="text-sm text-white/70">Atendimento imediato</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-krilla-purple">Conversar</span>
                  </div>
                </a>
                
                <a
                  href="mailto:contato@krillatv.com"
                  className="flex items-center p-4 bg-black/30 rounded-lg border border-krilla-purple/20 hover:border-krilla-purple/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-krilla-purple/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-krilla-purple" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-sm text-white/70">contato@krillatv.com</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-krilla-purple">Enviar</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
