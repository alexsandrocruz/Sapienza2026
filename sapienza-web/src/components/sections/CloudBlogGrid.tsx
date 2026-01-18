import Image from 'next/image';

interface Article {
    category: string;
    title: string;
    image: string;
    link: string;
    type: 'case-study' | 'blog-post' | 'white-paper';
}

interface CloudBlogGridProps {
    data: {
        title: string;
        articles: Article[];
    };
}

export default function CloudBlogGrid({ data }: CloudBlogGridProps) {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 max-w-3xl leading-tight">
                    {data.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.articles.map((article, idx) => (
                        <a
                            key={idx}
                            href={article.link}
                            className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative"
                        >
                            <div className="aspect-[16/10] relative overflow-hidden">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-emerald-500 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 pb-16">
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors">
                                    {article.title}
                                </h3>

                                <div className="absolute bottom-6 right-8">
                                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-slate-900 group-hover:text-white transition-colors"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
