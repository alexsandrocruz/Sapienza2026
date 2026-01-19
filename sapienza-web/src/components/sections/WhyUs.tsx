'use client';

import { motion } from 'framer-motion';

const differentials = [
    {
        icon: '💎',
        title: 'Engenharia de Precisão',
        description: 'Arquiteturas resilientes e código de alta fidelidade, orquestrados com rigor técnico em cada entrega.',
        gradient: 'from-blue-500/20'
    },
    {
        icon: '🚀',
        title: 'Velocidade GenAI',
        description: 'Ciclos de vida acelerados por inteligência artificial generativa, reduzindo o time-to-market em até 10x.',
        gradient: 'from-orange-500/20'
    },
    {
        icon: '🛡️',
        title: 'Segurança por Design',
        description: 'Conformidade e proteção de dados integradas nativamente no núcleo de cada solução digital.',
        gradient: 'from-emerald-500/20'
    },
    {
        icon: '🧠',
        title: 'Experiência Ambidestra',
        description: 'O equilíbrio perfeito entre inovação disruptiva e estabilidade operacional inabalável.',
        gradient: 'from-purple-500/20'
    },
    {
        icon: '⚡',
        title: 'Agilidade Contínua',
        description: 'Metodologias ágeis verdadeiras com feedback loops em tempo real e evolução constante.',
        gradient: 'from-red-500/20'
    },
    {
        icon: '🤝',
        title: 'Parceria Estratégica',
        description: 'Atuamos como o motor tecnológico do seu crescimento, co-criando o futuro do seu negócio.',
        gradient: 'from-orange-600/20'
    },
];

export function WhyUs() {
    return (
        <section id="why-us" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase">
                            Diferenciais Sapienza
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                            Elevando o Padrão da <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Engenharia Digital</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            Não apenas competimos; redefinimos o que é possível através da convergência entre rigor técnico e inovação exponencial.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentials.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/40 backdrop-blur-3xl p-10 rounded-[48px] border border-white/5 hover:border-orange-500/40 transition-all duration-700 group relative overflow-hidden"
                        >
                            {/* Inner Gradient Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            {/* Animated Border Reveal */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/40 transition-all duration-1000" />

                            <div className="relative z-10 space-y-8">
                                <div className="w-20 h-20 bg-zinc-950 border border-white/5 rounded-3xl flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out">
                                    {item.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/5 group-hover:border-orange-500/20 group-hover:text-orange-500/40 transition-all duration-500">
                                0{idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
