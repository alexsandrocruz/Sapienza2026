export interface ServiceSection {
    title: string;
    description: string;
}

export interface LifecycleStep {
    title: string;
    description: string;
    icon: string;
    color?: string;
}

export interface ReadinessItem {
    title: string;
    items: string[];
}

export interface RichSection {
    title: string;
    description: string;
    image?: string;
    cta?: {
        text: string;
        link: string;
    };
    reversed?: boolean;
    fullWidth?: boolean;
    dark?: boolean;
}

export interface ServiceHubItem {
    title: string;
    description: string;
    link?: string;
    icon?: string;
}

export interface PMOFrameworkTab {
    id: string;
    label: string;
    title: string;
    description: string;
    items: string[];
    image: string;
}

export interface ServiceData {
    slug: string;
    badge: string;
    title: string;
    subtitle: string;
    heroDescription: string;
    heroImage?: string;
    sections?: ServiceSection[];
    richSections?: RichSection[];
    lifecycle?: {
        title: string;
        subtitle: string;
        steps: LifecycleStep[];
    };
    readiness?: {
        title: string;
        subtitle: string;
        boxes: ReadinessItem[];
    };
    features: string[];
    benefits: string[];
    servHub?: {
        title: string;
        description: string;
        items: ServiceHubItem[];
    };
    pmoFramework?: {
        title: string;
        description: string;
        tabs: PMOFrameworkTab[];
    };
    cloudLoop?: {
        title: string;
        description: string;
        quadrants: {
            id: 'assess' | 'operate' | 'maintain' | 'moderate';
            title: string;
            services: string[];
        }[];
    };
    cloudPartners?: {
        title: string;
        items: {
            name: string;
            description: string;
            logo: string;
            link: string;
        }[];
    };
    cloudBlogArticles?: {
        title: string;
        articles: {
            category: string;
            title: string;
            image: string;
            link: string;
            type: 'case-study' | 'blog-post' | 'white-paper';
        }[];
    };
    sdlcPhases?: {
        title: string;
        description: string;
        icon: string;
    }[];
    workingModels?: {
        title: string;
        description: string;
        icon: string;
    }[];
    successCases?: {
        client: string;
        description: string;
        metrics: string[];
        image?: string;
    }[];
}

export const servicesData: ServiceData[] = [
    {
        slug: 'desenvolvimento-de-software',
        badge: 'Software Engineering',
        title: 'Desenvolvimento de Software Customizado',
        subtitle: 'Construa para evoluir, não apenas para atingir a paridade',
        heroDescription: 'A Sapienza é uma parceira estratégica com décadas de experiência na criação de soluções personalizadas que impulsionam o valor do negócio. De arquiteturas modernas a experiências habilitadas por IA, ajudamos sua empresa a tomar decisões baseadas em evidências e garantir a longevidade através de componentes escaláveis.',
        heroImage: '/images/services/software-dev-hero.png',
        richSections: [
            {
                title: 'Nossa abordagem focada em resultados de negócio',
                description: 'Não construímos apenas código; construímos ativos que geram lucro. Nossa metodologia abrange desde o discovery estratégico até a otimização contínua via SRE e monitoramento predictivo.',
                image: '/images/services/ai-engineering.png',
                cta: { text: 'Agendar Workshop de Discovery', link: '/contato' }
            },
            {
                title: 'Modernização de Sistemas Legados',
                description: 'Transforme seus sistemas sem paralisar sua operação. Praticamos uma abordagem de "duas velocidades": entrega de valor imediato através de reuso estratégico enquanto transformamos incrementalmente arquiteturas complexas.',
                reversed: true,
                image: '/images/services/gen-ai-experience.png'
            }
        ],
        features: [
            'Desenvolvimento Customizado End-to-End',
            'Arquiteturas Cloud-native e Microsserviços',
            'Desenvolvimento Low-code/No-code Governança',
            'Segurança e Compliance Nível Enterprise',
            'Estratégia de Dados e Integração de IA/ML',
            'Engenharia de Produto Digital Sustentável',
        ],
        benefits: [
            'Redução drástica de dívida técnica',
            'Time-to-market acelerado com SDLC moderno',
            'Escalabilidade infinita via CloudOps',
            'Decisões de engenharia baseadas em evidências',
            'Ecosystem thinking para integração total',
            'Eliminação de silos de comunicação e dados',
        ],
        sdlcPhases: [
            { title: 'Discovery', description: 'Deep-dive workshops para alinhar investimentos técnicos com estratégia de negócio e métricas North Star.', icon: '🔍' },
            { title: 'Agile Engineering', description: 'Times cross-funcionais criando ciclos de entrega contínua para iterações rápidas baseadas em feedback.', icon: '⚡' },
            { title: 'Cloud Enablement', description: 'Arquitetura resiliente desde o primeiro commit, com foco em escalabilidade e redução de manutenção.', icon: '☁️' },
            { title: 'AI Integration', description: 'Aceleração de ciclos através de automação DevOps e engenharia assistida por IA para eliminar tarefas rotineiras.', icon: '🤖' },
            { title: 'Optimization', description: 'Melhoria contínua com ferramentas APM, práticas SRE e redução proativa de débitos técnicos.', icon: '📈' },
        ],
        workingModels: [
            { title: 'Custom App Development', description: 'Aplicações sob medida para seus fluxos, lógica de negócio e requisitos de usuários.', icon: '🏗️' },
            { title: 'Cloud-native Apps', description: 'Produtos com bases de código modulares, serviços containerizados e infraestrutura como código.', icon: '🚀' },
            { title: 'Low-code Solutions', description: 'Aceleração de backlogs em até 4x com plataformas seguras e governadas para usuários de negócio.', icon: '⚡' },
        ],
        successCases: [
            {
                client: 'Global Telecom Provider',
                description: 'Overhaul do portfólio OSS/BSS com faturamento em tempo real, analytics contextual e consolidação de chatbots via LLM.',
                metrics: ['Consolidação de 14 bots em 1 AI Assistant', 'ROI acelerado em serviços 5G', 'Faturamento 100% data-driven'],
            },
            {
                client: 'Retail Home Improvement Leader',
                description: 'Consultoria digital e engenharia de produto nativo para handicraft industry, focando em revenue streams e UX mobile.',
                metrics: ['45% menor abandono de carrinho', 'Crescimento para 1.8M assinantes', 'IPO de US$ 1.03 bi de market cap'],
            },
            {
                client: 'National eHealth Ecosystem',
                description: 'Construção de ecossistema nacional de saúde servindo 30M+ cidadãos, incluindo telemedicina e portal do paciente.',
                metrics: ['Interação para 30M+ usuários', 'Redução em 40% de erros médicos', '$1M+ economia anual operacional'],
            },
        ],
    },
    {
        slug: 'desenvolvimento-de-produtos',
        badge: 'Desenvolvimento de Produtos',
        title: 'Desenvolvimento de Produtos Digitais',
        subtitle: 'Construindo produtos digitais com foco humano',
        heroDescription: 'A SAPIENZA está focada na construção de produtos digitais verdadeiramente excelentes que proporcionam aos usuários uma experiência positiva, fidelizam e reúnem clientes em torno de sua marca.',
        sections: [
            {
                title: 'Ciclo de vida completo',
                description: 'Cobrimos todo o ciclo de vida – desde a criação de estratégias e o design até o desenvolvimento, teste, implantação e suporte de soluções escaláveis para empresas de qualquer tamanho.',
            },
            {
                title: 'Inovador e Ágil',
                description: 'Usamos métodos enxutos e ágeis para apoiar um rápido processo de design e desenvolvimento, com ênfase na produção de soluções de negócios escaláveis.',
            },
            {
                title: 'Estratégia de Produto e Roadmap',
                description: 'Pegamos suas grandes ideias e as tornamos realidade usando técnicas comprovadas de design thinking e UX/UI. Nossos designers entendem como os usuários pensam.',
            },
            {
                title: 'Mercado Global',
                description: 'Nossa equipe tem anos de experiência na solução de problemas para mercados globais, reduzindo riscos e ajudando empresas a agregar valor aos clientes.',
            },
        ],
        features: [
            'Discovery e Ideação',
            'Prototipagem rápida',
            'MVP em semanas',
            'Testes com usuários',
            'Iteração contínua',
            'Design System',
        ],
        benefits: [
            'Time-to-market reduzido',
            'Validação antes do investimento',
            'Foco no usuário final',
            'Escalabilidade garantida',
            'Suporte contínuo',
            'Métodos ágeis',
        ],
    },
    {
        slug: 'desenvolvimento-de-mvp',
        badge: 'Software Engineering',
        title: 'Desenvolvimento de Aplicações & MVP',
        subtitle: 'Construa para evoluir, não apenas para atingir a paridade',
        heroDescription: 'Software deve ser um impulsionador, não uma âncora. Desenvolvemos ecossistemas digitais com adaptabilidade integrada, alimentados por arquiteturas modulares e componentes reutilizáveis, garantindo que você vença agora e nas próximas décadas.',
        heroImage: '/images/services/app-dev-hero.png',
        richSections: [
            {
                title: 'Abordagem baseada em evidência, não em suposições',
                description: 'Traçamos o caminho do MVP até o escala global, contando com feedback real dos usuários e experimentação contínua. Nosso Innovation Studio funde design thinking com expertise em cloud-native para acelerar o retorno sobre o investimento.',
                image: '/images/services/software-dev-hero.png',
                cta: { text: 'Agendar Workshop de Discovery', link: '/contato' }
            }
        ],
        sdlcPhases: [
            { title: 'Discovery & Consulting', description: 'Workshop intensivo para alinhar investimentos com estratégia de negócio e métricas North Star.', icon: '🔍' },
            { title: 'Agile Product Engineering', description: 'Desenvolvimento cross-functional com ciclos de entrega contínua e iterações rápidas.', icon: '⚙️' },
            { title: 'Platform & Cloud Enablement', description: 'Garantia de escalabilidade desde o primeiro commit com arquiteturas cloud-native.', icon: '☁️' },
            { title: 'AI & Automation Integration', description: 'Aceleração de ciclos com DevOps autônomo e desenvolvimento assistido por IA.', icon: '🤖' },
            { title: 'Otimização Contínua', description: 'Monitoramento APM e SRE para reduzir dívida técnica e garantir confiabilidade total.', icon: '📈' },
        ],
        servHub: {
            title: 'Serviços Core de Desenvolvimento',
            description: 'Soluções sob medida para workflows complexos e requisitos de escala.',
            items: [
                { title: 'Custom App Development', description: 'Mapeamos tecnologia aos seus processos de negócio com componentes modulares e reutilizáveis.', icon: '🛠️' },
                { title: 'Modernização de Legado', description: 'Transformação incremental de sistemas legados sem interrupções operacionais críticas.', icon: '♻️' },
                { title: 'Cloud-native Development', description: 'Implementação de CI/CD, autoscaling e observabilidade nativa sem lock-in de fornecedor.', icon: '🌐' },
                { title: 'Low-code/No-code Solutions', description: 'Aceleração em até 4x no desenvolvimento de back-office e ferramentas internas seguras.', icon: '⚡' },
            ]
        },
        readiness: {
            title: 'Capability-Enhancing Tracks',
            subtitle: 'Trilhas de especialização para fortalecer seu ecossistema digital.',
            boxes: [
                { title: 'Mobile Excellence', items: ['Apps nativos e cross-platform', 'Performance impecável', 'User retention focus'] },
                { title: 'AI-Augmented Apps', items: ['Modelos ML/DL integrados', 'LLM APIs & Analytics', 'Experiências inteligentes'] },
                { title: 'Composable Architectures', items: ['Microservices decoupled', 'API-first communication', 'Deployments ultra-rápidos'] },
                { title: 'Security & Compliance', items: ['Criptografia avançada', 'Real-time threat monitoring', 'Compliance hardened'] },
            ]
        },
        successCases: [
            {
                client: 'Multinational Telecom Company',
                description: 'Desenvolvimento de SuperApp para gestão de planos e serviços digitais, integrando sistemas legados complexos.',
                metrics: ['Consolidação de 14 bots em 1 AI Assistant', 'ROI acelerado em 18 meses', 'Faturamento 100% data-driven'],
            },
            {
                client: 'Retail Home Improvement Leader',
                description: 'Consultoria digital e engenharia de produto nativo para handicraft industry, focando em revenue streams e UX mobile.',
                metrics: ['45% menor abandono de carrinho', 'Crescimento para 1.8M assinantes', 'IPO de US$ 1.03 bi de market cap'],
            },
            {
                client: 'National eHealth Ecosystem',
                description: 'Construção de ecossistema nacional de saúde servindo 30M+ cidadãos, incluindo telemedicina e portal do paciente.',
                metrics: ['Interação para 30M+ usuários', 'Redução em 40% de erros médicos', '$1M+ economia anual operacional'],
            },
        ],
        features: [
            'Desenvolvimento Agile Real',
            'Arquitetura Cloud-native',
            'IA Integrada no Fluxo',
            'Design focado em CX',
            'Segurança por Design',
        ],
        benefits: [
            'Evolução contínua do sistema',
            'Escalabilidade sem interrupção',
            'Time-to-market acelerado',
            'Redução de custos de infra',
            'Fim da fragmentação de dados',
        ],
    },
    {
        slug: 'transformacao-digital',
        badge: 'Transformação Digital',
        title: 'Transformação Digital',
        subtitle: 'Transforme seus negócios com inovação digital contínua',
        heroDescription: 'Projetamos experiências e ecossistemas centrados no cliente para uma transformação digital significativa.',
        sections: [
            {
                title: 'Modernizar. Mobilizar. Melhorar.',
                description: 'Simplificamos a evolução e aceleramos os recursos de dimensionamento modernizando suas operações, produtos inovadores e plataformas, aproveitando análises e mobilizando seus negócios.',
            },
            {
                title: 'Digitalização',
                description: 'Nossa experiência em serviços avançados de transformação digital, incluindo desenvolvimento de produtos proprietários e personalização de software, ajuda você a organizar e ativar melhores processos.',
            },
            {
                title: 'Evolução orientada por dados',
                description: 'Nossos serviços de consultoria, soluções de big data e recursos avançados de análise aceleram a transformação de seus negócios com insights acionáveis em tempo real.',
            },
            {
                title: 'Modernização de TI legada',
                description: 'Temos experiência em reengenharia de tecnologia, sistemas e processos para modernização que maximiza a eficiência e a inovação enquanto minimiza o risco.',
            },
            {
                title: 'Serviços em Nuvem',
                description: 'Fornecemos insights, estratégia e engenharia especializados para gerenciamento abrangente de operações em nuvem. Do desenvolvimento à integração e migração.',
            },
        ],
        features: [
            'Análise de processos',
            'Automação de tarefas',
            'Migração para cloud',
            'Integração de sistemas',
            'Big Data e Analytics',
            'DevOps e CI/CD',
        ],
        benefits: [
            'Redução de custos operacionais',
            'Maior eficiência',
            'Experiência do cliente melhorada',
            'Competitividade aumentada',
            'Insights em tempo real',
            'Transição segura para cloud',
        ],
    },
    {
        slug: 'analise-de-dados',
        badge: 'Business Intelligence',
        title: 'Análise de Dados',
        subtitle: 'Decisões baseadas em dados',
        heroDescription: 'A SAPIENZA pode analisar seus dados através de uma lente de design thinking para criar maneiras novas e aprimoradas de satisfazer e reter seus clientes.',
        sections: [
            {
                title: 'Insights Acionáveis',
                description: 'Sinta-se capacitado para monitorar as principais métricas da sua empresa, descobrir padrões e acessar novos níveis de insight que permitem aumentar a receita.',
            },
            {
                title: 'Visualizações Atraentes',
                description: 'Dashboards personalizados e relatórios automatizados que transformam dados complexos em informações claras e acionáveis para sua equipe.',
            },
            {
                title: 'Análise Preditiva',
                description: 'Utilizamos machine learning e IA para identificar tendências e prever comportamentos, permitindo decisões proativas.',
            },
        ],
        features: [
            'Dashboards personalizados',
            'Relatórios automatizados',
            'Análise preditiva',
            'Data Warehouse',
            'Machine Learning',
            'Integração de fontes',
        ],
        benefits: [
            'Visibilidade total do negócio',
            'Decisões mais rápidas',
            'Identificar oportunidades',
            'Reduzir riscos',
            'Otimizar experiência do usuário',
            'Aumentar receita',
        ],
    },
    {
        slug: 'design-de-experiencia',
        badge: 'UX/UI Design',
        title: 'Design de Experiência do Usuário',
        subtitle: 'Garantimos que seu UX seja seu fator X',
        heroDescription: 'Serviços de design centrados na experiência do usuário (human centric UX design) são essenciais para criar interações eficazes com os visitantes do seu site.',
        sections: [
            {
                title: 'UX como diferencial competitivo',
                description: 'Ao investir em um design de experiência profissional que equilibra emoção e função, os clientes terão interações mais atraentes e gratificantes com seus produtos e serviços.',
            },
            {
                title: 'Estratégia de Experiência',
                description: 'Uma estratégia de UX revolucionária se concentra em alinhar todos os pontos de contato ao longo da jornada do cliente com a visão final da experiência do usuário.',
            },
            {
                title: 'Prototipagem de Produtos',
                description: 'O processo de prototipagem é essencial para desenvolver o tipo de produto digital e experiência suave que os usuários modernos esperam. Um bom design de UX não acontece por acaso; é prototipado.',
            },
            {
                title: 'Design Sprints',
                description: 'Metodologia ágil para validar ideias rapidamente através de protótipos testados com usuários reais em ciclos curtos de iteração.',
            },
        ],
        features: [
            'Pesquisa com usuários',
            'Wireframes e protótipos',
            'Design System',
            'Testes de usabilidade',
            'Design responsivo',
            'Design Sprints',
        ],
        benefits: [
            'Maior conversão',
            'Menos suporte',
            'Clientes satisfeitos',
            'Marca fortalecida',
            'Fidelização aumentada',
            'Experiências memoráveis',
        ],
    },
    {
        slug: 'consultoria-apps-mobile',
        badge: 'Mobile',
        title: 'Consultoria em Aplicativos Móveis',
        subtitle: 'Acelere seu sucesso com um aplicativo móvel personalizado',
        heroDescription: 'Em nossa era digital, todos os pontos de contato em movimento contribuem para o sucesso do seu negócio. Somos especializados em projetar e implantar aplicativos móveis corporativos.',
        sections: [
            {
                title: 'Consultoria Completa',
                description: 'Nossa equipe de analistas, especialistas em UX, designers e desenvolvedores tem extensa experiência setorial que trazem para a criação de sua estratégia digital personalizada.',
            },
            {
                title: 'Design de Estratégia Mobile',
                description: 'Garantir que seu aplicativo móvel seja integrado ao seu negócio e estratégia geral é fundamental. Ajudamos a analisar e avaliar todos os usos móveis.',
            },
            {
                title: 'Auditoria e Otimização',
                description: 'Especialistas em auditorias de UX/UI, código, segurança, conformidade e compatibilidade. Criamos e executamos um plano personalizado para otimizar seus aplicativos.',
            },
            {
                title: 'Modernização de Apps',
                description: 'Atualize os recursos e funções do seu aplicativo móvel. Colaboramos com sua equipe para criar uma estratégia de modernização que suporta objetivos de negócios.',
            },
        ],
        features: [
            'Apps nativos e híbridos',
            'React Native / Flutter',
            'Integração com hardware',
            'Push notifications',
            'Offline-first',
            'App Store Optimization',
        ],
        benefits: [
            'Presença mobile',
            'Engajamento do usuário',
            'Canal direto com cliente',
            'Novas receitas',
            '15+ anos de experiência mobile',
            'Suporte e manutenção',
        ],
    },
    {
        slug: 'whatsapp-chatbot',
        badge: 'Automação',
        title: 'WhatsApp Chatbot',
        subtitle: 'Automatize o atendimento da sua empresa no WhatsApp',
        heroDescription: 'Conte com o Sapienz ChatBot™ para criar chatbot no WhatsApp e principais canais! Automatize com segurança usando API Oficial do WhatsApp.',
        sections: [
            {
                title: 'Fluxos de Conversa Visuais',
                description: 'Desenhe fluxos de conversa de forma intuitiva, organizando cada etapa do atendimento com facilidade e precisão. Configure interações envolventes e eficientes.',
            },
            {
                title: 'Análise de Dados',
                description: 'O Sapienz ChatBot™ coleta dados valiosos de cada interação, fornecendo insights detalhados sobre o comportamento e as necessidades dos clientes.',
            },
            {
                title: 'Automatização Inteligente',
                description: 'Responda imediatamente a dúvidas frequentes e consultas iniciais, mantendo o cliente engajado enquanto resolve suas necessidades de forma direta.',
            },
            {
                title: 'Atendimento Híbrido',
                description: 'Integra o atendimento automatizado com assistência humana, garantindo que um atendente assuma a conversa apenas quando necessário.',
            },
        ],
        features: [
            'API Oficial WhatsApp Business',
            'Fluxos personalizados',
            'IA conversacional',
            'Transferência para humano',
            'Relatórios em tempo real',
            'Multi-atendentes',
        ],
        benefits: [
            'Atendimento 24 horas',
            'Redução de custos',
            'Escala infinita',
            'Clientes satisfeitos',
            'Insights de conversas',
            'Transição suave bot → humano',
        ],
    },
    // Novos serviços de IA para 2026
    {
        slug: 'ia-enabled-engineering',
        badge: 'IA Engineering',
        title: 'Engenharia de Software Habilitada por IA',
        subtitle: 'Engenharia mais rápida, inteligente e eficiente com a IA no núcleo',
        heroDescription: 'Empresas que adotam workflows de IA entregam com mais eficiência, lançam produtos digitais mais rápido e resolvem complexidade com menos atrito. Na Sapienza, ajudamos seus times a adotar uma abordagem sistemática de engenharia habilitada por IA que impulsiona a velocidade e a qualidade do software.',
        heroImage: '/images/services/ai-engineering.png',
        richSections: [
            {
                title: 'A engenharia habilitada por IA impulsiona ganhos reais de produtividade',
                description: 'De automação inteligente a decisões baseadas em dados, incorporamos a IA em todo o ciclo de vida da engenharia. Nossos serviços garantem que sua entrega seja mais fluida e sua escala seja mais inteligente, reduzindo a frustração com tarefas rotineiras e focando no que realmente importa: inovação.',
                image: '/images/services/ai-pods-transition.png',
                cta: { text: 'Agendar Workshop', link: '/contato' }
            },
            {
                title: 'Evoluindo de times Ágeis para AI Pods',
                description: 'Vá além do ágil tradicional. Nossos AI Pods são unidades de entrega independentes onde a IA agêntica orquestra a execução. Resultado: ciclos mais curtos, mais sentimento de dono por parte do time e execução mais inteligente sem a necessidade de expansão imediata de equipe.',
                reversed: true,
                image: '/images/services/gen-ai-experience.png'
            }
        ],
        features: [
            '53% mais foco em tarefas reais',
            '79% busca de informação mais rápida',
            '51% mais eficiência em code reviews',
            '100% de ganho na produtividade de engenharia',
            '3x menor time-to-market em produtos digitais',
            '8x prototipagem mais rápida com IA Agêntica',
        ],
        benefits: [
            'Ciclos de entrega medidos em dias, não semanas',
            'Menos dependências e gargalos operacionais',
            'Qualidade consistente através de IA-QA automatizado',
            'Incrementos de produto mais frequentes e seguros',
            'Escala de software sem expandir custos lineares',
            'Time-to-market agressivo para novos produtos',
        ],
        sdlcPhases: [
            { title: 'Strategy', description: 'IA analisa sistemas, prontidão de dados e dívida técnica para moldar o roadmap de engenharia.', icon: '🎯' },
            { title: 'Requirements', description: 'Insights inteligentes ajudam a priorizar o que entrega mais valor com base em dados históricos.', icon: '📋' },
            { title: 'Architecture', description: 'Recomendações técnicas ajudam times a escolher padrões ideais e arquiteturas escaláveis.', icon: '🏗️' },
            { title: 'Development', description: 'Geração de código, refatoração e documentação automática reduzem o trabalho rotineiro em 80%.', icon: '💻' },
            { title: 'Testing', description: 'IA cria, atualiza e executa testes automaticamente, melhorando a cobertura sem esforço extra.', icon: '🛡️' },
            { title: 'Operations', description: 'Monitoramento preditivo e análise de incidentes mantêm sistemas estáveis e resilientes.', icon: '⚙️' },
        ],
        workingModels: [
            { title: 'Product Engineering with AI Pods', description: 'Impulsione a velocidade desde o dia 1 com entrega agêntica orquestrada e pods independentes.', icon: '🚀' },
            { title: 'Guided AI Transformation', description: 'Plano e execução de transformação total com nossos especialistas co-pilotando a jornada.', icon: '👨‍✈️' },
            { title: 'SLA-based Turnaround', description: 'Entregas ultra-rápidas e redução de custos operacionais guiados por métricas de valor e SLAs.', icon: '⏱️' },
        ],
        successCases: [
            {
                client: 'Digital Health Leader',
                description: 'Reconstrução rápida de aplicação móvel usando AI Pods e engenharia reversa de fluxos legados via IA.',
                metrics: ['55%+ redução de investimento', '1.5x menor time-to-market', '40% menos defeitos'],
            },
            {
                client: 'Traffic Solution Pioneer',
                description: 'Uso de IA Agêntica para criar protótipos de UI funcionais em tempo recorde baseados em dados open-source.',
                metrics: ['Protótipo entregue em 1 DIA', '2x aceleração no ciclo de dev', '70% menor custo de prototipagem'],
            },
        ],
    },
    {
        slug: 'ia-generativa',
        badge: 'IA Generativa',
        title: 'Serviços de IA Generativa',
        subtitle: 'Hoje são tendências, amanhã são táticas',
        heroDescription: 'Do início com o chatbot Eliza às soluções modernas de IA generativa, o que antes era uma curiosidade tecnológica agora é prioridade na diretoria. Na Sapienza, ajudamos nossos clientes a adotar e adaptar capacidades de GenAI para trabalhar de forma mais inteligente.',
        heroImage: '/images/services/gen-ai.png',
        richSections: [
            {
                title: "As tendências de hoje são as táticas de amanhã",
                description: "Na Sapienza, não apenas observamos a evolução da IA — nós a orquestramos. Do early adopter à maturidade empresarial, ajudamos você a transformar o hype em ROI real e tangível através de engenharia rigorosa e design centrado no humano.",
                image: '/images/services/gen-ai-experience.png',
                cta: { text: "Solicitar Proposta", link: "/contato" }
            },
            {
                title: 'Criamos experiências de IA generativa com serviços de ponta a ponta',
                description: 'Nossa abordagem transforma dados vastos em inteligência focada, automatiza workflows complexos e constrói experiências diferenciadas para seus colaboradores e clientes. Não apenas implantamos IA — colocamos a IA generativa onde ela é mais eficaz, entregando ganhos de produtividade, ROI e inovação segura e escalável.',
                image: '/images/services/gen-ai-cases.png',
                reversed: true,
                cta: { text: 'Vamos conversar', link: '/contato' }
            },
            {
                title: 'Guardian: Governança Estratégica para o amanhã',
                description: 'IA Responsável tornada simples e acionável. Transforme sua estratégia de IA hoje com nosso framework Guardian, garantindo que sua inovação seja tão segura quanto poderosa.',
                image: '/images/services/responsible-ai-flow.png',
                dark: true,
                cta: { text: 'Saiba mais', link: '/servicos/ia-responsavel' }
            }
        ],
        lifecycle: {
            title: 'Abordagem Sapienza: Guiando você em cada etapa da jornada GenAI',
            subtitle: 'Ajudamos você na transição de casos de uso isolados para soluções operacionais de IA generativa em escala.',
            steps: [
                { title: 'Assess', description: 'Avaliação abrangente da maturidade da sua tecnologia GenAI e mapeamento de oportunidades.', icon: '🔍', color: '#10b981' },
                { title: 'Design', description: 'Arquitetura de sistema robusta com governança incorporada para integração técnica segura.', icon: '🏗️', color: '#3b82f6' },
                { title: 'Build & Deploy', description: 'Soluções GenAI prontas para produção através de pipelines integrados ao domínio.', icon: '🚀', color: '#f59e0b' },
                { title: 'Adopt & Scale', description: 'Adoção em toda a organização através de frameworks de governança adaptativa e treinamento.', icon: '📈', color: '#ef4444' },
                { title: 'Operate', description: 'Gestão proativa de performance via monitoramento MLOps e otimização contínua de modelos.', icon: '⚙️', color: '#8b5cf6' }
            ]
        },
        readiness: {
            title: 'Sua empresa está pronta para IA? Criando o caso para implementação de GenAI',
            subtitle: 'Buscando clareza sobre onde começar? Oferecemos um assessment focado de duas semanas para identificar como a GenAI se alinha ao seu estado atual.',
            boxes: [
                {
                    title: 'Necessidades de Negócio',
                    items: [
                        'Entender os desafios da GenAI',
                        'Alinhar iniciativas de GenAI com objetivos estratégicos',
                        'Maximizar impacto e ROI da GenAI'
                    ]
                },
                {
                    title: 'Resultados Chave',
                    items: [
                        'Relatório detalhado de viabilidade',
                        'Lista priorizada de oportunidades de integração',
                        'Análise de custo-benefício'
                    ]
                }
            ]
        },
        sections: [
            {
                title: 'AI Strategy Consulting',
                description: 'Ajudamos você a analisar e avaliar sua prontidão para adotar GenAI e desenvolver um roadmap claro: workshops estratégicos, assessment de prontidão e roadmap de adoção.',
            },
            {
                title: 'Model Development & Refinement',
                description: 'Desenvolvemos LLMs customizados ou modelos de domínio específico: treinamento de modelos específicos, fine-tuning e otimização de performance.',
            },
            {
                title: 'Enterprise Integration',
                description: 'Conectamos soluções GenAI perfeitamente com suas plataformas existentes: ERP, CRM, DMS, HRM via integrações de API e automação de workflow.',
            }
        ],
        features: [
            'Assessment de prontidão GenAI',
            'LLMs customizados e Fine-tuning',
            'Integração ERP/CRM/HRM',
            'Framework GUARDIAN de governança',
            'MLOps e monitoramento contínuo',
            'Estratégia de dados para GenAI',
        ],
        benefits: [
            'Dados transformados em inteligência',
            'Workflows complexos automatizados',
            'Experiências diferenciadas',
            'ROI mensurável e escalável',
            'Inovação segura com Guardian',
            'Produtividade multiplicada',
        ],
        sdlcPhases: [
            { title: 'Readiness', description: 'Avaliação de maturidade de dados e infraestrutura para adoção de GenAI.', icon: '📊' },
            { title: 'Strategy', description: 'Workshops estratégicos para alinhamento de objetivos e roadmap de implementação.', icon: '🎯' },
            { title: 'Development', description: 'Criação de LLMs customizados, fine-tuning e treinamento de modelos de domínio.', icon: '🧠' },
            { title: 'Integration', description: 'Conexão com ERP, CRM e sistemas legados via APIs seguras e escaláveis.', icon: '🔗' },
            { title: 'Governance', description: 'Implementação do framework GUARDIAN para ética, segurança e compliance.', icon: '🛡️' },
            { title: 'MLOps', description: 'Monitoramento contínuo de performance e suporte técnico pós-deploy.', icon: '⚙️' },
        ],
        workingModels: [
            { title: 'IntelliAssistant', description: 'Plataforma de assistente virtual para reduzir carga operacional e acelerar decisões.', icon: '🤖' },
            { title: 'GenAI Digital Twin', description: 'Acelerador de gêmeos digitais para otimizar processos e ativos com poder generativo.', icon: '♊' },
            { title: 'Strategic Consulting', description: 'Acompanhamento ponta a ponta na jornada de transformação com IA Generativa.', icon: '💡' },
        ],
        successCases: [
            {
                client: 'Digital Health & Retail',
                description: 'Implementação de chatbots de engajamento e automação de atendimento com análise de sentimento.',
                metrics: ['Suporte clínico inteligente', 'Automação de customer service', 'Otimização de supply chain'],
            },
            {
                client: 'Fintech & Insurance',
                description: 'Automação de sinistros, detecção de fraude e análise de documentos complexos/contratos.',
                metrics: ['Análise de contratos 10x mais rápida', 'Detecção preditiva de fraudes', 'Score de risco automático'],
            },
        ],
    },
    {
        slug: 'ia-responsavel',
        badge: 'IA Responsável',
        title: 'Governança de IA Responsável',
        subtitle: 'Uso transparente, seguro e livre de viés da inteligência artificial',
        heroDescription: 'A IA assume tarefas rotineiras e transforma dados em insights, mas quem a treinou? Ela protege a privacidade e segue as leis? Na Sapienza, implementamos frameworks de governança que garantem soluções éticas, seguras e em total conformidade regulatória.',
        heroImage: '/images/services/responsible-ai.png',
        richSections: [
            {
                title: 'Construindo um ecossistema de IA transparente e livre de viés',
                description: 'Nossa abordagem de IA Responsável (RAI) aborda gestão de riscos, conformidade, governança de dados e supervisão de modelos. Ajudamos você a avaliar e categorizar riscos, garantindo que a inovação caminhe junto com a ética e a segurança da marca.',
                image: '/images/services/responsible-ai-flow.png',
                cta: { text: 'Solicitar Auditoria', link: '/contato' }
            },
            {
                title: 'Framework GUARDIAN: Ética como motor de confiança',
                description: 'Implementamos processos consistentes para testar justiça, segurança e confiabilidade. Do roadmap à implantação, garantimos que cada decisão algorítmica seja explicável e auditável, protegendo sua reputação no longo prazo.',
                reversed: true,
                image: '/images/services/gen-ai-experience.png'
            }
        ],
        features: [
            'Tomada de decisão ética e justa',
            'Confiança e transparência do cliente',
            'Conformidade total (LGPD, GDPR, AI Act)',
            'Mitigação proativa de riscos de viés',
            'Sustentabilidade de longo prazo para IA',
            'Explicabilidade de modelos complexos',
        ],
        benefits: [
            'Decisões automatizadas auditáveis e inclusivas',
            'Redução drástica de riscos reputacionais',
            'Compliance acelerado com novas regulações',
            'Monitoramento contínuo de integridade ética',
            'Diferenciação competitiva através da confiança',
            'Proteção de dados e privacidade por design',
        ],
        sdlcPhases: [
            { title: 'Assessment', description: 'Avaliação de maturidade ética e categorização de riscos para governança sólida.', icon: '🔍' },
            { title: 'Categorization', description: 'Classificação de níveis de risco associados a cada solução de IA de domínio.', icon: '📊' },
            { title: 'Governance', description: 'Implementação do framework GUARDIAN: dados, modelos, viés e transparência.', icon: '⚖️' },
            { title: 'Testing', description: 'Adoção de testes rigorosos de justiça (fairness) e segurança algorítmica.', icon: '🛡️' },
            { title: 'Monitoring', description: 'Acompanhamento preventivo para manter conformidade com leis em evolução.', icon: '⚙️' },
            { title: 'Auditing', description: 'Auditorias regulares para garantir que os princípios éticos sejam mantidos.', icon: '📋' },
        ],
        workingModels: [
            { title: 'RAI Governance Framework', description: 'Acompanhamento completo na implementação de ecossistemas éticos e transparentes.', icon: '🤝' },
            { title: 'Ethics & Compliance Audit', description: 'Auditorias técnicas focadas em proteção de dados e neutralidade de modelos.', icon: '🕵️' },
            { title: 'RAI Monitoring & Support', description: 'Suporte contínuo para garantir conformidade com padrões globais de IA.', icon: '📈' },
        ],
        successCases: [
            {
                client: 'Fintech & Lending Solution',
                description: 'Desenvolvimento de solução de empréstimos SaaS com transparência total e abordagem livre de viés no score de crédito.',
                metrics: ['Score 100% explicável', 'Zero viés discriminatório', 'Conformidade regulatória total'],
            },
            {
                client: 'Global IT (HR Tech)',
                description: 'Plataforma de avaliação de habilidades de colaboradores baseada em ChatGPT com foco em justiça e transparência.',
                metrics: ['Avaliação 100% neutra', 'Transparência para o colaborador', 'Decisões baseadas em talento'],
            },
            {
                client: 'Retail Performance Analysis',
                description: 'Ferramenta ética para análise de performance de marca a partir de dados externos com recomendações justas.',
                metrics: ['Análise imparcial de dados', 'Recomendações auditáveis', 'Insights de marca baseados em ética'],
            },
        ],
    },
    {
        slug: 'automacao-inteligente',
        badge: 'Automação',
        title: 'Automação Inteligente',
        subtitle: 'RPA + IA para processos empresariais sem atrito',
        heroDescription: 'Combine robotic process automation (RPA) com inteligência artificial para automatizar processos complexos, eliminando tarefas manuais e reduzindo erros.',
        sections: [
            {
                title: 'RPA com Inteligência',
                description: 'Robôs que não apenas executam tarefas, mas entendem contexto, tomam decisões e aprendem a melhorar com o tempo usando machine learning.',
            },
            {
                title: 'Processamento de Documentos',
                description: 'OCR avançado, extração de dados de PDFs, faturas, contratos e formulários com compreensão semântica usando IA.',
            },
            {
                title: 'Integração de Sistemas',
                description: 'Conecte sistemas legados e modernos sem APIs, usando automação visual e inteligente para transferir dados entre plataformas.',
            },
            {
                title: 'Monitoramento e Otimização',
                description: 'Dashboards de performance de automações, identificação de gargalos e sugestões de melhoria contínua.',
            },
        ],
        features: [
            'RPA avançado',
            'OCR inteligente',
            'Integração sem código',
            'Workflow automation',
            'Bot orchestration',
            'Analytics de processos',
        ],
        benefits: [
            'Economia de até 80% em tempo',
            'Zero erros manuais',
            'ROI em semanas',
            'Escalabilidade infinita',
            'Compliance automático',
            'Funcionários mais produtivos',
        ],
    },
    {
        slug: 'cloud-devops',
        badge: 'Cloud & DevOps',
        title: 'Cloud & DevOps',
        subtitle: 'Infraestrutura moderna e entrega contínua para escala global',
        heroDescription: 'Aplique o poder de serviços de nuvem integrados e DevOps para impulsionar a escala do seu negócio, aumentar a eficiência de desempenho e otimizar custos. De migrações críticas a operações autônomas, garantimos que sua jornada tecnológica seja fluida e resiliente.',
        heroImage: '/images/services/cloud-hero.png',
        richSections: [
            {
                title: 'Desafios que resolvemos com Cloud & DevOps',
                description: 'Aumente a produtividade e otimize custos adotando uma abordagem de "pay-as-you-go" e automação extrema. Nossa expertise ajuda a eliminar silos operacionais, garantindo que o desenvolvimento e as operações trabalhem em um fluxo único de valor.',
                image: '/images/services/software-dev-hero.png',
                cta: { text: 'Agendar Assessment de Nuvem', link: '/contato' }
            }
        ],
        cloudLoop: {
            title: 'Serviços Sapienza Cloud para suas necessidades de negócio',
            description: 'Nossa abordagem de ciclo infinito garante que sua infraestrutura evolua conforme sua demanda.',
            quadrants: [
                {
                    id: 'assess',
                    title: 'Assess',
                    services: [
                        'Infrastructure assessment',
                        'Cloud readiness assessment',
                        'Security & compliance audit',
                        'FinOps cost optimization'
                    ]
                },
                {
                    id: 'operate',
                    title: 'Operate',
                    services: [
                        'Cloud migration (Lift & Shift, Refactor)',
                        'Infrastructure as Code (IaC)',
                        'Container orchestration (K8s)',
                        'Serverless implementations'
                    ]
                },
                {
                    id: 'maintain',
                    title: 'Maintain',
                    services: [
                        'SRE & Managed Services',
                        '24/7 Monitoring & Incident Response',
                        'Backup & Disaster Recovery',
                        'Platform Engineering'
                    ]
                },
                {
                    id: 'moderate',
                    title: 'Moderate',
                    services: [
                        'CI/CD pipeline automation',
                        'DevSecOps integration',
                        'Cloud-native transformation',
                        'Hybrid cloud orchestration'
                    ]
                }
            ]
        },
        cloudPartners: {
            title: 'Parcerias para o seu sucesso',
            items: [
                {
                    name: 'Amazon Web Services (AWS)',
                    description: 'Entregamos soluções escaláveis e resilientes usando o ecossistema líder mundial em nuvem.',
                    logo: '/images/partners/aws-logo.svg',
                    link: 'https://aws.amazon.com'
                },
                {
                    name: 'Microsoft Azure',
                    description: 'Aproveite a integração profunda com o ecossistema Microsoft para transformar sua produtividade.',
                    logo: '/images/partners/azure-logo.svg',
                    link: 'https://azure.microsoft.com'
                },
                {
                    name: 'Google Cloud Platform (GCP)',
                    description: 'Inovação através de dados, IA e infraestrutura global otimizada para performance.',
                    logo: '/images/partners/gcp-logo.svg',
                    link: 'https://cloud.google.com'
                }
            ]
        },
        cloudBlogArticles: {
            title: 'Impulsionando negócios com Cloud & DevOps',
            articles: [
                {
                    category: 'Case Study',
                    title: 'Como otimizamos a infraestrutura de uma Tech Unicórnio em 40%',
                    image: '/images/services/cloud-case-1.png',
                    link: '#',
                    type: 'case-study'
                },
                {
                    category: 'Blog Post',
                    title: 'O Guia Definitivo para Migração Cloud-Native em 2026',
                    image: '/images/services/cloud-case-2.png',
                    link: '#',
                    type: 'blog-post'
                },
                {
                    category: 'White Paper',
                    title: 'DevOps & IA: A Nova Fronteira da Automação Operacional',
                    image: '/images/services/cloud-case-3.png',
                    link: '#',
                    type: 'white-paper'
                }
            ]
        },
        features: [
            'Assessment de Maturidade Cloud',
            'Migração End-to-End AWS/Azure/GCP',
            'Implementação de SRE e FinOps',
            'Segurança Cloud-native Hardened',
            'Arquiteturas de Micro-serviços',
            'DevSecOps e CI/CD Automático',
        ],
        benefits: [
            'Redução de até 35% em custos de infraestrutura',
            'Time-to-market 4x mais rápido com pipelines',
            'Escalabilidade global automática e elástica',
            'Segurança e conformidade nível Enterprise',
            'Maximização de performance e uptime 99.99%',
            'Operação simplificada via Infrastructure as Code',
        ],
    },
    {
        slug: 'modernizacao-legado',
        badge: 'Modernização',
        title: 'Modernização de Sistemas Legados',
        subtitle: 'Transforme sistemas antigos em plataformas modernas',
        heroDescription: 'Modernize aplicações legadas sem riscos, preservando lógica de negócio crítica enquanto adota arquiteturas modernas, cloud e novas tecnologias.',
        sections: [
            {
                title: 'Avaliação e Estratégia',
                description: 'Análise profunda do sistema legado, identificação de riscos, definição de roadmap de modernização com fases e quick wins.',
            },
            {
                title: 'Strangler Fig Pattern',
                description: 'Migração gradual que permite modernizar partes do sistema enquanto o legado continua funcionando, reduzindo riscos.',
            },
            {
                title: 'Re-platforming',
                description: 'Migre para cloud mantendo a arquitetura existente, ganhando escalabilidade e reduzindo custos de infraestrutura.',
            },
            {
                title: 'Reengenharia',
                description: 'Quando necessário, reconstruímos do zero usando arquitetura moderna (microservices, event-driven) preservando regras de negócio.',
            },
        ],
        features: [
            'Assessment completo',
            'Migration roadmap',
            'Strangler pattern',
            'API-first approach',
            'Microservices',
            'Containerização',
        ],
        benefits: [
            'Risco minimizado',
            'Continuidade do negócio',
            'Custos de manutenção reduzidos',
            'Agilidade aumentada',
            'Integração facilitada',
            'Talento mais fácil de atrair',
        ],
    },
    {
        slug: 'desenvolvimento-de-plataformas',
        badge: 'Platform Engineering',
        title: 'Desenvolvimento de Plataformas Digitais',
        subtitle: 'Escale através de orquestração de serviços e arquiteturas digitais end-to-end',
        heroDescription: 'Plataformas digitais superam empresas focadas apenas em produtos simples. Ajudamos líderes de mercado a lançar novos ecossistemas B2C e escalar ofertas B2B através de uma base tecnológica robusta e escalável, desde o design de arquitetura até a governança integrada.',
        heroImage: '/images/services/platform-dev-hero.png',
        richSections: [
            {
                title: 'Platform development services — o presente do crescimento digital',
                description: 'Diferente de produtos tradicionais, o valor de uma plataforma não está preso aos custos de produção. Facilitamos a troca de serviços onde você pode crescer exponencialmente transferindo custos de produção para o ecossistema.',
                image: '/images/services/platform-growth.png',
                cta: { text: 'Falar com um Especialista em Plataformas', link: '/contato' }
            },
            {
                title: 'Razões para escolher a Sapienza para sua Plataforma',
                description: 'Unimos consultoria IaaS/PaaS estratégica a um conhecimento profundo de AI/ML e orquestração DevOps. Nossos designers de UI/UX garantem que sua plataforma não seja apenas potente, mas também irresistível para os usuários.',
                reversed: true,
                image: '/images/services/responsible-ai-flow.png'
            }
        ],
        servHub: {
            title: 'Our platform development services',
            description: 'De consultoria estratégica a engenharia de dados, cobrimos todas as necessidades para construir o backbone tecnológico da sua empresa.',
            items: [
                { title: 'Digital platform engineering', description: 'Design de arquitetura otimizada e implementação end-to-end.', icon: '🏗️' },
                { title: 'API & system integration', description: 'Troca eficiente de dados e comunicação entre todos os serviços da plataforma.', icon: '🔌' },
                { title: 'Governance', description: 'Gerenciamento do ecossistema com mecanismos de controle centralizados e visibilidade real.', icon: '⚖️' },
                { title: 'Maintenance & support', description: 'Aproveite o efeito de rede sem se preocupar com degradação ou downtime.', icon: '🛠️' },
                { title: 'Infrastructure optimization', description: 'Aterrisse na nuvem sem dívida técnica, automatizando e consolidando recursos.', icon: '☁️' },
                { title: 'Data engineering', description: 'Consolidação de data centers e otimização de recursos para quebrar silos de dados.', icon: '📊' },
                { title: 'Security & assurance', description: 'Expertise em cybersecurity para mitigar riscos em todas as camadas da plataforma.', icon: '🛡️' },
            ]
        },
        features: [
            'Arquiteturas Multi-tenant e SaaS',
            'Ecossistemas de API Economy',
            'DevOps e Orquestração de Containers',
            'Data Lakes e Analytics em Tempo Real',
            'Segurança nativa e Compliance',
            'Escalabilidade Horizontal Infinita',
        ],
        benefits: [
            'Crescimento sem custos de produção lineares',
            'Abertura de novos fluxos de receita recorrente',
            'Inovação acelerada via componentes reutilizáveis',
            'Experiência do cliente unificada e fluida',
            'Escala rápida entre diferentes mercados e verticais',
            'Vantagem competitiva através do "efeito de rede"',
        ],
        sdlcPhases: [
            { title: 'Identifying goals', description: 'Definição clara de resultados de negócio e desafios que a plataforma irá resolver.', icon: '🎯' },
            { title: 'Examing infrastructure', description: 'Avaliação da infraestrutura atual para garantir suporte à funcionalidade desejada.', icon: '🏗️' },
            { title: 'Choosing a roadmap', description: 'Criação de um roadmap estratégico para o MVP baseado em casos de uso de valor real.', icon: '🗺️' },
            { title: 'Creating a platform', description: 'Construção de uma solução evolutiva projetada para crescer rapidamente em escala e funções.', icon: '🚀' },
        ],
        workingModels: [
            { title: 'SaaS Platform Development', description: 'Transformação de operações em soluções de software escaláveis e rentáveis.', icon: '💻' },
            { title: 'Cloud-based Platforms', description: 'Migração de legados ou implementação de infraestruturas cloud-native otimizadas.', icon: '☁️' },
            { title: 'IoT Suite Development', description: 'Conectividade e comunicação real-time entre ferramentas e serviços industriais.', icon: '📠' },
            { title: 'Microservices Migration', description: 'Aceleração de crescimento trocando arquiteturas monolíticas por microsserviços estáveis.', icon: '🧩' },
        ],
    },
    {
        slug: 'gerenciamento-de-projetos',
        badge: 'Delivery Excellence',
        title: 'Gerenciamento de Projetos & PMO',
        subtitle: 'Domine a complexidade para entregar excelência em cada projeto',
        heroDescription: 'Transformamos incerteza em resultados previsíveis. Através de um Escritório de Gerenciamento de Projetos (PMO) estratégico, garantimos que cada iniciativa esteja alinhada aos seus objetivos de negócio, dentro do prazo e orçamento, com visibilidade total em todas as etapas.',
        heroImage: '/images/services/pmo-hero.png',
        richSections: [
            {
                title: 'Transformando tangibilidade em valor de negócio',
                description: 'Nossos serviços de PMO não se limitam a cronogramas. Focamos em resultados que impactam diretamente o lucro e o sucesso a longo prazo, eliminando gargalos de inovação e falhas de comunicação que drenam orçamentos.',
                image: '/images/services/ai-engineering.png',
                cta: { text: 'Agendar Diagnóstico de Portfólio', link: '/contato' }
            }
        ],
        servHub: {
            title: 'Nossos Serviços de PMO as a Service',
            description: 'Orquestração de ponta a ponta para garantir execução eficiente e resultados consistentes.',
            items: [
                { title: 'Gestão de Portfólio (PPM)', description: 'Visibilidade unificada e controle total sobre todos os projetos e recursos.', icon: '📊' },
                { title: 'Change Management', description: 'Estratégias de mudança que garantem a adoção fluida de novos processos.', icon: '🔄' },
                { title: 'Gestão de Riscos', description: 'Identificação proativa e mitigação de ameaças antes que impactem a operação.', icon: '🛡️' },
                { title: 'Treinamento & Coaching', description: 'Capacitação de alta performance em Scrum, Kanban, SAFe e Hybrid Delivery.', icon: '🎓' },
                { title: 'Otimização de Processos', description: 'Refinamento contínuo das metodologias para maximizar a eficiência.', icon: '⚙️' },
            ]
        },
        readiness: {
            title: 'Entregas Principais para o Sucesso',
            subtitle: 'Resultados operacionais que garantem a excelência na entrega.',
            boxes: [
                { title: 'Processos Estratégicos', items: ['Rollout em fases', 'Plano de comunicação', 'Monitoramento de benefícios'] },
                { title: 'Excelência Operacional', items: ['Dashboards customizados', 'Gestão de recursos', 'Ferramentas de IA'] },
                { title: 'Framework de Gestão', items: ['Metodologias personalizadas', 'Checklists prontos para uso', 'Governança robusta'] },
                { title: 'Treinamento de Times', items: ['Workshops de PM Power Skills', 'Guias detalhados do usuário', 'Mentoria especializada'] },
            ]
        },
        pmoFramework: {
            title: 'IDEAbook Framework',
            description: 'Nosso Delivery Excellence Accelerator que oferece uma visão abrangente dos fluxos de trabalho e princípios de entrega eficiente.',
            tabs: [
                {
                    id: 'governance',
                    label: 'Governance',
                    title: 'Gestão Estratégica & Qualidade',
                    description: 'Uma abordagem estruturada para gerenciar projetos, contas e qualidade com padrões de alto desempenho.',
                    items: [
                        'Melhores práticas de performance',
                        'Navegação estratégica de responsabilidades',
                        'Gestão centralizada de stakeholders',
                        'Estratégias de mitigação de risco'
                    ],
                    image: '/images/services/software-dev-hero.png'
                },
                {
                    id: 'engineering',
                    label: 'Engineering',
                    title: 'Inovação & Arquitetura Técnica',
                    description: 'Definição da abordagem para desenvolvimento de produto e maturidade tecnológica em cada entrega.',
                    items: [
                        'Padrões de codificação e princípios de design',
                        'Estratégias de implementação de tecnologia',
                        'Processos de QA robustos',
                        'Gestão de inovação sob restrições'
                    ],
                    image: '/images/services/gen-ai-experience.png'
                },
                {
                    id: 'operations',
                    label: 'Operations',
                    title: 'Excelência em Execução',
                    description: 'Alinhamento de capital humano e otimização de processos em ambientes de projetos complexos.',
                    items: [
                        'Execução suave de tarefas críticas',
                        'Alocação eficiente de recursos escassos',
                        'Melhoria contínua de processos core',
                        'Sucesso na entrega e prazos cumpridos'
                    ],
                    image: '/images/services/platform-growth.png'
                }
            ]
        },
        features: [
            'Previsibilidade de Entrega 99%',
            'Redução de Custos Operacionais',
            'Transparência Real-time',
            'Metodologia Ágil e Híbrida',
            'Foco em ROI e Resultados',
        ],
        benefits: [
            'Entrega de valor previsível',
            'Melhoria contínua de processos',
            'Execução transparente',
            'Processos maduros e adaptáveis',
            'Foco total nos Stakeholders',
        ],
    },
];

// Helper para buscar serviço por slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(service => service.slug === slug);
}

// Helper para listar todos os slugs (para generateStaticParams)
export function getAllServiceSlugs(): string[] {
    return servicesData.map(service => service.slug);
}
