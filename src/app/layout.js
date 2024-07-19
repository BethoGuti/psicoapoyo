import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./ui/LandingPage/Nav";
import { Footer } from "./ui/LandingPage/Footer";
import { Providers } from "./providers";

const roboto = Roboto({ weight: ["100", "400", "900"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.className} antialiased snap-y`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
