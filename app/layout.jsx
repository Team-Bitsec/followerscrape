import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/hero/Header";
import Footer from './components/footer/Footer';
import Chatbot from "./components/ui/Chatbot";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "followerscrape",
  description: "this is lead genaration website",
    icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  {/* Favicon যুক্ত করলেম */}
      <link rel="icon" href="/favicon.ico" />
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased` }
      >
        <Header />
        {children}
               <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
