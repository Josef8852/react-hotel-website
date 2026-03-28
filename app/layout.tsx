import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Hotel",
  description: "React Hotel Website",
};

 const RootLayout = ({ children}: Readonly<{ children: React.ReactNode;}>) => {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
