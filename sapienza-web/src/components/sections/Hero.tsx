'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
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

    // Floating animation keyframes
    const floatStyle = `
    @keyframes float1 {
      0%, 100% { transform: translateY(0px) rotate(-5deg); }
      50% { transform: translateY(-20px) rotate(-3deg); }
    }
    @keyframes float2 {
      0%, 100% { transform: translateY(0px) rotate(3deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    @keyframes float3 {
      0%, 100% { transform: translateY(0px) rotate(-3deg); }
      50% { transform: translateY(-25px) rotate(-5deg); }
    }
  `;

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
        >
            <style jsx>{floatStyle}</style>

            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />

            {/* Decorative circles */}
            <div className="absolute top-1/4 right-1/3 w-32 h-32 border border-orange-500/30 rounded-full" />
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-orange-500/20 rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-orange-500/20 rounded-full" />

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: 'linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="relative container mx-auto px-6 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
                    {/* Text Content */}
                    <div className="space-y-8 z-10">
                        <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase border border-orange-500/30 px-4 py-2 rounded-full">
                            Transformação Digital
                        </span>

                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                            BUILD A<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                TIMELESS
                            </span>
                            <br />IMPACT
                        </h1>

                        <p className="text-gray-300 text-lg lg:text-xl max-w-xl leading-relaxed">
                            Desenvolvemos soluções digitais inovadoras que transformam negócios e criam experiências memoráveis para seus clientes.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/contato"
                                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
                            >
                                Começar Projeto
                            </Link>
                            <Link
                                href="/cases"
                                className="border-2 border-white/20 hover:border-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-orange-500/10"
                            >
                                Ver Portfolio
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">150+</div>
                                <div className="text-gray-400 text-sm">Projetos Entregues</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">98%</div>
                                <div className="text-gray-400 text-sm">Satisfação</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white mb-1">12+</div>
                                <div className="text-gray-400 text-sm">Anos Experiência</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Images - Efeito líquido com deslocamento suave */}
                    <div className="relative h-[600px] hidden lg:block">
                        {/* Image 1 - Top Right - Analytics - Move para direita e cima ao passar mouse */}
                        <div
                            className="absolute top-0 right-0 w-[220px] h-[280px] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 cursor-pointer transition-transform duration-700 ease-out"
                            style={{
                                animation: 'float1 6s ease-in-out infinite',
                                transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px) rotate(${-5 + mousePosition.x * 3}deg)`,
                            }}
                        >
                            <Image src="/images/hero-analytics.png" alt="Data Analytics" fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>

                        {/* Image 2 - Center - Team - Move na direção oposta ao mouse */}
                        <div
                            className="absolute top-1/3 left-1/4 w-[200px] h-[260px] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 cursor-pointer transition-transform duration-500 ease-out z-10"
                            style={{
                                animation: 'float2 5s ease-in-out infinite 0.5s',
                                transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -30}px) rotate(${3 + mousePosition.y * 4}deg)`,
                            }}
                        >
                            <Image src="/images/hero-team.png" alt="Equipe Sapienza" fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent" />
                        </div>

                        {/* Image 3 - Bottom Right - Mobile - Move diagonal com efeito mais lento */}
                        <div
                            className="absolute bottom-10 right-10 w-[240px] h-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-orange-500/20 cursor-pointer transition-transform duration-1000 ease-out"
                            style={{
                                animation: 'float3 7s ease-in-out infinite 1s',
                                transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -35}px) rotate(${-3 + mousePosition.x * -2}deg) skewY(${mousePosition.y * 2}deg)`,
                            }}
                        >
                            <Image src="/images/hero-mobile.png" alt="Mobile Apps" fill className="object-cover" priority />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            {/* Floating badge */}
                            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm">🏆</div>
                                    <div>
                                        <div className="text-white font-bold text-xs">Top Rated</div>
                                        <div className="text-gray-300 text-[10px]">Digital Agency</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative S icon - também reage ao mouse */}
                        <div
                            className="absolute top-1/4 left-1/2 w-16 h-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center transition-transform duration-300"
                            style={{
                                transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -10}px)`,
                            }}
                        >
                            <span className="text-orange-500 text-2xl font-bold">S</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-gray-400 text-xs uppercase tracking-wider">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-orange-500 rounded-full" />
                </div>
            </div>
        </section>
    );
}
