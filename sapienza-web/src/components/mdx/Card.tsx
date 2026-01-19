'use client';

import { ReactNode } from 'react';

interface CardProps {
    title: string;
    icon?: string;
    children: ReactNode;
}

export function Card({ title, icon, children }: CardProps) {
    return (
        <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-orange-500/30 hover:bg-white/10">
            <div className="mb-4 flex items-center gap-3">
                {icon && (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-2xl transition-transform group-hover:scale-110">
                        {icon}
                    </div>
                )}
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <div className="text-gray-300">{children}</div>
        </div>
    );
}
