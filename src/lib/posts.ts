import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  readTime: string;
  excerpt: string;
  category: string;
}

export interface PostDetail extends PostMetadata {
  contentHtml: string;
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        tags: data.tags || [],
        readTime: data.readTime || "5 min read",
        excerpt: data.excerpt || "",
        category: data.category || "TECHNOLOGY",
      };
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const contentHtml = await marked.parse(content);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      tags: data.tags || [],
      readTime: data.readTime || "5 min read",
      excerpt: data.excerpt || "",
      category: data.category || "TECHNOLOGY",
      contentHtml,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}
