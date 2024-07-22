import { Providers } from "../providers";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`antialiased snap-y`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
