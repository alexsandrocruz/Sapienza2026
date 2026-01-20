import { Metadata } from 'next';
import Link from 'next/link';
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services';
import {
    CTA,
    StatsBanner,
    SDLCTimeline,
    WorkingModels,
    SuccessCases,
    SplitContentSection,
    LifecycleDiagram,
    ReadinessEvaluation,
    ServicesHub,
    BlogSection,
    IDEAbookFramework,
    TrustLogos,
    CloudBlogGrid,
    ModernizationTwoSpeed,
    ModernizationRocket,
    ModernizationGrid,
    ResultsGrid,
    ServiceHero,
    PricingSection,
    ServiceFeatures
} from '@/components/sections';

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
            <div className="min-h-screen flex items-center justify-center pt-20 bg-[#030712]">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Serviço não encontrado</h1>
                    <p className="text-gray-400 mb-8">O serviço que você procura não existe.</p>
                    <Link href="/servicos" className="text-orange-500 font-semibold hover:text-orange-600">
                        ← Ver todos os serviços
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#030712]">
            {/* New Cinematic Hero */}
            <ServiceHero
                badge={service.badge}
                title={service.title}
                subtitle={service.subtitle}
                description={service.heroDescription}
                image={service.heroImage}
            />

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

            {/* Pricing Section (New) */}
            {service.pricing && (
                <PricingSection
                    title={service.pricing.title}
                    plans={service.pricing.plans}
                />
            )}

            {/* Service Hub Section */}
            {service.servHub && (
                <ServicesHub
                    title={service.servHub.title}
                    description={service.servHub.description}
                    items={service.servHub.items}
                />
            )}

            {/* IDEAbook Framework (PMO Specific) */}
            {service.pmoFramework && (
                <IDEAbookFramework
                    title={service.pmoFramework.title}
                    description={service.pmoFramework.description}
                    tabs={service.pmoFramework.tabs}
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

            {/* Service Features (New) */}
            {service.features && (
                <ServiceFeatures features={service.features} />
            )}

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

            {/* Trust Logos (Enterprise Ecosystem) */}
            <div className="py-20 bg-[#030712] border-y border-white/5">
                <TrustLogos logos={[
                    { name: 'AWS', image: '/images/partners/aws-logo.svg' },
                    { name: 'Azure', image: '/images/partners/azure-logo.svg' },
                    { name: 'Google Cloud', image: '/images/partners/gcp-logo.svg' },
                ]} />
            </div>

            {/* Detailed Content Grid (Fallback or Additional) */}
            {service.sections && service.sections.length > 0 && (
                <section className="py-24 bg-white/5 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {service.sections.map((section, index) => (
                                <div
                                    key={index}
                                    className="space-y-4"
                                >
                                    <h3 className="text-xl font-bold text-white border-l-4 border-orange-500 pl-4">{section.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{section.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {service.cloudBlogArticles && <CloudBlogGrid data={service.cloudBlogArticles} />}

            {service.modernizationTwoSpeed && <ModernizationTwoSpeed data={service.modernizationTwoSpeed} />}

            {service.modernizationRocket && <ModernizationRocket data={service.modernizationRocket} />}

            {service.modernizationServicesGrid && <ModernizationGrid data={service.modernizationServicesGrid} />}

            {service.modernizationResults && <ResultsGrid data={service.modernizationResults} />}

            {/* Benefits */}
            <section className="py-24 bg-[#030712] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">Benefícios Estratégicos</h2>
                        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="text-orange-500 font-bold mb-4 opacity-50">0{index + 1}</div>
                                <h3 className="text-white font-bold text-lg">{benefit}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BlogSection />
            <CTA />
        </div>
    );
}
