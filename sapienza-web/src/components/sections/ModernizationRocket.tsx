'use client';

import { motion } from 'framer-motion';

interface Phase {
    id: string;
    label: string;
    description: string;
    color: string;
}

interface ModernizationRocketProps {
    data: {
        title: string;
        phases: Phase[];
    };
}

export default function ModernizationRocket({ data }: ModernizationRocketProps) {
    return (
        <section id="modernization-play" className="py-24 bg-white dark:bg-black overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Illustrations / Visual */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative z-10 flex justify-center"
                        >
                            {/* Simple Rocket SVG or Abstract Visual */}
                            <svg width="400" height="600" viewBox="0 0 400 600" className="drop-shadow-2xl">
                                <motion.g
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                >
                                    {/* Rocket Body */}
                                    <path d="M 200 50 C 150 150 150 350 150 500 L 250 500 C 250 350 250 150 200 50" fill="#f4f4f5" />
                                    <path d="M 150 400 L 100 500 L 150 500" fill="#e4e4e7" />
                                    <path d="M 250 400 L 300 500 L 250 500" fill="#e4e4e7" />

                                    {/* Windows */}
                                    <circle cx="200" cy="180" r="25" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />
                                    <circle cx="200" cy="280" r="20" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="2" />

                                    {/* Nose Color (Sapienza Theme) */}
                                    <path d="M 200 50 C 180 90 170 140 170 180 L 230 180 C 230 140 220 90 200 50" fill="#3b82f6" />

                                    {/* Flame / Exhaust */}
                                    <motion.path
                                        animate={{ scaleY: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                                        transition={{ repeat: Infinity, duration: 0.2 }}
                                        d="M 170 500 L 200 580 L 230 500 Z"
                                        fill="url(#flame-gradient)"
                                    />
                                </motion.g>

                                <defs>
                                    <linearGradient id="flame-gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#ef4444" />
                                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.div>

                        {/* Background Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-10" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
                    </div>

                    {/* Right: Steps Narrative */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-12 dark:text-white"
                        >
                            {data.title}
                        </motion.h2>

                        <div className="space-y-12">
                            {data.phases.map((phase, idx) => (
                                <motion.div
                                    key={phase.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="relative pl-12 border-l-2 border-gray-100 dark:border-white/10"
                                >
                                    {/* Dot Indicator */}
                                    <div
                                        className="absolute -left-2 top-0 w-4 h-4 rounded-full border-4 border-white dark:border-black shadow-lg"
                                        style={{ backgroundColor: phase.color }}
                                    />

                                    <h3
                                        className="text-2xl font-bold mb-3"
                                        style={{ color: phase.color }}
                                    >
                                        {phase.label}:
                                    </h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                                        {phase.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
