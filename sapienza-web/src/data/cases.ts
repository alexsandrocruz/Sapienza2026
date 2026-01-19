export interface CaseProject {
    slug: string;
    title: string;
    client: string;
    category: 'IA' | 'Cloud' | 'Mobile' | 'Enterprise' | 'Logistics' | 'Fintech' | 'Healthcare' | 'Legal' | 'Education' | 'E-commerce';
    description: string;
    fullDescription?: string;
    challenge?: string;
    solution?: string;
    results: string[];
    image: string;
    tech: string[];
    featured?: boolean;
    date: string;
}

export const casesData: CaseProject[] = [
    {
        slug: 'cargofleet-nestle',
        title: 'CargoFleet: Automação de Leilões de Cargas',
        client: 'Nestlé / Transportadores',
        category: 'Logistics',
        description: 'Integração pioneira com a API da Nestlé para automatizar leilões de cargas, elevando a eficiência operacional e financeira dos transportadores.',
        fullDescription: 'O CargoFleet resolve a fricção entre transportadores e grandes embarcadores como a Nestlé. Através de uma integração profunda via API, o sistema automatiza o processo de lance e arremate, eliminando erros manuais e garantindo que o transportador opere na máxima performance exigida pelo contrato.',
        results: [
            '+300% de aumento no ROI dos transportadores',
            'Eficiência máxima em métricas de performance (KPIs)',
            'Automação completa do fluxo de leilão',
            'Redução de 95% no tempo de resposta para lances'
        ],
        image: '/images/cases/cargofleet.png',
        tech: ['IA Agêntica', 'Node.js', 'Nestlé API', 'PostgreSQL', 'Cloud Native'],
        featured: true,
        date: '2025'
    },
    {
        slug: 'voice-whatsapp-nestle',
        title: 'Reconhecimento de Voz & ERP SAP via WhatsApp',
        client: 'Nestlé',
        category: 'IA',
        description: 'Orquestração de IA para automatizar solicitações e atualizações de dados no SAP via comandos de voz no WhatsApp para transportadores.',
        results: [
            'Atualização de status SAP em tempo real',
            'Eliminação de digitação manual em campo',
            'Redução de 60% no tempo de reporte',
            'Adoção de 100% pelos motoristas'
        ],
        image: '/images/cases/voice-sap.png',
        tech: ['Whisper AI', 'NLP', 'SAP ERP Integration', 'WhatsApp Business API'],
        featured: true,
        date: '2024'
    },
    {
        slug: 'oracle-heineken-logistics',
        title: 'Integração Oracle Logistics: Heineken Brasil',
        client: 'Heineken do Brasil',
        category: 'Enterprise',
        description: 'Consultoria e estruturação de integração complexa com o sistema Oracle para otimização de fluxos de cargas e fretes.',
        results: [
            'Otimização de rotas e custos de fretes',
            'Segurança de dados nível Enterprise',
            'Eliminação de inconsistências de integração',
            'Escalabilidade para volume nacional'
        ],
        image: '/images/cases/heineken-oracle.png',
        tech: ['Oracle OTM', 'Integration Architecture', 'Enterprise Data Flow'],
        date: '2024'
    },
    {
        slug: 'fabio-ribeiro-advogados',
        title: 'Digital Law: Modernização de Sistema Jurídico',
        client: 'Fabio Ribeiro Advogados Associados',
        category: 'Legal',
        description: 'Transformação de arquitetura legada para uma aplicação Cloud Native Web App, garantindo escalabilidade e segurança de dados sensíveis.',
        results: [
            'Acesso seguro multi-dispositivo',
            'Redução de 40% no tempo de gestão de processos',
            'Cloud Native scalability',
            'Backup e redundância automática'
        ],
        image: '/images/cases/fabio-ribeiro.png',
        tech: ['React', 'Cloud Services', 'Identity Management', 'Encrypted Database'],
        date: '2024'
    },
    {
        slug: 'dominus-erp',
        title: 'DominusERP: Gestão de Projetos de Próxima Geração',
        client: 'Dominus Software',
        category: 'Enterprise',
        description: 'ERP inovador para agências e profissionais liberais com faturamento inteligente, assinatura digital e geração de propostas por voz via IA.',
        results: [
            'Redução de 70% no tempo de geração de propostas',
            'Controle financeiro 360º',
            'Integração de Assinatura Digital nativa',
            'Gestão de Clientes (CRM) integrado'
        ],
        image: '/images/cases/dominus-erp.png',
        tech: ['Next.js', 'AI Voice generation', 'Digital Signature API', 'SaaS Architecture'],
        featured: true,
        date: '2025'
    },
    {
        slug: 'showzen-crm',
        title: 'ShowZen: CRM para Indústria da Música e Entretenimento',
        client: 'Startup ShowZen',
        category: 'Enterprise',
        description: 'Sistema especializado para produtores e artistas com controle total de comissões, custos operacionais, impostos e gestão de agenda.',
        results: [
            'Transparência total em divisões de comissões',
            'Controle rigoroso de tributação por evento',
            'Redução de erros no settlement financeiro em 90%',
            'Agenda centralizada para artistas e staff'
        ],
        image: '/images/cases/showzen.png',
        tech: ['React', 'Financial Engines', 'CRM Customization', 'Tax Logic'],
        date: '2024'
    },
    {
        slug: 'santa-casa-orcamentos',
        title: 'HealthTech: Gestão de Orçamentos Cirúrgicos',
        client: 'Santa Casa de Montes Claros',
        category: 'Healthcare',
        description: 'Módulo especial integrado ao sistema MV para otimização do fluxo de orçamentos de cirurgias complexas baseado em histórico de dados.',
        results: [
            'Aumento drástico na assertividade de orçamentos',
            'Integração nativa com sistema MV',
            'Acesso instantâneo a histórico cirúrgico',
            'Agilidade no fechamento de pacotes hospitalares'
        ],
        image: '/images/cases/santa-casa.png',
        tech: ['MV Integration', 'Data Analytics', 'Healthcare Compliance', 'Decision Support'],
        featured: true,
        date: '2024'
    },
    {
        slug: 'business-solutions-investment-banking',
        title: 'Investment Banking SaaS: Business Solutions LLC',
        client: 'Business Solutions LLC (Acquired by Select Bank)',
        category: 'Fintech',
        description: 'Plataforma SaaS Multitenant de elite para gestão de fundos e agências de captação, sendo o motor tecnológico até a aquisição pelo Select Bank.',
        fullDescription: 'Um marco em engenharia de sistemas financeiros, esta aplicação permitiu a gestão centralizada de múltiplas agências de investimento em um modelo SaaS seguro e escalável. Construída sobre o ABP Framework, a solução garantiu uma base de código de nível global, validada pelos mais rigorosos testes de segurança e padrões OWASP.',
        results: [
            'Ferramenta fundamental para a venda da startup em 2024',
            'Gestão multitenant de múltiplas agências de captação',
            'Conformidade total com padrões de segurança OWASP',
            'Infraestrutura resiliente para gestão de fundos de alto valor'
        ],
        image: '/images/cases/investment-banking.png',
        tech: ['ABP Framework (abpio)', '.NET', 'React', 'SaaS Multitenancy', 'OWASP Security'],
        featured: true,
        date: '2024'
    },
    {
        slug: 'aviacao-combustiveis-awards',
        title: 'SkyAwards: Fidelidade & Abastecimento na Aviação',
        client: 'Confidencial (Setor de Combustíveis)',
        category: 'Mobile',
        description: 'Desenvolvimento e manutenção de aplicação móvel premium para premiação e gestão de abastecimento na aviação particular brasileira.',
        results: [
            'Adoção em 80% dos hangares executivos',
            'Gestão de benefícios em tempo real',
            'Interface de alta fidelidade para pilotos e staff',
            'Segurança rigorosa em transações de combustível'
        ],
        image: '/images/cases/aviation-rewards.png',
        tech: ['React Native', 'Real-time Analytics', 'Geofencing', 'Cloud Architecture'],
        date: '2024'
    },
    {
        slug: 'card-lifecycle-orchestration',
        title: 'FinScale: Orquestração de Ciclo de Vida de Cartões',
        client: 'Operadoras de Cartão de Crédito (Brasil)',
        category: 'Fintech',
        description: 'Sistema massivo de orquestração para emissão, impressão, transporte e entrega de milhões de cartões e faturas com escalabilidade extrema.',
        fullDescription: 'Uma solução de engenharia de alta complexidade que gerencia o fluxo end-to-end de milhões de transações diárias. Desde o comando de impressão até o rastreamento logístico da entrega final do cartão e da fatura em papel, garantindo zero perda e eficiência máxima.',
        results: [
            'Gestão de milhões de transações diárias',
            'Escalabilidade garantida para picos sazonais',
            'Redução de 30% em extravios logísticos',
            'Monitoramento 360º de cada artefato físico'
        ],
        image: '/images/cases/card-logistics.png',
        tech: ['Microserviços de Alta Performance', 'Oracle DB', 'High-volume Batch Processing', 'Logistics Tracking'],
        featured: true,
        date: '2024'
    },
    {
        slug: 'fundamental1e2',
        title: 'Plataforma Educacional Fundamental1e2',
        client: 'Fundamental1e2',
        category: 'Education',
        description: 'Desenvolvimento do MVP para plataforma educacional que atende alunos e professores do ensino fundamental com entrega extremamente rápida.',
        results: ['MVP em 8 semanas', 'Validação em ambiente real', 'Iterações contínuas'],
        image: '/images/portfolio-ecommerce.jpg',
        tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        date: '2023'
    },
    {
        slug: 'rastreamento-equipes',
        title: 'Plataforma de Rastreamento de Equipes',
        client: 'Logistics Partner',
        category: 'Logistics',
        description: 'Sistema de monitoramento em tempo real para empresas que gerenciam funcionários em campo.',
        results: ['Visibilidade em tempo real', 'Decisões estratégicas', '+40% eficiência'],
        image: '/images/team.jpg',
        tech: ['React Native', 'Firebase', 'Google Maps API'],
        date: '2023'
    },
];

export const getAllCasesSlugs = () => casesData.map(c => c.slug);
export const getCaseBySlug = (slug: string) => casesData.find(c => c.slug === slug);
