const differentials = [
    { icon: '✓', title: 'Qualidade Garantida', description: 'Processos rigorosos de qualidade em todas as etapas do desenvolvimento.' },
    { icon: '⏱️', title: 'Prazos Cumpridos', description: 'Comprometimento com entregas pontuais e gestão eficiente de projetos.' },
    { icon: '💰', title: 'Custo-Benefício', description: 'Soluções com excelente retorno sobre investimento para seu negócio.' },
    { icon: '🎧', title: 'Suporte Dedicado', description: 'Equipe sempre disponível para atender suas necessidades e dúvidas.' },
    { icon: '📈', title: 'Escalabilidade', description: 'Soluções preparadas para crescer junto com seu negócio.' },
    { icon: '🔒', title: 'Segurança Total', description: 'Proteção de dados e conformidade com as melhores práticas de segurança.' },
];

export function WhyUs() {
    return (
        <section id="why-us" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">Por que nos escolher</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Diferenciais que fazem a <span className="text-orange-500">Diferença</span></h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Combinamos expertise técnica, processos eficientes e atendimento personalizado</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentials.map((item) => (
                        <div key={item.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">{item.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
