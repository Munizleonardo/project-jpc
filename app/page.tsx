import { Header } from "@/app/Header";
import { Footer } from "@/app/Footer";
import HeroSection from "@/app/_components/HeroSection";
import AboutSection from "@/app/_components/AboutSection";
import CertificatesSection from "@/app/_components/CertificatesSection";
import InfoSection from "@/app/_components/InfoSection";
import ContactSection from "@/app/_components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificatesSection />
        <InfoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
