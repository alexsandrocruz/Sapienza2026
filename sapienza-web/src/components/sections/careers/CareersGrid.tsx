'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { JobProfile, jobCategories } from '@/data/jobs';
import JobCard from './JobCard';

interface CareersGridProps {
    jobs: JobProfile[];
}

export default function CareersGrid({ jobs }: CareersGridProps) {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredJobs = activeCategory === 'Todos'
        ? jobs
        : jobs.filter(job => job.category === activeCategory);

    return (
        <section className="py-24 bg-[#020617] relative" id="vagas">
            <div className="max-w-7xl mx-auto px-6">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {jobCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === category
                                ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-orange-500/30 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filteredJobs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredJobs.map((job) => (
                                <motion.div
                                    key={job.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <JobCard job={job} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="py-24 text-center space-y-6">
                        <div className="text-6xl text-gray-700 font-black">∅</div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Nenhuma vaga específica aberta</h3>
                        <p className="text-gray-400 max-w-md mx-auto">
                            Não encontrou sua vaga ideal? Envie seu currículo para nosso **Banco de Talentos** e entraremos em contato quando surgir uma oportunidade.
                        </p>
                        <button
                            onClick={() => setActiveCategory('Todos')}
                            className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-orange-500 hover:border-orange-500 transition-all uppercase tracking-widest text-[10px]"
                        >
                            Ver todos os perfis
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
