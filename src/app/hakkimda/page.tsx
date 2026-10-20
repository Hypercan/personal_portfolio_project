import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import {
  ArrowUpRight,
  Flame,
  Code2,
  Brain,
  Rocket,
  Terminal,
  Cpu,
  Layers,
  Mail,
} from "lucide-react";

const SKILLS = [
  { name: "Python", level: 80 },
  { name: "HTML / CSS", level: 85 },
  { name: "JavaScript", level: 75 },
  { name: "LLM / AI", level: 70 },
  { name: "RAG", level: 65 },
  { name: "LangChain", level: 60 },
  { name: "AWS", level: 50 },
  { name: "Git / GitHub", level: 75 },
];

const TECH_STACK = [
  { category: "FRONTEND", items: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { category: "BACKEND", items: ["Python", "Node.js"] },
  { category: "AI / ML", items: ["LLM", "RAG", "LangChain", "OpenAI API"] },
  { category: "CLOUD & DEVOPS", items: ["AWS", "Git", "GitHub"] },
];

const INTERESTS = [
  {
    icon: <Brain size={28} />,
    title: "Psychology & Learning Sciences",
    description:
      "Building tools that merge psychology with technology — apps focused on self-improvement, learning optimization, and cognitive growth.",
  },
  {
    icon: <Cpu size={28} />,
    title: "AI & Language Models",
    description:
      "Exploring the frontier of LLMs, RAG pipelines, and intelligent agents that can reason, create, and assist in meaningful ways.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Creative Development",
    description:
      "Crafting unique digital experiences where code meets art — interactive UIs, generative visuals, and unconventional web designs.",
  },
  {
    icon: <Layers size={28} />,
    title: "Personal Growth Tools",
    description:
      "Designing apps and systems that help people track habits, reflect on progress, and build better versions of themselves.",
  },
];

export default function HakkimdaPage() {
  return (
    <main>
      {/* ===== HERO / INTRO ===== */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image
            src="/images/park-concert-bg.jpg"
            alt="Park concert background"
            fill
            className={styles.heroBgImg}
            priority
          />
          <div className={styles.heroBgOverlay} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroImageCol}>
            <div className={styles.polaroidFrame}>
              <div className={styles.tapeTopLeft} />
              <div className={styles.tapeBottomRight} />
              <Image
                src="/images/about-skatepark.png"
                alt="Fırat Can Karakoç - Regular Show Style Illustration"
                width={420}
                height={520}
                priority
                className={styles.heroAvatar}
              />
              <div className={styles.polaroidCaption}>
                <span className={styles.captionName}>HYPERCAN</span>
                <span className={styles.captionTag}>PARK CREW</span>
              </div>
            </div>
          </div>

          <div className={styles.heroTextCol}>
            <div className={styles.roleSticker}>
              <Flame size={18} color="var(--neon-pink)" />
              <span>ASPIRING CREATIVE DEVELOPER</span>
            </div>

            <h1 className={styles.pageTitle}>
              LORE //{" "}
              <span className={styles.titleAccent}>ABOUT ME</span>
            </h1>

            <p className={styles.introText}>
              Hey, I&apos;m <strong>Fırat Can Karakoç</strong> — a second-year
              Back-End &amp; Front-End Software Development student at{" "}
              <strong>Anadolu University</strong>. I believe the best way to learn
              is to build things you genuinely care about.
            </p>

            <p className={styles.introText}>
              My motto is simple:{" "}
              <span className={styles.mottoHighlight}>
                Aim → Try → Fail → Learn.
              </span>{" "}
              Every project is a new episode, every bug is a plot twist, and every
              deploy is a season finale.
            </p>

            <div className={styles.heroCta}>
              <Link href="/projeler" className="punk-btn">
                VIEW PROJECTS <ArrowUpRight size={20} />
              </Link>
              <Link href="mailto:fcankarakoc@gmail.com" className="punk-btn punk-btn-pink">
                <Mail size={20} /> SAY HELLO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ORIGIN STORY ===== */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Rocket size={32} /> ORIGIN STORY
          </h2>
          <span className={styles.sectionBadge}>EPISODE 01</span>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.storyText}>
            <p>
              It all started with curiosity — the kind that keeps you up at 3 AM
              reading about how things work under the hood. I didn&apos;t come from
              a traditional CS background, but I discovered that writing code felt
              like creating something from nothing.
            </p>
            <p>
              What drives me isn&apos;t just building apps — it&apos;s building things
              that <em>matter</em>. Projects at the intersection of{" "}
              <strong>psychology</strong>, <strong>creativity</strong>, and{" "}
              <strong>personal growth</strong>. Tools that help people learn better,
              think clearer, and grow stronger.
            </p>
            <p>
              I&apos;m currently deep in the world of{" "}
              <strong>AI and language models</strong> — exploring how RAG pipelines,
              LangChain, and intelligent agents can transform the way we interact
              with information. At the same time, I&apos;m sharpening my full-stack
              skills with Python, JavaScript, and cloud technologies.
            </p>
            <p>
              This portfolio is my digital zine — raw, personal, and always
              evolving. Welcome to the park.
            </p>
          </div>

          <div className={styles.storyImageWrap}>
            <div className={styles.storyPolaroid}>
              <Image
                src="/images/about-livemusic.png"
                alt="Fırat Can - Live Music Scene Illustration"
                width={380}
                height={480}
                className={styles.storyImg}
              />
              <div className={styles.storyPolaroidLabel}>
                <Flame size={14} /> THE ORIGIN ARC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILL TREE ===== */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Terminal size={32} /> SKILL TREE
          </h2>
          <span className={styles.sectionBadge}>STATS</span>
        </div>

        <div className={styles.skillsGrid}>
          {SKILLS.map((skill) => (
            <div key={skill.name} className={styles.skillItem}>
              <div className={styles.skillInfo}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{skill.level}%</span>
              </div>
              <div className={styles.skillBarBg}>
                <div
                  className={styles.skillBarFill}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Cpu size={32} /> TECH STACK
          </h2>
          <span className={styles.sectionBadge}>LOADOUT</span>
        </div>

        <div className={styles.techGrid}>
          {TECH_STACK.map((group) => (
            <div key={group.category} className={styles.techCard}>
              <h3 className={styles.techCategory}>{group.category}</h3>
              <div className={styles.techItems}>
                {group.items.map((item) => (
                  <span key={item} className="sticker sticker-dark">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INTERESTS ===== */}
      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <Brain size={32} /> INTERESTS
          </h2>
          <span className={styles.sectionBadge}>SIDE QUESTS</span>
        </div>

        <div className={styles.interestsGrid}>
          {INTERESTS.map((interest) => (
            <div key={interest.title} className={styles.interestCard}>
              <div className={styles.interestIcon}>{interest.icon}</div>
              <h3 className={styles.interestTitle}>{interest.title}</h3>
              <p className={styles.interestDesc}>{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY / THIRD IMAGE ===== */}
      <section className={`container ${styles.section}`}>
        <div className={styles.galleryBanner}>
          <div className={styles.galleryImageWrap}>
            <Image
              src="/images/about-recordstore.png"
              alt="Fırat Can - Record Store Illustration"
              width={360}
              height={450}
              className={styles.galleryImg}
            />
          </div>
          <div className={styles.galleryText}>
            <h2 className={styles.galleryTitle}>
              ALWAYS DIGGING FOR SOMETHING NEW
            </h2>
            <p className={styles.galleryDesc}>
              Whether it&apos;s browsing through records, exploring a new framework,
              or diving deep into a research paper about cognitive science — I&apos;m
              always on the hunt for inspiration. The best ideas come from
              unexpected places.
            </p>
            <div className={styles.galleryStickers}>
              <span className="sticker sticker-yellow">#CURIOUS</span>
              <span className="sticker sticker-pink">#BUILDER</span>
              <span className="sticker">#LIFELONG_LEARNER</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={`container ${styles.section}`}>
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>
            READY TO JAM?
          </h2>
          <p className={styles.ctaText}>
            Got a project idea, want to collaborate, or just want to say hello?
            Let&apos;s connect.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/projeler" className="punk-btn">
              VIEW PROJECTS <ArrowUpRight size={20} />
            </Link>
            <a
              href="https://github.com/Hypercan"
              target="_blank"
              rel="noopener noreferrer"
              className="punk-btn punk-btn-outline"
            >
              GITHUB
            </a>
            <a
              href="mailto:fcankarakoc@gmail.com"
              className="punk-btn punk-btn-pink"
            >
              <Mail size={20} /> EMAIL ME
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
