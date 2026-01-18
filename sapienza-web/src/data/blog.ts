export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
    slug: string;
}

export const mockBlogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'De Projeto a Produto: por que empresas inteligentes estão repensando como contratam software',
        excerpt: 'A transição de uma mentalidade de projeto para produto é fundamental para garantir a agilidade e a entrega de valor contínuo no cenário digital atual.',
        date: '24 de Outubro, 2025',
        image: '/images/services/software-dev-hero.png',
        category: 'Estratégia Digital',
        slug: 'de-projeto-a-produto',
    },
    {
        id: '2',
        title: 'MVP Inteligente: o segredo das empresas que testam ideias antes de investir pesado',
        excerpt: 'Descubra como um Minimum Viable Product bem estruturado pode salvar orçamentos milionários e acelerar o aprendizado sobre o mercado.',
        date: '24 de Outubro, 2025',
        image: '/images/services/platform-growth.png',
        category: 'Inovação',
        slug: 'mvp-inteligente',
    },
    {
        id: '3',
        title: 'Revolucionando o futuro das empresas com a IA',
        excerpt: 'A inteligência artificial não é mais uma promessa para o futuro. Saiba como a Sapienza está implementando soluções práticas hoje.',
        date: '5 de Janeiro, 2024',
        image: '/images/services/gen-ai.png',
        category: 'Inteligência Artificial',
        slug: 'revolucionando-futuro-com-ia',
    },
];
