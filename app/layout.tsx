import "./globals.css";
import FloatingWhatsAppButton from "@/app/_components/FloatingWhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={"antialiased"}>
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
