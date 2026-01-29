import { Shield, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-primary/70" />

        <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">
              Certificação Digital Segura e Rápida
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Seu Certificado Digital com
            <span className="block mt-2 bg-gradient-to-r from-accent to-accent-white bg-clip-text">
              Segurança e Agilidade
            </span>
          </h1>

          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Emissão de certificados digitais e-CPF e e-CNPJ com atendimento profissional
            em São Cristóvão, Rio de Janeiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" variant="secondary" className="text-lg text-primary px-8">
              <a href="#certificados">Ver Certificados</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg text-white px-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-white border-primary-foreground/30">
              <a href="https://wa.me/+5521964274957?Ola-vim-do-site" target="_blank">Fale Conosco</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: CheckCircle, text: "Validade Jurídica Garantida" },
              { icon: CheckCircle, text: "Atendimento Humanizado" },
              { icon: CheckCircle, text: "Emissão Rápida e Segura" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-primary-foreground/10 md:bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
                <item.icon className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-primary-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};