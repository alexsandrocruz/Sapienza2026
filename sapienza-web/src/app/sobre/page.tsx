import { Metadata } from 'next';
import Image from 'next/image';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Sobre Nós',
    description: 'Conheça a SAPIENZA Inteligência Digital - mais de 12 anos transformando negócios através de soluções digitais inovadoras.',
};

const stats = [
    { number: '150+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação dos Clientes' },
    { number: '12+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Clientes Ativos' },
];

const values = [
    {
        icon: '🎯',
        title: 'Foco no Cliente',
        description: 'Cada projeto é único. Entendemos suas necessidades e criamos soluções sob medida.',
    },
    {
        icon: '💡',
        title: 'Inovação Constante',
        description: 'Utilizamos as tecnologias mais modernas para entregar resultados excepcionais.',
    },
    {
        icon: '🤝',
        title: 'Parceria de Longo Prazo',
        description: 'Construímos relacionamentos duradouros, acompanhando o crescimento do seu negócio.',
    },
    {
        icon: '⚡',
        title: 'Agilidade',
        description: 'Metodologias ágeis para entregas rápidas e iterações constantes.',
    },
];

const team = [
    { name: 'Equipe de Desenvolvimento', role: 'Full-Stack Engineers', icon: '👨‍💻' },
    { name: 'Equipe de Design', role: 'UX/UI Designers', icon: '🎨' },
    { name: 'Equipe de Dados', role: 'Data Engineers & Scientists', icon: '📊' },
    { name: 'Equipe de Suporte', role: 'Customer Success', icon: '🎧' },
];

export default function SobrePage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                                Sobre Nós
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                Transformando <span className="text-orange-500">Negócios</span> através da Tecnologia
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                A SAPIENZA está redefinindo o modelo tradicional de desenvolvimento de software.
                                Oferecemos um processo inovador de ponta a ponta que empolga usuários e gera receita,
                                enquanto simplifica sua jornada de desenvolvimento.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Poucas empresas de desenvolvimento de software sob medida oferecem um processo
                                de desenvolvimento ágil inovador de ponta a ponta. Nossas soluções transformadoras
                                empolgam os usuários e geram receita.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/team.jpg"
                                alt="Equipe Sapienza"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossos <span className="text-orange-500">Valores</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Os princípios que guiam nosso trabalho e relacionamento com clientes
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Nossa <span className="text-orange-500">Equipe</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Profissionais experientes e apaixonados por tecnologia
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="bg-gray-50 p-6 rounded-xl text-center group hover:bg-orange-500 transition-colors duration-300"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                    {member.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 group-hover:text-orange-100 transition-colors">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
