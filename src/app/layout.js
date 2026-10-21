import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export const metadata = {
  title: "KeenKeeper",
  description:
    "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="keenkeeper">
      <body className={`${hanken.variable} font-sans bg-base-200 text-base-content flex min-h-screen flex-col`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}