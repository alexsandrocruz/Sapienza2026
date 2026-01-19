'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CaseProject } from '@/data/cases';

interface CaseCardProps {
    project: CaseProject;
    index: number;
}

export default function CaseCard({ project, index }: CaseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[500px] overflow-hidden rounded-3xl bg-gray-900"
        >
            {/* Background Image with Hover Zoom */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#020617]/40 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Glowing Border on Hover */}
            <div className="absolute inset-0 z-10 border border-white/5 rounded-3xl group-hover:border-orange-500/50 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-orange-500 text-white rounded-full">
                            {project.category}
                        </span>
                        <span className="text-gray-400 text-xs font-medium">
                            {project.client} • {project.date}
                        </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {project.description}
                    </p>

                    {/* Results / Metrics on Hover */}
                    <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 pt-2">
                        <div className="flex flex-wrap gap-2">
                            {project.results.slice(0, 2).map((result, i) => (
                                <span key={i} className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-md border border-green-400/20">
                                    {result}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                        <div className="flex gap-2">
                            {project.tech.slice(0, 3).map((t, i) => (
                                <span key={i} className="text-[10px] text-gray-500 font-medium bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <Link
                            href={`/cases/${project.slug}`}
                            className="bg-white/10 hover:bg-orange-500 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/10"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Ambient Pulse Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-all duration-700" />
        </motion.div>
    );
}
