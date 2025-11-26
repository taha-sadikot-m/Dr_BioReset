
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Activity, Heart, Brain, ShieldCheck, 
  Utensils, Zap, Play, Star, Check, Microscope, AlertCircle,
  FileText, Thermometer, ClipboardCheck, Dna, Pill, Smile, User, Sun, ChevronRight, CheckCircle, Apple
} from 'lucide-react';
import { Button, Section, FadeInView, ProblemCapsule, ProgramCapsule, BioMetricResultCard } from '../components/UI';
import { PROGRAMS, TESTIMONIALS, HERO_CONTENT, TRUST_METRICS, SOLUTION_STEPS, TARGET_AUDIENCE } from '../constants';

// --- Hero DNA Visuals ---
const DNARow: React.FC<{ index: number }> = ({ index }) => {
  const duration = 5; 
  const delay = index * 0.2; 
  const width = 140; 

  return (
    <div className="relative flex items-center justify-center w-[300px] h-2">
       {/* Rung */}
       <motion.div
          animate={{
            width: [width, 0, width],
            opacity: [0.3, 0.1, 0.3],
            height: ["1px", "2px", "1px"]
          }}
          transition={{
             duration: duration / 2,
             repeat: Infinity,
             ease: "easeInOut",
             delay: -delay
          }}
          className="absolute bg-gradient-to-r from-primary-teal to-secondary-wellness"
       />

       {/* Strand A */}
       <motion.div
         animate={{
           x: [-width/2, width/2, -width/2],
           scale: [0.8, 1.3, 0.8],
           opacity: [0.6, 1, 0.6],
           zIndex: [0, 20, 0]
         }}
         transition={{
           duration,
           repeat: Infinity,
           ease: "easeInOut",
           delay: -delay
         }}
         className="absolute w-4 h-4 rounded-full bg-[#1ABC9C] shadow-md border border-white"
       />

       {/* Strand B */}
       <motion.div
         animate={{
           x: [width/2, -width/2, width/2],
           scale: [1.3, 0.8, 1.3],
           opacity: [1, 0.6, 1],
           zIndex: [20, 0, 20]
         }}
         transition={{
           duration,
           repeat: Infinity,
           ease: "easeInOut",
           delay: -delay
         }}
         className="absolute w-4 h-4 rounded-full bg-[#3498DB] shadow-md border border-white"
       />
    </div>
  )
};

const SlantedDNAHelix = () => {
  const rows = 35; 
  
  return (
    <div className="relative h-[800px] w-full flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[700px] bg-gradient-to-b from-secondary-energy/5 to-secondary-wellness/5 blur-[80px] rotate-[-25deg] rounded-full" />
      </div>
      <div className="relative flex flex-col items-center gap-5 transform -rotate-[25deg] scale-110 origin-center z-10">
         {Array.from({ length: rows }).map((_, i) => (
            <DNARow key={i} index={i} />
         ))}
      </div>
    </div>
  );
};

const BioDashboardCard = ({ label, value, trend, delay, className }: { label: string, value: string, trend: 'up' | 'down' | 'neutral', delay: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.8, type: "spring" }}
    className={`absolute bg-white/90 backdrop-blur-lg border border-gray-100 p-4 rounded-xl flex flex-col gap-1 min-w-[150px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${className} z-20`}
  >
    <div className={`absolute w-2 h-2 rounded-full -left-1 top-6 ${trend === 'down' ? 'bg-secondary-energy' : 'bg-secondary-wellness'}`}></div>
    <div className="flex items-center justify-between mb-1">
       <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{label}</p>
    </div>
    <p className="text-primary-navy font-heading font-bold text-2xl tracking-tight">{value}</p>
    <div className="flex items-center gap-2 mt-1">
        <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${trend === 'down' ? 'bg-secondary-energy/10 text-secondary-energy' : 'bg-secondary-wellness/10 text-secondary-wellness'}`}>
            {trend === 'down' ? '▼' : '▲'} {trend === 'down' ? 'Optimized' : 'Increased'}
        </span>
    </div>
  </motion.div>
);

const TrustMetric: React.FC<{ label: string, value: string, sub: string }> = ({ label, value, sub }) => (
  <div className="text-center px-4 py-6 bg-white flex flex-col items-center justify-center h-full">
    <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      viewport={{ once: true }}
      className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-2"
    >
      {value}
    </motion.div>
    <div className="text-primary-teal font-semibold text-xs md:text-sm uppercase tracking-wider mb-1">{label}</div>
    <div className="text-gray-400 text-[10px] md:text-xs">{sub}</div>
  </div>
);

// --- SCIENCE FEATURE CARD ---
const ScienceCard: React.FC<{ 
  icon: React.ElementType, 
  title: string, 
  desc: string, 
  theme: 'dark' | 'light' 
}> = ({ icon: Icon, title, desc, theme }) => (
  <motion.div 
    whileHover={{ x: theme === 'dark' ? 10 : -10 }}
    className={`flex items-center gap-5 p-4 rounded-2xl transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm' 
        : 'bg-white border border-gray-100 hover:shadow-lg shadow-sm'
    }`}
  >
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-inner ${
      theme === 'dark' 
        ? 'bg-secondary-wellness/20 text-secondary-wellness' 
        : 'bg-primary-teal/10 text-primary-teal'
    }`}>
      <Icon className="w-7 h-7" />
    </div>
    <div>
      <h4 className={`font-bold text-lg mb-0.5 font-heading ${theme === 'dark' ? 'text-white' : 'text-primary-navy'}`}>
        {title}
      </h4>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        {desc}
      </p>
    </div>
  </motion.div>
);

// --- PROBLEM SECTION: CAPSULE LAYOUT ---
const OrbitingCoreRefined = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto min-h-[600px] flex flex-col items-center justify-center py-12">
      
      {/* Mobile Vertical Timeline */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-dashed border-l-2 border-primary-navy/10 border-dashed lg:hidden h-full z-0"></div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center relative z-10">
        
        {/* Left Column (Cards connect to Right) */}
        <div className="space-y-16 order-2 lg:order-1">
          <ProblemCapsule 
            icon={Pill} 
            title="Diabetes medication for life?" 
            desc="Trapped in a cycle of increasing dosage without addressing the underlying insulin resistance." 
            delay={0.2}
            quadrant={2} // Top Left Card (Line angles down-right to center)
          />
          <ProblemCapsule 
            icon={Utensils} 
            title="Tried diets that don't work?" 
            desc="Frustrated by generic keto or fasting advice that ignores your unique microbiome." 
            delay={0.4}
            quadrant={3} // Bottom Left Card (Line angles up-right to center)
          />
        </div>

        {/* Center Column (Core) */}
        <div className="order-1 lg:order-2 flex justify-center my-8 lg:my-0">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-red-500/5 animate-ping duration-[3s]"></div>
            <div className="absolute inset-8 rounded-full bg-red-500/10 animate-pulse duration-[2s]"></div>
            <div className="absolute inset-0 border border-red-100 rounded-full"></div>
            <div className="absolute inset-12 border border-red-200 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
            
            <div className="relative z-10 bg-white border-4 border-red-50 shadow-[0_0_40px_rgba(239,68,68,0.15)] w-full h-full rounded-full flex flex-col items-center justify-center text-center p-6">
               <AlertCircle className="w-12 h-12 text-red-500 mb-2" />
               <h3 className="font-heading font-bold text-xl text-primary-navy">System<br/>Imbalance</h3>
               <p className="text-xs text-red-500 font-bold uppercase tracking-widest mt-1">Root Cause</p>
            </div>
          </div>
        </div>

        {/* Right Column (Cards connect to Left) */}
        <div className="space-y-16 order-3">
          <ProblemCapsule 
            icon={Activity} 
            title="PCOD causing weight gain?" 
            desc="Acne, mood swings, and irregular periods aren't just symptoms—they are metabolic distress signals." 
            delay={0.6}
            quadrant={1} // Top Right Card (Line angles down-left to center)
          />
          <ProblemCapsule 
            icon={Brain} 
            title="Confusing health advice?" 
            desc="Overwhelmed by contradictory information? You need a science-backed roadmap, not guesses." 
            delay={0.8}
            quadrant={4} // Bottom Right Card (Line angles up-left to center)
          />
        </div>
      </div>
    </div>
  );
};

// --- PROGRAMS SECTION: CAPSULE GRID ---
const ProgramGridSystem = () => {
    return (
        <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
             {/* Swipe Indicator (Mobile Only) */}
            <div className="md:hidden flex justify-center gap-2 mt-2 mb-6 text-xs text-gray-400 font-bold uppercase tracking-widest animate-pulse">
               <ArrowRight className="w-4 h-4" /> Swipe to Explore
            </div>

            {/* Carousel on Mobile, Grid on Desktop */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 no-scrollbar px-4 md:px-0 -mx-4 md:mx-0">
                
                {/* Discovery */}
                <div className="lg:col-span-1 min-w-[85vw] md:min-w-0 snap-center">
                   <FadeInView delay={0.1} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[0]} />
                   </FadeInView>
                </div>
                
                {/* Starter */}
                <div className="lg:col-span-1 min-w-[85vw] md:min-w-0 snap-center">
                   <FadeInView delay={0.2} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[1]} />
                   </FadeInView>
                </div>

                {/* Premium */}
                <div className="lg:col-span-1 min-w-[85vw] md:min-w-0 snap-center">
                   <FadeInView delay={0.3} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[2]} />
                   </FadeInView>
                </div>

                {/* Elite - The Dark Capsule */}
                <div className="lg:col-span-1 min-w-[85vw] md:min-w-0 snap-center">
                   <FadeInView delay={0.4} className="w-full h-full">
                     <ProgramCapsule {...PROGRAMS[4]} />
                   </FadeInView>
                </div>

                {/* Reversal Protocol - Spans 4 columns */}
                <div className="md:col-span-2 lg:col-span-4 mt-6 min-w-[85vw] md:min-w-0 snap-center">
                   <FadeInView delay={0.5}>
                      <ProgramCapsule {...PROGRAMS[3]} />
                   </FadeInView>
                </div>
            </div>
        </div>
    );
};

// --- Main Page ---

const Home: React.FC = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="overflow-x-hidden bg-white font-sans selection:bg-primary-teal/20 selection:text-primary-navy">
      
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(53,147,141,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(53,147,141,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full bg-primary-teal/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary-wellness/5 blur-[80px]" />

        {/* MOBILE HERO BACKGROUND: DNA HELIX */}
        <div className="absolute inset-0 lg:hidden flex items-center justify-center z-0 pointer-events-none overflow-hidden opacity-70">
             <div className="scale-[0.6] origin-center blur-[0.5px]">
                <SlantedDNAHelix />
             </div>
             {/* Blueness Overlay - Reduced Opacity for better DNA visibility */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-secondary-wellness/10 to-white/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center mt-16 md:mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl relative z-20"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 group cursor-pointer hover:border-primary-teal/30 transition-all">
              <div className="h-2 w-2 rounded-full bg-primary-teal animate-pulse"></div>
              <span className="text-primary-navy text-xs font-bold tracking-[0.1em] uppercase font-heading">Clinical Protocol Active</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-navy leading-[1.1] mb-6 tracking-tight">
              {HERO_CONTENT.headline}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed font-normal font-sans">
              {HERO_CONTENT.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="text-lg px-8 shadow-lg shadow-primary-teal/20">
                {HERO_CONTENT.ctaPrimary}
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-600 hover:text-primary-navy hover:border-primary-navy">
                 {HERO_CONTENT.ctaSecondary}
              </Button>
            </div>

           
          </motion.div>

          <motion.div 
            style={{ y }}
            className="relative hidden lg:flex items-center justify-center h-[800px] w-full"
          >
             <SlantedDNAHelix />
             <BioDashboardCard label="Metabolic Score" value="98/100" trend="up" delay={1.2} className="top-[20%] right-[15%]" />
             <BioDashboardCard label="Insulin Sens." value="+42%" trend="up" delay={1.5} className="top-[50%] left-[10%]" />
             <BioDashboardCard label="Bio Age" value="-4.2 Yrs" trend="down" delay={1.8} className="bottom-[25%] right-[20%]" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: TRUST BAR - Bento Lite */}
      <div className="bg-gray-100 border-y border-gray-100 z-20 relative py-0">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border-x border-gray-100">
          {TRUST_METRICS.map((m, i) => (
             <TrustMetric key={i} label={m.label} value={m.value} sub={m.sub} />
          ))}
        </div>
      </div>

      {/* SECTION 2: THE PROBLEM (Orbiting Core) */}
      <Section pattern="grid" className="bg-[#F9FAFB] min-h-[800px] flex items-center">
        <div className="w-full">
           <div className="text-center max-w-3xl mx-auto mb-16">
             <FadeInView>
               <span className="text-red-500 font-heading font-bold tracking-widest uppercase text-xs mb-2 block">Symptoms vs Root Cause</span>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy">Tired of Managing Symptoms Instead of Fixing the Root Cause?</h2>
               <p className="text-gray-600 mt-4 font-sans">You're not broken. Your body just needs the right signals to heal.</p>
             </FadeInView>
           </div>
           <OrbitingCoreRefined />
        </div>
      </Section>

      {/* SECTION 3: THE SOLUTION (BioReset System) */}
      <Section pattern="light" className="py-24">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-20">
              <FadeInView>
                 <span className="text-primary-teal font-heading font-bold tracking-widest uppercase text-xs mb-2 block">The BioReset System</span>
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy">Introducing Your Complete Reversal Roadmap</h2>
              </FadeInView>
           </div>
           
           <div className="relative grid md:grid-cols-3 gap-12">
              {/* Connecting Line (Desktop) */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 hidden md:block -z-10"></div>
              
              {SOLUTION_STEPS.map((step, i) => (
                 <FadeInView key={step.id} delay={i * 0.2}>
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                       <div className="w-16 h-16 rounded-2xl bg-primary-teal/10 flex items-center justify-center text-primary-teal mb-6 mx-auto group-hover:bg-primary-teal group-hover:text-white transition-colors">
                          <step.icon className="w-8 h-8" />
                       </div>
                       <div className="absolute top-0 right-0 bg-gray-50 px-4 py-2 rounded-bl-2xl rounded-tr-[2rem] text-sm font-bold text-gray-400">
                          0{step.id}
                       </div>
                       <h3 className="text-xl font-heading font-bold text-primary-navy mb-3 text-center">{step.title}</h3>
                       <p className="text-gray-600 text-center text-sm leading-relaxed">{step.description}</p>
                    </div>
                 </FadeInView>
              ))}
           </div>
           
           <div className="mt-16 text-center">
              <Button variant="outline" icon={<ChevronRight className="w-4 h-4" />}>
                 See How It Works
              </Button>
           </div>
        </div>
      </Section>

      {/* SECTION 4: WHO IT'S FOR */}
      <Section pattern="grid" className="py-24 bg-gray-50">
         <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <FadeInView>
                  <span className="text-secondary-wellness font-heading font-bold tracking-widest uppercase text-xs mb-2 block">Patient Profile</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-8">Is BioReset Right for You?</h2>
                  
                  <div className="space-y-4">
                     {TARGET_AUDIENCE.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                           <div className="w-6 h-6 rounded-full bg-secondary-wellness/20 flex items-center justify-center text-secondary-wellness flex-shrink-0">
                              <Check className="w-3 h-3" strokeWidth={3} />
                           </div>
                           <p className="text-primary-navy font-semibold text-sm">{item.text}</p>
                        </div>
                     ))}
                  </div>

                  <div className="mt-10">
                     <Button variant="primary">Take the Reversal Quiz</Button>
                  </div>
               </FadeInView>

               <FadeInView delay={0.2}>
                  <div className="relative aspect-square">
                     <div className="absolute inset-0 bg-primary-navy rounded-[3rem] rotate-3 opacity-10"></div>
                     <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-8">
                         <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
                             <div className="bg-gray-100 rounded-2xl w-full h-full flex items-center justify-center text-gray-400"><User className="w-12 h-12" /></div>
                             <div className="bg-gray-200 rounded-2xl w-full h-full flex items-center justify-center text-gray-400"><Smile className="w-12 h-12" /></div>
                             <div className="bg-gray-200 rounded-2xl w-full h-full flex items-center justify-center text-gray-400"><Heart className="w-12 h-12" /></div>
                             <div className="bg-gray-100 rounded-2xl w-full h-full flex items-center justify-center text-gray-400"><User className="w-12 h-12" /></div>
                         </div>
                         <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent flex items-end p-10">
                            <p className="text-white text-lg font-bold">"I finally feel like myself again."</p>
                         </div>
                     </div>
                  </div>
               </FadeInView>
            </div>
         </div>
      </Section>

      {/* SECTION 5: RESULTS (Moved here) */}
      <Section pattern="light" className="bg-white">
         <div className="container mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">Real People. Real Results. Real Science.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-sans">Evidence-based results from our patient cohort.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
               {TESTIMONIALS.map((t, i) => (
                 <BioMetricResultCard 
                    key={t.id} 
                    quote={t.quote}
                    author={t.author}
                    metric={t.metric}
                    delay={i * 0.1}
                 />
               ))}
            </div>
         </div>
      </Section>

      {/* SECTION 6: OUR SCIENCE (Enhanced Split Layout) */}
      <section className="py-0 flex flex-col lg:flex-row min-h-[700px] relative">
         {/* Connector Badge (Mobile Only) */}
         <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 z-30">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-primary-teal/20">
                 <img src="images/DNA.png" alt="DNA Icon" className="absolute inset-0 w-full h-full object-contain rounded-full rotate-45" />
             </div>
         </div>

         {/* Left Side: Labs (Dark) */}
         <div className="flex-1 bg-primary-navy relative overflow-hidden p-6 md:p-12 lg:p-24 flex flex-col justify-center">
            {/* Background FX */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-secondary-wellness/20 to-transparent rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute grid grid-cols-6 gap-4 opacity-5 w-full h-full top-0 left-0 pointer-events-none">
                 {Array.from({length:20}).map((_,i) => <div key={i} className="border-r border-white h-full"></div>)}
            </div>

            <FadeInView className="relative z-10 max-w-lg mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-secondary-wellness text-xs font-bold uppercase tracking-widest mb-6 border border-white/5">
                    <Microscope className="w-4 h-4" />
                    <span>Clinical Precision</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-12 leading-tight">Backed by Science.</h3>
                
                <div className="space-y-6">
                     <ScienceCard 
                        icon={Microscope} 
                        title="Advanced Metabolic Labs" 
                        desc="Comprehensive biomarker analysis." 
                        theme="dark"
                     />
                     <ScienceCard 
                        icon={Activity} 
                        title="Continuous Glucose Monitoring" 
                        desc="Real-time blood sugar data streams." 
                        theme="dark"
                     />
                     <ScienceCard 
                        icon={Pill} 
                        title="Data-Driven Supplementation" 
                        desc="Targeted micronutrient protocols." 
                        theme="dark"
                     />
                </div>
            </FadeInView>
         </div>
         
         {/* Right Side: Nature (Light) */}
         <div className="flex-1 bg-[#F5F9F9] relative overflow-hidden p-6 md:p-12 lg:p-24 flex flex-col justify-center">
             {/* Background FX */}
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-secondary-energy/20 to-transparent rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
             
             <FadeInView className="relative z-10 max-w-lg mx-auto lg:ml-auto lg:mr-0 text-left lg:text-right" delay={0.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-teal/10 text-primary-teal text-xs font-bold uppercase tracking-widest mb-6 lg:ml-auto">
                    <Sun className="w-4 h-4" />
                    <span>Holistic Healing</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-12 leading-tight">Powered by Nature.</h3>
                
                <div className="space-y-6">
                     <ScienceCard 
                        icon={Sun} 
                        title="Circadian Rhythm Optimization" 
                        desc="Syncing biology with natural cycles." 
                        theme="light"
                     />
                     <ScienceCard 
                        icon={Apple} 
                        title="Gut-Healing Nutrition" 
                        desc="Food as molecular information." 
                        theme="light"
                     />
                     <ScienceCard 
                        icon={Heart} 
                        title="Restorative Movement & Yoga" 
                        desc="Stress reduction & somatic healing." 
                        theme="light"
                     />
                </div>
             </FadeInView>
         </div>
         
         {/* Center Badge - Desktop Only */}
         <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.1)] z-20 border-4 border-gray-50">
            <img src="images/DNA.png" alt="DNA Icon" className="absolute inset-0 w-full h-full object-contain rounded-full rotate-45" />
         </div>
      </section>

      {/* SECTION 7: PROGRAMS */}
      <Section pattern="light" id="programs" className="py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInView>
            <span className="text-primary-teal font-heading font-bold tracking-widest uppercase text-xs mb-2 block">BioReset System</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">Choose Your Path to Freedom</h2>
            <p className="text-gray-600 font-sans">Data-driven programs designed to reverse, rebalance, and recode your biology.</p>
          </FadeInView>
        </div>
        <ProgramGridSystem />
      </Section>

      {/* SECTION 8: FINAL CTA */}
      <Section pattern="light" className="text-center py-32 relative border-t border-gray-100">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="max-w-4xl mx-auto relative z-10">
           <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
           >
             <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-primary-navy">
               Join 5000+ Indians Reversing Their Health
             </h2>
             <div className="flex items-center justify-center gap-4 mb-10 text-primary-navy/70 text-sm font-bold uppercase tracking-widest">
                <span>Media Featured</span> • <span>Award Winning</span> • <span>Certified Experts</span>
             </div>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button variant="elite" size="lg" className="px-12 py-5 text-xl shadow-xl shadow-secondary-energy/20">
                   Take Your Free Health Reversal Quiz
                </Button>
             </div>
           </motion.div>
         </div>
      </Section>
    </div>
  );
};

export default Home;
