import Image from 'next/image';
import Link from 'next/link';

export function About() {
    const highlights = [
        {
            icon: '🏆',
            title: 'Excelência Comprovada',
            description: 'Mais de 150 projetos entregues com sucesso e 98% de satisfação dos clientes',
        },
        {
            icon: '👥',
            title: 'Time Especializado',
            description: 'Profissionais certificados e experientes nas principais tecnologias do mercado',
        },
        {
            icon: '💡',
            title: 'Inovação Constante',
            description: 'Sempre atualizados com as últimas tendências e melhores práticas do setor',
        },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/team.jpg"
                                alt="Equipe Sapienza"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-3xl text-white font-bold">12+</span>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">Anos</div>
                                    <div className="text-gray-600">de Experiência</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                            Sobre Nós
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Transformando Ideias em <span className="text-orange-500">Realidade Digital</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            A Sapienza Inteligência Digital é uma empresa especializada em desenvolvimento
                            de software e consultoria em transformação digital. Nossa missão é impulsionar
                            negócios através de soluções tecnológicas personalizadas e inovadoras.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Com uma equipe altamente qualificada e experiência em diversos segmentos,
                            entregamos projetos que geram resultados reais e mensuráveis para nossos clientes.
                        </p>

                        {/* Highlights */}
                        <div className="space-y-6">
                            {highlights.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/sobre"
                            className="inline-flex items-center gap-2 mt-8 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                        >
                            Conheça Nossa Equipe <span>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
