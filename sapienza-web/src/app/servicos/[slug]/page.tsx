import { Metadata } from 'next';
import { HeroWithForm } from '@/components/sections/HeroWithForm';
import { CTA } from '@/components/sections';

// Dados dos serviços - pode ser movido para um CMS ou arquivo de dados
const servicesData: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    features: string[];
    benefits: string[];
}> = {
    'desenvolvimento-de-software': {
        badge: 'Desenvolvimento de Software',
        title: 'Desenvolvimento de Software Customizado',
        subtitle: 'Soluções sob medida para seu negócio',
        description: 'Criamos aplicações web e mobile personalizadas com as tecnologias mais modernas do mercado. Nossa equipe de desenvolvimento de software se destaca na criação de aplicativos web, aplicativos móveis, aplicativos de comércio eletrônico, plataformas de experiência digital e plataformas SaaS.',
        features: [
            'Aplicações Web Modernas',
            'Apps Mobile iOS e Android',
            'Sistemas de Gestão (ERP)',
            'Integrações com APIs',
            'Arquitetura escalável',
        ],
        benefits: [
            'Código limpo e manutenível',
            'Documentação completa',
            'Suporte pós-lançamento',
            'Metodologia ágil',
        ],
    },
    'desenvolvimento-de-produtos': {
        badge: 'Desenvolvimento de Produtos',
        title: 'Desenvolvimento de Produtos Digitais',
        subtitle: 'Do conceito ao lançamento',
        description: 'A SAPIENZA é uma agência de desenvolvimento de primeira linha que pode guiá-lo por todo o ciclo de vida de desenvolvimento do seu produto. Nosso objetivo é alavancar a tecnologia de ponta para fornecer produtos digitais envolventes e satisfatórios para seus clientes.',
        features: [
            'Discovery e Ideação',
            'Prototipagem rápida',
            'MVP em semanas',
            'Testes com usuários',
            'Iteração contínua',
        ],
        benefits: [
            'Time-to-market reduzido',
            'Validação antes do investimento',
            'Foco no usuário final',
            'Escalabilidade garantida',
        ],
    },
    'desenvolvimento-de-mvp': {
        badge: 'MVP',
        title: 'Desenvolvimento de MVP',
        subtitle: 'Valide sua ideia rapidamente',
        description: 'Transforme sua ideia em um produto funcional em semanas, não meses. Focamos em criar uma solução robusta e intuitiva que permita testar e validar em um ambiente real, garantindo ajustes precisos e melhorias contínuas com base no feedback dos usuários.',
        features: [
            'Entrega em 4-8 semanas',
            'Funcionalidades essenciais',
            'Design profissional',
            'Infraestrutura escalável',
            'Métricas de validação',
        ],
        benefits: [
            'Investimento inicial reduzido',
            'Feedback real do mercado',
            'Base para crescimento',
            'Atrair investidores',
        ],
    },
    'transformacao-digital': {
        badge: 'Transformação Digital',
        title: 'Transformação Digital',
        subtitle: 'Modernize sua empresa',
        description: 'Como agência de transformação digital, a SAPIENZA oferece serviços para que suas experiências digitais possam crescer junto com o seu negócio. O futuro da sua empresa é tão grande quanto suas ideias, e nós deixamos você livre para evoluir, modernizar e avançar.',
        features: [
            'Análise de processos',
            'Automação de tarefas',
            'Migração para cloud',
            'Integração de sistemas',
            'Cultura digital',
        ],
        benefits: [
            'Redução de custos operacionais',
            'Maior eficiência',
            'Experiência do cliente melhorada',
            'Competitividade aumentada',
        ],
    },
    'analise-de-dados': {
        badge: 'Business Intelligence',
        title: 'Análise de Dados',
        subtitle: 'Decisões baseadas em dados',
        description: 'A SAPIENZA pode analisar seus dados através de uma lente de design thinking para criar maneiras novas e aprimoradas de satisfazer e reter seus clientes. Sinta-se capacitado para monitorar as principais métricas da sua empresa e acessar novos níveis de insight.',
        features: [
            'Dashboards personalizados',
            'Relatórios automatizados',
            'Análise preditiva',
            'Data Warehouse',
            'Machine Learning',
        ],
        benefits: [
            'Visibilidade total do negócio',
            'Decisões mais rápidas',
            'Identificar oportunidades',
            'Reduzir riscos',
        ],
    },
    'design-de-experiencia': {
        badge: 'UX/UI Design',
        title: 'Design de Experiência do Usuário',
        subtitle: 'Interfaces que encantam',
        description: 'Transforme a experiência do usuário da sua empresa em seu fator X com o processo de design de experiência da SAPIENZA. Nossa filosofia de prioridade às pessoas resulta em produtos acabados que atingem o equilíbrio perfeito entre emoção e função.',
        features: [
            'Pesquisa com usuários',
            'Wireframes e protótipos',
            'Design System',
            'Testes de usabilidade',
            'Design responsivo',
        ],
        benefits: [
            'Maior conversão',
            'Menos suporte',
            'Clientes satisfeitos',
            'Marca fortalecida',
        ],
    },
    'consultoria-apps-mobile': {
        badge: 'Mobile',
        title: 'Consultoria em Aplicativos Móveis',
        subtitle: 'Apps iOS e Android de alta performance',
        description: 'Para sobreviver no mundo dos negócios de hoje, você precisa chamar a atenção do seu público no celular. A SAPIENZA oferece serviços de consultoria e desenvolvimento de aplicativos de primeira classe para fazer exatamente isso.',
        features: [
            'Apps nativos e híbridos',
            'React Native / Flutter',
            'Integração com hardware',
            'Push notifications',
            'Offline-first',
        ],
        benefits: [
            'Presença mobile',
            'Engajamento do usuário',
            'Canal direto com cliente',
            'Novas receitas',
        ],
    },
    'whatsapp-chatbot': {
        badge: 'Automação',
        title: 'WhatsApp Chatbot',
        subtitle: 'Atendimento 24/7 automatizado',
        description: 'Automatize o atendimento ao cliente com chatbots inteligentes para WhatsApp. Responda perguntas frequentes, qualifique leads e encaminhe para atendentes humanos quando necessário.',
        features: [
            'Integração WhatsApp Business API',
            'Fluxos personalizados',
            'IA conversacional',
            'Transferência para humano',
            'Relatórios de atendimento',
        ],
        benefits: [
            'Atendimento 24 horas',
            'Redução de custos',
            'Escala infinita',
            'Clientes satisfeitos',
        ],
    },
};

// Gerar metadados dinâmicos
export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return { title: 'Serviço não encontrado' };
    }

    return {
        title: service.title,
        description: service.description,
        openGraph: {
            title: service.title,
            description: service.description,
        },
    };
}

// Gerar rotas estáticas
export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServicePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Serviço não encontrado</h1>
                    <p className="text-gray-600">O serviço que você procura não existe.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeroWithForm
                badge={service.badge}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                formSubject={`Contato - ${service.title}`}
            />

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Features */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                O que oferecemos
                            </h3>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-orange-500 text-xl mt-0.5">✓</span>
                                        <span className="text-gray-700 text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Benefícios
                            </h3>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="text-orange-500 text-xl mt-0.5">★</span>
                                        <span className="text-gray-700 text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </>
    );
}
