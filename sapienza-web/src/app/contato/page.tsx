'use client';

import { useState } from 'react';
import { Metadata } from 'next';

// Note: metadata needs to be in a separate file for client components
// Consider moving to layout.tsx or creating a static metadata export

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Integrar com DominusERP API
        console.log('Contato enviado:', formData);

        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactInfo = [
        {
            icon: '📍',
            title: 'Endereço',
            value: 'São Paulo, SP - Brasil',
        },
        {
            icon: '📞',
            title: 'Telefone',
            value: '+55 (79) 99918-0331',
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
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                        Fale Conosco
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Vamos Conversar sobre seu <span className="text-orange-500">Projeto</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Estamos prontos para ajudar sua empresa a dar o próximo passo na transformação digital.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Entre em <span className="text-orange-500">Contato</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Tem um projeto em mente? Precisa de consultoria?
                                Entre em contato através de um dos nossos canais ou preencha o formulário.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <div key={info.title} className="flex items-start gap-4">
                                        <div className="text-3xl">{info.icon}</div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{info.title}</div>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-orange-500 hover:text-orange-600 transition-colors"
                                                    target={info.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <div className="text-gray-600">{info.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social */}
                            <div className="mt-10 pt-10 border-t border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-4">Siga-nos</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://linkedin.com/company/sapienzae"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl hover:bg-orange-500 hover:text-white transition-all"
                                    >
                                        in
                                    </a>
                                    <a
                                        href="https://instagram.com/sapienzae"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-xl hover:bg-orange-500 hover:text-white transition-all"
                                    >
                                        📷
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Recebemos sua mensagem e entraremos em contato em breve.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
                                        }}
                                        className="text-orange-500 font-semibold hover:text-orange-600"
                                    >
                                        Enviar outra mensagem
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nome *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                E-mail *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Telefone
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                placeholder="(00) 00000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Empresa
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                                placeholder="Nome da empresa"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Assunto *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        >
                                            <option value="">Selecione o assunto</option>
                                            <option value="desenvolvimento">Desenvolvimento de Software</option>
                                            <option value="mvp">Desenvolvimento de MVP</option>
                                            <option value="consultoria">Consultoria Digital</option>
                                            <option value="suporte">Suporte Técnico</option>
                                            <option value="parceria">Parceria</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mensagem *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                            placeholder="Conte-nos sobre seu projeto..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-orange-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
