import React from 'react';
import { Database, Code, Shield, Terminal, Zap, Layers, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, icon: Icon, skills, colorClass }) => (
    <div className="bg-navy-900 border border-white/5 rounded-3xl p-8 hover:bg-navy-800 transition-all duration-300 shadow-2xl">
        <div className={`p-4 rounded-2xl ${colorClass} inline-flex mb-8 shadow-inner`}>
            <Icon className="text-white" size={28} />
        </div>
        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-[0.1em]">{title}</h3>
        <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bg-navy-950 text-slate-300 rounded-lg text-sm border border-white/5 hover:border-accent/40 hover:text-white transition-all cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const skillSets = [
        {
            title: "GESTION DE DONNÉES & INTELLIGENCE ARTIFICIELLE",
            icon: Database,
            skills: ["SQL", "Python", "PowerBI", "MongoDB", "Blackbox AI API", "ChatGPT Integration"],
            colorClass: "bg-blue-600/30"
        },
        {
            title: "Langages de Programmation & Frameworks",
            icon: Code,
            skills: ["Golang", "C", "Java", "PHP", "JavaScript", "React"],
            colorClass: "bg-purple-600/30"
        },
        {
            title: "Outils de Gestion & Infrastructure",
            icon: Cloud,
            skills: ["Airtable", "Make (Integromat)", "MS Azure", "Git / GitHub", "Vercel", "Linux"],
            colorClass: "bg-emerald-600/30"
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            Compétences <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-10">Techniques</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium">
                            Une expertise polyvalente centrée sur la donnée, combinée à une solide maîtrise du développement backend et des infrastructures cloud.
                        </p>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-6xl font-black text-slate-900 absolute right-1/4 -z-10 select-none">DATA ANALYST</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillSets.map((set, idx) => (
                        <motion.div
                            key={set.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                        >
                            <SkillCategory {...set} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
