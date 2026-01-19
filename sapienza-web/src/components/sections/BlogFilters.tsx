'use client';

import { motion } from 'framer-motion';

interface BlogFiltersProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function BlogFilters({ categories, activeCategory, onCategoryChange }: BlogFiltersProps) {
    return (
        <section className="sticky top-20 z-40 bg-[#020617]/80 backdrop-blur-xl border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20'
                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-orange-500/30 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
