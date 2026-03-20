import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const EduItem = ({ year, degree, school, location, current }) => (
    <div className={`relative pl-12 border-l-2 ${current ? 'border-accent' : 'border-white/10'} pb-12 last:pb-0`}>
        <div className={`absolute top-0 -left-4 w-8 h-8 rounded-full border-4 border-navy-950 ${current ? 'bg-accent shadow-lg shadow-accent/20' : 'bg-navy-800'} flex items-center justify-center`}>
            <GraduationCap className={current ? 'text-white' : 'text-slate-500'} size={14} />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <span className={`text-sm font-bold tracking-widest uppercase ${current ? 'text-accent' : 'text-slate-500'}`}>
                {year}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 bg-navy-900 border border-white/5 rounded-lg text-xs font-semibold text-slate-400">
                <MapPin size={12} /> {location}
            </div>
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight uppercase tracking-tight">
            {degree}
        </h3>
        <p className="text-lg text-slate-400 font-medium tracking-tight">
            {school}
        </p>
    </div>
);

const Education = () => {
    const education = [
        {
            year: "2026 - 2027",
            degree: "3e année Bachelor Informatique - Spécialisation IABD",
            school: "ESGI Paris",
            location: "Paris, France",
            current: true
        },
        {
            year: "2025 - 2026",
            degree: "2e année Bachelor Informatique",
            school: "ESGI Paris",
            location: "Paris, France",
            current: false
        },
        {
            year: "2024 - 2025",
            degree: "1ère année Bachelor Data & App Design",
            school: "ESTIAM Paris",
            location: "Paris, France",
            current: false
        },
        {
            year: "2019 - 2022",
            degree: "Licence Pro Biologie Humaine",
            school: "EPAC / UAC",
            location: "Bénin",
            current: false
        }
    ];

    return (
        <section id="education" className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight leading-tight">
                            Parcours <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-10 italic">Académique</span>
                        </h2>
                        <div className="hidden md:block h-px flex-grow bg-white/5" />
                    </div>

                    <div className="space-y-4">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={`${edu.year}-${edu.degree}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                <EduItem {...edu} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
