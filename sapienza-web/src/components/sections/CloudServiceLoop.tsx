'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Quadrant {
    id: 'assess' | 'operate' | 'maintain' | 'moderate';
    title: string;
    services: string[];
}

interface CloudServiceLoopProps {
    data: {
        title: string;
        description: string;
        quadrants: Quadrant[];
    };
}

export default function CloudServiceLoop({ data }: CloudServiceLoopProps) {
    const [activeQuadrant, setActiveQuadrant] = useState<string>(data.quadrants[0].id);

    return (
        <section className="py-24 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        {data.title}
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Loop Area */}
                    <div className="relative aspect-square max-w-md mx-auto w-full">
                        {/* The Infinity Shape (Simplified representation) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg viewBox="0 0 400 200" className="w-full h-auto opacity-20">
                                <path
                                    d="M100,100 C100,20 20,20 20,100 C20,180 100,180 100,100 C100,20 300,20 300,100 C300,180 380,180 380,100 C380,20 300,20 300,100"
                                    fill="none"
                                    stroke="url(#gradient)"
                                    strokeWidth="20"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#0ea5e9" />
                                        <stop offset="50%" stopColor="#10b981" />
                                        <stop offset="100%" stopColor="#0ea5e9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Interactive Nodes */}
                        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                            {data.quadrants.map((q) => (
                                <button
                                    key={q.id}
                                    onClick={() => setActiveQuadrant(q.id)}
                                    className={`relative z-10 flex flex-col items-center justify-center transition-all duration-300 ${activeQuadrant === q.id ? 'scale-110' : 'opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 border-2 ${activeQuadrant === q.id
                                            ? 'bg-sky-500/20 border-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.5)]'
                                            : 'bg-slate-800 border-slate-700'
                                        }`}>
                                        <span className="text-2xl font-bold text-white">
                                            {q.title.charAt(0)}
                                        </span>
                                    </div>
                                    <span className={`font-semibold ${activeQuadrant === q.id ? 'text-sky-400' : 'text-slate-400'
                                        }`}>
                                        {q.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeQuadrant}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 h-full"
                            >
                                <span className="inline-block px-4 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-6 uppercase tracking-wider">
                                    Quadrant: {activeQuadrant}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-8">
                                    {data.quadrants.find(q => q.id === activeQuadrant)?.title} Services
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.quadrants.find(q => q.id === activeQuadrant)?.services.map((service, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-800 transition-colors group"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-sky-500 group-hover:scale-150 transition-transform" />
                                            <span className="text-slate-300 font-medium">
                                                {service}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
