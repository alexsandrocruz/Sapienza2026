'use client';

import { motion } from 'framer-motion';
import { DominusForm } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';
import ContactInfo from '@/components/sections/ContactInfo';

export default function ContatoPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-[#020617] pt-32 pb-20 overflow-hidden">
                {/* Mesh Gradients */}
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[180px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
                                Fale Conosco
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                            Vamos transformar sua{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                                visão
                            </span>
                            {' '}em realidade
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                            Estamos prontos para ajudar sua empresa a dar o próximo passo na transformação digital.
                            Entre em contato e descubra como podemos acelerar seus resultados.
                        </p>

                        {/* Quick CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center gap-4 pt-8"
                        >
                            <a
                                href="https://wa.me/5579999180331"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
                            >
                                <span className="text-xl">💬</span>
                                <span>WhatsApp</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-orange-500/40 transition-all duration-300"
                            >
                                <span className="text-xl">✉️</span>
                                <span>Email</span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-gradient-to-b from-[#020617] to-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Left Column - Contact Info */}
                        <div className="lg:col-span-2">
                            <ContactInfo />
                        </div>

                        {/* Right Column - Dominus Form */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden"
                            >
                                {/* Subtle Glow */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    <div>
                                        <h2 className="text-3xl font-black text-white mb-3">
                                            Conte-nos sobre seu{' '}
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                                Projeto
                                            </span>
                                        </h2>
                                        <p className="text-gray-400 leading-relaxed">
                                            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                                        </p>
                                    </div>

                                    {/* Dominus Form Embed */}
                                    <div className="dominus-form-container">
                                        <DominusForm
                                            formId="63c29cba-ec01-438f-8657-2c8943a6dfa2"
                                            theme="dark"
                                            primaryColor="#f97316"
                                            showDescription={false}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/5579999180331"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
                aria-label="WhatsApp"
            >
                💬
            </a>
        </>
    );
}
