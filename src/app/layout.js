import { GoogleTagManager } from '@next/third-parties/google';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"; 

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hecon Shop",
  description: "The style you'll never find, only at Hecon store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
         <GoogleTagManager gtmId="GTM-PNMK49JL" />
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
