import type { ImageMetadata } from 'astro';
import civislendLogo from '../assets/civislend.png';
import revolutLogo from '../assets/revolut.png';
import tradeRepublicLogo from '../assets/trade-republic.png';
import urbanitaeLogo from '../assets/urbanitae.png';
import wecityLogo from '../assets/wecity.png';

export interface Referral {
    name: string;
    category: 'Inversión Inmobiliaria' | 'NeoBancos' | 'Crypto' | 'Otros';
    description: Record<string, string>;
    link?: string;
    code?: string;
    bonus: Record<string, string>;
    requirements: Record<string, string[]>;
    color: string;
    bgColor: string;
    logo?: ImageMetadata;
}

export const referrals: Referral[] = [
    {
        name: 'Wecity',
        category: 'Inversión Inmobiliaria',
        code: 'WECITY-YA6QTS',
        bonus: {
            es: '50€ para ti y 50€ para mí',
            en: '50€ for you and 50€ for me',
            it: '50€ per te e 50€ per me',
            nl: '50€ voor jou en 50€ voor mij',
            de: '50€ für dich und 50€ für mich',
            fr: '50€ pour vous et 50€ pour moi',
            pt: '50€ para você e 50€ para mim'
        },
        requirements: {
            es: ['Regístrate con el código', 'Inversión mínima de 500€ en proyecto 100% financiado'],
            en: ['Register with the code', 'Minimum investment of 500€ in 100% funded project'],
            it: ['Registrati con il codice', 'Investimento minimo di 500€ in un progetto finanziato al 100%'],
            nl: ['Registreer met de code', 'Minimale investering van 500€ in een 100% gefinancierd project'],
            de: ['Mit dem Code registrieren', 'Mindestinvestition von 500€ in ein zu 100 % finanziertes Projekt'],
            fr: ['Inscrivez-vous avec le code', 'Investissement minimum de 500€ dans un projet financé à 100%'],
            pt: ['Registe-se com o código', 'Investimento mínimo de 500€ em projeto 100% financiado']
        },
        description: {
            es: 'Plataforma de crowdfunding inmobiliario.',
            en: 'Real estate crowdfunding platform.',
            it: 'Piattaforma di crowdfunding immobiliare.',
            nl: 'Vastgoed crowdfunding platform.',
            de: 'Immobilien-Crowdfunding-Plattform.',
            fr: 'Plateforme de crowdfunding immobilier.',
            pt: 'Plataforma de crowdfunding imobiliário.'
        },
        color: 'text-blue-800',
        bgColor: 'bg-blue-50',
        logo: wecityLogo
    },
    {
        name: 'Civislend',
        category: 'Inversión Inmobiliaria',
        link: 'https://www.civislend.com/registro?referrer=gYeB6aJ4eB',
        bonus: {
            es: '25€ - 75€ según inversión',
            en: '25€ - 75€ depending on investment',
            it: '25€ - 75€ a seconda dell\'investimento',
            nl: '25€ - 75€ afhankelijk van investering',
            de: '25€ - 75€ je nach Investition',
            fr: '25€ - 75€ selon l\'investissement',
            pt: '25€ - 75€ dependendo do investimento'
        },
        requirements: {
            es: ['250€ - 1.499€ → 25€', '1.500€ - 2.999€ → 50€', '≥ 3.000€ → 75€'],
            en: ['250€ - 1,499€ → 25€', '1,500€ - 2,999€ → 50€', '≥ 3,000€ → 75€'],
            it: ['250€ - 1.499€ → 25€', '1.500€ - 2.999€ → 50€', '≥ 3.000€ → 75€'],
            nl: ['250€ - 1.499€ → 25€', '1.500€ - 2.999€ → 50€', '≥ 3.000€ → 75€'],
            de: ['250€ - 1.499€ → 25€', '1.500€ - 2.999€ → 50€', '≥ 3.000€ → 75€'],
            fr: ['250€ - 1.499€ → 25€', '1.500€ - 2.999€ → 50€', '≥ 3.000€ → 75€'],
            pt: ['250€ - 1.499€ → 25€', '1.500€ - 2.999€ → 50€', '≥ 3.000€ → 75€']
        },
        description: {
            es: 'Lending inmobiliario líder en España.',
            en: 'Leading real estate lending in Spain.',
            it: 'Lending immobiliare leader in Spagna.',
            nl: 'Toonaangevende vastgoedleningen in Spanje.',
            de: 'Führende Immobilienfinanzierung in Spanien.',
            fr: 'Prêt immobilier leader en Espagne.',
            pt: 'Empréstimo imobiliário líder na Espanha.'
        },
        color: 'text-indigo-800',
        bgColor: 'bg-indigo-50',
        logo: civislendLogo
    },
    {
        name: 'Urbanitae',
        category: 'Inversión Inmobiliaria',
        link: 'https://urbanitae.com/es/invitado?access=U232788',
        bonus: {
            es: '25€ - 75€ según inversión',
            en: '25€ - 75€ depending on investment',
            it: '25€ - 75€ a seconda dell\'investimento',
            nl: '25€ - 75€ afhankelijk van investering',
            de: '25€ - 75€ je nach Investition',
            fr: '25€ - 75€ selon l\'investissement',
            pt: '25€ - 75€ dependendo do investimento'
        },
        requirements: {
            es: ['500€ - 1.500€ → 25€', '1.510€ - 3.000€ → 50€', '>3.000€ → 75€'],
            en: ['500€ - 1,500€ → 25€', '1,510€ - 3,000€ → 50€', '>3,000€ → 75€'],
            it: ['500€ - 1.500€ → 25€', '1.510€ - 3.000€ → 50€', '>3.000€ → 75€'],
            nl: ['500€ - 1.500€ → 25€', '1.510€ - 3.000€ → 50€', '>3.000€ → 75€'],
            de: ['500€ - 1.500€ → 25€', '1.510€ - 3.000€ → 50€', '>3.000€ → 75€'],
            fr: ['500€ - 1.500€ → 25€', '1.510€ - 3.000€ → 50€', '>3.000€ → 75€'],
            pt: ['500€ - 1.500€ → 25€', '1.510€ - 3.000€ → 50€', '>3.000€ → 75€']
        },
        description: {
            es: 'Mayor plataforma de inversión inmobiliaria en España.',
            en: 'Largest real estate investment platform in Spain.',
            it: 'La più grande piattaforma di investimento immobiliare in Spagna.',
            nl: 'Grootste vastgoedbeleggingsplatform in Spanje.',
            de: 'Größte Immobilien-Investmentplattform in Spanien.',
            fr: 'La plus grande plateforme d\'investissement immobilier en Espagne.',
            pt: 'A maior plataforma de investimento imobiliário da Espanha.'
        },
        color: 'text-emerald-800',
        bgColor: 'bg-emerald-50',
        logo: urbanitaeLogo
    },
    {
        name: 'Trade Republic',
        category: 'NeoBancos',
        link: 'https://refnocode.trade.re/4l41jvx4',
        bonus: {
            es: '20€ en acciones',
            en: '20€ in stocks',
            it: '20€ in azioni',
            nl: '20€ in aandelen',
            de: '20€ in Aktien',
            fr: '20€ en actions',
            pt: '20€ em ações'
        },
        requirements: {
            es: ['Registrarse con el enlace', 'Invertir durante los primeros 21 días'],
            en: ['Register with the link', 'Invest during the first 21 days'],
            it: ['Registrati con il link', 'Investi entro i primi 21 giorni'],
            nl: ['Registreer met de link', 'Investeren tijdens de eerste 21 dagen'],
            de: ['Über den Link registrieren', 'Innerhalb der ersten 21 Tage investieren'],
            fr: ['Inscrivez-vous avec le lien', 'Investir durant les 21 premiers jours'],
            pt: ['Registe-se com o link', 'Invista durante os primeiros 21 dias']
        },
        description: {
            es: 'Banco alemán para ahorrar e invertir.',
            en: 'German bank for saving and investing.',
            it: 'Banca tedesca per il risparmio e l\'investimento.',
            nl: 'Duitse bank om te sparen en beleggen.',
            de: 'Deutsche Bank zum Sparen und Investieren.',
            fr: 'Banque allemande pour l\'épargne et l\'investissement.',
            pt: 'Banco alemão para poupar e investir.'
        },
        color: 'text-stone-900',
        bgColor: 'bg-stone-100',
        logo: tradeRepublicLogo
    },
    {
        name: 'Revolut',
        category: 'NeoBancos',
        link: 'https://revolut.com/referral/?referral-code=juanwix9d!JUN2-25-AR-L2&geo-redirect',
        bonus: {
            es: 'Hasta 30€ (variable)',
            en: 'Up to 30€ (variable)',
            it: 'Fino a 30€ (variabile)',
            nl: 'Tot 30€ (variabel)',
            de: 'Bis zu 30€ (variabel)',
            fr: 'Jusqu\'à 30€ (variable)',
            pt: 'Até 30€ (variável)'
        },
        requirements: {
            es: ['Registro + Añadir dinero', 'Pedir tarjeta física', '3 pagos ≥ 5€'],
            en: ['Registration + Add money', 'Order physical card', '3 payments ≥ 5€'],
            it: ['Registrazione + Aggiungi denaro', 'Ordina carta fisica', '3 pagamenti ≥ 5€'],
            nl: ['Registratie + Geld toevoegen', 'Fysieke kaart bestellen', '3 betalingen ≥ 5€'],
            de: ['Registrierung + Geld hinzufügen', 'Physische Karte bestellen', '3 Zahlungen ≥ 5€'],
            fr: ['Inscription + Ajouter de l\'argent', 'Commander une carte physique', '3 paiements ≥ 5€'],
            pt: ['Registo + Adicionar dinheiro', 'Pedir cartão físico', '3 pagamentos ≥ 5€']
        },
        description: {
            es: 'La superapp financiera global.',
            en: 'The global financial superapp.',
            it: 'La superapp finanziaria globale.',
            nl: 'De wereldwijde financiële super-app.',
            de: 'Die globale Finanz-Super-App.',
            fr: 'La super-application financière mondiale.',
            pt: 'A super-app financeira global.'
        },
        color: 'text-blue-800',
        bgColor: 'bg-blue-50',
        logo: revolutLogo
    },
];

export const categories = [...new Set(referrals.map(r => r.category))];

export function getReferrals(lang: string) {
    return referrals.map(r => ({
        ...r,
        bonus: r.bonus[lang] || r.bonus['es'],
        description: r.description[lang] || r.description['es'],
        requirements: r.requirements[lang] || r.requirements['es']
    }));
}

