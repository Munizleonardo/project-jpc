"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">

            <Image 
            src="/logo.png" 
            alt="JPC RIO Certificadora Digital" 
            width={80} 
            height={80} 
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Button
              asChild
              variant={isActive("/") ? "default" : "ghost"}
              className="text-base"
            >
              <Link href="/">Início</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/#sobre") ? "default" : "ghost"}
              className="text-base hover:bg-primary/70 hover:text-white"
            >
              <a href="#sobre">Sobre</a>
            </Button>
            <Button
              asChild
              variant={isActive("/#certificados") ? "default" : "ghost"}
              className="text-base hover:bg-primary/70 hover:text-white"
            >
              <a href="#certificados">Certificados</a>
            </Button>
            <Button
              asChild
              variant={isActive("/#contato") ? "default" : "ghost"}
              className="text-base hover:bg-primary/70 hover:text-white"
            >
              <a href="#contato">Contato</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};