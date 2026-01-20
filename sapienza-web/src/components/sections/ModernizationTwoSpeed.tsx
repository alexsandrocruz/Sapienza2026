'use client';

import { motion } from 'framer-motion';

interface Cycle {
    id: string;
    label: string;
    value: string;
    items: string[];
}

interface ModernizationTwoSpeedProps {
    data: {
        title: string;
        subtitle: string;
        cycles: Cycle[];
    };
}

export default function ModernizationTwoSpeed({ data }: ModernizationTwoSpeedProps) {
    return (
        <section id="two-speed" className="py-24 bg-gray-50 dark:bg-zinc-900/50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight dark:text-white"
                    >
                        {data.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-400"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto h-[500px] mt-12 bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-gray-200 dark:border-white/10 shadow-2xl">
                    {/* Chart Axes */}
                    <div className="absolute left-12 bottom-20 top-12 w-px bg-gray-300 dark:bg-white/20" />
                    <div className="absolute left-12 bottom-20 right-12 h-px bg-gray-300 dark:bg-white/20" />

                    {/* Y Axis Label */}
                    <div className="absolute -left-4 top-1/2 -rotate-90 text-sm font-bold uppercase tracking-widest text-gray-400">
                        VALOR DE NEGÓCIO
                    </div>
                    {/* X Axis Label */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold uppercase tracking-widest text-gray-400">
                        TEMPO / INVESTIMENTO
                    </div>

                    {/* SVG GRAPH */}
                    <svg viewBox="0 0 800 400" className="absolute inset-0 w-full h-full p-12 overflow-visible">
                        <defs>
                            <linearGradient id="gradient-cycle1" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="gradient-longterm" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Long Term Curve (Large area) */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            d="M 50 350 Q 200 50 400 150 Q 600 250 750 350"
                            fill="url(#gradient-longterm)"
                            stroke="#3b82f6"
                            strokeWidth="3"
                        />

                        {/* Cycle 1 Curves (Spikes) */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            d="M 80 350 L 120 150 L 180 350 M 250 350 L 300 100 L 350 350 M 500 350 L 550 80 L 600 350"
                            fill="url(#gradient-cycle1)"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                        />

                        {/* Floating Labels on Chart */}
                        <foreignObject x="150" y="80" width="200" height="60">
                            <div className="text-emerald-500 font-bold text-lg">Value Delivery Cycle 1</div>
                        </foreignObject>
                        <foreignObject x="400" y="160" width="200" height="60">
                            <div className="text-blue-500 font-bold text-xl">Long Term Transformation</div>
                        </foreignObject>
                    </svg>

                    {/* Legend Panels */}
                    <div className="absolute right-12 top-12 flex flex-col gap-4 w-48">
                        {data.cycles.map((cycle, idx) => (
                            <motion.div
                                key={cycle.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.2 }}
                                className={`p-4 rounded-xl border ${idx === 0 ? 'bg-emerald-50/50 border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20' : 'bg-blue-50/50 border-blue-100 dark:bg-blue-500/10 dark:border-blue-500/20'}`}
                            >
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-1 ${idx === 0 ? 'text-emerald-600' : 'text-blue-600'}`}>
                                    {cycle.label}
                                </h4>
                                <p className="text-sm font-semibold dark:text-white">{cycle.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Ongoing Evolution Arrow */}
                    <div className="absolute bottom-24 right-4 flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Ongoing Evolution</span>
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-emerald-500 text-xl"
                        >
                            →
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Details Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4">
                    {data.cycles.map((cycle) => (
                        <div key={cycle.id} className="p-8 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-100 dark:border-white/5 shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">{cycle.label}</h3>
                            <ul className="space-y-3">
                                {cycle.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
