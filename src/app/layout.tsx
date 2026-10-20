import type { Metadata } from "next";
import "./globals.css";
import PunkCursor from "@/components/PunkCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PUNK ZINE // KIŞISEL PORTFOLYO",
  description: "Regular Show neo-punk zine esintili kişisel portfolyo, projeler ve yazılar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <PunkCursor />
        <Navbar />
        <div style={{ minHeight: "calc(100vh - 260px)" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
