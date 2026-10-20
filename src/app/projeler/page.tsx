"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import {
  ArrowUpRight,
  Brain,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Disc,
  FolderGit2,
  ExternalLink,
  Flame,
} from "lucide-react";

type Category = "all" | "ai" | "web" | "tools";

interface Project {
  id: string;
  title: string;
  tag: string;
  category: "ai" | "web" | "tools";
  categoryBadge: string;
  description: string;
  tech: string[];
  gradient: string;
  mockupGraphic: string;
  demoUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "psychemind-rag",
    title: "PsycheMind RAG",
    tag: "#01 // AI & PSYCHOLOGY",
    category: "ai",
    categoryBadge: "AI & LLM",
    description:
      "Intelligent cognitive journaling and psychology exploration companion. Built with LangChain and vector embeddings to surface recurring thought patterns and emotional trends over time.",
    tech: ["PYTHON", "LANGCHAIN", "RAG", "OPENAI", "FASTAPI"],
    gradient: "linear-gradient(135deg, #FF007F 0%, #7928CA 100%)",
    mockupGraphic: "🧠 PSYCHE_RAG.VEC",
    demoUrl: "https://github.com/Hypercan",
    githubUrl: "https://github.com/Hypercan",
  },
  {
    id: "neurolearn-flash",
    title: "NeuroLearn Accelerator",
    tag: "#02 // COGNITIVE SCIENCE",
    category: "tools",
    categoryBadge: "TOOLS & GROWTH",
    description:
      "Spaced repetition learning platform engineered around human memory retention curves. Generates interactive concept graph trees to visualize how knowledge connects.",
    tech: ["PYTHON", "REACT", "NEXT.JS", "AWS", "GRAPH-VIZ"],
    gradient: "linear-gradient(135deg, #00F0FF 0%, #0070F3 100%)",
    mockupGraphic: "⚡️ RETENTION_GRAPH.SYS",
    demoUrl: "https://github.com/Hypercan",
    githubUrl: "https://github.com/Hypercan",
  },
  {
    id: "cyber-zine-engine",
    title: "Cyber Zine Engine",
    tag: "#03 // INTERACTIVE WEB",
    category: "web",
    categoryBadge: "WEB & CREATIVE",
    description:
      "A markdown-driven interactive comic and punk zine publishing platform. Includes procedural tape stamps, custom halftone filters, and nostalgic comic click sound effects.",
    tech: ["NEXT.JS", "TYPESCRIPT", "CSS MODULES", "WEB AUDIO"],
    gradient: "linear-gradient(135deg, #E6FF00 0%, #FF007F 100%)",
    mockupGraphic: "📑 ZINE_VOL_01.MD",
    demoUrl: "https://github.com/Hypercan",
    githubUrl: "https://github.com/Hypercan",
  },
  {
    id: "habitforge-punk",
    title: "HabitForge 80s",
    tag: "#04 // BEHAVIORAL TOOLS",
    category: "tools",
    categoryBadge: "TOOLS & GROWTH",
    description:
      "Behavioral psychology habit tracker with 80s arcade micro-rewards. Features streak multipliers, boss-fight milestone reviews, and positive reinforcement feedback loops.",
    tech: ["JAVASCRIPT", "PYTHON", "CHART.JS", "LOCALFORAGE"],
    gradient: "linear-gradient(135deg, #FF4500 0%, #FF007F 100%)",
    mockupGraphic: "🕹️ HABIT_STREAK.ARCADE",
    demoUrl: "https://github.com/Hypercan",
    githubUrl: "https://github.com/Hypercan",
  },
  {
    id: "graffiti-canvas",
    title: "Graffiti Canvas Studio",
    tag: "#05 // EXPERIMENTAL UI",
    category: "web",
    categoryBadge: "WEB & CREATIVE",
    description:
      "Browser-based street art canvas featuring realistic spray drip physics, SVG noise blending, dynamic nozzle pressure variations, and multi-layer stencil export.",
    tech: ["HTML5 CANVAS", "REACT", "SVG FILTERS", "WEBGL"],
    gradient: "linear-gradient(135deg, #00F0FF 0%, #E6FF00 100%)",
    mockupGraphic: "🎨 SPRAY_DRIP.CANVAS",
    demoUrl: "https://github.com/Hypercan",
    githubUrl: "https://github.com/Hypercan",
  },
  {
    id: "tape-cassette-audio",
    title: "Tape Cassette Audio",
    tag: "#06 // AUDIO & DESIGN",
    category: "web",
    categoryBadge: "WEB & CREATIVE",
    description:
      "Regular Show park radio inspired retro cassette player. Features dual motorized reel spin animation, warm analog tape hiss generator, and a real-time audio spectrum visualizer.",
    tech: ["WEB AUDIO API", "CANVAS", "NEXT.JS", "CSS3"],
    gradient: "linear-gradient(135deg, #222222 0%, #444444 100%)",
    mockupGraphic: "📼 CASSETTE_SIDE_A.WAV",
    demoUrl: "https://github.com/Hypercan",
    githubUrl: "https://github.com/Hypercan",
  },
];

const CATEGORIES: { id: Category; label: string; icon: typeof Sparkles }[] = [
  { id: "all", label: "ALL TRACKS", icon: Disc },
  { id: "ai", label: "AI & LLM", icon: Brain },
  { id: "web", label: "WEB & CREATIVE", icon: Zap },
  { id: "tools", label: "TOOLS & GROWTH", icon: Layers },
];

export default function ProjelerPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className={styles.main}>
      {/* Header Banner */}
      <section className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerBadge}>
            <Flame size={18} color="var(--neon-pink)" />
            <span>DISCOGRAPHY // WORK LOG</span>
          </div>

          <h1 className={styles.pageTitle}>
            TRACKS // <span className={styles.titleAlt}>PROJECTS</span>
          </h1>

          <p className={styles.pageSubtitle}>
            A curated collection of experimental code, intelligent agents, and
            creative web prototypes built to push boundaries.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className={styles.filterBar}>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`${styles.filterBtn} ${
                    isActive ? styles.filterBtnActive : ""
                  }`}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                  <span className={styles.countBadge}>
                    {cat.id === "all"
                      ? PROJECTS.length
                      : PROJECTS.filter((p) => p.category === cat.id).length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container" style={{ paddingBottom: 80 }}>
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              {/* Tape Effect */}
              <div className={styles.cardTape} />

              {/* Graphic Mockup Header */}
              <div
                className={styles.mockupHeader}
                style={{ background: project.gradient }}
              >
                <div className={styles.mockupOverlay}>
                  <div className={styles.mockupDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className={styles.mockupTitle}>
                    {project.mockupGraphic}
                  </span>
                </div>

                <div className={styles.badgeWrapper}>
                  <span className={styles.catBadge}>
                    {project.categoryBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <span className={styles.projectTag}>{project.tag}</span>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDesc}>{project.description}</p>

                {/* Tech Badges */}
                <div className={styles.techList}>
                  {project.tech.map((t) => (
                    <span key={t} className="sticker sticker-dark">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={styles.cardFooter}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="punk-btn"
                  style={{ padding: "8px 16px", fontSize: "1.05rem" }}
                >
                  LIVE DEMO <ArrowUpRight size={16} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.gitBtn}
                >
                  <FolderGit2 size={18} />
                  <span>SOURCE</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className={styles.bottomCtaBox}>
          <div className={styles.bottomCtaInner}>
            <div>
              <h3 className={styles.bottomCtaTitle}>HAVE AN IDEA TO BUILD?</h3>
              <p className={styles.bottomCtaText}>
                Open for collaborations, creative hacks, or open-source builds.
              </p>
            </div>
            <div className={styles.bottomCtaActions}>
              <Link href="/hakkimda" className="punk-btn">
                READ THE LORE <ArrowUpRight size={18} />
              </Link>
              <a
                href="mailto:fcankarakoc@gmail.com"
                className="punk-btn punk-btn-pink"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
