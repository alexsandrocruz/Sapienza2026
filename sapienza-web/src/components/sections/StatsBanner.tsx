import React from 'react';

interface StatsBannerProps {
    stats: string[];
}

export const StatsBanner = ({ stats }: StatsBannerProps) => {
    return (
        <section className="bg-gray-50 border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {stats.map((stat, idx) => {
                        const parts = stat.split(' ');
                        const value = parts[0];
                        const label = parts.slice(1).join(' ');
                        return (
                            <div key={idx} className="text-center">
                                <div className="text-orange-500 font-bold text-xl mb-2">{value}</div>
                                <div className="text-gray-600 text-sm leading-tight">{label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
