import React from 'react';
import { GithubIcon, LinkedinIcon, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer bg-navy-950/80 border-t border-white/5 py-12 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-xl font-black text-white mb-2 uppercase tracking-tighter">
                            Aziz <span className="text-accent underline decoration-white/10 decoration-4 underline-offset-4">FASSINOU</span>
                        </h2>
                        <p className="text-sm font-medium text-slate-500 tracking-tight uppercase">
                            DATA ANALYST & IA | 2026
                        </p>
                    </div>

                    <div className="flex items-center space-x-8">
                        <a href="https://linkedin.com/in/aziz-fassinou" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <LinkedinIcon size={22} />
                        </a>
                        <a href="https://github.com/azizfassinou" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1">
                            <GithubIcon size={22} />
                        </a>
                        <button
                            onClick={scrollToTop}
                            className="p-3 bg-navy-900 border border-white/5 rounded-xl text-slate-400 hover:text-accent hover:border-accent/40 transition-all transform hover:-translate-y-1 shadow-2xl"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-bold text-slate-600 uppercase tracking-widest leading-relaxed">
                        © 2026 Aziz FASSINOU. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-8 text-[10px] font-black text-slate-700 uppercase tracking-[0.2em]">
                        <span className="hover:text-accent transition-colors cursor-crosshair">DESSINÉ POUR LA PERFORMANCE</span>
                        <span className="hover:text-accent transition-colors cursor-crosshair">CODÉ POUR L'ANALYSE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
