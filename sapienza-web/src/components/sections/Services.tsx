const services = [
    {
        icon: '💻',
        title: 'Desenvolvimento de Software',
        description: 'Criamos aplicações web e mobile personalizadas com as tecnologias mais modernas do mercado.',
    },
    {
        icon: '💡',
        title: 'Consultoria Digital',
        description: 'Orientamos sua empresa na jornada de transformação digital com estratégias eficazes.',
    },
    {
        icon: '📊',
        title: 'Business Intelligence',
        description: 'Transformamos dados em insights valiosos para tomada de decisões estratégicas.',
    },
    {
        icon: '🛡️',
        title: 'Segurança da Informação',
        description: 'Protegemos seus dados e sistemas com as melhores práticas de segurança cibernética.',
    },
    {
        icon: '☁️',
        title: 'Cloud Computing',
        description: 'Migramos e gerenciamos sua infraestrutura na nuvem com eficiência e segurança.',
    },
    {
        icon: '🎧',
        title: 'Suporte Técnico',
        description: 'Oferecemos suporte contínuo e manutenção para garantir o funcionamento perfeito.',
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
                        Soluções Completas para seu <span className="text-orange-500">Negócio</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Oferecemos uma gama completa de serviços de tecnologia para impulsionar sua empresa no mundo digital
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-white p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer"
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
