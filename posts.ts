import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string; // "2026-08-23"
  updatedAt?: string;
};

export type BlogPost = BlogFrontmatter & { content: string };

// All of this runs at build time (this file is only ever imported by server
// components / generateStaticParams / generateMetadata) — nothing here runs
// in the browser or at request time, which is required for output: "export".
export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    return { ...(data as BlogFrontmatter), content };
  });

  return posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
