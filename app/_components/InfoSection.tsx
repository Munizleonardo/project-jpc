import { Shield, Lock, FileCheck, Zap } from "lucide-react";

export default function InfoSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Certificados com criptografia avançada e proteção de dados"
    },
    {
      icon: Lock,
      title: "Validade Jurídica",
      description: "Reconhecido pela ICP-Brasil com total validade legal"
    },
    {
      icon: FileCheck,
      title: "Facilidade de Uso",
      description: "Assinatura digital simples e prática em qualquer documento"
    },
    {
      icon: Zap,
      title: "Economia de Tempo",
      description: "Processos burocráticos resolvidos de forma rápida e digital"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que é Certificado Digital?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            O <strong className="text-foreground">certificado digital</strong> é uma identidade eletrônica que funciona 
            como uma assinatura digital, permitindo que pessoas e empresas realizem transações 
            online com total segurança e validade jurídica.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Utiliza tecnologia de criptografia para garantir a autenticidade, confidencialidade 
            e integridade das informações transmitidas, sendo reconhecido pela ICP-Brasil 
            (Infraestrutura de Chaves Públicas Brasileira).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group border border-border hover:border-primary"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};