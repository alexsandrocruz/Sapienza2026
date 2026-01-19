import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getRelatedPosts } from '@/data/blog';
import { BlogCard, CTA } from '@/components/sections';

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return { title: 'Artigo não encontrado' };

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
                <div className="text-center space-y-6">
                    <h1 className="text-4xl font-black">Artigo não encontrado</h1>
                    <Link href="/blog" className="inline-block px-8 py-3 bg-orange-500 rounded-full font-bold">
                        Voltar ao Blog
                    </Link>
                </div>
            </div>
        );
    }

    const relatedPosts = getRelatedPosts(post.slug, post.category);

    return (
        <main className="bg-[#020617] min-h-screen">
            {/* Cinematic Header */}
            <header className="relative pt-32 pb-40 lg:pt-48 lg:pb-60 overflow-hidden">
                {/* Background Hero with Blur */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover opacity-20 blur-xl scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#020617] to-[#020617]" />
                </div>

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-orange-500 text-xs font-black uppercase tracking-widest hover:text-orange-400 mb-4"
                    >
                        ← Voltar ao Blog
                    </Link>

                    <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <span className="px-3 py-1 bg-orange-500 text-white rounded-full">{post.category}</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-4 pt-8 border-t border-white/5">
                        {post.author.avatar ? (
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                            </div>
                        ) : (
                            <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-lg font-bold text-orange-400">
                                {post.author.name.charAt(0)}
                            </div>
                        )}
                        <div className="text-left">
                            <div className="font-bold text-white">{post.author.name}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest">{post.author.role}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content Area */}
            <section className="relative -mt-32 pb-24 px-6 z-20">
                <div className="max-w-5xl mx-auto">
                    {/* Main Image */}
                    <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 mb-16">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Article Text */}
                        <div className="lg:col-span-8">
                            <article className="prose prose-invert prose-orange max-w-none">
                                <div className="text-xl text-gray-400 font-light leading-relaxed mb-12 italic">
                                    "{post.excerpt}"
                                </div>

                                {post.content ? (
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                ) : (
                                    <div className="space-y-8">
                                        <p>
                                            O futuro da tecnologia não está apenas na inovação por si só, mas em como aplicamos essas ferramentas para resolver desafios humanos e empresariais de maneira escalável. Na Sapienza, acreditamos que a engenharia de software de excelência é a base para qualquer transformação digital bem-sucedida.
                                        </p>
                                        <h2 className="text-white font-black">A Evolução da Engenharia</h2>
                                        <p>
                                            Historicamente, os projetos eram vistos como ativos finitos. Hoje, entendemos que software é um organismo vivo que precisa de cuidado constante, evolução tecnológica e um alinhamento ferrenho com os objetivos de negócio.
                                        </p>
                                        <h3 className="text-white font-bold">Pontos Chave:</h3>
                                        <ul>
                                            <li>Foco absoluto no valor de negócio entregue.</li>
                                            <li>Arquiteturas resilientes e preparadas para escala global.</li>
                                            <li>Integração ética e estratégica de Inteligência Artificial.</li>
                                            <li>Experiência do usuário (UX) como diferencial competitivo.</li>
                                        </ul>
                                        <p>
                                            Este artigo explora como estamos liderando essa mudança, transformando complexidade em clareza e garantindo que nossos parceiros estejam sempre um passo à frente no ecossistema digital.
                                        </p>
                                    </div>
                                )}
                            </article>

                            {/* Share & Tags Section could go here */}
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] sticky top-32">
                                <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                    Newsletter Sapienza
                                </h4>
                                <p className="text-sm text-gray-400 mb-6">
                                    Receba insights estratégicos sobre tecnologia e inovação diretamente no seu e-mail.
                                </p>
                                <form className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Seu e-mail"
                                        className="w-full px-6 py-4 bg-[#020617] border border-white/10 rounded-2xl text-white text-sm focus:border-orange-500 outline-none transition-colors"
                                    />
                                    <button className="w-full py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-colors">
                                        Inscrever agora
                                    </button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-24 bg-gray-900/10 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-4 mb-12">
                            <h2 className="text-3xl font-black text-white">Continue Lendo</h2>
                            <div className="h-[1px] flex-1 bg-white/5" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((rPost) => (
                                <BlogCard key={rPost.slug} post={rPost} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTA />
        </main>
    );
}
