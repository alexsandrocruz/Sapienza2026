// Site configuration - Centralized settings
export const siteConfig = {
    name: 'Sapienza Inteligência Digital',
    shortName: 'Sapienza Digital',
    description: 'Desenvolvimento de software personalizado e consultoria em transformação digital. Soluções inovadoras em ERP, e-commerce, mobile apps e cloud computing.',
    url: 'https://www.sapienzae.com.br',

    // SEO
    keywords: [
        'desenvolvimento de software',
        'consultoria digital',
        'transformação digital',
        'ERP',
        'e-commerce',
        'apps mobile',
        'cloud computing',
        'business intelligence',
    ],

    // Contact
    contact: {
        email: 'contato@sapienzae.com.br',
        phone: '+55 (11) 9999-9999',
        address: {
            city: 'São Paulo',
            state: 'SP',
            country: 'Brasil',
        },
    },

    // Social Media
    social: {
        linkedin: 'https://linkedin.com/company/sapienzae',
        instagram: 'https://instagram.com/sapienzae',
        facebook: 'https://facebook.com/sapienzae',
    },

    // Analytics IDs (configure in .env.local)
    analytics: {
        googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
        facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    },

    // Author
    author: 'Sapienza Inteligência Digital',
};

export type SiteConfig = typeof siteConfig;
