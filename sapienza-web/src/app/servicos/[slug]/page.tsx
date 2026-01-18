import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import { DominusForm } from '@/components/ui';
import {
    CTA,
    StatsBanner,
    SDLCTimeline,
    WorkingModels,
    SuccessCases,
    SplitContentSection,
    LifecycleDiagram,
    ReadinessEvaluation
} from '@/components/sections';
import { siteConfig } from '@/lib/site-config';

// Gerar metadados dinâmicos
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: 'Serviço não encontrado' };
    }

    return {
        title: service.title,
        description: service.heroDescription,
        openGraph: {
            title: service.title,
            description: service.heroDescription,
        },
    };
}

// Gerar rotas estáticas
export function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export default async function ServicePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Serviço não encontrado</h1>
                    <p className="text-gray-600 mb-8">O serviço que você procura não existe.</p>
                    <Link href="/servicos" className="text-orange-500 font-semibold hover:text-orange-600">
                        ← Ver todos os serviços
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-[#0b0f19] pt-32 pb-20 overflow-hidden">
                {/* Background elements */}
                {service.heroImage && (
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src={service.heroImage}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase border border-orange-500/30 px-4 py-2 rounded-full bg-orange-500/10">
                                {service.badge}
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-[1.1]">
                                {service.title}
                            </h1>
                            <h2 className="text-xl lg:text-2xl font-medium text-orange-400">
                                {service.subtitle}
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                                {service.heroDescription}
                            </p>

                            <div className="flex flex-wrap gap-8 pt-4">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">20+</span>
                                    <span className="text-gray-400 text-sm">Anos de XP</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">150+</span>
                                    <span className="text-gray-400 text-sm">Projetos</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold text-white">100%</span>
                                    <span className="text-gray-400 text-sm">Qualidade</span>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10 border border-white/10">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Solicite uma proposta personalizada
                            </h3>
                            <DominusForm
                                formId={siteConfig.dominus.forms.lead}
                                theme="light"
                                primaryColor="#ea580c"
                                showDescription={false}
                                className="min-h-[300px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <StatsBanner stats={service.features} />

            {/* Lifecycle Diagram Section */}
            {service.lifecycle && (
                <LifecycleDiagram
                    title={service.lifecycle.title}
                    subtitle={service.lifecycle.subtitle}
                    steps={service.lifecycle.steps}
                />
            )}

            {/* Readiness Evaluation Section */}
            {service.readiness && (
                <ReadinessEvaluation
                    title={service.readiness.title}
                    subtitle={service.readiness.subtitle}
                    boxes={service.readiness.boxes}
                />
            )}

            {/* Rich Sections (Split Layouts) */}
            {service.richSections && service.richSections.map((rich, idx) => (
                <SplitContentSection key={idx} section={rich} />
            ))}

            {/* SDLC Timeline Section */}
            {service.sdlcPhases && (
                <SDLCTimeline phases={service.sdlcPhases} badge={service.badge} />
            )}

            {/* Working Models Section */}
            {service.workingModels && (
                <WorkingModels models={service.workingModels} />
            )}

            {/* Success Cases Section */}
            {service.successCases && (
                <SuccessCases cases={service.successCases} />
            )}

            {/* Detailed Content Grid (Fallback or Additional) */}
            {service.sections && service.sections.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {service.sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 border-l-4 border-orange-500 pl-4">{section.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{section.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits */}
            <section className="py-24 bg-[#0b0f19]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Benefícios Estratégicos</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                                <div className="text-orange-500 font-bold mb-4">0{index + 1}</div>
                                <h3 className="text-white font-bold text-lg">{benefit}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
