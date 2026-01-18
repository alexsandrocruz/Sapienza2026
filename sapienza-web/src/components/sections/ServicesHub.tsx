import React from 'react';
import { ServiceHubItem } from '@/data/services';

interface ServicesHubProps {
    title: string;
    description: string;
    items: ServiceHubItem[];
}

export function ServicesHub({ title, description, items }: ServicesHubProps) {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-16">
                    {items.map((item, idx) => (
                        <div key={idx} className="group space-y-4">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                                {item.icon || '🛠️'}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed border-l-2 border-gray-100 pl-4 group-hover:border-orange-500 transition-colors">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
