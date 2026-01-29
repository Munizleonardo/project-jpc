import { Header } from "@/app/Header";
import { Footer } from "@/app/Footer";
import { ShoppingCart, Check, HardDrive, FileKey } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/app/_components/ui/card";
import Link from "next/link";

export default function Ecnpj() {
  const products = [
    {
      icon: FileKey,
      title: "e-CNPJ A1",
      description: "Certificado digital armazenado no computador",
      features: [
        "Validade de 1 ano",
        "Instalação no computador",
        "Emissão de NF-e",
        "Backup facilitado"
      ],
      price: "R$ 250,00",
      popular: true
    },
    {
      icon: HardDrive,
      title: "e-CNPJ A3 + Mídia",
      description: "Certificado digital com token ou cartão",
      features: [
        "Validade de 1 a 3 anos",
        "Inclui token USB ou cartão + leitora",
        "Máxima segurança",
        "Uso em múltiplos computadores"
      ],
      price: "R$ 380,00",
      popular: false
    },
    {
      icon: FileKey,
      title: "e-CNPJ A3 (Só Certificado)",
      description: "Renovação do certificado A3",
      features: [
        "Validade de 1 a 3 anos",
        "Para quem já possui mídia",
        "Renovação simplificada",
        "Melhor custo-benefício"
      ],
      price: "R$ 280,00",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Certificado Digital e-CNPJ
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha a melhor opção de certificado digital para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  product.popular ? 'border-2 border-primary scale-105 md:scale-110' : 'border border-border'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center py-4">
                    <span className="text-4xl font-bold text-foreground">{product.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    size="lg" 
                    className="w-full hover:text-white hover:bg-primary/80 cursor-pointer"
                    variant={product.popular ? "default" : "outline"}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    <Link href="https://wa.me/+5521964274957?Ola-vim-do-site" target="_blank">
                      Comprar Agora
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-muted p-8 rounded-xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Precisa de ajuda para escolher?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nossa equipe especializada pode orientá-lo sobre o melhor certificado 
              para as necessidades da sua empresa. Fale conosco!
            </p>
            <Button asChild size="lg">
              <Link href="/#contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};