import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TopCoat Artistry LLC",
    template: "%s | TopCoat Artistry LLC",
  },
  description:
    "TopCoat Artistry LLC provides professional decorative painting, stamped concrete, epoxy flooring, terrazzo, and custom surface solutions with precision and craftsmanship.",
  keywords: [
    "Decorative painting",
    "Stamped concrete",
    "Epoxy flooring",
    "Terrazzo flooring",
    "Surface finishing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}