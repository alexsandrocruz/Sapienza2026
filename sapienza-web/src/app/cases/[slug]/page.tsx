import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCasesSlugs, getCaseBySlug } from '@/data/cases';
import CaseStudyTemplate from '@/components/sections/CaseStudyTemplate';
import { CTA } from '@/components/sections';

interface CasePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getCaseBySlug(slug);

    if (!project) return { title: 'Projeto não encontrado' };

    return {
        title: `${project.title} | Sapienza Cases`,
        description: project.description,
    };
}

export function generateStaticParams() {
    return getAllCasesSlugs().map((slug) => ({ slug }));
}

export default async function CasePage({ params }: CasePageProps) {
    const { slug } = await params;
    const project = getCaseBySlug(slug);

    if (!project) notFound();

    return (
        <>
            <CaseStudyTemplate project={project} />
            <CTA />
        </>
    );
}
