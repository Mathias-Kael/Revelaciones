import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <nav className="container nav mb-4">
          <Link href="/">Home</Link>
          <Link href="/sueno">Sueño</Link>
          <Link href="/sincronicidad">Sincronicidad</Link>
          <Link href="/testimonios">Testimonios</Link>
        </nav>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
