'use client';

import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const stats = [
    { number: 20, label: 'Anos de Experiência', suffix: '+' },
    { number: 150, label: 'Projetos Entregues', suffix: '+' },
    { number: 98, label: 'Satisfação dos Clientes', suffix: '%' },
    { number: 50, label: 'Clientes Ativos', suffix: '+' },
];

const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        });
        return () => controls.stop();
    }, [value]);

    return (
        <span>
            {displayValue}{suffix}
        </span>
    );
};

export default function AboutStats() {
    return (
        <section className="py-24 bg-[#020617] relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="relative group text-center"
                        >
                            {/* Background glow on hover */}
                            <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 space-y-2">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
                                    <Counter value={stat.number} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm md:text-md font-bold text-orange-500 uppercase tracking-[0.2em] max-w-[150px] mx-auto leading-relaxed">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
