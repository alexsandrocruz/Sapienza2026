import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RichSection } from '@/data/services';

export const SplitContentSection = ({ section }: { section: RichSection }) => {
    return (
        <section className={`py-24 ${section.dark ? 'bg-[#0b0f19] text-white' : 'bg-white text-gray-900'} overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${section.reversed ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="space-y-8">
                        <h2 className={`text-4xl lg:text-6xl font-bold leading-[1.1] ${section.dark ? 'text-white' : 'text-gray-900 tracking-tight'}`}>
                            {section.title}
                        </h2>
                        <div className="w-20 h-1.5 bg-orange-500 rounded-full" />
                        <p className={`text-lg lg:text-xl leading-relaxed ${section.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {section.description}
                        </p>
                        {section.cta && (
                            <Link
                                href={section.cta.link}
                                className={`inline-flex items-center px-8 py-4 rounded-full font-bold transition-all ${section.dark
                                        ? 'bg-white text-[#0b0f19] hover:bg-orange-500 hover:text-white'
                                        : 'bg-[#0b0f19] text-white hover:bg-orange-500 shadow-xl'
                                    }`}
                            >
                                {section.cta.text}
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        )}
                    </div>

                    {section.image && (
                        <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src={section.image}
                                alt={section.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
