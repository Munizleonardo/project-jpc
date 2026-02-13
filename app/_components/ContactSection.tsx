import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo e tirar todas as suas dúvidas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto ">
          <div className="bg-card p-8 rounded-xl shadow-soft border border-border">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua São José nº46 - Sala 1101<br/>
                    Centro - Rio de Janeiro - RJ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(21) 96427-4957</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@jpcrio.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-1">Horário</h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/50 p-8 rounded-xl shadow-medium text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4">
              Entre em Contato Conosco
            </h3>
            <p className="mb-6 opacity-90 leading-relaxed">
              Entre em contato conosco através do WhatsApp ou telefone e nossa equipe 
              especializada irá orientá-lo sobre o melhor certificado para sua necessidade.
            </p>
            
            <div className="space-y-4">
              <form 
                action="https://formsubmit.co/munizzleonardo@gmail.com" 
                method="POST" 
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_subject" value="Novo contato pelo site" />

                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  required
                  className="w-full p-3 border text-black rounded-lg bg-background"
                />

                <input
                  type="tel"
                  name="telefone"
                  placeholder="Seu telefone"
                  required
                  className="w-full p-3 border text-black rounded-lg bg-background"
                />

                <textarea
                  name="mensagem"
                  placeholder="Digite sua mensagem..."
                  rows={4}
                  required
                  className="w-full p-3 border text-black rounded-lg bg-background"
                ></textarea>

                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full text-primary"
                  type="submit"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};