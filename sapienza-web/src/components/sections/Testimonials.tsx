import Image from 'next/image';

const testimonials = [
    { quote: 'A Sapienza transformou completamente nossa operação digital. O sistema desenvolvido superou todas as expectativas e trouxe resultados incríveis para nosso negócio.', author: 'Carlos Eduardo', role: 'CEO, Fundamental1e2', image: '/images/testimonial-carlos.jpg' },
    { quote: 'Excelente parceria! A equipe entendeu nossas necessidades e entregou um MVP em tempo recorde. Superou nossas expectativas.', author: 'Maria Santos', role: 'Diretora de Operações', image: '/images/team.jpg' },
    { quote: 'Profissionais extremamente competentes e comprometidos. O projeto foi entregue no prazo e com qualidade excepcional.', author: 'João Silva', role: 'Founder, StartupXYZ', image: '/images/hero-innovation.jpg' },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block text-white/80 font-semibold text-sm tracking-wider uppercase mb-4">Depoimentos</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O que nossos Clientes dizem</h2>
                    <p className="text-lg text-orange-100 max-w-3xl mx-auto">A satisfação dos nossos clientes é nossa maior conquista</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.author} className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                            <div className="text-4xl text-white/30 mb-4">"</div>
                            <p className="text-white text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-white/30">
                                    <Image src={testimonial.image} alt={testimonial.author} fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{testimonial.author}</div>
                                    <div className="text-orange-100 text-sm">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
