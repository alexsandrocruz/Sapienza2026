'use client';

import { motion } from 'framer-motion';

export default function AboutMissionVision() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-16 hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors" />

                        <div className="space-y-6 relative z-10">
                            <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                                🎯
                            </div>
                            <h2 className="text-4xl font-black text-white">Nossa <span className="text-orange-500">Missão</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                Transformar tecnologia em vantagem competitiva real, criando soluções digitais que funcionam no mundo concreto, geram valor contínuo e respeitam o contexto humano, organizacional e econômico de cada cliente.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 lg:p-16 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />

                        <div className="space-y-6 relative z-10">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                                👁️
                            </div>
                            <h2 className="text-4xl font-black text-white">Nossa <span className="text-blue-500">Visão</span></h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                Ser referência em engenharia de software aplicada a negócios, reconhecida pela profundidade técnica, clareza estratégica e pela capacidade de unir inovação, simplicidade e impacto real.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
