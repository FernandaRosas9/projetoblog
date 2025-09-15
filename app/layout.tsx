import Header from "@/app/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-br">
      <body className="bg-[#8E6EAD] bg-[url('/bg.jpg')] bg-cover bg-center bg-fixed bg-blend-multiply">
        <Header/>
        {children}
      </body>
    </html>
  );
}
