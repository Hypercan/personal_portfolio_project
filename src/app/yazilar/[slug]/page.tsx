import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Flame,
  ArrowUpRight,
  Share2,
} from "lucide-react";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "POST NOT FOUND // PUNK ZINE",
    };
  }

  return {
    title: `${post.title} // PUNK ZINE`,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className="container">
        {/* Back Link */}
        <div className={styles.topBar}>
          <Link href="/yazilar" className={styles.backLink}>
            <ArrowLeft size={18} /> BACK TO ARTICLES
          </Link>
          <span className={styles.categoryBadge}>{post.category}</span>
        </div>

        {/* Article Header Box */}
        <header className={styles.articleHeader}>
          <div className={styles.headerTape} />

          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <Calendar size={15} />
              {post.date}
            </span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.metaItem}>
              <Clock size={15} />
              {post.readTime}
            </span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.authorBadge}>BY FIRAT CAN KARAKOÇ</span>
          </div>

          <h1 className={styles.articleTitle}>{post.title}</h1>

          <p className={styles.articleLead}>{post.excerpt}</p>

          <div className={styles.tagsGroup}>
            {post.tags.map((tag) => (
              <span key={tag} className="sticker sticker-dark">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content / Markdown Body */}
        <div className={styles.contentCard}>
          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Author Bio Footer Box */}
          <footer className={styles.authorBox}>
            <div className={styles.authorBadge}>
              <Flame size={16} color="var(--neon-pink)" />
              <span>WRITTEN BY HYPERCAN</span>
            </div>
            <h3 className={styles.authorName}>FIRAT CAN KARAKOÇ</h3>
            <p className={styles.authorBio}>
              Back-End &amp; Creative Developer exploring the nexus of
              psychology, language models, and expressive digital zines. Student
              at Anadolu University.
            </p>
            <div className={styles.authorLinks}>
              <Link href="/hakkimda" className="punk-btn">
                ABOUT ME <ArrowUpRight size={16} />
              </Link>
              <Link href="/projeler" className="punk-btn punk-btn-pink">
                SEE PROJECTS
              </Link>
              <Link href="/yazilar" className="punk-btn punk-btn-outline">
                MORE ARTICLES
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
