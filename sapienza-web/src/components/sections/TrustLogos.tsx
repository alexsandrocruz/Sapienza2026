import React from 'react';
import Image from 'next/image';

interface TrustLogosProps {
    title?: string;
    logos: {
        name: string;
        image: string;
    }[];
}

export function TrustLogos({ title = 'Empresas que confiam na Sapienza', logos }: TrustLogosProps) {
    return (
        <section className="py-16 bg-[#f0f7f7]/50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
                        {title}
                    </h3>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="relative w-32 h-12 group">
                            <Image
                                src={logo.image}
                                alt={logo.name}
                                fill
                                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
