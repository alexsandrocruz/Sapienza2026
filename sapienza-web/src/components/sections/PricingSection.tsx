'use client';

import { motion } from 'framer-motion';

interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
}

interface PricingSectionProps {
    title: string;
    plans: Plan[];
}

export default function PricingSection({ title, plans }: PricingSectionProps) {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
                    >
                        {title}
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full border transition-all duration-500 group ${plan.highlighted
                                    ? 'bg-orange-500/5 border-orange-500/50 shadow-[0_0_40px_rgba(249,115,22,0.1)]'
                                    : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute top-0 right-10 -translate-y-1/2">
                                    <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                        Mais Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-2">
                                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                                    {plan.price}
                                </span>
                                <span className="text-gray-500 font-medium">/{plan.period}</span>
                            </div>

                            <div className="flex-grow space-y-4 mb-10">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${plan.highlighted
                                    ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
