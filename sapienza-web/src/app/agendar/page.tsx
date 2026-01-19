import { Metadata } from 'next';
import { CalendarCheck, Search } from 'lucide-react';
import { meetingTypes } from '@/data/meetings';
import { MeetingCard } from '@/components/sections/MeetingCard';
import { CTA } from '@/components/sections';

export const metadata: Metadata = {
    title: 'Agendar Reunião | Sapienza Digital',
    description: 'Escolha o melhor formato de reunião para sua necessidade. Desde quick calls até workshops estratégicos de transformação digital.',
};

export default function AgendarPage() {
    const priorityMeetings = meetingTypes.slice(0, 4); // Quick Call, Discovery, Consultoria, Demo
    const otherMeetings = meetingTypes.slice(4); // Workshop, Alinhamento, Coffee, Emergency

    return (
        <div className="bg-[#020617] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(2,6,23,1))]" />
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-600"></span>
                        </span>
                        <span className="text-orange-400 font-bold text-[10px] uppercase tracking-[0.3em]">Agendamento Online</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                        Escolha seu
                        <span className="block mt-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                                Compromisso
                            </span>
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Do quick call ao workshop estratégico — selecione o formato ideal para sua necessidade.
                        Todas as reuniões são via <span className="text-white font-semibold">Google Meet</span> e agendadas automaticamente.
                    </p>

                    {/* Quick Search */}
                    <div className="mt-12 max-w-md mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar tipo de reunião..."
                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:border-orange-500 focus:bg-white/10 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Priority Meetings Section */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <CalendarCheck className="w-8 h-8 text-orange-500" />
                        <div>
                            <h2 className="text-3xl font-black text-white">Reuniões Principais</h2>
                            <p className="text-gray-400 text-sm mt-1">Formatos mais procurados para início de jornada</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {priorityMeetings.map((meeting, i) => (
                            <MeetingCard key={meeting.id} meeting={meeting} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Meetings Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">+</span>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white">Outros Formatos</h2>
                            <p className="text-gray-400 text-sm mt-1">Workshops, suporte e networking</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {otherMeetings.map((meeting, i) => (
                            <MeetingCard key={meeting.id} meeting={meeting} index={i + 4} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-[3rem] text-center">
                        <h3 className="text-3xl font-black text-white mb-4">
                            Não sabe qual escolher?
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Comece com nosso <span className="text-orange-400 font-semibold">Discovery Call de 30 minutos</span>.
                            Vamos entender sua necessidade e recomendar o melhor caminho.
                        </p>
                        <a
                            href="https://dominus.zensuite.com.br/s/sapienza/discovery-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-500 transition-all shadow-[0_20px_50px_rgba(234,88,12,0.3)] hover:scale-105"
                        >
                            Agendar Discovery Call
                            <CalendarCheck className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
