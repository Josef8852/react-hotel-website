import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/global.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default : "React Hotel" ,
    template: "%s | React Hotel",
  },
  description: "Luxurious cabin hotel",
  icons: {
    icon : "logo.png"
  }
};

 const RootLayout = ({ children}: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col  bg-primary-950 text-primary-100 ">
        <header>
          <Logo/>
        </header>
        <main>
          <Navigation/>
          {children}
        </main>
      </body>
    </html>
  );
 }
 
 export default RootLayout;
