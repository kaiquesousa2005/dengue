import "./globals.css"

export const metadata = {
  title: "Projeto da Dengue",
  description: "Casos de Dengue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
