import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Pronto para transformar seu <span className="text-white/90">Negócio?</span>
                    </h2>
                    <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Vamos conversar sobre como podemos ajudar sua empresa a alcançar novos patamares com tecnologia de ponta.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contato"
                            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
                        >
                            Solicitar Orçamento
                        </Link>
                        <Link
                            href="/cases"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
                        >
                            Ver Cases de Sucesso
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
