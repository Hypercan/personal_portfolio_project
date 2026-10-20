"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "ANASAYFA", href: "/" },
  { label: "HAKKIMDA", href: "/hakkimda" },
  { label: "PROJELER", href: "/projeler" },
  { label: "YAZILAR", href: "/yazilar" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.ticketNav}>
        {/* Ticket Perforated Left Stub */}
        <div className={styles.stubLeft}>
          <div className={styles.barcode} title="Punk Barcode">
            <span className={styles.barThick} />
            <span className={styles.barThin} />
            <span className={styles.barThin} />
            <span className={styles.barThick} />
            <span className={styles.barThin} />
            <span className={styles.barThick} />
          </div>
          <span className={styles.ticketCode}>#RS-1980</span>
        </div>

        {/* Brand / Logo */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logoText}>
            FIRAT CAN
            <span className={styles.logoBadge}>HYPERCAN</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div
          className={`${styles.navLinks} ${
            mobileOpen ? styles.navLinksOpen : ""
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`${styles.navItem} ${
                  isActive ? styles.navItemActive : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* VIP Pass / Stub Right */}
        <div className={styles.ticketStubRight}>
          <span className={styles.vipBadge}>★ ADMIT ONE</span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? "✕ KAPAT" : "☰ MENÜ"}
        </button>
      </nav>
    </header>
  );
}
