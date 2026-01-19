export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    image: string;
    slug: string;
    featured?: boolean;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    content?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'como-escolher-framework-web-2026',
        title: 'Como Escolher o Framework Web Certo em 2026',
        excerpt: 'Next.js, Astro, Remix ou SvelteKit? Analisamos os principais frameworks e quando usar cada um.',
        category: 'Desenvolvimento',
        date: '15 Jan 2026',
        readTime: '8 min',
        image: '/images/hero-innovation.jpg',
        featured: true,
        author: {
            name: 'Equipe Sapienza',
            role: 'Especialistas em Engenharia'
        },
        content: `
            <p>Escolher o framework certo é uma das decisões mais críticas para o sucesso de um produto digital. Em 2026, o cenário evoluiu significativamente, com foco em performance extrema, hidratação parcial e experiência do desenvolvedor.</p>
            <h2>O Estado da Arte: Next.js e além</h2>
            <p>O Next.js continua sendo a escolha padrão para aplicações empresariais devido ao seu ecossistema robusto. No entanto, alternativas como Astro e Remix estão ganhando terreno em nichos específicos...</p>
        `
    },
    {
        id: '2',
        slug: 'de-projeto-a-produto',
        title: 'De Projeto a Produto: por que empresas inteligentes estão repensando como contratam software',
        excerpt: 'A transição de uma mentalidade de projeto para produto é fundamental para garantir a agilidade e a entrega de valor contínuo.',
        category: 'Estratégia Digital',
        date: '24 Out 2025',
        readTime: '10 min',
        image: '/images/services/software-dev-hero.png',
        featured: true,
        author: {
            name: 'Equipe Sapienza',
            role: 'Product Strategists'
        }
    },
    {
        id: '3',
        slug: 'mvp-inteligente',
        title: 'MVP Inteligente: o segredo das empresas que testam ideias antes de investir pesado',
        excerpt: 'Descubra como um Minimum Viable Product bem estruturado pode salvar orçamentos milionários e acelerar o aprendizado.',
        category: 'Inovação',
        date: '24 Out 2025',
        readTime: '12 min',
        image: '/images/services/platform-growth.png',
        author: {
            name: 'Equipe Sapienza',
            role: 'Inovadores Digitais'
        }
    },
    {
        id: '4',
        slug: 'ia-desenvolvimento-software',
        title: 'Como a IA está Transformando o Desenvolvimento de Software',
        excerpt: 'Copilots, geração de código e automação: o impacto da inteligência artificial no dia a dia do desenvolvedor.',
        category: 'Inteligência Artificial',
        date: '28 Dez 2025',
        readTime: '10 min',
        image: '/images/portfolio-ecommerce.jpg',
        author: {
            name: 'Equipe Sapienza',
            role: 'AI Engineers'
        }
    },
    {
        id: '5',
        slug: 'revolucionando-futuro-com-ia',
        title: 'Revolucionando o futuro das empresas com a IA',
        excerpt: 'A inteligência artificial não é mais uma promessa para o futuro. Saiba como a Sapienza está implementando soluções práticas hoje.',
        category: 'Inteligência Artificial',
        date: '5 Jan 2026',
        readTime: '7 min',
        image: '/images/services/gen-ai.png',
        author: {
            name: 'Equipe Sapienza',
            role: 'AI Strategists'
        }
    }
];

export const categories = [
    'Todos',
    'Desenvolvimento',
    'Estratégia Digital',
    'Inovação',
    'Inteligência Artificial',
    'Startups',
    'Design',
    'Segurança'
];

export const getAllPosts = () => blogPosts;
export const getPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
export const getPostsByCategory = (category: string) =>
    category === 'Todos' ? blogPosts : blogPosts.filter(p => p.category === category);
export const getRelatedPosts = (slug: string, category: string, count: number = 3) =>
    blogPosts
        .filter(p => p.slug !== slug && p.category === category)
        .slice(0, count);
