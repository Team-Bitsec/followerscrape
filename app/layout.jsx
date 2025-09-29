import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/hero/Header";
import Footer from './components/footer/Footer';
import Chatbot from "./components/ui/Chatbot";



const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Followerscrape",
  description: "this is lead genaration website",
    icons: {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  {/* Favicon যুক্ত করলেম */}
      <link rel="icon" href="/images/logo/favicon.ico" />
     
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased` }
      >
        <Header />
        {children}
               <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
