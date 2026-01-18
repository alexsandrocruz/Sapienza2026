import React from 'react';

interface SDLCTimelineProps {
    phases: {
        title: string;
        description: string;
        icon: string;
    }[];
    badge?: string;
}

export const SDLCTimeline = ({ phases, badge }: SDLCTimelineProps) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Integração no Ciclo de Vida do Software
                    </h2>
                    {badge && (
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                            Como incorporamos {badge} em cada etapa do desenvolvimento.
                        </p>
                    )}
                </div>

                <div className="relative">
                    {/* Connector line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gray-100" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                        {phases.map((phase, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-2xl shadow-lg mx-auto lg:mx-0">
                                    {phase.icon}
                                </div>
                                <div className="text-center lg:text-left">
                                    <h4 className="font-bold text-gray-900">{phase.title}</h4>
                                    <p className="text-sm text-gray-600 mt-2">{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
