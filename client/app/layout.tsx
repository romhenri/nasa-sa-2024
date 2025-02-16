import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import MobileCanva from "./_components/MobileCanva";
import Header from "./_components/Header";
import NavBar from "./_components/NavBar";

// import { UserProvider } from "@context/UserContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Meta Verde",
  description: "ODSs na Sala de Aula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-zinc-800 text-slate-100
          flex flex-col items-center justify-center
        `}
      >
          <MobileCanva>
            <div className="flex flex-col h-screen w-full">
              <Header>Meta Verde</Header>

              {children}

              <NavBar />
            </div>
          </MobileCanva>
      </body>
    </html>
  );
}
