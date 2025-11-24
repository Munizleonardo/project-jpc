"use client";
import { WhatsAppIcon } from "@/app/_components/WhatsAppIcon";

export default function FloatingWhatsAppButton() {
  const phoneNumber = "5521964274957";
  const message = "Olá! Gostaria de mais informações sobre os certificados digitais.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale Conosco pelo WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}