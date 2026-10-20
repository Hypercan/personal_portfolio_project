import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowUpRight, Flame, Disc, Terminal, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION: REGULAR SHOW PUNK ZINE POSTER */}
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* Left Column: Headlines & Manifesto */}
          <div className={styles.heroLeft}>
            <div className={styles.roleBadge}>
              <Flame size={18} color="var(--neon-pink)" />
              <span>ASPIRING CREATIVE DEVELOPER</span>
            </div>

            <h1 className={styles.mainTitle}>
              FIRAT CAN
              <span className={styles.titleAlt}>KARAKOÇ</span>
            </h1>

            {/* Motto Box */}
            <div className={styles.mottoBox}>
              <div className={styles.mottoTape} />
              <Zap size={20} color="var(--neon-pink)" />
              <span>Aim ➔ Try ➔ Fail ➔ Learn.</span>
            </div>

            <p className={styles.heroBio}>
              Sıradan dijital kalıpları yıkıp, <strong>yaratıcı kod</strong>, 
              <strong>fanzin ruhu</strong> ve <strong>grafik anlatım</strong> ile 
              akılda kalıcı interaktif deneyimler tasarlayan bir geliştirici.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/projeler" className="punk-btn">
                PROJELERİ GÖR <ArrowUpRight size={20} />
              </Link>
              <Link href="/yazilar" className="punk-btn punk-btn-pink">
                ZİNE YAZILARI <Disc size={20} />
              </Link>
              <Link href="/hakkimda" className="punk-btn punk-btn-outline">
                LORE // HAKKIMDA
              </Link>
            </div>

            <div className={styles.tagPills}>
              <span className="sticker sticker-dark">#CREATIVE_DEV</span>
              <span className="sticker sticker-yellow">#NEXTJS</span>
              <span className="sticker sticker-pink">#PUNK_AESTHETICS</span>
              <span className="sticker">#REGULAR_SHOW_VIBES</span>
            </div>
          </div>

          {/* Right Column: Character Poster Frame */}
          <div className={styles.heroRight}>
            <div className={styles.avatarPosterCard}>
              <div className={styles.tapeTopLeft} />
              <div className={styles.tapeBottomRight} />

              <div className={styles.imageWrapper}>
                <Image
                  src="/images/firatcan-avatar.jpg"
                  alt="Fırat Can Karakoç - Regular Show Punk Illustration"
                  width={600}
                  height={600}
                  priority
                  className={styles.avatarImg}
                />
              </div>

              <div className={styles.posterCaption}>
                <span className={styles.captionTitle}>HYPERCAN // PARK REBEL</span>
                <span className={styles.captionBadge}>ADMIT ONE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS TEASER */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Terminal size={32} /> ÖNE ÇIKAN İŞLER
          </h2>
          <span className={styles.sectionBadge}>GIG TRACKS</span>
        </div>

        <div className={styles.grid}>
          {/* Project 1 */}
          <div className={styles.punkCard}>
            <div>
              <span className={styles.cardTag}>#01 // WEB APP & DESIGN</span>
              <h3 className={styles.cardTitle}>Cyber Zine Engine</h3>
              <p className={styles.cardText}>
                Markdown tabanlı, çizgi roman tarzı etkileşimler ve özel ses efektleri barındıran fanzin yayınlama platformu.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className="sticker sticker-yellow">NEXT.JS • CSS</span>
              <Link href="/projeler" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                DETAY <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.punkCard}>
            <div>
              <span className={styles.cardTag}>#02 // EXPERIMENTAL UI</span>
              <h3 className={styles.cardTitle}>Graffiti Paint Canvas</h3>
              <p className={styles.cardText}>
                Web tarayıcısı üzerinde sokak sanatı ve sprey boya hissi veren, interaktif SVG filtreli çizim tuvali.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className="sticker sticker-pink">REACT • CANVAS</span>
              <Link href="/projeler" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                DETAY <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.punkCard}>
            <div>
              <span className={styles.cardTag}>#03 // FULLSTACK TOOL</span>
              <h3 className={styles.cardTitle}>Tape Cassette Audio</h3>
              <p className={styles.cardText}>
                Retro 80'ler kaset animasyonuyla müzik çalan, Regular Show radyo sahnelerinden ilham alan ses çalar.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className="sticker">WEB AUDIO API</span>
              <Link href="/projeler" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                DETAY <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ZINE / ARTICLES TEASER */}
      <section className={`container ${styles.section}`} style={{ paddingTop: 20 }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Sparkles size={32} /> FANZİN VE DÜŞÜNCELER
          </h2>
          <Link href="/yazilar" className="punk-btn punk-btn-pink" style={{ fontSize: "1.1rem" }}>
            TÜM YAZILAR
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.punkCard} style={{ borderLeft: "6px solid var(--neon-pink)" }}>
            <div>
              <span className={styles.cardTag}>2026 // TASARIM & ESTETİK</span>
              <h3 className={styles.cardTitle}>Web Tasarımında Punk Kültürü ve Karakter</h3>
              <p className={styles.cardText}>
                Kurumsal sadelikten sıkılanlar için: Çizgi romanlar, zine dokuları ve Regular Show renk paletinin arayüzlerdeki gücü.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--wall-gray)" }}>
                5 dk okuma süresi
              </span>
              <Link href="/yazilar" className="punk-btn punk-btn-pink" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                OKU
              </Link>
            </div>
          </div>

          <div className={styles.punkCard} style={{ borderLeft: "6px solid var(--neon-yellow)" }}>
            <div>
              <span className={styles.cardTag}>2026 // GELİŞTİRME GÜNLÜĞÜ</span>
              <h3 className={styles.cardTitle}>Kişisel Portfolyomu Neden Baştan Yarattım?</h3>
              <p className={styles.cardText}>
                Hazır şablonlar yerine kendi fanzinimi kodlama sürecim, karşılaştığım eğlenceli zorluklar ve ilgi alanlarım.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--wall-gray)" }}>
                4 dk okuma süresi
              </span>
              <Link href="/yazilar" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                OKU
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
