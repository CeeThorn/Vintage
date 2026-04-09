import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

<html lang="en" className={`${manrope.variable} ${inter.variable}`}></html>

export const metadata = {
  title: "PrintWear | The Digital Boutique",
  description: "Premium Custom Garments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body selection:bg-secondary-container selection:text-on-secondary-container">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}