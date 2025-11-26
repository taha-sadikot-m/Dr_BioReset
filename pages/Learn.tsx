import React from 'react';
import { motion } from 'framer-motion';
import { Section, FadeInView, AccordionItem, Button } from '../components/UI';
import { BLOG_CATEGORIES, FEATURED_GUIDES, FAQS } from '../constants';
import { Search, BookOpen, FileText, Download, ChevronRight, ArrowRight } from 'lucide-react';

const ResearchModuleCard: React.FC<{ title: string, icon: React.ElementType, count: number, index: number }> = ({ title, icon: Icon, count, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-6 hover:border-primary-teal/30 transition-all duration-500 shadow-sm hover:shadow-lg cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/0 to-primary-teal/0 group-hover:to-primary-teal/5 transition-all duration-500"></div>
    <div className="relative z-10 flex items-center justify-between">
       <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-500 group-hover:bg-primary-teal group-hover:text-white transition-all duration-300">
             <Icon className="w-6 h-6" />
          </div>
          <div>
             <h4 className="font-heading font-bold text-primary-navy text-lg leading-tight mb-1 group-hover:text-primary-teal transition-colors">{title}</h4>
             <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">{count} Articles</p>
          </div>
       </div>
       <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 group-hover:border-primary-teal group-hover:text-primary-teal transition-all">
          <ChevronRight className="w-4 h-4" />
       </div>
    </div>
  </motion.div>
);

const ProtocolManualCard: React.FC<{ title: string, type: string, index: number }> = ({ title, type, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    className="relative aspect-[3/4] rounded-[2rem] bg-primary-navy text-white p-8 flex flex-col justify-between overflow-hidden shadow-xl group hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
  >
     {/* Decor */}
     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
     <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-energy/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
     
     <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest border border-white/10 mb-4">
           <FileText className="w-3 h-3" /> {type}
        </div>
        <h3 className="text-2xl font-heading font-bold leading-tight">{title}</h3>
     </div>

     <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-secondary-energy hover:text-primary-navy transition-all">
           <Download className="w-5 h-5" />
        </div>
     </div>
  </motion.div>
);

const Learn: React.FC = () => {
  return (
    <div className="bg-white pt-20">
       
       {/* HERO SECTION - DIGITAL LIBRARY */}
       <Section pattern="grid" className="pt-12 md:pt-16 pb-20">
          <div className="text-center max-w-4xl mx-auto">
             <FadeInView priority={true}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-teal/20 text-primary-teal text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>Knowledge Base</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-navy mb-6">
                   BioReset <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-wellness">Academy</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans mb-10">
                   Decode the science of metabolic reversal. Access doctor-verified articles, clinical protocols, and biohacking guides.
                </p>
                
                {/* Search Bar Aesthetic */}
                <div className="max-w-xl mx-auto w-full relative group">
                   <div className="absolute inset-0 bg-gradient-to-r from-primary-teal to-secondary-wellness rounded-full opacity-20 blur-md group-hover:opacity-30 transition-opacity"></div>
                   <div className="relative bg-white rounded-full shadow-lg p-2 flex items-center">
                      <Search className="w-5 h-5 text-gray-400 ml-4" />
                      <input 
                        type="text" 
                        placeholder="Search for 'Insulin', 'Sleep', or 'PCOD'..." 
                        className="flex-grow px-4 py-2 bg-transparent text-primary-navy placeholder-gray-400 focus:outline-none focus:ring-0 font-sans"
                      />
                      <Button size="sm" className="px-6">Search</Button>
                   </div>
                </div>
             </FadeInView>
          </div>
       </Section>

       {/* RESEARCH MODULES (BLOG CATEGORIES) */}
       <Section pattern="light" className="py-20">
          <div className="container mx-auto max-w-6xl">
             <div className="flex justify-between items-end mb-12">
                <div>
                   <h2 className="text-3xl font-heading font-bold text-primary-navy mb-2">Research Modules</h2>
                   <p className="text-gray-500">Browse articles by clinical category.</p>
                </div>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLOG_CATEGORIES.map((cat, i) => (
                   <ResearchModuleCard 
                      key={cat.id} 
                      title={cat.title} 
                      icon={cat.icon} 
                      count={cat.count} 
                      index={i} 
                   />
                ))}
             </div>
          </div>
       </Section>

       {/* CLINICAL PROTOCOLS (GUIDES) */}
       <Section pattern="navy" className="py-24 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute left-1/2 top-0 w-[800px] h-[800px] bg-secondary-wellness rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <FadeInView>
                   <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Clinical Protocols</h2>
                   <p className="text-gray-300 max-w-md">Downloadable blueprints to jumpstart your biohacking journey today.</p>
                </FadeInView>
                <Button variant="elite" size="sm">View All Resources</Button>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {FEATURED_GUIDES.map((guide, i) => (
                   <ProtocolManualCard 
                      key={guide.id} 
                      title={guide.title} 
                      type={guide.type} 
                      index={i} 
                   />
                ))}
             </div>
          </div>
       </Section>

       {/* MEDICAL QUERIES (FAQ) */}
       <Section pattern="light" className="py-24">
          <div className="container mx-auto max-w-4xl">
             <div className="text-center mb-16">
                <FadeInView>
                   <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">Medical Queries</h2>
                   <p className="text-gray-600">Common questions about the BioReset protocol.</p>
                </FadeInView>
             </div>

             <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12">
                {FAQS.map((faq, i) => (
                   <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                ))}
                
                <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                   <p className="text-gray-600 mb-4">Still have questions?</p>
                   <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
                      Contact Support
                   </Button>
                </div>
             </div>
          </div>
       </Section>
    </div>
  );
};

export default Learn;