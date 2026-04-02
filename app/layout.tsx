import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/global.css"
import Header from "@/app/_components/Header";

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
    icon : "Logo.png"
  }
};

 const RootLayout = ({ children}: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col antialiased  bg-primary-950 text-primary-100  ">
        <Header/>
        <div className="flex-1 px-8 py-12" >
          <main className="max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
 }
 
 export default RootLayout;
