'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { casesData } from '@/data/cases';
import CaseCard from '@/components/sections/CaseCard';
import CaseFilters from '@/components/sections/CaseFilters';
import { CTA } from '@/components/sections';

export default function CasesPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const categories = useMemo(() => {
        const cats = new Set(casesData.map(c => c.category));
        return Array.from(cats);
    }, []);

    const filteredCases = useMemo(() => {
        if (activeCategory === 'Todos') return casesData;
        return casesData.filter(c => c.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="bg-[#020617] min-h-screen pt-32">
            {/* Hero Section with Cinematic Background */}
            <section className="relative py-20 overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.4em] uppercase mb-4 border border-orange-500/30 px-4 py-2 rounded-full bg-orange-500/5">
                            Showcase • 2024-2026
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Arquitetura de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                Resultados Reais
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Da automação logística à orquestração de sistemas de missão crítica.
                            Explore como fundimos engenharia de precisão com inteligência transformadora.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-20 z-40 bg-[#020617]/80 backdrop-blur-xl py-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <CaseFilters
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />
                </div>
            </section>

            {/* Grid Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        layout
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredCases.map((project, idx) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <CaseCard project={project} index={idx} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredCases.length === 0 && (
                        <div className="text-center py-40">
                            <h3 className="text-2xl text-gray-500 font-medium">Nenhum projeto encontrado nesta categoria.</h3>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonial / Trust Section */}
            <section className="py-32 bg-[#0b0f19] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] to-transparent h-40" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <span className="text-orange-500 text-5xl mb-12 block group-hover:scale-110 transition-transform">"</span>
                    <blockquote className="text-2xl md:text-4xl text-white font-medium italic mb-12 leading-tight tracking-tight">
                        A Sapienza transformou nossa visão em uma arquitetura de alta fidelidade em tempo recorde.
                        A precisão técnica deles é o que nos permitiu escalar sem atrito.
                    </blockquote>
                    <div className="flex items-center justify-center gap-6">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                            <Image
                                src="/images/testimonial-carlos.jpg"
                                alt="Carlos Eduardo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-white text-xl">Carlos Eduardo</div>
                            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase">CEO, Fundamental1e2</div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
