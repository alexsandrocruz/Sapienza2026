import Link from 'next/link';

const services = [
    {
        icon: '🎨',
        title: 'Design de Experiência',
        description: 'Transforme a experiência do usuário da sua empresa em seu fator X. Nossa filosofia de prioridade às pessoas resulta em produtos que atingem o equilíbrio perfeito entre emoção e função.',
        href: '/servicos/design-de-experiencia',
    },
    {
        icon: '🚀',
        title: 'Desenvolvimento de Produtos',
        description: 'Guiamos você por todo o ciclo de vida de desenvolvimento do seu produto, alavancando tecnologia de ponta para fornecer produtos digitais envolventes e satisfatórios.',
        href: '/servicos/desenvolvimento-de-produtos',
    },
    {
        icon: '📱',
        title: 'Aplicativos Móveis',
        description: 'Chame a atenção do seu público no celular com apps iOS e Android que preenchem a lacuna entre você e seus clientes de forma simples, poderosa e elegante.',
        href: '/servicos/consultoria-apps-mobile',
    },
    {
        icon: '📊',
        title: 'Análise de Dados',
        description: 'Analisamos seus dados através de uma lente de design thinking para criar maneiras novas de satisfazer e reter seus clientes, acessando novos níveis de insight.',
        href: '/servicos/analise-de-dados',
    },
    {
        icon: '🔄',
        title: 'Transformação Digital',
        description: 'Suas experiências digitais podem crescer junto com o seu negócio. O futuro da sua empresa é tão grande quanto suas ideias, e nós deixamos você livre para evoluir.',
        href: '/servicos/transformacao-digital',
    },
    {
        icon: '🛒',
        title: 'E-commerce',
        description: 'Eleve sua loja para além de simplesmente ser responsiva. Projete uma plataforma para manter seus clientes engajados e antecipar suas necessidades.',
        href: '/servicos/desenvolvimento-de-software',
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                        Nossos Serviços
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Serviços de Agência de <span className="text-orange-500">Desenvolvimento</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Na era digital de hoje, os consumidores esperam interações perfeitas com suas marcas favoritas.
                        Oferecemos uma gama de serviços incluindo desenvolvimento de produtos, plataformas e soluções personalizadas.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="bg-white p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
                        >
                            <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-orange-500 text-3xl">
                                <span className="group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                            <div className="mt-6 flex items-center text-orange-500 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                                Saiba mais →
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All */}
                <div className="text-center mt-12">
                    <Link
                        href="/servicos"
                        className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                    >
                        Ver todos os serviços →
                    </Link>
                </div>
            </div>
        </section>
    );
}
