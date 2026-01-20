'use client';

import { motion } from 'framer-motion';

export default function CareersHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center bg-[#020617] overflow-hidden pt-20">
            {/* Ambient Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0)_0%,rgba(2,6,23,1)_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
                            Join the Elite • Sapienza Way
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                        Arquitetando sua <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Carreira Digital.</span>
                    </h1>

                    <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        Não somos apenas uma empresa de software. Somos uma célula de inteligência digital onde engenharia de precisão e criatividade estratégica se encontram. Buscamos mentes inquietas para construir o impossível.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                            <span className="text-2xl">🌍</span>
                            <div className="text-left">
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Modelo</p>
                                <p className="text-white font-bold">Remoto / Híbrido</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                            <span className="text-2xl">🚀</span>
                            <div className="text-left">
                                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Cultura</p>
                                <p className="text-white font-bold">Alta Performance</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-orange-500 to-transparent" />
                <span className="text-[9px] text-gray-500 uppercase tracking-[0.4em] font-medium">Explorar Vagas</span>
            </motion.div>
        </section>
    );
}
