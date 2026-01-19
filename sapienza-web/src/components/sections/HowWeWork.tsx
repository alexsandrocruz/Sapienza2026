'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Diagnóstico',
        desc: 'Estratégico e técnico, antes de qualquer linha de código.'
    },
    {
        title: 'Arquitetura',
        desc: 'Moderna, orientada a domínio e escalável.'
    },
    {
        title: 'Desenvolvimento',
        desc: 'Orientado a produto, com ciclos curtos e validação constante.'
    },
    {
        title: 'Integração IA',
        desc: 'Quando faz sentido — com controle de custo e governança.'
    }
];

export default function HowWeWork() {
    return (
        <section className="py-24 bg-[#020617]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[4rem] p-12 lg:p-20 overflow-hidden relative">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Como <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Trabalhamos</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                Nossa abordagem combina rigor técnico com agilidade estratégica.
                                Focamos no ciclo de vida completo do seu produto digital.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-white font-medium">
                                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                                    <span>Não empurramos tecnologia desnecessária</span>
                                </div>
                                <div className="flex items-center gap-4 text-white font-medium">
                                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                                    <span>Não confundimos velocidade com pressa</span>
                                </div>
                                <div className="flex items-center gap-4 text-white font-medium">
                                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                                    <span>Software como ativo estratégico</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500/40 transition-colors"
                                >
                                    <div className="text-3xl font-black text-blue-500/30">
                                        0{idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 font-light">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
