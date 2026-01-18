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

                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${phases.length > 0 ? phases.length : 1} gap-8 relative z-10 items-start justify-center`}>
                        {phases.map((phase, idx) => (
                            <div key={idx} className="space-y-4 px-4 flex flex-col items-center group">
                                <div className="w-14 h-14 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center text-xl font-bold text-orange-600 shadow-md group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 z-10">
                                    {idx + 1}
                                </div>
                                <div className="text-center max-w-[240px]">
                                    <h4 className="font-bold text-gray-900 text-lg group-hover:text-orange-600 transition-colors uppercase tracking-tight">{phase.title}</h4>
                                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
