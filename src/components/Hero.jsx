import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 px-6">
            {/* */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl"
            >
                <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20 rounded-full">
                    Disponible à partir de Septembre 2026
                </span>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight uppercase">
                    Aziz <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-10">FASSINOU</span>
                </h1>

                <h2 className="text-xl md:text-2xl font-medium text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Data Analyst | Étudiant en 3e année de Bachelor <span className="text-white">IA & Big Data</span> à l'ESGI.
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a
                        href="#projects"
                        className="px-8 py-3.5 bg-white text-navy-950 rounded-xl font-bold hover:bg-white/90 transition-all hover:-translate-y-1 duration-200"
                    >
                        Voir mes projets
                    </a>
                    <a
                        href="/CV_FASSINOU_Aziz.pdf"
                        target="_blank"
                        className="px-8 py-3.5 bg-navy-800 text-white rounded-xl font-bold hover:bg-navy-700 transition-all flex items-center gap-2 border border-white/5"
                    >
                        Télécharger mon CV <Download size={18} />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Découvrir</span>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ChevronDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
