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
              Breaking conventional digital molds with <strong>creative code</strong>, 
              <strong>fanzine spirit</strong>, and <strong>graphic storytelling</strong> to 
              craft memorable interactive web experiences.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/projeler" className="punk-btn">
                VIEW PROJECTS <ArrowUpRight size={20} />
              </Link>
              <Link href="/yazilar" className="punk-btn punk-btn-pink">
                ZINE ARTICLES <Disc size={20} />
              </Link>
              <Link href="/hakkimda" className="punk-btn punk-btn-outline">
                ABOUT ME
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
            <Terminal size={32} /> FEATURED TRACKS
          </h2>
          <span className={styles.sectionBadge}>GIG TRACKS</span>
        </div>

        <div className={styles.grid}>
          {/* Project 1 */}
          <div className={styles.punkCard}>
            <div>
              <span className={styles.cardTag}>#01 // WEB APP &amp; DESIGN</span>
              <h3 className={styles.cardTitle}>Cyber Zine Engine</h3>
              <p className={styles.cardText}>
                Markdown-driven publishing platform with comic-book style interactions, procedural tape effects, and custom sound design.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className="sticker sticker-yellow">NEXT.JS • CSS</span>
              <Link href="/projeler" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                VIEW TRACK <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className={styles.punkCard}>
            <div>
              <span className={styles.cardTag}>#02 // EXPERIMENTAL UI</span>
              <h3 className={styles.cardTitle}>Graffiti Paint Canvas</h3>
              <p className={styles.cardText}>
                Interactive browser-based street art canvas featuring procedural spray drip physics and SVG noise blending.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className="sticker sticker-pink">REACT • CANVAS</span>
              <Link href="/projeler" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                VIEW TRACK <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className={styles.punkCard}>
            <div>
              <span className={styles.cardTag}>#03 // FULLSTACK TOOL</span>
              <h3 className={styles.cardTitle}>Tape Cassette Audio</h3>
              <p className={styles.cardText}>
                Retro 80s tape stereo audio player with animated reel mechanics, inspired by Regular Show park radio scenes.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span className="sticker">WEB AUDIO API</span>
              <Link href="/projeler" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                VIEW TRACK <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ZINE / ARTICLES TEASER */}
      <section className={`container ${styles.section}`} style={{ paddingTop: 20 }}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Sparkles size={32} /> ZINE &amp; ESSAYS
          </h2>
          <Link href="/yazilar" className="punk-btn punk-btn-pink" style={{ fontSize: "1.1rem" }}>
            ALL ARTICLES
          </Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.punkCard} style={{ borderLeft: "6px solid var(--neon-pink)" }}>
            <div>
              <span className={styles.cardTag}>2026 // DESIGN &amp; CULTURE</span>
              <h3 className={styles.cardTitle}>Why I Built a Neo-Punk Zine Portfolio Instead of Minimalist Templates</h3>
              <p className={styles.cardText}>
                Escaping corporate beige through comic textures, masking tape, and expressive fanzine typography.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--wall-gray)" }}>
                4 min read
              </span>
              <Link href="/yazilar/rethinking-creative-developer-portfolios" className="punk-btn punk-btn-pink" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                READ <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className={styles.punkCard} style={{ borderLeft: "6px solid var(--neon-yellow)" }}>
            <div>
              <span className={styles.cardTag}>2026 // AI &amp; SYSTEMS</span>
              <h3 className={styles.cardTitle}>Building Reliable RAG Systems: Beyond Basic Vectors</h3>
              <p className={styles.cardText}>
                A practical guide to chunking strategies, hybrid keyword search, and cross-encoder reranking.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--wall-gray)" }}>
                6 min read
              </span>
              <Link href="/yazilar/building-reliable-rag-systems" className="punk-btn" style={{ padding: "6px 12px", fontSize: "1rem" }}>
                READ <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
