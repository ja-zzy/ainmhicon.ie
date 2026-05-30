import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import BottomAnimation from "./components/bottom-animation";
import Footer from "./components/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ainmhícon 2027",
  description: "Ainmhícon 2027 is a new Furry Convention, HERE in the wonderful Emerald Isle of Ireland. April 11th-12th 2026 in Clayton Hotel Liffey Valley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
      data-theme="ainmhicon"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="min-h-full flex flex-col">
        <NavBar />
        <main className='min-h-[70vh] flex'>
          {children}
        </main>
        <BottomAnimation />
        <Footer />
      </body>
    </html>
  );
}
