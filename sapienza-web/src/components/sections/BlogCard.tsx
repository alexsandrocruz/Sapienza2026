'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/mdx';

interface BlogCardProps {
    post: BlogPost;
    featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-orange-500/30 transition-all duration-500 ${featured ? 'md:col-span-2' : ''
                }`}
        >
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-20" />

            <div className={`flex flex-col h-full ${featured ? 'md:flex-row' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'}`}>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />

                    <span className="absolute top-6 left-6 px-4 py-1.5 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full z-10">
                        {post.category}
                    </span>
                </div>

                {/* Content Section */}
                <div className={`p-8 md:p-10 flex flex-col justify-between flex-1 ${featured ? 'md:w-1/2' : ''}`}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full" />
                            <span>{post.readTime} de leitura</span>
                        </div>

                        <h3 className={`font-black text-white leading-tight group-hover:text-orange-400 transition-colors ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'
                            }`}>
                            {post.title}
                        </h3>

                        <p className="text-gray-400 font-light leading-relaxed line-clamp-3">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="pt-8 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {post.author.avatar ? (
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                                    <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[10px] font-bold text-orange-400">
                                    {post.author.name.charAt(0)}
                                </div>
                            )}
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-white">{post.author.name}</span>
                                <span className="text-[10px] text-gray-500 uppercase tracking-wider">{post.author.role}</span>
                            </div>
                        </div>

                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                            <span className="text-white">→</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
