'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PMOFrameworkTab } from '@/data/services';

interface IDEAbookFrameworkProps {
    title: string;
    description: string;
    tabs: PMOFrameworkTab[];
}

export default function IDEAbookFramework({ title, description, tabs }: IDEAbookFrameworkProps) {
    const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
    const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

    if (!tabs.length) return null;

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Title and IDEA Graphic */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">
                            Framework Proprietário
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                            {title}
                        </h2>
                        <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* IDEA Grid Graphic */}
                    <div className="relative group grayscale hover:grayscale-0 transition-all duration-500 scale-90 lg:scale-100 origin-top-left">
                        <div className="grid grid-cols-2 gap-2 w-64 h-64">
                            <div className="bg-[#a3e635] flex items-center justify-center text-5xl font-black text-white rounded-sm shadow-sm">I</div>
                            <div className="bg-[#84cc16] flex items-center justify-center text-5xl font-black text-white rounded-sm shadow-sm">D</div>
                            <div className="bg-[#a855f7] flex items-center justify-center text-5xl font-black text-white rounded-sm shadow-sm">E</div>
                            <div className="bg-[#facc15] flex items-center justify-center text-5xl font-black text-white rounded-sm shadow-sm">A</div>
                        </div>
                        {/* Vertical Labels */}
                        <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Intellias</div>
                        <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Delivery</div>
                        <div className="absolute -right-24 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Excellence</div>
                        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">Accelerator</div>
                    </div>
                </div>

                {/* Interactive Tabs */}
                <div className="mb-12 border-b border-gray-100">
                    <div className="flex flex-wrap gap-8 lg:gap-16">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-6 text-xl font-bold transition-all relative ${activeTab === tab.id
                                    ? 'text-gray-900'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-black animate-in fade-in slide-in-from-bottom-1" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                            src={currentTab.image}
                            alt={currentTab.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                            {currentTab.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {currentTab.description}
                        </p>
                        <ul className="grid gap-4">
                            {currentTab.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
