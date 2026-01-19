import { BlogHero, CTA } from '@/components/sections';
import { getAllPosts } from '@/lib/mdx';
import BlogClient from './BlogClient';

export const metadata = {
    title: 'Blog | Sapienza Digital',
    description: 'Insights sobre transformação digital, IA, cloud e modernização de sistemas',
};

export default async function BlogPage() {
    const allPosts = await getAllPosts();
    const categories = ['Todos', ...Array.from(new Set(allPosts.map(p => p.category)))];

    return (
        <main className="bg-[#020617] min-h-screen pb-24">
            <BlogHero />
            <BlogClient posts={allPosts} categories={categories} />
            <CTA />
        </main>
    );
}
