'use client';

import { motion } from 'framer-motion';

const teams = [
    {
        icon: '👨‍💻',
        name: 'Product Pods',
        role: 'Full-Stack Engineers',
        description: 'Engenheiros focados na entrega contínua de valor e qualidade arquitetural.'
    },
    {
        icon: '🤖',
        name: 'AI Pods',
        role: 'AI Engineers & Scientists',
        description: 'Especialistas em integrar inteligência generativa e automação inteligente aos fluxos de negócio.'
    },
    {
        icon: '🎨',
        name: 'Design Strategy',
        role: 'UX/UI & Product Strategy',
        description: 'Designer focados em usabilidade, estética premium e alinhamento com os objetivos de marketing.'
    },
    {
        icon: '☁️',
        name: 'Cloud & Data',
        role: 'DevOps & Data Engineers',
        description: 'Infraestrutura escalável e pipelines de dados que suportam o crescimento do produto.'
    }
];

export default function EnhancedTeamSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-[#020617]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-16 items-start">
                    <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
                                Nossa Equipe
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Profundidade Técnica com <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Responsabilidade</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            Organizamos nossos talentos em **Pods de Alta Performance**. Cada squad é multidisciplinar e orientada a produto, garantindo clareza e agilidade.
                        </p>

                        <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-[2rem]">
                            <p className="text-lg text-blue-100 font-medium">
                                &quot;Não entregamos pacotes de horas. Entregamos células de inteligência digital que se integram ao seu contexto.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                        {teams.map((team, idx) => (
                            <motion.div
                                key={team.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:border-orange-500/30 transition-all duration-300"
                            >
                                <div className="space-y-6">
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                        {team.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
                                        <p className="text-sm font-bold text-orange-500/80 uppercase tracking-widest mb-4">
                                            {team.role}
                                        </p>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            {team.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
