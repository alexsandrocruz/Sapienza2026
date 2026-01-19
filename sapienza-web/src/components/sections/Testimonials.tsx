'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: 'A Sapienza orquestrou nossa jornada digital com uma maestria técnica raramente vista. O impacto nos nossos indicadores core foi imediato e profundo.',
        author: 'Carlos Eduardo',
        role: 'CEO, Fundamental1e2',
        image: '/images/testimonial-carlos.jpg',
        gradient: 'from-orange-500/10'
    },
    {
        quote: 'Uma parceria definida por rigor e inovação. A capacidade da equipe de fundir engenharia de precisão com velocidade GenAI é um diferencial competitivo real.',
        author: 'Maria Santos',
        role: 'VP de Operações Digitais',
        image: '/images/hero-team.png',
        gradient: 'from-blue-500/10'
    },
    {
        quote: 'Além da entrega técnica impecável, a Sapienza atua como um braço estratégico, co-criando soluções que realmente movem o ponteiro do negócio.',
        author: 'João Silva',
        role: 'Founder, TechLogistics',
        image: '/images/hero-analytics.png',
        gradient: 'from-emerald-500/10'
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Cinematic Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

            {/* Decorative Divider */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase">
                            Voices of Success • Trust
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                            Vozes de quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Transformou</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                            A confiança dos nossos parceiros é o combustível da nossa excelência tecnológica.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 p-12 rounded-[48px] flex flex-col justify-between hover:bg-[#1e293b]/40 hover:border-orange-500/30 transition-all duration-700 h-full"
                        >
                            {/* Inner Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10">
                                <div className="text-7xl text-orange-500/10 font-serif mb-8 group-hover:text-orange-500/30 transition-colors duration-500 leading-none">“</div>
                                <p className="text-gray-300 text-xl mb-12 leading-relaxed font-light italic">
                                    {testimonial.quote}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden relative border border-white/10 group-hover:border-orange-500/50 transition-all duration-500 grayscale group-hover:grayscale-0 shadow-2xl">
                                    <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-bold text-white text-lg tracking-tight group-hover:text-orange-400 transition-colors">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute top-12 right-12 w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-white/5 group-hover:text-orange-500/20 transition-all">
                                <span className="text-[10px] font-mono">0{idx + 1}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
