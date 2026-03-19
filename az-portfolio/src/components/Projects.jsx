import React from 'react';
import { ExternalLink, GithubIcon, ArrowRight, LinkedinIcon, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, image, tags, link, github, linkedin }) => {
    const isInternalLink = link && link.startsWith('/');

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-navy-900/40 rounded-3xl border border-white/5 overflow-hidden group hover:border-accent/30 transition-all shadow-xl hover:shadow-2xl flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent group-hover:opacity-60 transition-opacity opacity-40 shrink-0" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-navy-950/80 backdrop-blur-md text-slate-100 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-white/10 shrink-0">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">{title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
                    {description}
                </p>

                <div className="flex items-center space-x-6 mt-auto">
                    {link && link !== "#" && (
                        isInternalLink ? (
                            <Link to={link} className="text-white hover:text-accent flex items-center gap-2 text-sm font-bold tracking-tight transition-colors">
                                WORKFLOW <Info size={16} />
                            </Link>
                        ) : (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent flex items-center gap-2 text-sm font-bold tracking-tight transition-colors">
                                PROJET <ExternalLink size={16} />
                            </a>
                        )
                    )}
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent flex items-center gap-2 text-sm font-bold tracking-tight transition-colors">
                            DÉTAILS <LinkedinIcon size={16} />
                        </a>
                    )}
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent flex items-center gap-2 text-sm font-bold tracking-tight transition-colors">
                            CODE <GithubIcon size={16} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Analyses des données de Maintenance",
            description: "Création de tableaux de bord PowerBI stratégiques pour Voies Navigables de France. Analyse de données GMAO pour le pilotage de la maintenance des infrastructures.",
            image: "/vnf_dashboard.png",
            tags: ["PowerBI", "SQL", "Analyse de Données"],
            link: "/projects/vnf-maintenance",
        },
        {
            title: "AI PR Analysis Bot",
            description: "Bot automatisé d'analyse de Pull Requests GitHub via l'API Blackbox AI pour le Hackathon Future of Coding. Optimisation de la qualité du code par l'IA.",
            image: "/pr_analysis_bot.png",
            tags: ["Python", "LLM", "API", "Blackbox AI"],
            linkedin: "https://www.linkedin.com/posts/aziz-fassinou_hackathon-futureofcoding-ai-activity-7386901477446885377-cN8D?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADx20AUB8NgcM_4xLBGK8ECue9A8XBdF_oY",
        },

        {
            title: "Meteor Madness (NASA)",
            description: "Développement d'une application de visualisation pour le NASA Space Apps Challenge. Analyse et vulgarisation de données scientifiques complexes sur les météores.",
            image: "/meteor_madness.png",
            tags: ["Data Viz", "NASA API", "Hackathon"],
            link: "https://astrale.onrender.com/",
            linkedin: "https://www.linkedin.com/posts/aziz-fassinou_nasaspaceapps-hackathon-innovation-activity-7380874495047258113-Lmqm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADx20AUB8NgcM_4xLBGK8ECue9A8XBdF_oY",
        },

        {
            title: "Solution de Gestion pour Maison Duval",
            description: "Plateforme de gestion d'estimations (Hackathon d'école) pour une maison de ventes aux enchères. Inclus : Dashboard KPI temps réel, Workflow auto (Formulaire -> Airtable -> PDF -> Email) et Base métier Kanban.",
            image: "/maison_duval.png",
            tags: ["Airtable", "Softr", "Make"],
            link: "https://maisonduval.softr.app/",
            linkedin: "https://www.linkedin.com/posts/aziz-fassinou_nocode-hackathon-esgi-activity-7428664364360052736-u0SV?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADx20AUB8NgcM_4xLBGK8ECue9A8XBdF_oY",
        },
        {
            title: "Solution de Gestion RH & Stages",
            description: "Application interactive (Hackathon d'école) facilitant la mise en relation et la gestion des recrutements. Optimisation du workflow RH et centralisation des données de stages.",
            image: "/rh_stages.png",
            tags: ["Glide", "No-code", "Data Management"],
            link: "https://benjamins-app-493j.glide.page/dl/ddecb1",
        },
        {
            title: "Application Collaborative",
            description: "Solution d'équipe de classe développée pour optimiser l'expérience utilisateur et la gestion des étudiants dans une classe. Focus sur l'ergonomie et la fluidité des interactions au sein d'une équipe.",
            image: "/collaboration_task.png",
            tags: ["Glide", "Gestion de Projet", "UX/UI"],
            link: "https://app-groupe-3-s0ux.glide.page/dl/74c4fe",
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-navy-900/20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight">
                            Portfolio de <span className="text-accent italic underline decoration-white/10 decoration-8 underline-offset-10">Projets</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium">
                            Une grille de réalisations concrètes alliant analyse de données, automatisation et développement low-code.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <a href="https://github.com/Azizfassinou" target="_blank" className="px-6 py-3 bg-navy-800 text-white rounded-xl border border-white/5 hover:bg-navy-700 transition-all font-bold flex items-center gap-3">
                            GITHUB COMPLET <ArrowRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className={idx >= 3 ? "lg:col-span-1" : ""}
                        >
                            <ProjectCard {...proj} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
