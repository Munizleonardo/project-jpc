import { Building2, Users, Clock, Award } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Building2,
      title: "Empresa Certificada",
      description: "Autorizada para emissão de certificados digitais"
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Equipe especializada e atenciosa"
    },
    {
      icon: Clock,
      title: "Rapidez na Emissão",
      description: "Seu certificado em minutos"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Certificados com validade jurídica"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre a JPC RIO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Localizada em São Cristóvão, no Rio de Janeiro, a JPC RIO é especializada em emissão 
            de Certificados Digitais, oferecendo profissionalismo, agilidade e atendimento humanizado 
            para pessoas físicas e jurídicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};