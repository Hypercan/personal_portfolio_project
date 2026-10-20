import Link from "next/link";
import styles from "./page.module.css";
import { getAllPosts } from "@/lib/posts";
import { ArrowUpRight, Flame, BookOpen, Clock, Calendar, Disc } from "lucide-react";

export const metadata = {
  title: "ZINE // TECH ESSAYS & WRITINGS",
  description:
    "Engineering essays, cognitive psychology notes, and creative development manifestos by Fırat Can Karakoç.",
};

export default function YazilarPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.main}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerBadge}>
            <Flame size={18} color="var(--neon-pink)" />
            <span>DEV LOGS &amp; ESSAYS</span>
          </div>

          <h1 className={styles.pageTitle}>
            ZINE // <span className={styles.titleAlt}>ARTICLES</span>
          </h1>

          <p className={styles.pageSubtitle}>
            A personal archive of technical breakdowns, cognitive science
            explorations, and lessons learned building software outside the
            lines.
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="container" style={{ paddingBottom: 80 }}>
        <div className={styles.articlesList}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <div className={styles.cardTape} />

              <div className={styles.metaRow}>
                <span className={styles.categoryBadge}>{post.category}</span>
                <div className={styles.metaInfo}>
                  <span className={styles.metaItem}>
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.metaItem}>
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h2 className={styles.postTitle}>
                <Link href={`/yazilar/${post.slug}`} className={styles.titleLink}>
                  {post.title}
                </Link>
              </h2>

              <p className={styles.postExcerpt}>{post.excerpt}</p>

              <div className={styles.footerRow}>
                <div className={styles.tagsGroup}>
                  {post.tags.map((tag) => (
                    <span key={tag} className="sticker sticker-dark">
                      #{tag}
                    </span>
                  ))}
                </div>

                <Link href={`/yazilar/${post.slug}`} className="punk-btn" style={{ padding: "8px 18px", fontSize: "1.05rem" }}>
                  READ ARTICLE <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe / Stay In Touch Box */}
        <div className={styles.zineBox}>
          <div className={styles.zineInner}>
            <div className={styles.zineText}>
              <div className={styles.zineBadge}>
                <Disc size={16} /> NOISE &amp; SIGNALS
              </div>
              <h3 className={styles.zineTitle}>THOUGHTS ON CODE &amp; PSYCHOLOGY</h3>
              <p className={styles.zineDesc}>
                I write about LLMs, human learning systems, and front-end
                experiments. Got thoughts or feedback on any of these essays?
              </p>
            </div>
            <div className={styles.zineActions}>
              <a
                href="mailto:fcankarakoc@gmail.com"
                className="punk-btn punk-btn-pink"
              >
                SEND A NOTE <ArrowUpRight size={16} />
              </a>
              <Link href="/hakkimda" className="punk-btn punk-btn-outline">
                AUTHOR LORE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
