import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder para página de post individual
// Futuramente usar MDX ou CMS para conteúdo real

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;

    return {
        title: `Post: ${slug}`,
        description: 'Artigo do blog da Sapienza',
    };
}

export default async function BlogPostPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    return (
        <>
            {/* Article Header */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 mb-6"
                    >
                        ← Voltar ao Blog
                    </Link>
                    <span className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Desenvolvimento
                    </span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </h1>
                    <div className="flex items-center gap-6 text-gray-300">
                        <span>15 Jan 2026</span>
                        <span>•</span>
                        <span>8 min de leitura</span>
                    </div>
                </div>
            </section>

            {/* Article Image */}
            <div className="relative h-[400px] max-w-5xl mx-auto -mt-10">
                <Image
                    src="/images/hero-innovation.jpg"
                    alt="Imagem do artigo"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                />
            </div>

            {/* Article Content */}
            <article className="py-16">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg prose-orange max-w-none">
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Este é um placeholder para o conteúdo do artigo. Futuramente, o conteúdo será
                            carregado de arquivos MDX ou de um CMS headless como Contentful ou Sanity.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introdução</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Principais Pontos</h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                            <li>Ponto importante número um sobre o tema abordado</li>
                            <li>Segundo ponto relevante para consideração</li>
                            <li>Terceiro item da lista com informações úteis</li>
                            <li>Conclusão parcial dos pontos apresentados</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusão</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    {/* Author */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl text-white font-bold">
                                S
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Equipe Sapienza</div>
                                <div className="text-gray-600">Especialistas em transformação digital</div>
                            </div>
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="font-bold text-gray-900 mb-4">Compartilhar</h3>
                        <div className="flex gap-4">
                            <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                in
                            </button>
                            <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                𝕏
                            </button>
                            <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors">
                                📋
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Artigos Relacionados</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Link
                                key={i}
                                href="/blog/exemplo-post"
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="relative h-40">
                                    <Image
                                        src="/images/team.jpg"
                                        alt="Artigo relacionado"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <span className="text-orange-500 text-sm font-medium">Categoria</span>
                                    <h3 className="font-bold text-gray-900 mt-1 group-hover:text-orange-500 transition-colors">
                                        Título do artigo relacionado {i}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
