'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TrustLogosProps {
    title?: string;
    logos: {
        name: string;
        image: string;
    }[];
}

export default function TrustLogos({ title = 'Enterprise Ecosystem • Partnerships', logos }: TrustLogosProps) {
    return (
        <section className="py-20 bg-[#020617] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]"
                    >
                        {title}
                    </motion.h3>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                    {logos.map((logo, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 0.6, scale: 1 }}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative w-40 h-16 group cursor-default"
                        >
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                fill
                                className="object-contain filter grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
