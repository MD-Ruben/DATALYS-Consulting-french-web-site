"use client";
import Footer from "@/components/LayoutFR/Footer";
import Header from "@/components/LayoutFR/Header";
import ScrollToTop from "@/components/LayoutFR/ScrollToTop";
import { AnimatePresence } from "framer-motion"
import PageTransition from "@/components/LayoutFR/Transitions/PageTransition"
import "../styles/index.css";
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEspaceEntreprise = pathname.startsWith('/espace-entreprise');

  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <body className="bg-black">
        {!isEspaceEntreprise && <Header />}
        <AnimatePresence mode="wait">
          <PageTransition>
            {children}
          </PageTransition>
        </AnimatePresence>
        {!isEspaceEntreprise && <Footer />}
        {!isEspaceEntreprise && <ScrollToTop />}
      </body>
    </html>
  );
}
