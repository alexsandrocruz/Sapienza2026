'use client';

import { motion } from 'framer-motion';

interface ResultItem {
    metric: string;
    description: string;
    linkText: string;
    link: string;
    icon?: string;
}

interface ResultsGridProps {
    data: {
        title: string;
        items: ResultItem[];
    };
}

export default function ResultsGrid({ data }: ResultsGridProps) {
    return (
        <section id="results" className="py-24 bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 dark:text-white max-w-4xl"
                >
                    {data.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items.map((item, idx) => (
                        <motion.div
                            key={item.metric}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="p-10 rounded-3xl bg-zinc-900 border border-white/10 hover:border-emerald-500/50 transition-all group relative overflow-hidden"
                        >
                            {/* Subtle Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all" />

                            <div className="relative z-10">
                                <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 mb-8 group-hover:scale-110 transition-transform">
                                    <span className="text-3xl">
                                        {idx === 0 ? '☁️' : idx === 1 ? '📈' : '⚙️'}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 text-emerald-400">
                                    {item.metric}
                                </h3>
                                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                                    {item.description}
                                </p>

                                <a
                                    href={item.link}
                                    className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-emerald-500/30 hover:border-emerald-500 transition-all pb-1"
                                >
                                    {item.linkText}
                                    <span className="text-xl">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
