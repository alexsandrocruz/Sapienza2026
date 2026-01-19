'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const solutions = [
    {
        icon: '🛒',
        title: 'E-commerce Scale',
        description: 'Plataformas de alta conversão com arquiteturas headless e performance otimizada.',
        href: '/servicos/desenvolvimento-de-software',
        size: 'large',
        color: 'from-orange-500/20'
    },
    {
        icon: '📊',
        title: 'Enterprise ERP',
        description: 'Sistemas core adaptados às necessidades específicas do seu negócio.',
        href: '/servicos/desenvolvimento-de-software',
        size: 'small',
        color: 'from-blue-500/10'
    },
    {
        icon: '🧠',
        title: 'AI & Data Intelligence',
        description: 'Sistemas que aprendem e evoluem com seus dados.',
        href: '/servicos/ia-generativa',
        size: 'small',
        color: 'from-emerald-500/10'
    },
    {
        icon: '📱',
        title: 'Next-Gen Mobile',
        description: 'Apps nativos com experiências ricas e integração profunda.',
        href: '/servicos/consultoria-apps-mobile',
        size: 'small',
        color: 'from-purple-500/10'
    },
    {
        icon: '🌐',
        title: 'Digital Platforms',
        description: 'Ecossistemas completos para engajamento e escala global.',
        href: '/servicos/desenvolvimento-de-produtos',
        size: 'large',
        color: 'from-red-500/20'
    },
    {
        icon: '♻️',
        title: 'Legacy Modernization',
        description: 'Transformação incremental e segura de sistemas críticos.',
        href: '/servicos/modernizacao-legado',
        size: 'small',
        color: 'from-orange-500/10'
    },
];

export function Solutions() {
    return (
        <section id="solutions" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase">
                            Unidade de Engenharia & Inovação
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Potencializando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 px-2">Impossível</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            Exploramos a fronteira tecnológica para orquestrar soluções que definem indústrias e aceleram o futuro.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`${item.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'} group relative`}
                        >
                            <Link
                                href={item.href}
                                className="block h-full p-10 bg-[#0f172a]/40 hover:bg-[#1e293b]/40 backdrop-blur-3xl border border-white/5 hover:border-orange-500/40 rounded-[40px] transition-all duration-700 relative overflow-hidden group shadow-2xl"
                            >
                                {/* Gradient Background Pulse */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                {/* Animated Border Glow */}
                                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="space-y-6">
                                        <div className="text-6xl transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 ease-out inline-block">
                                            {item.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-[320px] group-hover:text-gray-300 transition-colors">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-3 text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-20px] group-hover:translate-x-0">
                                            <span className="text-[10px] uppercase tracking-[0.3em]">Explorar</span>
                                            <span className="text-xl">→</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 group-hover:text-orange-500 transition-all duration-500">
                                            <span className="text-lg">↗</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
