'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DominusForm } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

interface ServiceHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    image?: string;
}

export default function ServiceHero({ badge, title, subtitle, description, image }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#030712]">
            {/* Mesh Gradients Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            {/* Background Image with Overlay */}
            {image && (
                <div className="absolute inset-0 z-0 opacity-30">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-[#030712]" />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Content Section */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-orange-500/10 border border-orange-500/30 text-orange-400">
                                {badge}
                            </span>

                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                {title}
                                <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                                    {subtitle}
                                </span>
                            </h1>

                            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-12 pt-8">
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-white tracking-tight">20+</div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Anos de XP</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-white tracking-tight">150+</div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Projetos</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-white tracking-tight">100%</div>
                                    <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Qualidade</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Section */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Glow behind form */}
                            <div className="absolute -inset-4 bg-orange-500/20 rounded-[2rem] blur-2xl z-0" />

                            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl">
                                <div className="mb-8">
                                    <h3 className="text-2xl font-bold text-white mb-2">Solicitar Especialista</h3>
                                    <p className="text-gray-400">Desenvolva sua visão com nossa engenharia.</p>
                                </div>
                                <DominusForm
                                    formId={siteConfig.dominus.forms.lead}
                                    theme="dark"
                                    primaryColor="#f97316"
                                    showDescription={false}
                                    className="min-h-[300px]"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 opacity-50"
            >
                <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent mx-auto" />
            </motion.div>
        </section>
    );
}
