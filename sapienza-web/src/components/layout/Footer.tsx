import Link from 'next/link';

const footerLinks = {
    services: [
        { name: 'Desenvolvimento Web', href: '/servicos/desenvolvimento-web' },
        { name: 'Apps Mobile', href: '/servicos/apps-mobile' },
        { name: 'E-commerce', href: '/servicos/ecommerce' },
        { name: 'Consultoria Digital', href: '/servicos/consultoria' },
        { name: 'Cloud Computing', href: '/servicos/cloud' },
    ],
    company: [
        { name: 'Sobre Nós', href: '/sobre' },
        { name: 'Cases', href: '/cases' },
        { name: 'Blog', href: '/blog' },
        { name: 'Carreiras', href: '/carreiras' },
        { name: 'Contato', href: '/contato' },
    ],
    social: [
        { name: 'LinkedIn', href: 'https://linkedin.com/company/sapienza', icon: 'linkedin' },
        { name: 'Instagram', href: 'https://instagram.com/sapienza', icon: 'instagram' },
        { name: 'Facebook', href: 'https://facebook.com/sapienza', icon: 'facebook' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Sapienza <span className="text-orange-500">Digital</span>
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Transformando negócios através de soluções digitais inovadoras e personalizadas.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-300"
                                    aria-label={item.name}
                                >
                                    {item.icon === 'linkedin' && <span>in</span>}
                                    {item.icon === 'instagram' && <span>📷</span>}
                                    {item.icon === 'facebook' && <span>f</span>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Serviços</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Empresa</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-500 mr-3">📍</span>
                                <span className="text-gray-400">São Paulo, SP<br />Brasil</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-500 mr-3">✉️</span>
                                <a
                                    href="mailto:contato@sapienzae.com.br"
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    contato@sapienzae.com.br
                                </a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-orange-500 mr-3">📞</span>
                                <a
                                    href="tel:+5511999999999"
                                    className="text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    +55 (11) 9999-9999
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Sapienza Inteligência Digital. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacidade" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                            Política de Privacidade
                        </Link>
                        <Link href="/termos" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                            Termos de Uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
