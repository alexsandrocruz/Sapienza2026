'use client';

import { ReactNode } from 'react';

interface CalloutProps {
    type?: 'info' | 'warning' | 'success' | 'error';
    children: ReactNode;
}

const styles = {
    info: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        icon: '💡',
        iconBg: 'bg-blue-500/20',
        text: 'text-blue-100',
    },
    warning: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        icon: '⚠️',
        iconBg: 'bg-orange-500/20',
        text: 'text-orange-100',
    },
    success: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        icon: '✅',
        iconBg: 'bg-green-500/20',
        text: 'text-green-100',
    },
    error: {
        bg: 'bg-red-500/10',
        border: 'border-red-500/30',
        icon: '🚨',
        iconBg: 'bg-red-500/20',
        text: 'text-red-100',
    },
};

export function Callout({ type = 'info', children }: CalloutProps) {
    const style = styles[type];

    return (
        <div
            className={`my-6 flex gap-4 rounded-2xl border ${style.bg} ${style.border} p-6 backdrop-blur-xl`}
        >
            <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${style.iconBg}`}>
                <span className="text-2xl">{style.icon}</span>
            </div>
            <div className={`flex-1 ${style.text} prose-p:my-0`}>{children}</div>
        </div>
    );
}
