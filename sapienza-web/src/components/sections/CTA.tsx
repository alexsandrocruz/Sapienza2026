import React from 'react';
import { DominusForm } from '@/components/ui';
import { siteConfig } from '@/lib/site-config';

export function CTA() {
    return (
        <section className="py-24 bg-[#0b0f19] relative overflow-hidden">
            {/* Background elements - Grid pattern subtly visible */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left side: Let's talk text */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-5xl lg:text-7xl font-bold text-white tracking-tight">
                                Let's talk
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                                Procurando clareza, estratégia e entrega hands-on? Nossos especialistas estão prontos para ajudar você a obter resultados. Esteja você planejando sua próxima grande iniciativa ou procurando um parceiro técnico de confiança, estamos aqui para ajudar você a avançar com confiança.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4 border-t border-white/10">
                            <div>
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">E-mail</span>
                                <a href="mailto:contato@sapienza.digital" className="text-2xl font-medium text-white hover:text-orange-500 transition-colors">
                                    contato@sapienza.digital
                                </a>
                            </div>
                            <div>
                                <span className="text-orange-500 font-bold text-sm uppercase tracking-widest block mb-2">Telefone</span>
                                <a href="tel:+5511999999999" className="text-2xl font-medium text-white hover:text-orange-500 transition-colors">
                                    +55 (11) 99999-9999
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Form in premium card */}
                    <div className="bg-white rounded-[2.5rem] p-10 lg:p-12 shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />

                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Como podemos ajudar?</h3>
                            <p className="text-gray-500">Preencha o formulário e entraremos em contato em até 24 horas.</p>
                        </div>

                        <DominusForm
                            formId={siteConfig.dominus.forms.lead}
                            theme="light"
                            primaryColor="#ea580c"
                            showDescription={false}
                            className="min-h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
