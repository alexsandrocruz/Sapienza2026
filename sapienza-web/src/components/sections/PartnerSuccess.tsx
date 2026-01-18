import Image from 'next/image';

interface Partner {
    name: string;
    description: string;
    logo: string;
    link: string;
}

interface PartnerSuccessProps {
    data: {
        title: string;
        items: Partner[];
    };
}

export default function PartnerSuccess({ data }: PartnerSuccessProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-slate-900">
                    <h2 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
                        {data.title}
                    </h2>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                            Explore our ecosystem
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {data.items.map((partner, idx) => (
                        <div key={idx} className="group border-t border-slate-200 pt-12 pb-8 flex flex-col h-full">
                            <div className="h-16 w-32 relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                {partner.name}
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 flex-grow leading-relaxed">
                                {partner.description}
                            </p>
                            <a
                                href={partner.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-500 font-bold flex items-center gap-2 hover:gap-4 transition-all"
                            >
                                Read more
                                <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
