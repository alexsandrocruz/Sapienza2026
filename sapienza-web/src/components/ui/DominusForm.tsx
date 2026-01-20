'use client';

import { useEffect, useRef, useId } from 'react';
import Script from 'next/script';

interface DominusFormProps {
    formId: string;
    theme?: 'light' | 'dark';
    primaryColor?: string;
    showDescription?: boolean;
    className?: string;
    onSuccess?: () => void;
}

export function DominusForm({
    formId,
    theme = 'dark',
    primaryColor = '#f97316', // orange-500
    showDescription = false,
    className = '',
}: DominusFormProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const reactId = useId();
    // Create a unique ID that is valid for HTML id attribute
    const uniqueId = `dominus-form-${formId.slice(0, 8)}-${reactId.replace(/:/g, '')}`;

    useEffect(() => {
        // Tentar renderizar quando o script carregar
        const tryRender = () => {
            const DominusForm = (window as unknown as { DominusForm: Record<string, { render: (id: string, options: Record<string, unknown>) => void }> }).DominusForm;
            if (DominusForm && DominusForm[formId] && containerRef.current) {
                // Check if container already has content to avoid double rendering
                if (containerRef.current.innerHTML === '') {
                    DominusForm[formId].render(uniqueId, {
                        theme,
                        primaryColor,
                        showDescription,
                    });
                }
            }
        };

        // Retry a few times in case script hasn't loaded yet
        const interval = setInterval(tryRender, 500);
        const timeout = setTimeout(() => clearInterval(interval), 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [formId, theme, primaryColor, showDescription, uniqueId]);

    return (
        <>
            <Script
                src={`https://dominus.zensuite.com.br/api/embed/forms/${formId}/script.js`}
                strategy="lazyOnload"
            />
            <div
                ref={containerRef}
                id={uniqueId}
                className={className}
                data-dominus-form={formId}
                data-theme={theme}
                data-primary-color={primaryColor}
            />
        </>
    );
}
