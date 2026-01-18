'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { serviceGroups, featuredServices } from '@/data/navigation';

interface NavItem {
    name: string;
    href: string;
    hasMegaMenu?: boolean;
}

const navigation: NavItem[] = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos', hasMegaMenu: true },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Cases', href: '/cases' },
    { name: 'Blog', href: '/blog' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                            Sapienza
                        </span>
                        <span className="text-2xl font-bold text-orange-500"> Digital</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.hasMegaMenu && setMegaMenuOpen(true)}
                                onMouseLeave={() => item.hasMegaMenu && setMegaMenuOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className={`font-medium transition-colors duration-300 flex items-center gap-1 py-6 ${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white/90 hover:text-orange-400'
                                        }`}
                                >
                                    {item.name}
                                    {item.hasMegaMenu && (
                                        <svg className={`w-4 h-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Mega Menu */}
                                {item.hasMegaMenu && megaMenuOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[1100px]">
                                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                                            <div className="grid grid-cols-4 gap-10">
                                                {/* Service Groups */}
                                                {serviceGroups.map((group) => (
                                                    <div key={group.title}>
                                                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                            <span>{group.icon}</span>
                                                            {group.title}
                                                        </h3>
                                                        <ul className="space-y-3">
                                                            {group.services.map((service) => (
                                                                <li key={service.name}>
                                                                    <Link
                                                                        href={service.href}
                                                                        className="group block"
                                                                        onClick={() => setMegaMenuOpen(false)}
                                                                    >
                                                                        <span className="text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2">
                                                                            {service.name}
                                                                            {service.isNew && (
                                                                                <span className="text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                                                                                    NOVO
                                                                                </span>
                                                                            )}
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Featured Services */}
                                            <div className="border-t border-gray-100 mt-6 pt-6">
                                                <h3 className="font-bold text-gray-900 mb-4">Serviços em Destaque</h3>
                                                <div className="grid grid-cols-3 gap-4">
                                                    {featuredServices.map((service) => (
                                                        <Link
                                                            key={service.title}
                                                            href={service.href}
                                                            className="group p-4 rounded-xl bg-gray-50 hover:bg-orange-50 transition-colors"
                                                            onClick={() => setMegaMenuOpen(false)}
                                                        >
                                                            <div className="flex items-start gap-3">
                                                                <span className="text-2xl">{service.icon}</span>
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 group-hover:text-orange-500 transition-colors text-sm">
                                                                        {service.title}
                                                                    </h4>
                                                                    <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                                                                        {service.description}
                                                                    </p>
                                                                    <span className="text-orange-500 text-xs font-medium mt-2 inline-block">
                                                                        →
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Footer */}
                                            <div className="border-t border-gray-100 mt-6 pt-4 flex justify-between items-center">
                                                <Link href="/servicos" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors text-sm">
                                                    Ver todos os serviços →
                                                </Link>
                                                <Link href="/contato" className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-semibold">
                                                    Fale com um especialista
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/contato"
                            className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
                        >
                            Contato
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200 bg-white rounded-b-xl max-h-[80vh] overflow-y-auto">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.hasMegaMenu ? (
                                        <div className="py-2">
                                            <span className="font-bold text-gray-900 text-lg">{item.name}</span>
                                            <div className="mt-4 space-y-4">
                                                {serviceGroups.map((group) => (
                                                    <div key={group.title}>
                                                        <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                                                            <span>{group.icon}</span> {group.title}
                                                        </h4>
                                                        <ul className="pl-6 space-y-2">
                                                            {group.services.map((service) => (
                                                                <li key={service.name}>
                                                                    <Link
                                                                        href={service.href}
                                                                        className="text-gray-600 hover:text-orange-500 flex items-center gap-2"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                    >
                                                                        {service.name}
                                                                        {service.isNew && (
                                                                            <span className="text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full font-bold">
                                                                                NOVO
                                                                            </span>
                                                                        )}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-3 block"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contato"
                                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center mt-4"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contato
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
