import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPost, getAllPosts, getPostSlugs } from '@/lib/mdx';
import { CTA } from '@/components/sections';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const slugs = await getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) return { title: 'Artigo não encontrado' };

    return {
        title: `${post.title} | Sapienza Digital`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
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
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

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

                    <div className="flex items-center justify-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest flex-wrap">
                        <span className="px-3 py-1 bg-orange-500 text-white rounded-full">{post.category}</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readingTime}</span>
                        <span>•</span>
                        <span>{post.author.name}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
                        {post.description}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </header>

            {/* Article Content */}
            <article className="relative py-24">
                <div className="max-w-4xl mx-auto px-6">
                    {/* Featured Image */}
                    <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-16">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* MDX Content with Premium Typography */}
                    <div className="prose prose-blog-premium max-w-none">
                        {post.content}
                    </div>

                    {/* Author Bio */}
                    <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl">
                        <div className="flex items-start gap-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-3xl font-black text-white flex-shrink-0">
                                {post.author.name[0]}
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">{post.author.name}</h3>
                                <p className="text-gray-400">{post.author.role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-12 flex items-center justify-center gap-4">
                        <span className="text-gray-400 font-medium">Compartilhar:</span>
                        <div className="flex gap-3">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sapienza.digital/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
                            >
                                𝕏
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sapienza.digital/blog/${post.slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Background Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[200px] pointer-events-none -z-10" />
            </article>

            <CTA />
        </main>
    );
}
