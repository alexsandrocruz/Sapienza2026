import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Cases de Sucesso',
    description: 'Conheça os projetos que desenvolvemos e como ajudamos nossos clientes a alcançar resultados extraordinários.',
};

const cases = [
    {
        slug: 'fundamental1e2',
        title: 'Plataforma Educacional Fundamental1e2',
        category: 'Educação',
        description: 'Desenvolvimento do MVP para plataforma educacional que atende alunos e professores do ensino fundamental com entrega extremamente rápida.',
        results: ['MVP em 8 semanas', 'Validação em ambiente real', 'Iterações contínuas'],
        image: '/images/portfolio-ecommerce.jpg',
        tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    },
    {
        slug: 'rastreamento-equipes',
        title: 'Plataforma de Rastreamento de Equipes',
        category: 'Logistics',
        description: 'Sistema de monitoramento em tempo real para empresas que gerenciam funcionários em campo, com comunicação instantânea e relatórios de desempenho.',
        results: ['Visibilidade em tempo real', 'Decisões estratégicas', '+40% eficiência'],
        image: '/images/team.jpg',
        tech: ['React Native', 'Firebase', 'Google Maps API'],
    },
    {
        slug: 'gestao-investimentos',
        title: 'App de Gestão de Investimentos',
        category: 'Fintech',
        description: 'Aplicativo para empresa financeira que facilita a captação de investimentos e pagamento de rendimentos com controle para unidades franqueadas.',
        results: ['Transparência total', 'Gestão simplificada', 'Múltiplas unidades'],
        image: '/images/ecommerce.jpg',
        tech: ['Flutter', '.NET Core', 'SQL Server', 'Azure'],
    },
    {
        slug: 'ecommerce-b2b',
        title: 'Plataforma E-commerce B2B',
        category: 'E-commerce',
        description: 'Marketplace B2B completo com catálogo de produtos, gestão de pedidos, integração ERP e portal do representante.',
        results: ['+200% vendas online', 'Integração SAP', 'App para vendedores'],
        image: '/images/hero-innovation.jpg',
        tech: ['Next.js', 'ABP.io', 'MongoDB', 'Stripe'],
    },
];

export default function CasesPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                        Portfólio
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Histórias de <span className="text-orange-500">Sucesso</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Cada projeto é uma parceria. Conheça como ajudamos empresas a transformar
                        suas ideias em produtos digitais de sucesso.
                    </p>
                </div>
            </section>

            {/* Cases Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {cases.map((caseItem) => (
                            <article
                                key={caseItem.slug}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={caseItem.image}
                                        alt={caseItem.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {caseItem.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                                        {caseItem.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {caseItem.description}
                                    </p>

                                    {/* Results */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {caseItem.results.map((result, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    ✓ {result}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                        {caseItem.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-5xl mb-6">💬</div>
                    <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
                        &ldquo;A SAPIENZA transformou nossa ideia em um produto real em tempo recorde.
                        A equipe entendeu nossas necessidades e entregou muito além das expectativas.&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden relative">
                            <Image
                                src="/images/testimonial-carlos.jpg"
                                alt="Cliente"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-gray-900">Carlos Eduardo</div>
                            <div className="text-gray-600">CEO, Fundamental1e2</div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
