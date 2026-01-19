'use client';

import { motion } from 'framer-motion';

const techGroups = [
    {
        name: 'Backend & Architecture',
        techs: ['Node.js', '.NET Core', 'Go', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
        name: 'Frontend & Apps',
        techs: ['React', 'Next.js', 'React Native', 'TypeScript', 'TailwindCSS', 'Framer Motion']
    },
    {
        name: 'Cloud & DevOps',
        techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Serverless']
    },
    {
        name: 'AI & Data Engineering',
        techs: ['OpenAI', 'LangChain', 'Python', 'Vector DBs', 'RAG Architecture', 'Data Processing']
    }
];

export default function TechnologiesSection() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                            <span className="text-orange-500 font-black text-[10px] tracking-[0.3em] uppercase">
                                Tech Stack
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Engineered for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Performance</span> &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Scale</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-xl">
                            Utilizamos as tecnologias mais modernas e robustas do mercado para garantir que seu produto seja sustentável e evolua com o seu negócio.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {techGroups.map((group, idx) => (
                            <motion.div
                                key={group.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-md border border-white/5 rounded-3xl p-8 hover:border-orange-500/20 transition-all duration-300"
                            >
                                <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-6">
                                    {group.name}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
