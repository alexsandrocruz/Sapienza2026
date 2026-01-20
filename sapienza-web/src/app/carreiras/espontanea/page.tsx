'use client';

import { DominusForm } from '@/components/ui';
import { CTA } from '@/components/sections';
import Link from 'next/link';

export default function SpontaneousPage() {
    const job = {
        title: 'Candidatura Espontânea',
        category: 'Geral',
        location: 'Remoto / Multinacional',
        description: 'Não encontrou uma vaga que se encaixe no seu perfil? Envie seu currículo para nosso banco de talentos. Valorizamos profissionais de alto rendimento em todas as áreas da engenharia e estratégia digital.',
        responsibilities: [
            'Contribuir com excelência técnica nos projetos Sapienza.',
            'Aderir ao Sapienza Way de execução e estratégia.',
            'Colaborar com times multidisciplinares de alta performance.',
            'Manter-se na fronteira da inovação tecnológica e de negócios.'
        ],
        requirements: [
            'Perfil de alta performance e mindset de crescimento.',
            'Experiência relevante em sua área de atuação (Tech, Design, Sales, etc).',
            'Comprometimento com a qualidade e prazos.',
            'Excelente capacidade de comunicação e trabalho em equipe.'
        ]
    };

    return (
        <main className="min-h-screen bg-[#020617] pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <Link
                    href="/carreiras"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors mb-12 uppercase text-[10px] font-black tracking-widest"
                >
                    ← Voltar para Carreiras
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Job Details */}
                    <div className="lg:col-span-2 space-y-16">
                        <section className="space-y-6">
                            <span className="px-4 py-2 bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-500/20">
                                {job.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
                                Banco de <br /><span className="text-orange-500 text-[0.8em]">Talentos Sapienza.</span>
                            </h1>
                            <div className="flex flex-wrap gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
                                <span className="flex items-center gap-2 text-white">
                                    <span className="text-orange-500">📍</span> {job.location}
                                </span>
                                <span className="flex items-center gap-2 text-white">
                                    <span className="text-orange-500">💼</span> Tempo Integral
                                </span>
                                <span className="flex items-center gap-2 text-white">
                                    <span className="text-orange-500">⚡</span> Nível Sênior
                                </span>
                            </div>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-4xl">
                                {job.description}
                            </p>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-8 p-10 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem]">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                                    Responsabilidades
                                </h2>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((item, i) => (
                                        <li key={i} className="flex gap-4 text-gray-400 leading-relaxed group">
                                            <span className="text-orange-500 font-black group-hover:scale-125 transition-transform">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8 p-10 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[2.5rem]">
                                <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                                    Requisitos
                                </h2>
                                <ul className="space-y-4">
                                    {job.requirements.map((item, i) => (
                                        <li key={i} className="flex gap-4 text-gray-400 leading-relaxed group">
                                            <span className="text-orange-500 font-black group-hover:scale-125 transition-transform">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="space-y-12">
                            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic underline decoration-orange-500 decoration-4 underline-offset-8 text-center">
                                Cultura & Benefícios
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { icon: '🌍', title: 'Work from Anywhere', desc: 'Cultura digital First com total liberdade geográfica.' },
                                    { icon: '🚀', title: 'Crescimento Real', desc: 'Plano de carreira baseado em mérito e entrega de valor.' },
                                    { icon: '🧠', title: 'Learning Lab', desc: 'Treinamentos e certificações subsidiadas pela empresa.' },
                                    { icon: '🏥', title: 'Health First', desc: 'Plano de saúde premium e foco em bem-estar mental.' },
                                    { icon: '💻', title: 'State-of-the-Art Gear', desc: 'Equipamento de ponta para você performar no seu melhor.' },
                                    { icon: '🥘', title: 'Food & Drinks', desc: 'Auxílio alimentação generoso e snacks no office.' },
                                ].map((benefit, i) => (
                                    <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-orange-500/30 transition-all duration-300">
                                        <span className="text-3xl mb-4 block">{benefit.icon}</span>
                                        <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">{benefit.title}</h3>
                                        <p className="text-gray-500 text-sm font-light leading-relaxed">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Application Sticky Column */}
                    <div className="lg:relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="p-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-[3rem] shadow-2xl shadow-orange-500/20">
                                <h3 className="text-3xl font-black text-white tracking-tighter italic mb-4">CANDIDATE-SE</h3>
                                <p className="text-orange-100 mb-8 font-medium">
                                    Preencha o formulário abaixo e nos mostre por que você é a pessoa certa para este desafio.
                                </p>

                                <div className="bg-white/10 p-1 rounded-[1.5rem] backdrop-blur-md">
                                    <DominusForm
                                        formId="recruitment-form"
                                        theme="dark"
                                        onSuccess={() => alert('Candidatura enviada com sucesso!')}
                                    />
                                </div>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center space-y-4">
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Dúvidas sobre a vaga?</p>
                                <a href="mailto:carreiras@sapienzae.com.br" className="text-white font-black hover:text-orange-500 transition-colors">
                                    carreiras@sapienzae.com.br
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <CTA />
            </div>
        </main>
    );
}
