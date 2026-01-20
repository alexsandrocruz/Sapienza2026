'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function About() {
    const highlights = [
        {
            icon: '🎯',
            title: 'Engenharia de Precisão',
            description: 'Mais de 20 anos transformando conceitos complexos em arquiteturas de software resilientes e escaláveis.',
        },
        {
            icon: '🤝',
            title: 'Cultura de Cocriação',
            description: 'Não apenas entregamos código; fundimos nossa expertise com sua visão para orquestrar o sucesso digital.',
        },
        {
            icon: '⚡',
            title: 'Modernização Habilitada por IA',
            description: 'Aceleramos o ciclo de vida do software utilizando inteligência artificial generativa em cada etapa.',
        },
    ];

    return (
        <section id="about" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Premium Image/Visual Layer */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/images/hero-team.png"
                                alt="Sapienza Co-creation"
                                fill
                                className="object-cover opacity-60 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                        </div>

                        {/* Floating Experience Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-10 -right-6 lg:-right-10 bg-zinc-900/40 backdrop-blur-3xl p-8 rounded-3xl border border-white/10 shadow-3xl hidden sm:block max-w-[280px]"
                        >
                            <div className="flex items-center gap-6 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-900/40">
                                    <span className="text-3xl text-white font-black">20+</span>
                                </div>
                                <div className="h-10 w-[1px] bg-white/10" />
                                <div className="text-gray-400 text-xs font-mono uppercase tracking-widest leading-tight">Anos de <br />Engenharia Core</div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                &quot;Nossa história é escrita com o sucesso escalável de nossos parceiros.&quot;
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right: Narrative Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block text-orange-500 font-bold text-xs tracking-[0.4em] uppercase mb-4">
                                A Força por trás da Sapienza
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                                Orquestrando a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 drop-shadow-sm">Transformação</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-light">
                                Na Sapienza, acreditamos que o software de classe mundial nasce da interseção entre
                                <span className="text-white font-medium"> engenharia de rigor absoluto </span>
                                e <span className="text-white font-medium"> parcerias estratégicas baseadas em confiança</span>.
                            </p>
                        </motion.div>

                        {/* Highlights Grid */}
                        <div className="grid gap-8">
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group flex gap-6 p-6 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-500"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-6 pt-6"
                        >
                            <Link
                                href="/sobre"
                                className="group inline-flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase hover:text-orange-500 transition-colors"
                            >
                                Nossa Jornada <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                            <Link
                                href="/contato"
                                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-md"
                            >
                                Solicitar Diagnóstico
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
