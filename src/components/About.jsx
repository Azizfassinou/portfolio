import React from 'react';
import { Database, BrainCircuit, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-navy-950/50">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-l-4 border-accent pl-6 leading-tight">
                            Profil d'Analyseur de Données <span className="text-accent underline decoration-white/20 underline-offset-8">Passionné</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-300">
                            <p>
                                Je recherche activement une alternance pour mettre mes compétences au service d'une équipe technique dynamique.
                            </p>
                            <p>
                                Ma formation m'a permis de me spécialiser dans la conception de pipelines de données, la visualisation avancée et l'intégration d'algorithmes d'IA pour optimiser les processus décisionnels.
                            </p>

                            <div className="flex items-center gap-4 bg-navy-800/80 p-5 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-sm">
                                <div className="p-3 bg-accent/20 rounded-xl">
                                    <Briefcase className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold leading-tight">Rythme d'Alternance</h4>
                                    <p className="text-sm text-slate-400">3 semaines en entreprise / 1 semaine en formation (ESGI)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
                        <motion.div whileHover={{ y: -5 }} className="bg-navy-900 p-8 rounded-3xl border border-white/5 shadow-xl hover:border-accent/40 transition-all group">
                            <Database className="text-slate-500 mb-6 group-hover:text-accent transition-colors duration-300" size={32} />
                            <h3 className="text-xl font-bold text-white mb-3">Données</h3>
                            <p className="text-sm text-slate-400 leading-relaxed italic">Architecture & Manipulation</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-navy-900 p-8 rounded-3xl border border-white/5 shadow-xl hover:border-accent/40 transition-all group">
                            <BrainCircuit className="text-slate-500 mb-6 group-hover:text-accent transition-colors duration-300" size={32} />
                            <h3 className="text-xl font-bold text-white mb-3">IA & ML</h3>
                            <p className="text-sm text-slate-400 leading-relaxed italic">Analyses Prédictives</p>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="bg-navy-900 p-8 rounded-3xl border border-white/5 shadow-xl hover:border-accent/40 transition-all group">
                            <GraduationCap className="text-slate-500 mb-6 group-hover:text-accent transition-colors duration-300" size={32} />
                            <h3 className="text-xl font-bold text-white mb-3">Bachelor</h3>
                            <p className="text-sm text-slate-400 leading-relaxed italic">ESGI Paris</p>
                        </motion.div>

                        <div className="bg-accent/10 p-8 rounded-3xl border border-accent/20 flex flex-col justify-center items-center text-center">
                            <span className="text-4xl font-bold text-accent mb-2">2027</span>
                            <span className="text-xs text-accent/60 uppercase font-bold tracking-widest">Graduation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
