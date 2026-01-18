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
        badge: 'Desenvolvimento de Software',
        title: 'Desenvolvimento de Software Customizado',
        subtitle: 'Soluções de software confiáveis e escaláveis para desenvolver seus negócios',
        heroDescription: 'A SAPIENZA Inteligência Digital é uma empresa de desenvolvimento de software com duas décadas de experiência na criação de soluções de software personalizadas para todos os orçamentos e nichos.',
        sections: [
            {
                title: 'Crie experiências digitais atraentes',
                description: 'Nossa empresa de desenvolvimento de software personalizado pode usar suas ideias e pesquisas para entregar o que seu público deseja. A equipe da SAPIENZA é composta por programadores, administradores de servidores e designers de experiência digital com mais de 20 anos de experiência.',
            },
            {
                title: 'Equipe de desenvolvimento Full-stack',
                description: 'Codificação e design para aplicativos Android, iOS, baseados em navegador, multiplataforma e programas customizados. Quaisquer que sejam as suas necessidades de software, nossa equipe pode criar a solução.',
            },
            {
                title: 'Estratégia e Consultoria de Software',
                description: 'Trabalhamos com analistas de negócios e especialistas em UX para montar produtos que ajudem sua empresa a atingir seus objetivos. Todos os projetos incluem testes de garantia de qualidade (QA).',
            },
            {
                title: 'Desenvolvimento de Produtos Personalizados',
                description: 'Ajudamos empresas, de startups a scale-ups, a concretizar suas ideias, escolhendo as tecnologias certas e usando uma abordagem rigorosa para projetar soluções orientadas a resultados.',
            },
        ],
        features: [
            'Aplicações Web Modernas',
            'Apps Mobile iOS e Android',
            'Sistemas de Gestão (ERP/CRM)',
            'Integrações com APIs',
            'Arquitetura escalável',
            'Plataformas SaaS',
        ],
        benefits: [
            'Código limpo e manutenível',
            'Documentação completa',
            'Suporte pós-lançamento',
            'Metodologia ágil',
            '20+ anos de experiência',
            'Testes de QA inclusos',
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
        badge: 'MVP',
        title: 'Desenvolvimento de MVP',
        subtitle: 'Acelere seu tempo de lançamento e minimize custos',
        heroDescription: 'Otimize seu caminho para um lançamento de produto bem-sucedido em parceria com nossa empresa de desenvolvimento MVP de classe mundial.',
        sections: [
            {
                title: 'Especialista em MVP',
                description: 'Ao contar com a SAPIENZA para desenvolver seu Produto Mínimo Viável, você recebe informações valiosas sobre o que realmente é viável para seus clientes. Analisamos sua visão de todos os ângulos.',
            },
            {
                title: 'Análise de Negócios',
                description: 'Começamos com um mergulho profundo em seus objetivos de negócios. Examinamos sua visão de produto em termos de objetivos, prioridades e desafios para criar um MVP que atenda às suas necessidades.',
            },
            {
                title: 'Estratégia de Marketing',
                description: 'Investigamos o que os usuários desejam diretamente. Analisamos seu mercado-alvo para encontrar os requisitos do setor e desenvolver um produto que os entusiasme.',
            },
            {
                title: 'Abordagem centrada no usuário',
                description: 'Nosso processo fornece informações sobre as coisas que seus clientes valorizam e permite fazer alterações que otimizem o desempenho do produto.',
            },
        ],
        features: [
            'Entrega em 4-8 semanas',
            'Funcionalidades essenciais',
            'Design profissional',
            'Infraestrutura escalável',
            'Métricas de validação',
            'Feedback real do mercado',
        ],
        benefits: [
            'Investimento inicial reduzido',
            'Validação rápida de ideias',
            'Base para crescimento',
            'Atrair investidores',
            'Lançamento no prazo e orçamento',
            'Abordagem centrada no usuário',
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
        subtitle: 'Infraestrutura moderna e entrega contínua',
        heroDescription: 'Migre para a nuvem, otimize custos e implemente práticas de DevOps que aceleram deploys e aumentam a confiabilidade dos seus sistemas.',
        sections: [
            {
                title: 'Migração para Cloud',
                description: 'Planejamento e execução de migração para AWS, Azure ou GCP com mínimo downtime, otimização de custos e arquitetura cloud-native.',
            },
            {
                title: 'Kubernetes e Containers',
                description: 'Implemente orquestração de containers com Kubernetes, Docker e service mesh para aplicações escaláveis e resilientes.',
            },
            {
                title: 'CI/CD Moderno',
                description: 'Pipelines de integração e entrega contínua com GitHub Actions, GitLab CI, ArgoCD e ferramentas de IaC como Terraform.',
            },
            {
                title: 'Observabilidade',
                description: 'Monitoramento, logging e tracing unificados com Grafana, Prometheus, Datadog ou Elastic Stack para visibilidade total.',
            },
        ],
        features: [
            'AWS / Azure / GCP',
            'Kubernetes / Docker',
            'Terraform / Pulumi',
            'GitHub Actions / GitLab CI',
            'Grafana / Prometheus',
            'Segurança cloud-native',
        ],
        benefits: [
            'Deploy automatizado',
            'Escalabilidade elástica',
            'Custos otimizados',
            '99.9% uptime',
            'Recuperação rápida',
            'Segurança em camadas',
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
];

// Helper para buscar serviço por slug
export function getServiceBySlug(slug: string): ServiceData | undefined {
    return servicesData.find(service => service.slug === slug);
}

// Helper para listar todos os slugs (para generateStaticParams)
export function getAllServiceSlugs(): string[] {
    return servicesData.map(service => service.slug);
}
