'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DominusForm } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

export function CTA() {
    return (
        <section className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Ambient Cinematic Background */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left side: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <span className="inline-block text-orange-500 font-black text-[10px] tracking-[0.5em] uppercase">
                                Ignition • Connect
                            </span>
                            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                                Let&apos;s <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Talk.</span>
                            </h2>
                            <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-light">
                                Orquestramos clareza estratégica e execução de alta fidelidade. Se você busca um parceiro técnico para co-criar o impossível, iniciemos o diálogo agora.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                            <div className="space-y-2">
                                <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] block">Inquiries</span>
                                <a href="mailto:contato@sapienza.digital" className="text-xl font-bold text-white hover:text-orange-500 transition-colors tracking-tight">
                                    contato@sapienza.digital
                                </a>
                            </div>
                            <div className="space-y-2">
                                <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em] block">Headquarters</span>
                                <p className="text-xl font-bold text-white tracking-tight">
                                    São Paulo, Brazil
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Premium Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-blue-600/20 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000" />

                        <div className="bg-[#0f172a]/40 backdrop-blur-3xl border border-white/5 rounded-[48px] p-10 lg:p-14 relative overflow-hidden shadow-2xl">
                            {/* Inner Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="mb-12 relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Como podemos ajudar?</h3>
                                <p className="text-gray-500 font-light italic">Preencha o formulário e nossa equipe de engenharia entrará em contato em até 24 horas.</p>
                            </div>

                            <DominusForm
                                formId={siteConfig.dominus.forms.lead}
                                theme="dark"
                                primaryColor="#ea580c"
                                showDescription={false}
                                className="min-h-[400px] relative z-10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
