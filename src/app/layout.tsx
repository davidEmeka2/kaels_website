import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./CSS/Home.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";


export const metadata: Metadata = {
  title: "Kael Website Design",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>

        {children}
        
        <Footer></Footer>
      </body>
    </html>
  );
}
