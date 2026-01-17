'use client';

import { DominusForm } from '@/components/ui';

interface HeroWithFormProps {
    badge?: string;
    title: string;
    subtitle?: string;
    description: string;
    formId: string;
    formTheme?: 'light' | 'dark';
    backgroundColor?: string;
}

export function HeroWithForm({
    badge = 'Serviço',
    title,
    subtitle,
    description,
    formId,
    formTheme = 'light',
    backgroundColor = 'bg-gray-50',
}: HeroWithFormProps) {
    return (
        <section className={`relative ${backgroundColor} py-16 lg:py-24`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Content */}
                    <div className="space-y-6">
                        <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase">
                            {badge}
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            {title}
                        </h1>

                        {subtitle && (
                            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                                {subtitle}
                            </h2>
                        )}

                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-2xl">✓</span>
                                <span className="text-gray-700 font-medium">+150 Projetos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-2xl">✓</span>
                                <span className="text-gray-700 font-medium">98% Satisfação</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-orange-500 text-2xl">✓</span>
                                <span className="text-gray-700 font-medium">12+ Anos</span>
                            </div>
                        </div>
                    </div>

                    {/* Dominus Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Tem um projeto em mente? Converse com nossos especialistas.
                        </h3>
                        <DominusForm
                            formId={formId}
                            theme="light"
                            primaryColor="#ea580c"
                            showDescription={false}
                            className="min-h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
