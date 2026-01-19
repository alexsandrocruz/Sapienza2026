'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface Item {
    title: string;
    description: string;
    image: string;
    link?: string;
}

interface ModernizationGridProps {
    data: {
        title: string;
        description: string;
        items: Item[];
    };
}

export default function ModernizationGrid({ data }: ModernizationGridProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const visibleItems = isExpanded ? data.items : data.items.slice(0, 3);

    return (
        <section id="modernization-services" className="py-24 bg-gray-50/50 dark:bg-zinc-950/50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-16 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-6 dark:text-white"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
                    >
                        {data.description}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all"
                            >
                                <div className="relative h-64 w-full bg-gray-100 dark:bg-zinc-800">
                                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-900 via-transparent to-transparent z-10" />
                                    {/* Fallback to stylized box if no real image */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-emerald-500/20" />
                                    </div>
                                    <div className="absolute top-8 left-8 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 z-20">
                                        <span className="text-3xl text-blue-500">
                                            {idx % 3 === 0 ? '📊' : idx % 3 === 1 ? '🕵️' : '☁️'}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 relative z-20 -mt-12">
                                    <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-blue-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-blue-500 font-bold group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                                        <span>Saiba mais</span>
                                        <span className="text-xl">→</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {data.items.length > 3 && (
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 rounded-full border border-gray-200 dark:border-white/10 font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            <span>{isExpanded ? 'Ver menos' : 'Explorar todos os serviços'}</span>
                            <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className="text-lg"
                            >
                                ↓
                            </motion.span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
