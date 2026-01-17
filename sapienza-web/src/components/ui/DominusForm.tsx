'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

interface DominusFormProps {
    formId: string;
    theme?: 'light' | 'dark';
    primaryColor?: string;
    showDescription?: boolean;
    className?: string;
}

export function DominusForm({
    formId,
    theme = 'dark',
    primaryColor = '#f97316', // orange-500
    showDescription = false,
    className = '',
}: DominusFormProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerId = `dominus-form-${formId.slice(0, 8)}`;

    useEffect(() => {
        // Tentar renderizar quando o script carregar
        const tryRender = () => {
            const DominusForm = (window as any).DominusForm;
            if (DominusForm && DominusForm[formId] && containerRef.current) {
                DominusForm[formId].render(containerId, {
                    theme,
                    primaryColor,
                    showDescription,
                });
            }
        };

        // Retry a few times in case script hasn't loaded yet
        const interval = setInterval(tryRender, 500);
        const timeout = setTimeout(() => clearInterval(interval), 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [formId, theme, primaryColor, showDescription, containerId]);

    return (
        <>
            <Script
                src={`https://dominus.zensuite.com.br/api/embed/forms/${formId}/script.js`}
                strategy="lazyOnload"
            />
            <div
                ref={containerRef}
                id={containerId}
                className={className}
                data-dominus-form={formId}
                data-theme={theme}
                data-primary-color={primaryColor}
            />
        </>
    );
}
