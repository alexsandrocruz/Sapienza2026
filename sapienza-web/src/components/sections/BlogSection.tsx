import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';

export function BlogSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm border-l-4 border-orange-500 pl-4">
                            Blog & Insights
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 tracking-tight">
                            Últimas da Sapienza
                        </h2>
                        <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                            Acompanhe nossa visão sobre tecnologia, engenharia de software e transformação digital.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group"
                    >
                        Ver todas as postagens
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.slice(0, 3).map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 tracking-wider uppercase">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="text-sm text-gray-500 mb-4 font-medium">
                                    {post.date}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-gray-900 font-bold hover:text-orange-500 transition-colors"
                                    >
                                        Ler artigo completo
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors"
                    >
                        Ver todas as postagens
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
