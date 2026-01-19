'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CaseFiltersProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function CaseFilters({ categories, activeCategory, onCategoryChange }: CaseFiltersProps) {
    const allCategories = ['Todos', ...categories];

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {allCategories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onCategoryChange(cat)}
                    className="relative px-6 py-2 rounded-full overflow-hidden transition-all duration-300 group"
                >
                    {/* Active Background */}
                    {activeCategory === cat && (
                        <motion.div
                            layoutId="activeFilter"
                            className="absolute inset-0 bg-orange-500"
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                    )}

                    {/* Hover State */}
                    {activeCategory !== cat && (
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}

                    <span className={`relative z-10 text-sm font-bold tracking-wider uppercase transition-colors duration-300 ${activeCategory === cat ? 'text-white' : 'text-gray-400 group-hover:text-white'
                        }`}>
                        {cat}
                    </span>

                    {/* Individual Border */}
                    <div className={`absolute inset-0 rounded-full border transition-colors ${activeCategory === cat ? 'border-orange-500' : 'border-white/10 group-hover:border-white/30'
                        }`} />
                </button>
            ))}
        </div>
    );
}
