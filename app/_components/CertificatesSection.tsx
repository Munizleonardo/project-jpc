import Link from "next/link";
import { User, Building, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function CertificatesSection() {
  return (
    <section id="certificados" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tipos de Certificados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o certificado digital ideal para suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <User className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <CardTitle className="text-3xl mb-2">Certificado Digital e-CPF</CardTitle>
              <CardDescription className="text-base">
                Para pessoas físicas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O e-CPF permite assinar documentos digitalmente, acessar portais do governo, 
                enviar declaração de Imposto de Renda e realizar transações com validade jurídica.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Assinatura digital de documentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Acesso a sistemas do governo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Declaração de Imposto de Renda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Processos judiciais eletrônicos</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full group/btn">
                <Link href="/ecpf">
                  Ver Opções
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Building className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <CardTitle className="text-3xl mb-2">Certificado Digital e-CNPJ</CardTitle>
              <CardDescription className="text-base">
                Para empresas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                O e-CNPJ é essencial para empresas emitirem notas fiscais eletrônicas, 
                acessarem sistemas governamentais e realizarem assinaturas digitais corporativas.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Emissão de Nota Fiscal Eletrônica (NF-e)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Acesso ao e-CAC e sistemas da Receita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Assinaturas digitais corporativas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Transações bancárias empresariais</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full group/btn">
                <Link href="/ecnpj">
                  Ver Opções
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};