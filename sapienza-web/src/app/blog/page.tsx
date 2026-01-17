import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Artigos, tutoriais e novidades sobre desenvolvimento de software, transformação digital e tecnologia.',
};

// Dados simulados - futuramente pode vir de um CMS ou MDX
const blogPosts = [
    {
        slug: 'como-escolher-framework-web-2026',
        title: 'Como Escolher o Framework Web Certo em 2026',
        excerpt: 'Next.js, Astro, Remix ou SvelteKit? Analisamos os principais frameworks e quando usar cada um.',
        category: 'Desenvolvimento',
        date: '15 Jan 2026',
        readTime: '8 min',
        image: '/images/hero-innovation.jpg',
        featured: true,
    },
    {
        slug: 'mvp-startups-guia-completo',
        title: 'MVP para Startups: Guia Completo para Validar sua Ideia',
        excerpt: 'Aprenda como desenvolver um Produto Mínimo Viável de forma eficiente e validar sua ideia de negócio.',
        category: 'Startups',
        date: '10 Jan 2026',
        readTime: '12 min',
        image: '/images/team.jpg',
        featured: true,
    },
    {
        slug: 'transformacao-digital-pme',
        title: 'Transformação Digital para PMEs: Por Onde Começar?',
        excerpt: 'Estratégias práticas para pequenas e médias empresas iniciarem sua jornada digital.',
        category: 'Transformação Digital',
        date: '5 Jan 2026',
        readTime: '6 min',
        image: '/images/ecommerce.jpg',
        featured: false,
    },
    {
        slug: 'ia-desenvolvimento-software',
        title: 'Como a IA está Transformando o Desenvolvimento de Software',
        excerpt: 'Copilots, geração de código e automação: o impacto da inteligência artificial no dia a dia do desenvolvedor.',
        category: 'Inteligência Artificial',
        date: '28 Dez 2025',
        readTime: '10 min',
        image: '/images/portfolio-ecommerce.jpg',
        featured: false,
    },
    {
        slug: 'seguranca-aplicacoes-web',
        title: 'Segurança em Aplicações Web: Melhores Práticas',
        excerpt: 'OWASP Top 10, autenticação, autorização e outras práticas essenciais para aplicações seguras.',
        category: 'Segurança',
        date: '20 Dez 2025',
        readTime: '15 min',
        image: '/images/hero-innovation.jpg',
        featured: false,
    },
    {
        slug: 'design-system-componentes',
        title: 'Construindo um Design System Escalável',
        excerpt: 'Como criar um sistema de design que acelera o desenvolvimento e mantém consistência visual.',
        category: 'Design',
        date: '15 Dez 2025',
        readTime: '9 min',
        image: '/images/team.jpg',
        featured: false,
    },
];

const categories = ['Todos', 'Desenvolvimento', 'Startups', 'Transformação Digital', 'Inteligência Artificial', 'Segurança', 'Design'];

export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <>
            {/* Hero */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block text-orange-500 font-semibold text-sm tracking-wider uppercase mb-4">
                        Blog
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Artigos e <span className="text-orange-500">Insights</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Compartilhamos conhecimento sobre desenvolvimento de software,
                        transformação digital e as últimas tendências em tecnologia.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${category === 'Todos'
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Destaques</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime} de leitura</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Todos os Artigos</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className="text-orange-500 text-sm font-medium">{post.category}</span>
                                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center gap-3 mt-4 text-xs text-gray-500">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-16 bg-orange-500">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Receba nossos artigos por e-mail
                    </h2>
                    <p className="text-orange-100 mb-8">
                        Cadastre-se para receber novidades sobre tecnologia e tendências digitais.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button
                            type="submit"
                            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                        >
                            Inscrever
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
