'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ContactCardProps {
    icon: string;
    title: string;
    value: string;
    href?: string;
    external?: boolean;
}

function ContactCard({ icon, title, value, href, external }: ContactCardProps) {
    const content = (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-orange-500/40 transition-all duration-500 overflow-hidden"
        >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">
                        {title}
                    </h3>
                    <p className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                        {value}
                    </p>
                </div>
                {href && (
                    <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
                        <span>Acessar</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                )}
            </div>
        </motion.div>
    );

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                </a>
            );
        }
        return <Link href={href}>{content}</Link>;
    }

    return content;
}

export default function ContactInfo() {
    const contactCards = [
        {
            icon: '📍',
            title: 'Localização',
            value: 'São Paulo, SP',
        },
        {
            icon: '📞',
            title: 'Telefone',
            value: '+55 79 99918-0331',
            href: 'tel:+5579999180331',
        },
        {
            icon: '✉️',
            title: 'E-mail',
            value: 'contato@sapienzae.com.br',
            href: 'mailto:contato@sapienzae.com.br',
        },
        {
            icon: '💬',
            title: 'WhatsApp',
            value: 'Enviar mensagem',
            href: 'https://wa.me/5579999180331',
            external: true,
        },
    ];

    return (
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    Canais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Atendimento</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
                    Entre em contato através de um dos nossos canais.
                    Nossa equipe está pronta para transformar suas ideias em realidade.
                </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
                {contactCards.map((card, idx) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <ContactCard {...card} />
                    </motion.div>
                ))}
            </div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-8 border-t border-white/10"
            >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                    Siga-nos
                </h3>
                <div className="flex gap-4">
                    <a
                        href="https://linkedin.com/company/sapienzae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform">in</span>
                    </a>
                    <a
                        href="https://instagram.com/sapienzae"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group"
                    >
                        <span className="text-xl group-hover:scale-110 transition-transform">📷</span>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
