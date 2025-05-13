
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const plans = [
  {
    id: "mensal",
    name: "Mensal",
    price: "20,00",
    period: "por mês",
    connections: 2,
    features: [
      "Acesso a +200 canais",
      "13400 filmes e 6700 séries em HD/4K",
      "2 telas simultâneas",
      "Suporte 24/7",
      "Catálogo atualizado"
    ]
  },
  {
    id: "trimestral",
    name: "Trimestral",
    price: "60,00",
    period: "por 3 meses",
    connections: 3,
    popular: true,
    features: [
      "Acesso a +200 canais",
      "13400 filmes e 6700 séries em HD/4K",
      "3 telas simultâneas",
      "Suporte 24/7",
      "Catálogo atualizado"
    ]
  },
  {
    id: "anual",
    name: "Anual",
    price: "240,00",
    period: "por ano",
    connections: 3,
    features: [
      "Acesso a +200 canais",
      "13400 filmes e 6700 séries em HD/4K",
      "3 telas simultâneas",
      "Suporte 24/7",
      "Catálogo atualizado"
    ]
  }
];

const PricingSection: React.FC = () => {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleOpenQrModal = (planId: string) => {
    setSelectedPlan(planId);
    setShowQrModal(true);
  };

  const getPlanName = (planId: string | null) => {
    const plan = plans.find(p => p.id === planId);
    return plan ? plan.name : "";
  };
  
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-krilla-dark to-krilla-dark-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Escolha seu <span className="text-krilla-purple text-glow">Plano</span>
          </h2>
          <p className="text-lg text-white/80">
            Selecione o plano ideal para você e comece a assistir agora mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`plan-card ${
                plan.popular ? "transform scale-105 md:scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="plan-card-content">
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-krilla-purple text-white text-sm font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <div className="flex items-center justify-center">
                    <span className="text-white/70 text-lg">R$</span>
                    <span className="text-4xl font-bold mx-1 text-white">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-white/70">{plan.period}</span>
                </div>
                
                <div className="mt-2 mb-6 text-center">
                  <span className="text-white bg-krilla-purple/20 rounded-full px-3 py-1 text-sm font-medium">
                    {plan.connections} conexões
                  </span>
                </div>
                
                <div className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-krilla-purple mr-2 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button 
                    className={`w-full py-6 ${
                      hoveredPlan === plan.id 
                        ? "bg-gradient-to-r from-krilla-purple to-krilla-blue" 
                        : "bg-krilla-purple"
                    } hover:from-krilla-purple hover:to-krilla-blue text-white font-medium text-lg rounded-lg`}
                    onClick={() => handleOpenQrModal(plan.id)}
                  >
                    <QrCode className="mr-2 h-5 w-5" /> Assinar com Pix
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showQrModal} onOpenChange={setShowQrModal}>
        <DialogContent className="bg-krilla-dark-blue border border-krilla-purple/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white text-center">
              Pagamento por Pix - Plano {getPlanName(selectedPlan)}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col items-center justify-center p-6">
            <div className="bg-white p-4 rounded-lg w-64 h-64 flex items-center justify-center">
              {/* Placeholder for QR code - replace with actual QR code */}
              <div className="text-black text-center">
                <QrCode className="w-32 h-32 mx-auto text-krilla-purple" />
                <p className="mt-4">Edite este QR code para seu Pix</p>
              </div>
            </div>
            
            <p className="mt-6 text-center text-white/80">
              Escaneie o QR code acima para realizar o pagamento via Pix.<br/>
              Após o pagamento, envie o comprovante pelo WhatsApp.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
