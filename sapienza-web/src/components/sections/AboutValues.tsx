'use client';

import { motion } from 'framer-motion';

const values = [
    {
        icon: '🚀',
        title: 'Tecnologia com propósito',
        description: 'Não desenvolvemos software por modismo. Cada decisão técnica precisa ter um motivo claro, um impacto esperado e um custo consciente.'
    },
    {
        icon: '📦',
        title: 'Produto antes de projeto',
        description: 'Pensamos em ciclo de vida, evolução e sustentabilidade. Projetos acabam; produtos permanecem.'
    },
    {
        icon: '🛡️',
        title: 'Profundidade técnica com responsabilidade',
        description: 'Arquitetura, segurança, performance e escalabilidade não são opcionais — são compromissos.'
    },
    {
        icon: '🔍',
        title: 'Clareza acima da complexidade',
        description: 'Explicamos, documentamos e organizamos. Tecnologia deve reduzir incerteza, não criar dependência.'
    },
    {
        icon: '🤝',
        title: 'Parceria, não dependência',
        description: 'Capacitamos times, estruturamos processos e deixamos o cliente mais forte ao final do caminho.'
    }
];

export default function AboutValues() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#020617] to-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
                        Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Valores</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Os princípios que guiam nossa engenharia e a forma como construímos o futuro digital.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, idx) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 hover:border-orange-500/30 transition-all duration-500"
                        >
                            <div className="space-y-6 relative z-10">
                                <div className="text-4xl group-hover:scale-110 transition-transform duration-500">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Visual filler card with call to action or brand slogan */}
                    <div className="relative group bg-gradient-to-br from-orange-500/20 to-blue-600/20 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center border border-white/10">
                        <h4 className="text-3xl font-black text-white/80 leading-tight">
                            "Projetos acabam; produtos permanecem."
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
