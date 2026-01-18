import React from 'react';
import { ReadinessItem } from '@/data/services';

interface ReadinessEvaluationProps {
    title: string;
    subtitle?: string;
    boxes: ReadinessItem[];
}

export const ReadinessEvaluation = ({ title, subtitle, boxes }: ReadinessEvaluationProps) => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tighter">
                        {title}
                    </h2>
                    {subtitle && <p className="text-xl text-gray-600 leading-relaxed">{subtitle}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {boxes.map((box, idx) => (
                        <div key={idx} className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100 group hover:translate-y-[-8px] transition-all duration-500">
                            <div className="bg-[#c2f3e1] py-6 px-10">
                                <h3 className="text-2xl font-bold text-gray-900 text-center">{box.title}</h3>
                            </div>
                            <div className="p-10">
                                <ul className="space-y-6">
                                    {box.items.map((item, iidx) => (
                                        <li key={iidx} className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-orange-500 mt-2.5 flex-shrink-0" />
                                            <span className="text-lg text-gray-700 font-medium leading-tight group-hover:text-gray-900 transition-colors">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
