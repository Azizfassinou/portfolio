import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Database, BarChart3, Settings, Filter, CheckCircle2, Layout, Zap, Search, PieChart, Activity, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const VnfProjectDetail = () => {
    const workflowSteps = [
        {
            icon: <Search className="text-accent" size={32} />,
            title: "1. Compréhension des données",
            description: "Analyse approfondie des fichiers sources et identification des champs clés. Étude des niveaux de gravité pour une segmentation pertinente des données de maintenance."
        },
        {
            icon: <Filter className="text-accent" size={32} />,
            title: "2. Nettoyage & Préparation",
            description: "Utilisation de Power Query pour la suppression des doublons et l'harmonisation des formats. Création de nouvelles colonnes et structuration du modèle de données final."
        },
        {
            icon: <Database className="text-accent" size={32} />,
            title: "3. Modélisation",
            description: "Établissement des relations entre les tables et mise en place de mesures DAX complexes. Construction des indicateurs clés (KPI) indispensables au pilotage."
        },
        {
            icon: <Layout className="text-accent" size={32} />,
            title: "4. Conception UX",
            description: "Organisation thématique et hiérarchisation visuelle pour une lecture fluide. Intégration de filtres dynamiques et segmentation par équipement pour une analyse granulaire."
        },
        {
            icon: <RefreshCw className="text-accent" size={32} />,
            title: "5. Automatisation",
            description: "Paramétrage de l'actualisation automatique des données et sécurisation des connexions aux sources pour un dashboard toujours à jour."
        }
    ];

    const worksRealized = [
        "KPI : NOMBRE TOTAL DE DÉSORDRES",
        "RÉPARTITION PAR ÉQUIPEMENT",
        "RÉPARTITION PAR NIVEAU DE GRAVITÉ",
        "ANALYSE PAR SPÉCIALITÉ",
        "VISUALISATIONS INTERACTIVES",
        "FILTRES DYNAMIQUES"
    ];

    return (
        <div className="min-h-screen bg-navy-950 text-slate-100 pb-20">
            {/* Header / Nav */}
            <nav className="fixed top-0 w-full z-50 bg-navy-950/80 backdrop-blur-xl border-b border-white/5">
                <div className="container mx-auto px-6 h-20 flex items-center">
                    <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold uppercase tracking-widest text-xs">Retour au Portfolio</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-40 pb-20 px-6">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-accent/20 mb-8 inline-block">
                            Business Intelligence
                        </span>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight text-balance">
                            Analyses des données de <span className="text-accent">Maintenance</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-12">
                            Optimisation du pilotage de la maintenance pour les Voies Navigables de France (VNF) à travers une stack Data moderne et une visualisation stratégique.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {["PowerBI", "SQL", "GMAO", "DAX", "Data Analysis"].map(tag => (
                                <span key={tag} className="px-5 py-2 bg-navy-900 border border-white/5 rounded-xl text-sm font-medium text-slate-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Workflow Section */}
            <section className="py-20 px-6 bg-navy-900/30">
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Méthodologie adoptée</h2>
                        <p className="text-slate-400 mb-6">Une structure rigoureuse en 5 étapes clés pour garantir la fiabilité des analyses.</p>
                        <div className="h-1.5 w-20 bg-accent rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workflowSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`p-8 bg-navy-900/50 border border-white/5 rounded-3xl hover:border-accent/30 transition-all group h-full ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            >
                                <div className="mb-6 p-4 bg-navy-950 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-lg">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Works Done Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-bold text-white mb-8">Travaux réalisés</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {worksRealized.map((work, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-navy-950/50 border border-white/5 rounded-2xl group hover:border-accent/20 transition-all"
                                    >
                                        <div className="h-2 w-2 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                                        <span className="text-xs font-black tracking-widest text-slate-300 uppercase">{work}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-6">
                            <div className="p-8 bg-navy-900/50 border border-white/5 rounded-[40px] hover:border-accent/30 transition-all relative group">
                                <PieChart className="text-accent mb-6" size={40} />
                                <h3 className="text-xl font-bold text-white mb-4">Dashboard Analytique</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    La création d'un dashboard complet comprenant des visualisations interactives pour un pilotage précis.
                                </p>
                                <div className="absolute top-8 right-8 text-accent/20 group-hover:text-accent/40 transition-colors">
                                    <Activity size={80} strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details & Impact Section */}
            <section className="py-20 px-6 bg-navy-950">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <CheckCircle2 className="text-accent" /> Objectifs Stratégiques
                                </h3>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></div>
                                        <span>Réduction des temps d'indisponibilité des ouvrages (écluses, barrages).</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></div>
                                        <span>Optimisation de l'allocation des ressources techniques sur le territoire.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></div>
                                        <span>Pilotage budgétaire de la maintenance préventive vs curative.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-accent/20 to-navy-900 border border-accent/20 rounded-3xl relative overflow-hidden group">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-white mb-4">Impact du Projet</h3>
                                    <p className="text-slate-300 italic text-lg leading-relaxed">
                                        "La centralisation des données de maintenance a permis une vision à 360° du patrimoine infrastructurel, transformant des données brutes en leviers de décision pour les ingénieurs et directeurs de VNF."
                                    </p>
                                </div>
                                <div className="absolute bottom-0 right-0 opacity-10 group-hover:scale-110 transition-transform">
                                    <BarChart3 size={150} />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="p-8 bg-navy-900/50 border border-white/5 rounded-3xl">
                                <h4 className="text-sm font-bold text-accent uppercase tracking-widest mb-6">Fiche Technique</h4>
                                <div className="space-y-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Outil Principal</span>
                                        <span className="text-white font-bold">PowerBI Desktop</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Storage & Script</span>
                                        <span className="text-white font-bold">Azure SQL / DAX</span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Source de données</span>
                                        <span className="text-white font-bold">GMAO Maintenance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Preview */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Aperçu du Dashboard</h2>
                        <div className="h-1 w-12 bg-accent/40 mx-auto rounded-full" />
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-navy-900/40 p-2"
                    >
                        <img
                            src="/vnf_dashboard.png"
                            alt="Preview of the PowerBI Dashboard"
                            className="w-full h-auto rounded-2xl brightness-90 hover:brightness-100 transition-all cursor-pointer"
                        />
                    </motion.div>
                    <p className="text-slate-500 mt-8 text-sm font-medium uppercase tracking-widest">
                        Interface de pilotage stratégique • VNF 2026
                    </p>
                </div>
            </section>
        </div>
    );
};

export default VnfProjectDetail;
