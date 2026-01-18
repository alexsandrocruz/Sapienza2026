import Image from 'next/image';
import Link from 'next/link';

export function About() {
    const highlights = [
        {
            icon: '🏆',
            title: 'Duas Décadas de Experiência',
            description: 'Mais de 20 anos criando soluções de software personalizadas para todos os orçamentos e nichos',
        },
        {
            icon: '👥',
            title: 'Equipe Full-Stack Expert',
            description: 'Programadores, administradores de servidores e designers de experiência digital com vasta experiência',
        },
        {
            icon: '💡',
            title: 'Abordagem Centrada no Usuário',
            description: 'Garantimos que cada aplicativo funcione perfeitamente e seja uma alegria de usar',
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
                                src="/images/hero-team.png"
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
                                    <span className="text-3xl text-white font-bold">20+</span>
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
                            Sobre a SAPIENZA
                        </span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Uma empresa de desenvolvimento de software <span className="text-orange-500">personalizado full service</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Na era digital de hoje, os consumidores esperam interações perfeitas com suas marcas favoritas
                            em vários dispositivos. Na SAPIENZA, entendemos esse cenário dinâmico e oferecemos uma gama
                            de serviços, incluindo desenvolvimento de produtos, plataformas e outras soluções personalizadas.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Nossa equipe se destaca na criação de aplicativos web, aplicativos móveis, aplicativos de
                            comércio eletrônico, plataformas de experiência digital e plataformas SaaS. Garantimos que
                            cada aplicativo não apenas funcione perfeitamente, mas também forneça uma experiência de
                            usuário agradável.
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

                        <div className="flex gap-4 mt-8">
                            <Link
                                href="/sobre"
                                className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                            >
                                Conheça Nossa Equipe <span>→</span>
                            </Link>
                            <Link
                                href="/contato"
                                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                            >
                                Solicite uma Cotação
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
