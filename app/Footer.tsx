import Link from "next/link";
import { Shield, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
              src="/logo.png"
              alt="JPC RIO Certificadora Digital"
              width={80}
              height={80}
              />

              {/*<Shield className="w-10 h-10" />*/}
              <div className="flex flex-col">
                <span className="text-2xl font-bold">JPC RIO</span>
                <span className="text-sm opacity-90">Certificadora Digital</span>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Profissionalismo, agilidade e atendimento humanizado em certificação digital.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Navegação</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Início
              </Link>
              <a href="#sobre" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Sobre
              </a>
              <a href="#certificados" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                Certificados
              </a>
              <Link href="/ecpf" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                e-CPF
              </Link>
              <Link href="/ecnpj" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                e-CNPJ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">São Cristóvão, Rio de Janeiro - RJ</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm opacity-90">(21) 96427-4957</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm opacity-90">contato@jpcrio.com.br</span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <a 
              href="https://www.instagram.com/jpcriocertificadoradigital/" 
              className="hover:opacity-80 transition-opacity" 
              aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-90">
            © 2025 JPC RIO Certificadora Digital – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};