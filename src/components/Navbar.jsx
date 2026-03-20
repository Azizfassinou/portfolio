import React, { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'À propos', href: '#about' },
        { name: 'Compétences', href: '#skills' },
        { name: 'Expériences', href: '#experience' },
        { name: 'Projets', href: '#projects' },
        { name: 'Formation', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-xl font-bold tracking-tight">
                    <span className="text-accent italic">AZIZ</span> FASSINOU
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6 text-sm font-medium text-slate-400">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-accent transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                        <a href="https://www.linkedin.com/in/aziz-fassinou/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <LinkedinIcon size={20} />
                        </a>
                        <a href="https://github.com/Azizfassinou" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <GithubIcon size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-slate-300">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-navy-900 border-b border-white/5"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-4 pt-4 border-t border-white/5">
                                <a href="https://www.linkedin.com/in/aziz-fassinou/" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                                    <LinkedinIcon size={20} />
                                </a>
                                <a href="https://github.com/Azizfassinou" target="_blank" rel="noopener noreferrer" className="text-slate-400">
                                    <GithubIcon size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
