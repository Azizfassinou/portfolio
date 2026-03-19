import React from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-navy-950/20 backdrop-blur-3xl">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tighter leading-tight uppercase">
                            ENTRONS EN <span className="text-accent italic underline decoration-white/10 decoration-8 underline-offset-10">CONTACT</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed mb-12">
                            À la recherche d'une nouvelle opportunité en <span className="text-white">Data & IA</span>. N'hésitez pas à me contacter pour discuter de vos projets.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-navy-900 rounded-2xl border border-white/5 transition-colors group-hover:border-accent group-hover:bg-accent/10">
                                    <Mail className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-1">Email Personnel</h4>
                                    <a href="mailto:azizfassinou4@gmail.com" className="text-lg font-bold text-white hover:text-accent transition-colors">
                                        azizfassinou4@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-navy-900 rounded-2xl border border-white/5 transition-colors group-hover:border-accent group-hover:bg-accent/10">
                                    <MapPin className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-1">Localisation</h4>
                                    <p className="text-lg font-bold text-white">
                                        91440, Bures-sur-Yvette, France
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 bg-navy-900/40 p-10 md:p-14 rounded-3xl border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                            <MessageSquare className="text-accent shrink-0" size={24} /> MESSAGE DIRECT
                        </h3>
                        <form className="space-y-8"
                            action="https://formspree.io/f/xnnvwlpw" method="POST">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Nom Complet</label>
                                    <input
                                        type="text"
                                        className="w-full bg-navy-950/50 border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-accent/50 focus:bg-navy-950 transition-all placeholder:text-slate-600"
                                        placeholder="John Doe"
                                        name="name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Adresse Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-navy-950/50 border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-accent/50 focus:bg-navy-950 transition-all placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-widest ml-1">Votre Message</label>
                                <textarea
                                    rows="5"
                                    className="w-full bg-navy-950/50 border border-white/5 p-4 rounded-xl text-white focus:outline-none focus:border-accent/50 focus:bg-navy-950 transition-all placeholder:text-slate-600"
                                    placeholder="En quoi puis-je vous aider ?"
                                    name="message"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto px-10 py-4 bg-accent text-navy-950 font-black rounded-xl hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20 flex items-center justify-center gap-3 uppercase tracking-[0.1em]"
                            >
                                Envoyer <Send size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
