export interface JobProfile {
    id: string;
    slug: string;
    title: string;
    category: 'Tecnologia' | 'Design & UX' | 'Negócios & Vendas' | 'Marketing' | 'Estágio';
    location: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    skills?: string[];
    active: boolean;
}

export const jobProfiles: JobProfile[] = [
    {
        id: 'analista-negocios',
        slug: 'analista-de-negocios',
        title: 'Analista de Negócios',
        category: 'Negócios & Vendas',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Responsável por reunir e documentar requisitos, definir a visão do produto e atuar como ponte entre estratégia de negócio e execução técnica.',
        responsibilities: [
            'Reunir e documentar requisitos usando entrevistas, workshops e pesquisas.',
            'Definir a visão do produto, roteiro e oportunidades de crescimento.',
            'Desenvolver especificações detalhadas e priorizar o backlog.',
            'Participar de testes de aceitação do usuário.'
        ],
        requirements: [
            '2+ anos de experiência na função para projetos web/mobile.',
            'Fortes habilidades analíticas e de gerenciamento de produtos.',
            'Excelentes habilidades de apresentação e liderança.',
            'Experiência em metodologias Agile.'
        ],
        active: false
    },
    {
        id: 'desenvolvedor-net',
        slug: 'desenvolvedor-net',
        title: 'Desenvolvedor .NET',
        category: 'Tecnologia',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Focado no desenvolvimento de sistemas robustos e escaláveis utilizando o ecossistema .NET Core.',
        responsibilities: [
            'Desenvolver e manter aplicativos usando .NET/.NET Core.',
            'Implementar serviços Web modernos (RESTful e SOAP).',
            'Escrever e executar testes unitários.',
            'Garantir velocidade, segurança e escalabilidade extrema.'
        ],
        requirements: [
            '2+ anos de experiência comprovada.',
            'Experiência com C#, ASP.NET MVC, Entity Framework.',
            'Conhecimento de SQL Server, T-SQL e Stored Procedures.',
            'Práticas de engenharia como CI/CD e padrões de projeto.'
        ],
        active: false
    },
    {
        id: 'cloud-engineer',
        slug: 'cloud-engineer',
        title: 'Cloud Engineer',
        category: 'Tecnologia',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Especialista em infraestrutura como código, automação de pipelines e orquestração de serviços em nuvem.',
        responsibilities: [
            'Configuração de servidores web e aplicativos.',
            'Implementação de ferramentas de automação e infra de TI.',
            'Gestão de pipelines CI/CD.',
            'Projeto e manutenção de infraestrutura AWS.'
        ],
        requirements: [
            'Sólida experiência com AWS (EC2, RDS, Security Groups).',
            'Experiência com NGINX, Apache e Cloudflare.',
            'Conhecimento em Linux (RHCE/RHCSA é diferencial).',
            'Experiência com bancos de dados (MySQL, PostgreSQL).'
        ],
        active: false
    },
    {
        id: 'designer-senior',
        slug: 'designer-senior',
        title: 'Designer Sênior',
        category: 'Design & UX',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Liderança criativa para conceituar linguagens visuais e interfaces de alta fidelidade para produtos complexos.',
        responsibilities: [
            'Conceituação de linguagem de design para web e mobile.',
            'Conversão de wireframes em protótipos de alta fidelidade.',
            'Coordenação de entregas com times de engenharia.',
            'Mentoria de designers júnior.'
        ],
        requirements: [
            '5+ anos de experiência com Adobe Suite (PS, AI) ou Sketch/Figma.',
            'Domínio de tipografia, grids e design system.',
            'Conhecimento profundo de UX moderno e Dark Mode.',
            'Experiência em After-Effects e Premiere é diferencial.'
        ],
        active: false
    },
    {
        id: 'analista-pre-vendas',
        slug: 'analista-de-pre-vendas-e-especialista-em-solucoes',
        title: 'Analista de Pré-Vendas e Especialista em Soluções',
        category: 'Negócios & Vendas',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Apoio técnico e comercial no processo de pré-venda, garantindo que as soluções propostas atendam perfeitamente aos desafios dos clientes.',
        responsibilities: [
            'Acompanhar leads qualificados e realizar apresentações técnicas.',
            'Entender as necessidades do negócio e propor arquiteturas iniciais.',
            'Colaborar com times de engenharia para estimar esforços.',
            'Manter-se atualizado com as tendências de mercado e tecnologia.'
        ],
        requirements: [
            'Experiência prévia em vendas complexas ou consultoria técnica.',
            'Capacidade de traduzir termos técnicos para linguagem de negócios.',
            'Excelência em comunicação e persuasão.',
            'Familiaridade com ecossistemas SaaS e Cloud.'
        ],
        active: false
    },
    {
        id: 'analista-qa',
        slug: 'analista-de-qa',
        title: 'Analista de QA',
        category: 'Tecnologia',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Garantia da excelência técnica e funcional através de testes automatizados e processos rigorosos de qualidade.',
        responsibilities: [
            'Planejamento e execução de planos de teste.',
            'Desenvolvimento de scripts de automação de teste.',
            'Identificação, reporte e acompanhamento de bugs.',
            'Garantir que os padrões de UX/UI sejam respeitados.'
        ],
        requirements: [
            'Experiência com ferramentas de automação (Cypress, Selenium).',
            'Sólidos conhecimentos em testes de API e Frontend.',
            'Perfil detalhista e foco na experiência do usuário.',
            'Conhecimento de pipelines de CI/CD.'
        ],
        active: false
    },
    {
        id: 'desenvolvedor-react',
        slug: 'desenvolvedor-react-js',
        title: 'Desenvolvedor React JS',
        category: 'Tecnologia',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Criação de interfaces web performáticas, modernas e cinematicamente fluidas.',
        responsibilities: [
            'Desenvolver interfaces web usando React e Next.js.',
            'Implementar animações complexas com Framer Motion.',
            'Otimizar performance de carregamento e renderização.',
            'Colaborar com designers para pixel-perfect delivery.'
        ],
        requirements: [
            'Domínio de React, Typescript e Tailwind CSS.',
            'Experiência com State Management (Zustand/Redux).',
            'Conhecimento de SSR, SSG e padrões Next.js.',
            'Olhar apurado para design e interatividade.'
        ],
        active: false
    },
    {
        id: 'consultor-vendas-senior',
        slug: 'consultor-de-vendas-de-software-senior',
        title: 'Consultor de Vendas de Software Sênior',
        category: 'Negócios & Vendas',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Liderar o processo de vendas complexas, focando no relacionamento de alto valor e soluções consultivas.',
        responsibilities: [
            'Qualificar leads e gerenciar o funil de vendas (CRM).',
            'Realizar consultoria técnica para clientes em potencial.',
            'Negociar contratos de alto valor e projetos personalizados.',
            'Manter métricas de desempenho e previsibilidade de vendas.'
        ],
        requirements: [
            '5+ anos de experiência em vendas de software enterprise.',
            'Experiência com CRM (HubSpot, Salesforce).',
            'Inglês fluente (desejável).',
            'Pós-graduação ou equivalente em áreas correlatas.'
        ],
        active: false
    },
    {
        id: 'especialista-inbound',
        slug: 'especialista-em-inbound-marketing',
        title: 'Especialista em Inbound Marketing',
        category: 'Marketing',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Arquitetar estratégias de aquisição de leads e nutrição de base através de conteúdo e automação.',
        responsibilities: [
            'Gerenciar campanhas de automação no HubSpot.',
            'Definir estratégias de conteúdo para SEO e redes sociais.',
            'Executar testes A/B para otimização de conversão.',
            'Analisar métricas de ROI e funil de marketing.'
        ],
        requirements: [
            'Proficiência em automação de marketing (HubSpot/RD Station).',
            'Experiência com SEO, SEM e Marketing de Conteúdo.',
            'Mindset analítico focado em dados e conversão.',
            'Capacidade de trabalhar em ambientes de ritmo acelerado.'
        ],
        active: false
    },
    {
        id: 'tech-lead-net',
        slug: 'tech-lead-net',
        title: 'Tech Lead .NET',
        category: 'Tecnologia',
        location: 'Aracaju, Brasil / Remoto',
        description: 'Liderança técnica para times de engenharia .NET, garantindo a excelência arquitetural e mentoria técnica.',
        responsibilities: [
            'Definir arquitetura de sistemas complexos.',
            'Realizar Code Reviews e garantir padrões de qualidade.',
            'Mentoria de desenvolvedores pleno e sênior.',
            'Apoio à gestão em estimativas e roadmap técnico.'
        ],
        requirements: [
            'Sólida experiência em arquitetura de software .NET Core.',
            'Domínio de Cloud, Microservices e Design Patterns.',
            'Habilidades de liderança e comunicação interpessoal.',
            'Foco em entrega de valor contínuo e pragmatismo.'
        ],
        active: false
    }
];

export const jobCategories = [
    'Todos',
    'Tecnologia',
    'Design & UX',
    'Negócios & Vendas',
    'Marketing',
    'Estágio'
];
