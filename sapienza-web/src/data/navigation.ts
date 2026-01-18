// Estrutura de navegação para o mega menu
export interface ServiceLink {
    name: string;
    href: string;
    description?: string;
    isNew?: boolean;
}

export interface ServiceGroup {
    title: string;
    icon: string;
    services: ServiceLink[];
}

export interface FeaturedService {
    title: string;
    description: string;
    href: string;
    icon: string;
}

// Grupos de serviços para o mega menu
export const serviceGroups: ServiceGroup[] = [
    {
        title: 'Serviços de IA',
        icon: '🤖',
        services: [
            { name: 'Engenharia com IA', href: '/servicos/ia-enabled-engineering', description: 'Acelere o desenvolvimento com IA', isNew: true },
            { name: 'IA Generativa', href: '/servicos/ia-generativa', description: 'ChatGPT, LLMs e automação', isNew: true },
            { name: 'IA Responsável', href: '/servicos/ia-responsavel', description: 'Governança e compliance', isNew: true },
            { name: 'Análise de Dados', href: '/servicos/analise-de-dados', description: 'BI e insights acionáveis' },
        ],
    },
    {
        title: 'Transformação Digital',
        icon: '🔄',
        services: [
            { name: 'Transformação Digital', href: '/servicos/transformacao-digital', description: 'Modernize sua empresa' },
            { name: 'Cloud & DevOps', href: '/servicos/cloud-devops', description: 'Migração e infraestrutura', isNew: true },
            { name: 'Modernização de Legado', href: '/servicos/modernizacao-legado', description: 'Atualize sistemas antigos', isNew: true },
        ],
    },
    {
        title: 'Engenharia de Software',
        icon: '💻',
        services: [
            { name: 'Desenvolvimento Customizado', href: '/servicos/desenvolvimento-de-software', description: 'Soluções sob medida' },
            { name: 'Engenharia de Plataformas', href: '/servicos/desenvolvimento-de-plataformas', description: 'Escala e orquestração', isNew: true },
            { name: 'Apps Mobile', href: '/servicos/consultoria-apps-mobile', description: 'iOS, Android e híbridos' },
            { name: 'WhatsApp Chatbot', href: '/servicos/whatsapp-chatbot', description: 'Automação de atendimento' },
        ],
    },
    {
        title: 'Inovação de Produto',
        icon: '🚀',
        services: [
            { name: 'Desenvolvimento de Produtos', href: '/servicos/desenvolvimento-de-produtos', description: 'Do conceito ao lançamento' },
            { name: 'Desenvolvimento de Aplicações & MVP', href: '/servicos/desenvolvimento-de-mvp', description: 'Valide sua ideia rápido' },
            { name: 'Gerenciamento de Projetos', href: '/servicos/gerenciamento-de-projetos', description: 'Excelência em PMO e Delivery', isNew: true },
            { name: 'Design de Experiência', href: '/servicos/design-de-experiencia', description: 'UX/UI que encanta' },
        ],
    },
];

// Serviços em destaque para o mega menu
export const featuredServices: FeaturedService[] = [
    {
        title: 'IA-Enabled Engineering',
        description: 'Acelere o desenvolvimento de software com inteligência artificial que melhora eficiência e qualidade.',
        href: '/servicos/ia-enabled-engineering',
        icon: '🧠',
    },
    {
        title: 'Innovation Hub',
        description: 'A inovação não é seguir tendências. É sobre aproveitar a tecnologia certa para seu negócio.',
        href: '/servicos/desenvolvimento-de-produtos',
        icon: '💡',
    },
    {
        title: 'Consultoria Tecnológica',
        description: 'Serviços de consultoria que ajudam sua empresa a se preparar para o futuro: estratégia digital, arquitetura...',
        href: '/servicos/transformacao-digital',
        icon: '🎯',
    },
];
