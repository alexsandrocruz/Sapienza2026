'use client';

import { useState } from 'react';

interface HeroWithFormProps {
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    formTitle?: string;
    formSubject?: string;
    backgroundColor?: string;
}

export function HeroWithForm({
    badge = 'Serviço',
    title,
    subtitle,
    description,
    formTitle = 'Tem um projeto em mente? Converse com nossos especialistas.',
    formSubject = 'Contato via página de serviço',
    backgroundColor = 'bg-gray-50',
}: HeroWithFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Integrar com DominusERP API
        console.log('Form submitted:', { ...formData, subject: formSubject });

        // Simular envio
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className={`relative ${backgroundColor} py-16 lg:py-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Content */}
                    <div className="space-y-6">
                        <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase">
                            {badge}
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {title}
                        </h1>

                        {subtitle && (
                            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                                {subtitle}
                            </h2>
                        )}

                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-2xl">✓</span>
                                <span className="text-gray-700 font-medium">+150 Projetos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-2xl">✓</span>
                                <span className="text-gray-700 font-medium">98% Satisfação</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-2xl">✓</span>
                                <span className="text-gray-700 font-medium">12+ Anos</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-orange-500 rounded-2xl p-8 shadow-2xl shadow-orange-500/20">
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {formTitle}
                        </h3>

                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="text-6xl mb-4">✅</div>
                                <h4 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h4>
                                <p className="text-orange-100">
                                    Entraremos em contato em breve.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="hidden" name="subject" value={formSubject} />

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Seu nome"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Número de telefone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu e-mail"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                />

                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Sua Empresa"
                                    required
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Mensagem"
                                    rows={3}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                                />

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-orange-500 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Enviando...' : 'Entrar em Contato'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
