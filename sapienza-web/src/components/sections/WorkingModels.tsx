import React from 'react';

interface WorkingModelsProps {
    models: {
        title: string;
        description: string;
        icon: string;
    }[];
    title?: string;
}

export const WorkingModels = ({ models, title = 'Modelos de Trabalho' }: WorkingModelsProps) => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {title}
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {models.map((model, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{model.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{model.title}</h3>
                            <p className="text-gray-600">{model.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
