'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
    {
        icon: '🎨',
        title: 'Design de Experiência',
        description: 'Transformamos a fricção em fluidez. Nossa filosofia design-first cria produtos que atingem o equilíbrio perfeito entre emoção e função.',
        href: '/servicos/design-de-experiencia',
        color: 'from-pink-500/20'
    },
    {
        icon: '🚀',
        title: 'Engenharia de Software',
        description: 'Construímos o núcleo do seu negócio com tecnologias de elite, garantindo performance, escalabilidade e arquitetura à prova de futuro.',
        href: '/servicos/desenvolvimento-de-produtos',
        color: 'from-orange-500/20'
    },
    {
        icon: '📱',
        title: 'Next-Gen Mobile',
        description: 'Experiências nativas e híbridas que transcendem a tela, conectando sua marca aos usuários de forma visceral e poderosa.',
        href: '/servicos/consultoria-apps-mobile',
        color: 'from-purple-500/20'
    },
    {
        icon: '🧠',
        title: 'IA & Data Intelligence',
        description: 'Convertemos dados brutos em inteligência acionável através de modelos preditivos e IA generativa integrada ao workflow.',
        href: '/servicos/analise-de-dados',
        color: 'from-emerald-500/20'
    },
    {
        icon: '🔄',
        title: 'Transformação Digital',
        description: 'Orquestramos a evolução da sua infraestrutura e processos, garantindo agilidade e competitividade na era da disrupção.',
        href: '/servicos/transformacao-digital',
        color: 'from-blue-500/20'
    },
    {
        icon: '🛒',
        title: 'E-commerce Scale',
        description: 'Plataformas resilientes com arquiteturas de alta conversão, otimizadas para performance máxima e escala global.',
        href: '/servicos/desenvolvimento-de-software',
        color: 'from-cyan-500/20'
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase">
                            Capacidades Integradas
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                            Arquitetura de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Soluções Elite</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                            Dominamos a fronteira tecnológica para orquestrar soluções que definem o futuro do seu negócio.
                        </p>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={service.href}
                                className="block h-full bg-zinc-900/30 backdrop-blur-3xl p-10 rounded-[48px] border border-white/5 hover:border-orange-500/40 transition-all duration-700 group relative overflow-hidden"
                            >
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10 space-y-8">
                                    <div className="w-20 h-20 bg-zinc-950 border border-white/5 rounded-3xl flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-orange-500 font-bold text-[10px] uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                        Explorar Engenharia <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All */}
                <div className="text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/servicos"
                            className="inline-flex items-center gap-3 text-orange-500 font-black text-xs uppercase tracking-[0.3em] hover:text-orange-400 transition-all hover:gap-5"
                        >
                            Ver todos os serviços <span>→</span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
