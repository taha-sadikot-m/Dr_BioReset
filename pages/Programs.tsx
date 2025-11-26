
import React from 'react';
import { motion } from 'framer-motion';
import { Section, FadeInView, ProgramCapsule, Button } from '../components/UI';
import { PROGRAMS, DISCOVERY_DETAILS } from '../constants';
import { Clock, CheckCircle, ClipboardList } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="bg-white pt-20">
      {/* HERO */}
      <Section pattern="light" className="pb-12 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <FadeInView priority={true}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
              Choose Your Path to Freedom from Diabetes & PCOD
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
              Whether you are just starting or looking for a complete metabolic reversal, we have a science-backed protocol for you.
            </p>
          </FadeInView>
        </div>
      </Section>

      {/* PROGRAMS GRID */}
      <Section pattern="grid" className="pt-8 pb-24">
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1️⃣ Discovery Program */}
              <div className="lg:col-span-1">
                 <div className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[0]} priority={true} />
                 </div>
              </div>
              
              {/* 2️⃣ Starter BioReset */}
              <div className="lg:col-span-1">
                 <div className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[1]} priority={true} />
                 </div>
              </div>

              {/* 3️⃣ Premium BioReset */}
              <div className="lg:col-span-1">
                 <div className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[2]} priority={true} />
                 </div>
              </div>

              {/* 5️⃣ Anti-Aging Elite (Moved to fit grid flow) */}
              <div className="lg:col-span-1">
                 <div className="w-full h-full">
                   <ProgramCapsule {...PROGRAMS[4]} priority={true} />
                 </div>
              </div>

              {/* 4️⃣ Reversal Protocol - Spanning */}
              <div className="md:col-span-2 lg:col-span-4 mt-6">
                 <div>
                    <ProgramCapsule {...PROGRAMS[3]} />
                 </div>
              </div>
          </div>
        </div>
      </Section>

      {/* DISCOVERY DETAILS - SPECIAL FEATURE */}
      <Section pattern="light" className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
           <FadeInView>
             <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                   <span className="bg-primary-teal/10 text-primary-teal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                     Program Deep Dive
                   </span>
                   <h2 className="text-3xl font-heading font-bold text-primary-navy mb-6">
                     {DISCOVERY_DETAILS.title}
                   </h2>
                   
                   <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary-teal">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">Duration</p>
                        <p className="text-primary-navy font-semibold">{DISCOVERY_DETAILS.duration}</p>
                      </div>
                   </div>

                   <h4 className="font-bold text-primary-navy mb-4 flex items-center gap-2">
                     <ClipboardList className="w-5 h-5 text-primary-teal" />
                     What You Get:
                   </h4>
                   <ul className="space-y-4">
                      {DISCOVERY_DETAILS.whatYouGet.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                           <CheckCircle className="w-5 h-5 text-secondary-energy flex-shrink-0 mt-0.5" />
                           <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                   </ul>
                   
                   <div className="mt-8 pt-8 border-t border-gray-100">
                      <Button className="w-full md:w-auto">
                        Book Your ₹499 Discovery Call
                      </Button>
                   </div>
                </div>
                
                <div className="flex-1 w-full">
                   <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-primary-navy text-white p-12 flex flex-col justify-between shadow-2xl">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-energy/20 blur-[80px] rounded-full" />
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-wellness/20 blur-[80px] rounded-full" />
                      
                      <div className="relative z-10">
                        <h3 className="text-2xl font-heading font-bold mb-2">Ready to reverse?</h3>
                        <p className="text-gray-300">Your journey starts with understanding your bio-data.</p>
                      </div>

                      <div className="relative z-10 grid grid-cols-2 gap-4">
                         <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold mb-1">15</div>
                            <div className="text-[10px] uppercase tracking-widest opacity-70">Minutes</div>
                         </div>
                         <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                            <div className="text-2xl font-bold mb-1">100%</div>
                            <div className="text-[10px] uppercase tracking-widest opacity-70">Personalized</div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </FadeInView>
        </div>
      </Section>
    </div>
  );
};

export default Programs;
