import type { Metadata } from "next";
import "./globals.css";
import PunkCursor from "@/components/PunkCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PUNK ZINE // FIRAT CAN KARAKOÇ - CREATIVE DEVELOPER",
  description:
    "Regular Show neo-punk zine inspired personal portfolio, intelligent agents, cognitive tools, and experimental code by Fırat Can Karakoç.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PunkCursor />
        <Navbar />
        <div style={{ minHeight: "calc(100vh - 260px)" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
