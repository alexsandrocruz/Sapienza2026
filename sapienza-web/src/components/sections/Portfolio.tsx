import Image from 'next/image';
import Link from 'next/link';

const projects = [
    { title: 'Plataforma E-commerce', description: 'Loja online completa com gestão de produtos e pagamentos', category: 'E-commerce', image: '/images/ecommerce.jpg' },
    { title: 'App de Delivery', description: 'Aplicativo mobile para pedidos e entregas', category: 'Mobile', image: '/images/portfolio-ecommerce.jpg' },
    { title: 'Sistema ERP', description: 'Gestão empresarial integrada e personalizada', category: 'Enterprise', image: '/images/hero-innovation.jpg' },
    { title: 'Portal Corporativo', description: 'Website institucional com área de membros', category: 'Web', image: '/images/team.jpg' },
    { title: 'App Fitness', description: 'Aplicativo de treinos e acompanhamento', category: 'Mobile', image: '/images/ecommerce.jpg' },
    { title: 'Marketplace B2B', description: 'Plataforma de vendas entre empresas', category: 'E-commerce', image: '/images/portfolio-ecommerce.jpg' },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">Portfólio</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projetos que <span className="text-orange-500">Inspiram</span></h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Conheça alguns dos projetos que desenvolvemos para nossos clientes</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.title} className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">{project.category}</span>
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link href="/cases" className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors">Ver Todos os Projetos <span>→</span></Link>
                </div>
            </div>
        </section>
    );
}
