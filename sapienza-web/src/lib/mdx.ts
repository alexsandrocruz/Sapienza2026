import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Callout, Card, TwoColumnGrid } from '@/components/mdx';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    description: string;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    date: string;
    readTime: string;
    image: string;
    category: string;
    tags: string[];
    readingTime: string;
    featured?: boolean;
    content?: React.ReactNode;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            const stats = readingTime(content);

            return {
                id: slug,
                slug,
                title: data.title,
                excerpt: data.description,
                description: data.description,
                author: {
                    name: data.author || 'Sapienza Team',
                    role: 'Especialista em Tecnologia',
                },
                date: data.date,
                readTime: stats.text,
                image: data.image || '/images/blog/default.jpg',
                category: data.category || 'Tecnologia',
                tags: data.tags || [],
                readingTime: stats.text,
            };
        });

    return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<BlogPost | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const stats = readingTime(content);

        const { content: mdxContent } = await compileMDX({
            source: content,
            components: {
                Callout,
                Card,
                TwoColumnGrid,
            },
            options: {
                parseFrontmatter: false,
                mdxOptions: {
                    rehypePlugins: [
                        rehypeSlug,
                        [
                            rehypePrettyCode,
                            {
                                theme: 'github-dark',
                                keepBackground: false,
                            },
                        ],
                        [
                            rehypeAutolinkHeadings,
                            {
                                behavior: 'wrap',
                                properties: {
                                    className: ['anchor'],
                                },
                            },
                        ],
                    ],
                },
            },
        });

        return {
            id: slug,
            slug,
            title: data.title,
            excerpt: data.description,
            description: data.description,
            author: {
                name: data.author || 'Sapienza Team',
                role: 'Especialista em Tecnologia',
            },
            date: data.date,
            readTime: stats.text,
            image: data.image || '/images/blog/default.jpg',
            category: data.category || 'Tecnologia',
            tags: data.tags || [],
            readingTime: stats.text,
            content: mdxContent,
        };
    } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        return null;
    }
}

export async function getPostSlugs(): Promise<string[]> {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => fileName.replace(/\.mdx$/, ''));
}
