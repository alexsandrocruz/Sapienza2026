import React from 'react';
import { LifecycleStep } from '@/data/services';

interface LifecycleDiagramProps {
    title: string;
    subtitle?: string;
    steps: LifecycleStep[];
}

export const LifecycleDiagram = ({ title, subtitle, steps }: LifecycleDiagramProps) => {
    return (
        <section className="py-24 bg-[#0b0f19] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
                    {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
                </div>

                <div className="relative flex flex-col items-center">
                    {/* Circular Center */}
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-8 border-gray-800 flex items-center justify-center mb-12 lg:mb-0">
                        <div className="text-center p-8">
                            <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold mb-2 block">Core</span>
                            <span className="text-2xl lg:text-3xl font-bold leading-tight">Generative AI</span>
                        </div>

                        {/* Spinning Rings Effect */}
                        <div className="absolute inset-0 rounded-full border-t-2 border-orange-500/30 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border-b-2 border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                    </div>

                    {/* Steps Grid - Positioned around or below */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 w-full mt-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 shadow-lg"
                                    style={{ backgroundColor: `${step.color}20`, color: step.color }}
                                >
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
