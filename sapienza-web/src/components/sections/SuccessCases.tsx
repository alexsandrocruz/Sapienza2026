import React from 'react';

interface SuccessCasesProps {
    cases: {
        client: string;
        description: string;
        metrics: string[];
        image?: string;
    }[];
    title?: string;
}

export const SuccessCases = ({ cases, title = 'Resultados de Negócio' }: SuccessCasesProps) => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {title}
                    </h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {cases.map((useCase, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.client}</h3>
                                <p className="text-gray-600 mb-8 text-lg">{useCase.description}</p>
                                <div className="space-y-4">
                                    {useCase.metrics.map((metric, midx) => (
                                        <div key={midx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="font-semibold text-gray-900 text-lg">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
