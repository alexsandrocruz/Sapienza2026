import Link from 'next/link';

const solutions = [
    { icon: '🛒', title: 'E-commerce', description: 'Plataformas completas de vendas online com integração de pagamentos e gestão de estoque.', href: '/servicos/desenvolvimento-de-software' },
    { icon: '📊', title: 'ERP Personalizado', description: 'Sistemas de gestão empresarial adaptados às necessidades específicas do seu negócio.', href: '/servicos/desenvolvimento-de-software' },
    { icon: '🤝', title: 'CRM Inteligente', description: 'Gerencie relacionamentos com clientes de forma eficiente e aumente suas vendas.', href: '/servicos/desenvolvimento-de-software' },
    { icon: '📱', title: 'Aplicativos Mobile', description: 'Apps nativos e híbridos para iOS e Android com experiência excepcional.', href: '/servicos/consultoria-apps-mobile' },
    { icon: '🏢', title: 'Portais Corporativos', description: 'Intranets e portais personalizados para comunicação e colaboração interna.', href: '/servicos/desenvolvimento-de-produtos' },
    { icon: '🤖', title: 'IoT & Automação', description: 'Soluções de Internet das Coisas para automação e monitoramento inteligente.', href: '/servicos/transformacao-digital' },
];

export function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">Soluções</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tecnologia que <span className="text-orange-500">Transforma</span></h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">Desenvolvemos soluções sob medida para atender as necessidades específicas de cada cliente</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution) => (
                        <Link key={solution.title} href={solution.href} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{solution.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{solution.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                            <div className="mt-6 text-orange-500 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">Saiba mais <span>→</span></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
