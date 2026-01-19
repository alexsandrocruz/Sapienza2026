'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
    return (
        <section className="relative bg-[#020617] pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden text-center">
            {/* Mesh Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
                            Insights & Tecnologia
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight max-w-4xl mx-auto">
                        Arquitetando o <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                            Futuro Digital
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                        Compartilhamos conhecimento técnico e estratégico para ajudar empresas a navegar na complexidade da tecnologia moderna.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
