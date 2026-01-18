// Dados completos dos serviços extraídos do site Odoo
export interface ServiceSection {
    title: string;
    description: string;
}

export interface ServiceData {
    slug: string;
    badge: string;
    title: string;
    subtitle: string;
    heroDescription: string;
    heroImage?: string;
    sections: ServiceSection[];
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
        title: 'Engenharia Habilitada por IA',
        subtitle: 'Engenharia mais rápida, inteligente e eficiente com IA no núcleo',
        heroDescription: 'Empresas que adotam workflows de IA entregam com mais eficiência, lançam produtos digitais mais rápido e resolvem complexidade com menos atrito. Ajudamos suas equipes a adotar uma abordagem sistemática de engenharia habilitada por IA.',
        heroImage: '/images/services/ai-engineering.png',
        sections: [
            {
                title: 'IA no Ciclo de Desenvolvimento',
                description: 'Integramos IA em cada fase do SDLC: desde análise de requisitos até manutenção. IA suporta decisões de estratégia analisando sistemas, prontidão de dados e dívida técnica.',
            },
            {
                title: 'AI Pods: Equipes Potencializadas',
                description: 'Evoluímos de times ágeis tradicionais para AI Pods: ciclos mais curtos, mais ownership, execução mais inteligente com agentes IA cuidando de tarefas rotineiras.',
            },
            {
                title: 'Geração e Revisão de Código',
                description: 'Código gerado, refatorado e documentado automaticamente com IA, reduzindo trabalho repetitivo e aumentando a velocidade do desenvolvedor.',
            },
            {
                title: 'Testes e Monitoramento Preditivo',
                description: 'IA cria, atualiza y executa testes automaticamente, detectando problemas mais cedo. Monitoramento preditivo mantém sistemas estáveis.',
            },
        ],
        features: [
            '53% mais foco em tarefas',
            '79% busca de informação mais rápida',
            '51% eficiência em code review',
            '100% ganho de produtividade',
            '3x menor time-to-market',
            '8x prototipagem mais rápida',
        ],
        benefits: [
            'Ciclos de entrega mais curtos',
            'Menos dependências e gargalos',
            'Qualidade consistente',
            'Increments de produto mais rápidos',
            'Escala sem aumentar equipe',
            'Menos frustração com tarefas rotineiras',
        ],
        sdlcPhases: [
            { title: 'Strategy', description: 'IA analisa sistemas, prontidão de dados e dívida técnica para moldar o roadmap.', icon: '🎯' },
            { title: 'Requirements', description: 'IA analisa necessidades do produto e comportamento do usuário para priorização inteligente.', icon: '📋' },
            { title: 'Architecture', description: 'Recomendações inteligentes ajudam times a escolher padrões ideais e arquiteturas escaláveis.', icon: '🏗️' },
            { title: 'Development', description: 'Geração de código, refatoração e documentação automática reduzem trabalho rotineiro.', icon: '💻' },
            { title: 'Testing', description: 'IA cria e executa testes automaticamente, melhorando a cobertura sem esforço extra.', icon: '🛡️' },
            { title: 'Operations', description: 'Monitoramento preditivo e análise de incidentes mantêm sistemas estáveis.', icon: '⚙️' },
        ],
        workingModels: [
            { title: 'AI Pods', description: 'Impulsione a velocidade desde o dia 1 com entrega agêntica orquestrada.', icon: '🚀' },
            { title: 'Guided AI Transformation', description: 'Transformação completa com nossos especialistas co-pilotando a jornada.', icon: '👨‍✈️' },
            { title: 'SLA-based Turnaround', description: 'Entregas rápidas guiadas por métricas de valor e SLAs claros.', icon: '⏱️' },
        ],
        successCases: [
            {
                client: 'Digital Health Company',
                description: 'Reconstrução rápida de app móvel usando AI Pods e engenharia reversa de fluxos legados.',
                metrics: ['55%+ redução de investimento', '1.5x menor time-to-market', '40% menos defeitos'],
            },
            {
                client: 'Traffic Solution Leader',
                description: 'Uso de Agentic IA para criar protótipos de UI baseados em dados de mapas open-source.',
                metrics: ['Protótipo em 1 DIA', '2x aceleração no desenvolvimento', '70% menor investimento'],
            },
        ],
    },
    {
        slug: 'ia-generativa',
        badge: 'IA Generativa',
        title: 'Serviços de IA Generativa',
        subtitle: 'As tendências de hoje são as táticas de amanhã',
        heroDescription: 'De chatbots como Eliza à IA generativa moderna, o que era curiosidade tecnológica agora é prioridade de diretoria. Ajudamos nossos clientes a adotar e adaptar capacidades de GenAI para trabalhar de forma mais inteligente.',
        heroImage: '/images/services/gen-ai.png',
        sections: [
            {
                title: 'Assessment de Prontidão',
                description: 'Analisamos sua prontidão para adotar IA generativa e desenvolvemos um roadmap claro: workshops de planejamento estratégico, avaliação de viabilidade e análise custo-benefício.',
            },
            {
                title: 'LLMs Customizados',
                description: 'Desenvolvemos modelos de linguagem (LLMs) customizados ou modelos de domínio específico para suas necessidades: fine-tuning, treinamento e otimização.',
            },
            {
                title: 'Integração de Sistemas',
                description: 'Conectamos soluções de IA generativa com suas plataformas existentes: ERP, CRM, DMS, HRM. Análise de compatibilidade, integrações via API e automação de workflows.',
            },
            {
                title: 'Governança e Compliance',
                description: 'Estabelecemos frameworks para uso ético, seguro e compliant de IA: diretrizes éticas, auditorias de compliance e estratégias de gestão de risco.',
            },
        ],
        features: [
            'Assessment de prontidão GenAI',
            'LLMs customizados',
            'Fine-tuning de modelos',
            'Integração ERP/CRM/HRM',
            'Framework GUARDIAN de governança',
            'MLOps e monitoramento',
        ],
        benefits: [
            'Dados transformados em inteligência',
            'Workflows complexos automatizados',
            'Experiências diferenciadas',
            'ROI mensurável',
            'Inovação escalável e segura',
            'Produtividade multiplicada',
        ],
        workingModels: [
            { title: 'GenAI Strategy', description: 'Workshops para alinhar iniciativas de IA com objetivos estratégicos.', icon: '🎯' },
            { title: 'Custom Model Development', description: 'Desenvolvimento de LLMs específicos para seu domínio de negócio.', icon: '🧠' },
            { title: 'Enterprise Integration', description: 'Conexão segura com infraestrutura de dados corporativa.', icon: '🔗' },
        ],
    },
    {
        slug: 'ia-responsavel',
        badge: 'IA Responsável',
        title: 'Governança de IA Responsável',
        subtitle: 'Uso transparente, seguro e livre de viés da inteligência artificial',
        heroDescription: 'A IA assume suas tarefas rotineiras e transforma dados em insights acionáveis. Mas quem treinou a IA? Ela protege a privacidade? Está em conformidade com regulações? Nossos consultores ajudam a implementar governança que garante soluções éticas e compliant.',
        heroImage: '/images/services/responsible-ai.png',
        sections: [
            {
                title: 'Tomada de Decisão Ética',
                description: 'Com um framework de governança de IA responsável, você garante que decisões baseadas em IA sejam justas, transparentes e promovam inclusão e accountability.',
            },
            {
                title: 'Confiança do Cliente',
                description: 'IA responsável permite transparência, explicabilidade e clareza na tomada de decisões, construindo confiança com usuários e stakeholders.',
            },
            {
                title: 'Conformidade Regulatória',
                description: 'Governança de IA responsável garante que todas as suas aplicações de IA estejam em conformidade com leis de proteção de dados e regulações do setor.',
            },
            {
                title: 'Mitigação de Riscos',
                description: 'Com IA responsável, você reduz riscos de uso indevido de dados e suas consequências, priorizando privacidade e protegendo a reputação do seu negócio.',
            },
        ],
        features: [
            'Framework GUARDIAN',
            'Auditorias de compliance',
            'Diretrizes éticas',
            'Gestão de riscos',
            'Proteção de dados',
            'Explicabilidade de IA',
        ],
        benefits: [
            'Decisões justas e transparentes',
            'Confiança do cliente',
            'Compliance com LGPD/GDPR',
            'Riscos minimizados',
            'Reputação protegida',
            'IA como ativo controlado',
        ],
        workingModels: [
            { title: 'Governance Framework', description: 'Implementação do framework GUARDIAN para controle total.', icon: '⚖️' },
            { title: 'Privacy Audit', description: 'Auditorias focadas em proteção de dados e privacidade em IA.', icon: '🔍' },
            { title: 'Ethical Guidelines', description: 'Desenvolvimento de princípios éticos internos para uso de IA.', icon: '🤝' },
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
