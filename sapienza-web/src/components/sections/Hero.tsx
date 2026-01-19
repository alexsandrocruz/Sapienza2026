'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const heroRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.05]);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
                const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
                setMousePosition({ x, y });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-[100vh] lg:min-h-screen bg-[#020617] overflow-hidden flex items-center"
        >
            {/* Immersive Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Animated Mesh Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(2,6,23,1))]" />

                {/* Moving Glows */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 120, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"
                />

                {/* Cyber Grid */}
                <div
                    className="absolute inset-0 opacity-[0.2]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '80px 80px',
                        maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
                    }}
                />

                {/* Scanning Light Effect */}
                <motion.div
                    animate={{
                        top: ['-20%', '120%']
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute left-0 right-0 h-[300px] bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none z-0"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-2 items-center">

                    {/* Left: Narrative & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
                            >
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                                </span>
                                <span className="text-orange-400 font-bold text-[10px] uppercase tracking-[0.3em]">Sapienza 2026 • Enterprise Grade</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
                                <span className="block">Arquitetando o</span>
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 animate-gradient-x drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                        Futuro Digital
                                    </span>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 h-1 bg-orange-500/30"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 1.2, duration: 1.5 }}
                                    />
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                                Fundindo <span className="text-white font-medium">engenharia de precisão</span> com
                                <span className="text-white font-medium"> inteligência artificial </span>
                                para construir ecossistemas digitais que não apenas funcionam, mas lideram mercados.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-6 items-center">
                            <Link
                                href="/contato"
                                className="group relative px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(234,88,12,0.3)]"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Iniciar Transformação
                                    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </Link>

                            <Link
                                href="/cases"
                                className="px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold transition-all backdrop-blur-md flex items-center gap-2 group"
                            >
                                Ver Roadmap
                                <span className="opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
                            </Link>
                        </div>

                        {/* Social Proof / Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
                            {[
                                { val: '150+', label: 'Projetos' },
                                { val: '20+', label: 'Anos Core' },
                                { val: '10x', label: 'ROI em GenAI' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                >
                                    <div className="text-2xl md:text-3xl font-black text-white mb-1">{stat.val}</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Interactive 3D/Glass Interface */}
                    <motion.div
                        style={{ y: y1, opacity, scale }}
                        className="relative h-[420px] lg:h-[480px] flex items-center justify-center pointer-events-none lg:pointer-events-auto"
                    >
                        {/* Central Hub Card */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotateZ: [-0.5, 0.5, -0.5],
                            }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative z-20 w-full max-w-[400px] aspect-[4/5] rounded-[48px] overflow-hidden border border-white/20 shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-zinc-950/40 backdrop-blur-3xl"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/hero-team.png"
                                    alt="Sapienza Hub"
                                    fill
                                    className="object-cover opacity-40 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                            </div>

                            {/* HUD Overlays */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <div className="h-0.5 w-8 bg-orange-500" />
                                        <span className="text-[10px] font-mono text-orange-500/80">SAPIENZA_CORE_v26</span>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold text-white leading-tight">Orquestração Digital <br />de Alta Performance</h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                                            <div className="text-[10px] text-gray-400 font-mono">LATENCY</div>
                                            <div className="text-xl font-bold text-emerald-400">12ms</div>
                                        </div>
                                        <div className="p-4 bg-white/5 border border-white/10 rounded-3xl space-y-2">
                                            <div className="text-[10px] text-gray-400 font-mono">UPTIME</div>
                                            <div className="text-xl font-bold text-blue-400">99.99%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Satellite: Analytics */}
                        <motion.div
                            animate={{
                                y: [10, -10, 10],
                                x: [5, -5, 5],
                            }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            style={{
                                x: mousePosition.x * 30,
                                y: mousePosition.y * 20
                            }}
                            className="absolute -top-6 -right-4 w-[180px] h-[135px] rounded-3xl overflow-hidden border border-white/10 shadow-3xl z-30 bg-zinc-900/40 backdrop-blur-xl hidden xl:block"
                        >
                            <Image src="/images/hero-analytics.png" alt="Intelligence" fill className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 p-4 bg-gradient-to-t from-zinc-950/80 to-transparent flex flex-col justify-end">
                                <span className="text-[10px] font-bold text-orange-400">AI INSIGHTS</span>
                            </div>
                        </motion.div>

                        {/* Floating Satellite: Code/Process */}
                        <motion.div
                            animate={{
                                y: [-15, 15, -15],
                                x: [-8, 8, -8],
                            }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
                            style={{
                                x: mousePosition.x * -40,
                                y: mousePosition.y * -30
                            }}
                            className="absolute -bottom-10 -left-8 w-[200px] h-[250px] rounded-[40px] overflow-hidden border border-white/10 shadow-3xl z-10 bg-zinc-900/40 backdrop-blur-xl hidden xl:block"
                        >
                            <Image src="/images/hero-mobile.png" alt="Experience" fill className="object-cover opacity-50 mix-blend-screen" />
                            <div className="absolute inset-0 p-6 bg-gradient-to-t from-zinc-950/90 to-transparent flex flex-col justify-end gap-3">
                                <div className="space-y-1">
                                    <div className="h-0.5 w-6 bg-blue-500" />
                                    <p className="text-xs text-white font-medium uppercase tracking-wider">Multi-Device Synthesis</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Circles */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[120%] h-[120%] border border-orange-500/5 rounded-full" />
                            <div className="w-[140%] h-[140%] border border-blue-500/5 rounded-full" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[9px] text-gray-500 uppercase tracking-[0.6em] font-medium ml-2">Explorar</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-orange-500 to-transparent relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 80] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-[30%] bg-orange-200 blur-[1px]"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
