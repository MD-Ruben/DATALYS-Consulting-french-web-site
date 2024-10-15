"use client";
import Footer from "@/components/LayoutFR/Footer";
import Header from "@/components/LayoutFR/Header";
import ScrollToTop from "@/components/LayoutFR/ScrollToTop";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />

      <body className="bg-black">
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
