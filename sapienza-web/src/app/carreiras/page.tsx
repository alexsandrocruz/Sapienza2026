import { siteConfig } from '@/lib/site-config';
import { Metadata } from 'next';
import Link from 'next/link';
import { CareersHero, CareersGrid } from '@/components/sections/careers';
import { jobProfiles } from '@/data/jobs';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
    title: `Carreiras | ${siteConfig.name}`,
    description: 'Junte-se à Sapienza e ajude a arquitetar o futuro digital. Buscamos talentos excepcionais em engenharia, design e estratégia.',
};

export default function CarreirasPage() {
    return (
        <main className="min-h-screen bg-[#020617]">
            <CareersHero />

            <section className="py-24 bg-gradient-to-b from-[#020617] to-gray-900 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
                        Banco de <span className="text-orange-500">Talentos</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Mesmo que não tenhamos uma vaga ativa exatamente com o seu perfil hoje, queremos conhecer você. Nossa jornada é de crescimento acelerado.
                    </p>
                </div>
            </section>

            <CareersGrid jobs={jobProfiles} />

            <section className="py-32 bg-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.2)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-left space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter italic">
                            LET&apos;S WORK <br />TOGETHER.
                        </h2>
                        <p className="text-orange-100 text-xl font-medium max-w-xl">
                            Envie seu currículo agora para nosso seleto banco de engenharia e estratégia.
                        </p>
                    </div>
                    <Link
                        href="/carreiras/espontanea"
                        className="px-12 py-6 bg-white text-orange-600 rounded-[2rem] font-black text-xl hover:scale-105 transition-transform shadow-2xl"
                    >
                        ENVIAR CURRÍCULO →
                    </Link>
                </div>
            </section>

            <CTA />
        </main>
    );
}
