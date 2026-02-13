import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import LogoParks from "./_components/LogoParks";

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
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="text-sm opacity-90">R. São José, 46 - Sala 1101 - Centro - RJ</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="text-sm opacity-90">(21) 96427-4957</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-sm opacity-90">contato@jpcrio.com.br</span>
              </div>
              <div className="flex">
                <Link 
                href="https://www.instagram.com/jpcriocertificadoradigital/" 
                className="hover:opacity-80 flex gap-2 transition-opacity" 
                aria-label="Instagram">
                  <Instagram className="w-5 h-5 shrink-0" />
                  <span className="text-sm flex opacity-90">@jpcriocertificadoradigital</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-90">
            © 2025 JPC RIO Certificadora Digital – Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-sm opacity/90">Desenvolvido por</p>
          <Link href="https://parkscompany.com.br" target="_blank">
            <LogoParks />
          </Link>
        </div>
      </div>
    </footer>
  );
};