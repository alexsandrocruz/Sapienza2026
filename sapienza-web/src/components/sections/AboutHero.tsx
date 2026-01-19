'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative bg-[#020617] pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Mesh Gradients */}
            <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
                                Sobre a Sapienza
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight">
                            Nascemos da{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                prática
                            </span>
                            <br />
                            <span className="text-4xl md:text-6xl text-gray-500 font-light">— não do hype.</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            Somos uma empresa de tecnologia focada em resolver problemas reais de negócio por meio de software bem projetado, processos claros e uso responsável de inteligência artificial.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Abstract futuristic visual element */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-600/20 rounded-[4rem] rotate-6 blur-2xl animate-pulse" />
                            <div className="absolute inset-0 border border-white/10 rounded-[4rem] -rotate-3 backdrop-blur-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                <div className="p-12 space-y-6">
                                    <div className="h-2 w-24 bg-orange-500/50 rounded-full" />
                                    <div className="space-y-2">
                                        <div className="h-4 w-full bg-white/10 rounded-full" />
                                        <div className="h-4 w-5/6 bg-white/10 rounded-full" />
                                        <div className="h-4 w-4/6 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="pt-8 grid grid-cols-2 gap-4">
                                        <div className="aspect-square bg-orange-500/20 rounded-3xl" />
                                        <div className="aspect-square bg-blue-500/20 rounded-3xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
