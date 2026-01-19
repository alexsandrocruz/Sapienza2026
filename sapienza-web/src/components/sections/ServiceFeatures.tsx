'use client';

import { motion } from 'framer-motion';

interface ServiceFeaturesProps {
    features: string[];
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
    return (
        <section className="py-24 bg-[#030712]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                        Capacidades Core
                    </h2>
                    <p className="text-gray-400 mt-4">Nossa expertise técnica a serviço do seu negócio.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300"
                        >
                            <div className="text-orange-500 font-bold mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                0{idx + 1}
                            </div>
                            <h3 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">
                                {feature}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
