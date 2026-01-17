'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavItem {
    name: string;
    href: string;
    submenu?: { name: string; href: string; icon?: string }[];
}

const navigation: NavItem[] = [
    { name: 'Início', href: '/' },
    {
        name: 'Serviços',
        href: '/servicos',
        submenu: [
            { name: 'Desenvolvimento de Software', href: '/servicos/desenvolvimento-de-software', icon: '💻' },
            { name: 'Desenvolvimento de Produtos', href: '/servicos/desenvolvimento-de-produtos', icon: '🚀' },
            { name: 'Desenvolvimento de MVP', href: '/servicos/desenvolvimento-de-mvp', icon: '⚡' },
            { name: 'Transformação Digital', href: '/servicos/transformacao-digital', icon: '🔄' },
            { name: 'Análise de Dados', href: '/servicos/analise-de-dados', icon: '📊' },
            { name: 'Design de UX', href: '/servicos/design-de-experiencia', icon: '🎨' },
            { name: 'Consultoria Mobile', href: '/servicos/consultoria-apps-mobile', icon: '📱' },
            { name: 'WhatsApp Chatbot', href: '/servicos/whatsapp-chatbot', icon: '🤖' },
        ],
    },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Cases', href: '/cases' },
    { name: 'Blog', href: '/blog' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-white shadow-lg'
                    : 'bg-transparent'
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
                    <div className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`font-medium transition-colors duration-300 flex items-center gap-1 py-6 ${scrolled
                                            ? 'text-gray-700 hover:text-orange-500'
                                            : 'text-white/90 hover:text-orange-400'
                                        }`}
                                >
                                    {item.name}
                                    {item.submenu && (
                                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Desktop Dropdown */}
                                {item.submenu && (
                                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-4 min-w-[280px]">
                                            {item.submenu.map((subitem) => (
                                                <Link
                                                    key={subitem.name}
                                                    href={subitem.href}
                                                    className="flex items-center gap-3 px-5 py-3 hover:bg-orange-50 transition-colors"
                                                >
                                                    <span className="text-xl">{subitem.icon}</span>
                                                    <span className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                                                        {subitem.name}
                                                    </span>
                                                </Link>
                                            ))}
                                            <div className="border-t border-gray-100 mt-2 pt-2 px-5">
                                                <Link href="/servicos" className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                                                    Ver todos os serviços →
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
                        className={`md:hidden p-2 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
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
                    <div className="md:hidden py-4 border-t border-gray-200 bg-white rounded-b-xl">
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <div key={item.name}>
                                    {item.submenu ? (
                                        <>
                                            <button
                                                onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? null : item.name)}
                                                className="w-full flex items-center justify-between text-gray-700 hover:text-orange-500 font-medium transition-colors py-3"
                                            >
                                                {item.name}
                                                <svg className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {mobileSubmenuOpen === item.name && (
                                                <div className="pl-4 pb-2 space-y-2">
                                                    {item.submenu.map((subitem) => (
                                                        <Link key={subitem.name} href={subitem.href} className="flex items-center gap-3 text-gray-600 hover:text-orange-500 py-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                                            <span>{subitem.icon}</span>
                                                            <span className="text-sm">{subitem.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={item.href} className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-3 block" onClick={() => setMobileMenuOpen(false)}>
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link href="/contato" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center mt-2" onClick={() => setMobileMenuOpen(false)}>
                                Contato
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
