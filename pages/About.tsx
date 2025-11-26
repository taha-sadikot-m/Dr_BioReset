
import React from 'react';
import { motion } from 'framer-motion';
import { Section, FadeInView, Button } from '../components/UI';
import { FOUNDER_CREDENTIALS, CELEBRITY_CLIENTS, BIORESET_METHOD_PILLARS } from '../constants';
import { Dna, Heart, ShieldCheck, Zap, Play, Users, Target, Microscope, Globe, ArrowRight, Quote, Trophy, Star, CheckCircle } from 'lucide-react';

const MethodCard: React.FC<{ icon: React.ElementType, title: string, desc: string, delay: number }> = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="group relative overflow-hidden rounded-[1.5rem] bg-white p-6 md:p-8 border border-gray-100 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(53,147,141,0.15)] transition-all duration-300"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-primary-teal/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-teal/10 transition-colors" />
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-primary-navy/5 flex items-center justify-center text-primary-navy mb-4 group-hover:bg-primary-teal group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-heading font-bold text-lg text-primary-navy mb-2">{title}</h3>
      <p className="text-gray-600 font-sans text-sm leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="bg-white pt-20">
        {/* HEADER SECTION - THE HOOK */}
        <Section pattern="light" className="pt-24 pb-12">
            <div className="text-center max-w-4xl mx-auto px-4">
                <FadeInView priority={true}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-navy/5 text-primary-navy text-xs font-bold uppercase tracking-widest mb-6">
                        <Dna className="w-4 h-4" />
                        <span>Reset. Rebuild. Rise.</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-navy mb-8 leading-tight">
                        "What if your body could be upgraded just like <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-wellness">software?</span>"
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
                        This single question led Dr. Harshal Giri to create Dr BioReset. We don't just manage health; we optimize it for peak performance and longevity.
                    </p>
                </FadeInView>
            </div>
        </Section>

        {/* FOUNDER PROFILE & CREDENTIALS */}
        <Section pattern="grid" className="py-16 md:py-20">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    
                    {/* Left: The Bio-Identity & Holographic ID */}
                    <FadeInView priority={true} className="relative lg:sticky lg:top-24">
                        <div className="flex flex-col lg:block rounded-[2rem] overflow-hidden shadow-2xl bg-primary-navy">
                            {/* Stylized Background for Image Area */}
                            <div className="relative aspect-[4/5] w-full bg-primary-navy">
                                <div className="absolute inset-0 opacity-50">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-energy rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-20"></div>
                                    <div className="grid grid-cols-6 h-full w-full opacity-10">
                                        {Array.from({length: 24}).map((_, i) => (
                                            <div key={i} className="border-r border-white/20"></div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Simulated Founder Image Container */}
                                <div className="absolute inset-0 flex items-end justify-center">
                                 <img 
        src="/images/founder_image_2.jpg" 
        alt="Dr. Harshal Giri - Founder & Chief Biohacker"
        className="w-full h-full object-cover object-top"
    />     
                                 </div>
                            </div>

                            {/* Data Overlay / Block */}
                            {/* Mobile: Relative White Block. Desktop: Absolute Overlay */}
                            <div className="relative lg:absolute bottom-0 left-0 right-0 p-0 lg:p-8 z-20 bg-white lg:bg-transparent">
                                <div className="lg:bg-white/10 lg:backdrop-blur-xl lg:border lg:border-white/20 p-6 lg:rounded-2xl lg:shadow-lg">
                                    <h3 className="text-3xl font-heading font-bold text-primary-navy lg:text-white mb-1">Dr. Harshal Giri</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                       <span className="px-2 py-1 bg-secondary-energy/10 lg:bg-secondary-energy/20 text-secondary-energy text-[10px] uppercase font-bold rounded">Biohacker</span>
                                       <span className="px-2 py-1 bg-secondary-wellness/10 lg:bg-secondary-wellness/20 text-secondary-wellness text-[10px] uppercase font-bold rounded">Exercise Scientist</span>
                                       <span className="px-2 py-1 bg-primary-navy/5 lg:bg-white/10 text-primary-navy lg:text-white text-[10px] uppercase font-bold rounded">Physician</span>
                                    </div>
                                    <p className="text-gray-600 lg:text-gray-300 text-sm italic border-l-2 border-secondary-energy pl-3">
                                      "He understands the body like a clinician, trains it like a performance coach, and optimizes it like a biohacker."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeInView>

                    {/* Right: The "Three Worlds" Narrative */}
                    <div className="space-y-12">
                        <FadeInView priority={true} delay={0.2}>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-6">
                                A Journey Built on Science.
                            </h2>
                            <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8">
                                With over 5,000+ clients and a decade of experience, Dr. Giri blends three worlds rarely found together to deliver something rare in India: <span className="font-bold text-primary-navy">Scientific precision with world-class personalization.</span>
                            </p>

                            <div className="space-y-6">
                                {FOUNDER_CREDENTIALS.map((section, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-primary-teal/30 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-full bg-primary-teal/10 flex items-center justify-center text-primary-teal">
                                                {idx === 0 ? <Microscope className="w-4 h-4"/> : idx === 1 ? <Zap className="w-4 h-4"/> : <Heart className="w-4 h-4"/>}
                                            </div>
                                            <h4 className="font-heading font-bold text-lg text-primary-navy">{section.category}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {section.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary-energy mt-1.5 flex-shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                <h4 className="font-bold text-primary-navy text-sm uppercase tracking-widest mb-3">Global Experience</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-semibold">
                                    <span>Upgrade Labs (USA)</span> • 
                                    <span>The Life Institute (Mumbai)</span> • 
                                    <span>HealthifyMe</span> • 
                                    <span>ACME Physiotherapy</span>
                                </div>
                            </div>
                        </FadeInView>
                    </div>
                </div>
            </div>
        </Section>

        {/* SOCIAL PROOF - THE "BOSS" TESTIMONIAL */}
        <Section pattern="navy" className="py-16 md:py-24 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-wellness/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-energy/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
             </div>

             <div className="container mx-auto max-w-6xl relative z-10">
                 <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                     <div className="order-2 md:order-1">
                         <FadeInView>
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6">
                                 <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                 <span>The Celebrity Standard</span>
                             </div>
                             <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 leading-tight">
                                 Why High Performers Choose Him.
                             </h2>
                             <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                 Dr. Giri is trusted by individuals who cannot afford guesswork—people whose bodies and minds are their biggest assets.
                             </p>
                             
                             <div className="grid grid-cols-2 gap-4">
                                 {CELEBRITY_CLIENTS.map((client, i) => (
                                     <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
                                         <CheckCircle className="w-4 h-4 text-secondary-energy flex-shrink-0" />
                                         <span className="text-white font-semibold text-sm">{client}</span>
                                     </div>
                                 ))}
                             </div>
                         </FadeInView>
                     </div>

                     {/* The Mobile Phone Mockup */}
                     <div className="order-1 md:order-2 flex justify-center">
                         <FadeInView delay={0.3} className="relative w-full flex justify-center">
                             <div className="w-full max-w-[280px] md:max-w-[300px] h-auto aspect-[1/2] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[8px] border-gray-800 shadow-2xl relative overflow-hidden">
                                 {/* Screen Content - Simulating the Story/Photo */}
                                 <div className="absolute inset-0 bg-gray-900 flex flex-col">
                                     {/* Status Bar */}
                                     <div className="h-10 w-full flex justify-between items-center px-6 text-white text-xs font-bold pt-2">
                                         <span>9:41</span>
                                         <div className="flex gap-1">
                                             <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                                             <div className="w-0.5 h-2.5 bg-white/30 rounded-sm"></div>
                                         </div>
                                     </div>
                                     
                                     {/* Image Simulation */}
                                     <div className="flex-grow bg-gray-800 relative">
                                         {/* Since we don't have the image, we simulate the 'Selfie' vibe */}
                                         <img
                                                src="/images/mobile_image.png"
                                                alt="Selfie Caption"
                                                className="mx-auto"
                                            />
                                                  
                                     </div>
                                 </div>
                                 
                                 {/* Notch */}
                                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                             </div>
                             
                             {/* Decorative Blob */}
                             <div className="absolute -z-10 bottom-10 -right-10 w-40 h-40 bg-secondary-wellness rounded-full blur-[60px] opacity-60"></div>
                         </FadeInView>
                     </div>
                 </div>
             </div>
        </Section>

        {/* BIORESET METHOD - THE PILLARS */}
        <Section pattern="light" className="py-16 md:py-24">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <FadeInView>
                         <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                             The BioReset Method™
                         </h2>
                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                             A unique, science-backed transformation system combining 5 key pillars.
                         </p>
                    </FadeInView>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BIORESET_METHOD_PILLARS.map((pillar, i) => (
                        <MethodCard 
                            key={i} 
                            icon={pillar.icon} 
                            title={pillar.title} 
                            desc={pillar.desc} 
                            delay={i * 0.1} 
                        />
                    ))}
                    {/* Last card spans if odd */}
                    <div className="md:col-span-2 lg:col-span-1 bg-primary-navy rounded-[1.5rem] p-8 flex flex-col justify-center items-center text-center">
                         <h3 className="text-white font-bold text-xl mb-2 font-heading">Fully Personalized</h3>
                         <p className="text-gray-300 text-sm mb-6">Every protocol is personally overseen by Dr. Giri.</p>
                         <Button variant="elite" size="sm">Start Your Reset</Button>
                    </div>
                </div>
            </div>
        </Section>

        {/* VISION */}
        <Section pattern="grid" className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
             <div className="max-w-4xl mx-auto text-center">
                 <FadeInView>
                     <Quote className="w-10 h-10 text-primary-teal/30 mx-auto mb-6" />
                     <h3 className="text-2xl md:text-4xl font-heading font-bold text-primary-navy mb-8 leading-snug">
                         "Your biology is adaptable. Your performance is programmable. My mission is to help you unlock it."
                     </h3>
                     <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">— Dr. Harshal Giri</p>
                 </FadeInView>
             </div>
        </Section>
    </div>
  );
};

export default About;
