import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ role, company, period, description, location, current }) => (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">
        {/* Timeline Line */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-accent/50 to-transparent group-last:h-8" />

        {/* Timeline Dot */}
        <div className={`absolute top-0 -left-[5px] w-[11px] h-[11px] rounded-full ${current ? 'bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)]' : 'bg-navy-700'} border-2 border-navy-950`} />

        <div className="bg-navy-900/40 border border-white/5 p-6 md:p-8 rounded-3xl hover:bg-navy-800/60 transition-all duration-300 shadow-xl group-hover:border-accent/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors uppercase tracking-tight">
                        {role}
                    </h3>
                    <div className="flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase">
                        <Briefcase size={14} />
                        {company}
                    </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <div className="flex items-center gap-2 px-3 py-1 bg-navy-950 border border-white/10 rounded-full text-xs font-bold text-slate-300">
                        <Calendar size={12} className="text-accent" />
                        {period}
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <MapPin size={12} />
                        {location}
                    </div>
                </div>
            </div>

            <ul className="space-y-3">
                {description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 group/item">
                        <ChevronRight size={16} className="text-accent mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Stage Alterné",
            company: "Voies Navigables de France (VNF)",
            period: "Nov. 2025 - Févr. 2026",
            location: "Paris 13, France",
            current: true,
            description: [
                "Réalisation de Dashboards PowerBI stratégiques pour l'évaluation des dégâts sur les écluses (Direction Territoriale Bassin de la Seine).",
                "Analyse approfondie de données et support informatique pour la Gestion de Maintenance Assistée par Ordinateur (GMAO)."
            ]
        },
        {
            role: "Stage Académique",
            company: "Recycle de vie",
            period: "Juin 2025 - Août 2025",
            location: "Saint-Maurice, France",
            current: false,
            description: [
                "Mise en place d'un système de gestion des accès par pôle pour renforcer la traçabilité et la sécurité des données.",
                "Digitalisation et optimisation des processus RH pour faciliter la prise de décision et la collaboration d'équipe.",
                "Conception et intégration d'une Landing Page performante en HTML/CSS."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-navy-950/30">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
                            Expériences <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-10 italic">Professionnelles</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium">
                            Mon parcours en entreprise, marqué par des missions d'analyse de données et de transformation digitale.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={`${exp.company}-${idx}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <ExperienceItem {...exp} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
