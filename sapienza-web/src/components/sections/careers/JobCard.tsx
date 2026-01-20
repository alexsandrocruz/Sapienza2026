'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { JobProfile } from '@/data/jobs';

interface JobCardProps {
    job: JobProfile;
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:border-orange-500/30 transition-all duration-500"
        >
            <div className="flex flex-col h-full justify-between space-y-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <span className="px-4 py-1.5 bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-orange-500/20">
                            {job.category}
                        </span>
                        {!job.active && (
                            <span className="px-3 py-1 bg-gray-500/10 text-gray-500 text-[8px] font-bold uppercase tracking-widest rounded-full border border-gray-500/20">
                                Banco de Talentos
                            </span>
                        )}
                    </div>

                    <h3 className="text-3xl font-black text-white group-hover:text-orange-400 transition-colors">
                        {job.title}
                    </h3>

                    <p className="text-gray-400 font-light leading-relaxed line-clamp-3">
                        {job.description}
                    </p>

                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span>📍 {job.location}</span>
                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full" />
                        <span>💼 Tempo Integral</span>
                    </div>
                </div>

                <Link
                    href={`/carreiras/${job.slug}`}
                    className="inline-flex items-center gap-2 text-white font-bold group/btn"
                >
                    <span className="relative z-10">Ver Detalhes</span>
                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-orange-500 group-hover/btn:border-orange-500 transition-all duration-300">
                        →
                    </span>
                </Link>
            </div>
        </motion.div>
    );
}
