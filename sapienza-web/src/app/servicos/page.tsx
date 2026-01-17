import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Serviços',
    description: 'Conheça nossos serviços de desenvolvimento de software, transformação digital, análise de dados e muito mais.',
};

const services = [
    {
        slug: 'desenvolvimento-de-software',
        title: 'Desenvolvimento de Software Customizado',
        description: 'Criamos aplicações web e mobile personalizadas com as tecnologias mais modernas.',
        icon: '💻',
    },
    {
        slug: 'desenvolvimento-de-produtos',
        title: 'Desenvolvimento de Produtos Digitais',
        description: 'Do conceito ao lançamento, guiamos todo o ciclo de vida do seu produto digital.',
        icon: '🚀',
    },
    {
        slug: 'desenvolvimento-de-mvp',
        title: 'Desenvolvimento de MVP',
        description: 'Valide sua ideia rapidamente com um produto mínimo viável em semanas.',
        icon: '⚡',
    },
    {
        slug: 'transformacao-digital',
        title: 'Transformação Digital',
        description: 'Modernize sua empresa com soluções digitais que crescem com seu negócio.',
        icon: '🔄',
    },
    {
        slug: 'analise-de-dados',
        title: 'Análise de Dados',
        description: 'Tome decisões mais inteligentes baseadas em dados e insights valiosos.',
        icon: '📊',
    },
    {
        slug: 'design-de-experiencia',
        title: 'Design de Experiência do Usuário',
        description: 'Interfaces que encantam e geram resultados para seu negócio.',
        icon: '🎨',
    },
    {
        slug: 'consultoria-apps-mobile',
        title: 'Consultoria em Aplicativos Móveis',
        description: 'Apps iOS e Android de alta performance para seu público mobile.',
        icon: '📱',
    },
    {
        slug: 'whatsapp-chatbot',
        title: 'WhatsApp Chatbot',
        description: 'Atendimento automatizado 24/7 com chatbots inteligentes.',
        icon: '🤖',
    },
];

export default function ServicosPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                        O que fazemos
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Nossos <span className="text-orange-500">Serviços</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Oferecemos soluções completas de tecnologia para transformar sua empresa
                        e impulsionar seus resultados no mundo digital.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/servicos/${service.slug}`}
                                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-4 text-orange-500 font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Saiba mais <span>→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
