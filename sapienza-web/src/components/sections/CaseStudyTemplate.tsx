'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CaseProject } from '@/data/cases';

interface CaseStudyTemplateProps {
    project: CaseProject;
}

export default function CaseStudyTemplate({ project }: CaseStudyTemplateProps) {
    return (
        <main className="bg-[#020617] min-h-screen">
            {/* Immersive Hero */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-40 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase mb-4 px-4 py-2 border border-orange-500/30 rounded-full bg-orange-500/5 backdrop-blur-md">
                            {project.category} • Case Study
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                            {project.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6">
                            <span className="text-gray-400 text-lg font-medium">{project.client}</span>
                            <div className="w-1 h-1 bg-orange-500 rounded-full" />
                            <span className="text-gray-400 text-lg font-medium">{project.date}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Cyber grid indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-px h-20 bg-gradient-to-b from-orange-500 to-transparent"
                    />
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Executive Summary */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-xl">
                                <h3 className="text-orange-500 font-black text-[10px] tracking-widest uppercase mb-8">
                                    Key Results
                                </h3>
                                <ul className="space-y-6">
                                    {project.results.map((res, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="mt-1.5 w-4 h-4 rounded-full border border-green-500/50 flex items-center justify-center bg-green-500/10">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
                                            </div>
                                            <span className="text-white text-lg font-medium leading-tight">{res}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-gray-500 font-black text-[10px] tracking-widest uppercase">
                                    Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-xs font-bold">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Narrative */}
                        <div className="lg:col-span-8 space-y-24">
                            {/* The Challenge */}
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold text-white tracking-tight">O Desafio</h2>
                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    {project.challenge || project.fullDescription || project.description}
                                </p>
                            </div>

                            {/* The Solution */}
                            <div className="space-y-8 bg-gradient-to-br from-orange-500/10 to-transparent p-12 rounded-[40px] border border-orange-500/10">
                                <h2 className="text-4xl font-bold text-white tracking-tight">A Orquestração</h2>
                                <p className="text-xl text-gray-400 leading-relaxed font-light">
                                    {project.solution || "Implementamos uma arquitetura de alta fidelidade focada em escalabilidade e precisão, fundindo tecnologias de fronteira com requisitos de negócio críticos."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
