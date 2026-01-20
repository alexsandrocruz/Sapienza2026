'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getHomeFeaturedCases, CaseProject } from '@/data/cases';

export function Portfolio() {
    const [displayProjects, setDisplayProjects] = useState<CaseProject[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMounted(true);
            setDisplayProjects(getHomeFeaturedCases(3));
        }, 0);
        return () => clearTimeout(timeout);
    }, []);

    if (!mounted) return null; // Or a skeleton

    return (
        <section id="portfolio" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase">
                            Success Stories • Showcase
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                            Impacto que <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Transforma</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                            Convergência entre engenharia de precisão e visão de negócio para entregar resultados exponenciais.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {displayProjects.map((project, idx) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col bg-zinc-900/20 rounded-[48px] overflow-hidden border border-white/5 hover:border-orange-500/40 transition-all duration-700 shadow-3xl"
                        >
                            <Link href={`/cases/${project.slug}`} className="absolute inset-0 z-20" />

                            <div className="relative h-72 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1 mix-blend-luminosity grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

                                <span className="absolute top-8 left-8 bg-zinc-950/40 backdrop-blur-xl border border-white/10 text-white px-5 py-2 rounded-2xl text-[10px] font-bold uppercase tracking-widest">
                                    {project.category}
                                </span>
                            </div>

                            <div className="p-10 flex flex-col flex-grow space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-auto space-y-6">
                                    <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 group-hover:bg-orange-500/5 group-hover:border-orange-500/20 transition-all duration-500">
                                        <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-500">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                                            RESULTADO: <br />
                                            <span className="text-white text-xs line-clamp-1">{project.results[0]}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-white/40 group-hover:text-orange-500 transition-colors pt-2">
                                        <span className="text-[10px] font-mono uppercase tracking-widest">Case_Study_v.2026</span>
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:rotate-45 transition-all">
                                            ↗
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/cases"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-[24px] font-black text-sm uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-orange-900/60 overflow-hidden"
                        >
                            <span className="relative z-10">Explorar Portfólio</span>
                            <span className="relative z-10 text-xl group-hover:translate-x-2 transition-transform">→</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
