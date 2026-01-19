'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { MeetingType } from '@/data/meetings';

interface MeetingCardProps {
    meeting: MeetingType;
    index: number;
}

export function MeetingCard({ meeting, index }: MeetingCardProps) {
    // Acessar o ícone dinamicamente
    const Icon = Icons[meeting.icon as keyof typeof Icons] as Icons.LucideIcon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            {/* Recommended Badge */}
            {meeting.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                        ⭐ Recomendado
                    </div>
                </div>
            )}

            <Link href={meeting.dominusLink} target="_blank" rel="noopener noreferrer">
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 overflow-hidden group-hover:scale-[1.02]">
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${meeting.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                    {/* Content */}
                    <div className="relative z-10 space-y-6">
                        {/* Icon & Duration */}
                        <div className="flex items-start justify-between">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${meeting.color} flex items-center justify-center shadow-lg`}>
                                <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-right">
                                <div className="text-3xl font-black text-white">{meeting.duration}</div>
                                <div className="text-xs text-gray-400 uppercase tracking-wider">minutos</div>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-orange-400 transition-colors">
                            {meeting.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                            {meeting.description}
                        </p>

                        {/* Features */}
                        <ul className="space-y-2">
                            {meeting.features.slice(0, 3).map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                                    <span className="text-orange-500 mt-0.5">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-orange-400 font-semibold">Agendar agora</span>
                                <Icons.ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
