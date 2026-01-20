// LucideIcon removed as it was unused

export interface MeetingType {
    id: string;
    title: string;
    duration: number; // em minutos
    description: string;
    icon: string; // nome do ícone Lucide
    color: string; // cor do card
    dominusLink: string; // link do Dominus
    features: string[];
    recommended?: boolean;
    category: 'discovery' | 'technical' | 'demo' | 'support' | 'networking';
}

export const meetingTypes: MeetingType[] = [
    {
        id: 'quick-call',
        title: 'Quick Call - Prospecção Inicial',
        duration: 15,
        description: 'Primeira conexão para entender sua necessidade e qualificar o melhor caminho para sua transformação digital.',
        icon: 'Zap',
        color: 'from-emerald-500 to-green-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/quick-call',
        features: [
            'Entendimento rápido de contexto',
            'Qualificação de necessidades',
            'Próximos passos recomendados'
        ],
        category: 'discovery'
    },
    {
        id: 'discovery-call',
        title: 'Discovery Call - Análise de Necessidades',
        duration: 30,
        description: 'Discussão técnica sobre seus desafios atuais, validação de fit e apresentação da nossa abordagem.',
        icon: 'Search',
        color: 'from-blue-500 to-cyan-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/discovery-call',
        features: [
            'Análise de desafios técnicos',
            'Validação de fit cultural e técnico',
            'Apresentação de cases similares'
        ],
        recommended: true,
        category: 'discovery'
    },
    {
        id: 'consultoria-tecnica',
        title: 'Consultoria Técnica - Deep Dive',
        duration: 60,
        description: 'Exploração profunda de arquitetura, modernização, IA e estratégias completas de transformação digital.',
        icon: 'Rocket',
        color: 'from-orange-500 to-red-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/consultoria-tecnica',
        features: [
            'Análise arquitetural completa',
            'Roadmap de modernização',
            'Estratégias de IA e automação',
            'Estimativas e timelines'
        ],
        category: 'technical'
    },
    {
        id: 'demo-chatbot',
        title: 'Demo - WhatsApp Chatbot',
        duration: 30,
        description: 'Demonstração prática da nossa solução de chatbot com IA, incluindo casos de uso e modelo de pricing.',
        icon: 'MessageSquare',
        color: 'from-green-500 to-emerald-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/demo-chatbot',
        features: [
            'Demo ao vivo do chatbot',
            'Casos de uso práticos',
            'Integração com APIs',
            'Modelo de precificação'
        ],
        category: 'demo'
    },
    {
        id: 'workshop-transformacao',
        title: 'Workshop - Transformação Digital',
        duration: 90,
        description: 'Sessão estratégica para C-level mapear a jornada completa de modernização e criar roadmap executivo.',
        icon: 'Presentation',
        color: 'from-purple-500 to-indigo-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/workshop-transformacao',
        features: [
            'Mapeamento de jornada',
            'Roadmap executivo',
            'Priorização de iniciativas',
            'Business case e ROI'
        ],
        category: 'technical'
    },
    {
        id: 'alinhamento-projeto',
        title: 'Alinhamento - Projeto em Andamento',
        duration: 30,
        description: 'Sincronização de projetos ativos, validação de deploys, review de sprints e ajustes de rota.',
        icon: 'GitBranch',
        color: 'from-sky-500 to-blue-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/alinhamento-projeto',
        features: [
            'Status de progresso',
            'Validação de entregas',
            'Ajustes de escopo',
            'Planning de próximos passos'
        ],
        category: 'support'
    },
    {
        id: 'coffee-chat',
        title: 'Coffee Chat - Networking',
        duration: 20,
        description: 'Conversa informal com líderes tech da Sapienza. Troca de experiências e construção de relacionamento.',
        icon: 'Coffee',
        color: 'from-amber-500 to-orange-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/coffee-chat',
        features: [
            'Networking sem compromisso',
            'Troca de experiências',
            'Discussões sobre tendências tech',
            'Relacionamento de longo prazo'
        ],
        category: 'networking'
    },
    {
        id: 'emergency-support',
        title: 'Emergency Support - Consultoria Urgente',
        duration: 45,
        description: 'Suporte emergencial para problemas críticos em produção. Troubleshooting e resolução rápida.',
        icon: 'AlertCircle',
        color: 'from-red-500 to-rose-600',
        dominusLink: 'https://dominus.zensuite.com.br/s/sapienza/emergency-support',
        features: [
            'Atendimento prioritário',
            'Troubleshooting em produção',
            'Resolução de incidentes',
            'Plano de ação imediato'
        ],
        category: 'support'
    }
];

export const getMeetingById = (id: string) => meetingTypes.find(m => m.id === id);
export const getMeetingsByCategory = (category: MeetingType['category']) =>
    meetingTypes.filter(m => m.category === category);
