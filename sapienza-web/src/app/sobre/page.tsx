import { Metadata } from 'next';
import {
    AboutHero,
    AboutMissionVision,
    AboutValues,
    HowWeWork,
    EnhancedTeamSection,
    TechnologiesSection,
    TrustLogos,
    CTA
} from '@/components/sections';

export const metadata: Metadata = {
    title: 'Sobre a Sapienza | Tecnologia com Propósito',
    description: 'A Sapienza Inteligência Digital nasce da prática — não do hype. Resolvemos problemas reais de negócio por meio de software bem projetado e IA responsável.',
};

export default function SobrePage() {
    return (
        <main className="bg-[#020617]">
            {/* Cinematic Hero Narrative */}
            <AboutHero />

            {/* Mission & Vision */}
            <AboutMissionVision />

            {/* Strategic Approach & Process */}
            <HowWeWork />

            {/* Core Values */}
            <AboutValues />

            {/* Tech Stack */}
            <TechnologiesSection />

            {/* Partners / Trust Logos */}
            <TrustLogos
                title="Empresas que confiam na nossa engenharia"
                logos={[
                    { name: 'Nestlé', image: '/images/partners/nestle.svg' },
                    { name: 'AWS', image: '/images/partners/aws-logo.svg' },
                    { name: 'Azure', image: '/images/partners/azure-logo.svg' },
                    { name: 'Google Cloud', image: '/images/partners/gcp-logo.svg' },
                ]}
            />

            {/* Team & Pods */}
            <EnhancedTeamSection />

            {/* Who it's for section */}
            <section className="py-24 bg-[#020617] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-gradient-to-br from-orange-500/10 to-blue-600/10 border border-white/10 rounded-[4rem] p-12 lg:p-20">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-white">Para quem é a <span className="text-orange-500">Sapienza</span></h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                                Trabalhamos melhor com organizações que valorizam decisões bem fundamentadas, entendem que software é um ativo estratégico e buscam crescimento com estrutura, não improviso.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 text-left pt-8">
                                {[
                                    'Organizações orientadas a dados',
                                    'Produtos Digitais em Escala',
                                    'Sistemas Complexos & Legados',
                                    'Startups em Série A/B+'
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                                        <span className="text-orange-500">⚡</span>
                                        <span className="text-white font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
