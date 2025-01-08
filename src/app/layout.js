import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const playFair = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playFair.className}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="PixelPulse - A sample project showcasing web development skills and design expertise. Built using modern technologies like Next.js, TailwindCSS, and more."
        />
        <meta
          name="keywords"
          content="PixelPulse, web development portfolio, Next.js project, modern web design, clean UI, responsive design, portfolio project"
        />
        <meta name="author" content="Hem Kamli" />
        <meta name="robots" content="index, follow" />
        <title>PixelPulse - A Sample Designing Agency Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
