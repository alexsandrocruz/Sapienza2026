import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'Fundamental1e2',
        description: 'Desenvolvimento do MVP da plataforma educacional. Solução robusta e intuitiva que atende às necessidades de alunos e professores do ensino fundamental.',
        category: 'EdTech',
        result: 'MVP entregue rapidamente, validado em ambiente real',
        image: '/images/hero-team.png',
    },
    {
        title: 'Rastreio de Equipes',
        description: 'Plataforma de rastreamento de equipes externas com monitoramento em tempo real, comunicação instantânea e relatórios de desempenho.',
        category: 'Enterprise',
        result: 'Visibilidade total das equipes em campo',
        image: '/images/hero-analytics.png',
    },
    {
        title: 'Gestão de Investimentos',
        description: 'Aplicativo financeiro facilitando captação de investimentos, pagamento de rendimentos e controle para unidades franqueadas.',
        category: 'FinTech',
        result: 'Transparência e praticidade para investidores',
        image: '/images/hero-mobile.png',
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                        Histórias de Sucesso
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Cases que <span className="text-orange-500">Inspiram</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Conheça alguns dos projetos que desenvolvemos para nossos clientes
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
                                    <span>✓</span>
                                    <span>{project.result}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/cases"
                        className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                    >
                        Ver Todos os Cases <span>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
