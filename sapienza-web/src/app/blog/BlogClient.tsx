'use client';

import { useState, useMemo } from 'react';
import { BlogFilters, BlogCard } from '@/components/sections';
import { BlogPost } from '@/lib/mdx';

interface BlogClientProps {
    posts: BlogPost[];
    categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'Todos') return posts;
        return posts.filter(post => post.category === activeCategory);
    }, [activeCategory, posts]);

    const featuredPosts = useMemo(() => {
        return filteredPosts.slice(0, 2);
    }, [filteredPosts]);

    const regularPosts = useMemo(() => {
        return filteredPosts.slice(2);
    }, [filteredPosts]);

    return (
        <>
            {/* Premium Filters (Sticky) */}
            <BlogFilters
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />

            {/* Blog Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10">

                    {/* Featured Section */}
                    {featuredPosts.length > 0 && (
                        <div className="space-y-12">
                            <div className="flex items-center gap-4">
                                <h2 className="text-3xl font-black text-white">Destaques</h2>
                                <div className="h-[1px] flex-1 bg-white/5" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {featuredPosts.map((post) => (
                                    <BlogCard key={post.slug} post={post} featured />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Grid */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-black text-white">Artigos Recentes</h2>
                            <div className="h-[1px] flex-1 bg-white/5" />
                        </div>

                        {regularPosts.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {regularPosts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))}
                            </div>
                        ) : filteredPosts.length === 0 ? (
                            <div className="py-24 text-center space-y-6">
                                <div className="text-6xl text-gray-700">🔍</div>
                                <h3 className="text-2xl font-bold text-white">Nenhum artigo encontrado</h3>
                                <p className="text-gray-400">Tente outra categoria ou volte para 'Todos'.</p>
                                <button
                                    onClick={() => setActiveCategory('Todos')}
                                    className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-orange-500 hover:border-orange-500 transition-all"
                                >
                                    Ver todos os artigos
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />
            </section>
        </>
    );
}
