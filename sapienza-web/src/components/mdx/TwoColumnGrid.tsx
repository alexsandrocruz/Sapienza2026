'use client';

import { ReactNode } from 'react';

interface TwoColumnGridProps {
    children: ReactNode;
}

export function TwoColumnGrid({ children }: TwoColumnGridProps) {
    return (
        <div className="my-8 grid gap-6 md:grid-cols-2">
            {children}
        </div>
    );
}
