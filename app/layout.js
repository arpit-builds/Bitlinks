import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export const metadata = {
  title: "BitLinks - Your URL Shortener",
  description: "a url shortener for your website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Script src="https://cdn.lordicon.com/lordicon.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
