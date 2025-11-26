
import React, { useState } from 'react';
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingDown, Check, Star, ArrowRight, ShieldCheck, Activity, Zap, Clock, Users, ChevronDown, FileText, Download, Calendar, MapPin, Quote } from 'lucide-react';

// --- Buttons ---
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'elite' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "font-heading font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-primary-teal text-white hover:bg-primary-muted shadow-[0_4px_14px_0_rgba(53,147,141,0.3)] hover:shadow-[0_6px_20px_rgba(53,147,141,0.2)]",
    secondary: "bg-primary-navy text-white hover:bg-[#152C4E] shadow-lg",
    outline: "border border-primary-teal text-primary-teal hover:bg-primary-teal/5 bg-white/50 backdrop-blur-sm",
    elite: "bg-gradient-to-r from-secondary-energy to-secondary-wellness text-white shadow-[0_4px_14px_0_rgba(26,188,156,0.4)] hover:shadow-[0_6px_20px_rgba(52,152,219,0.3)] border border-white/20",
    ghost: "bg-transparent text-neutral-charcoal hover:text-primary-teal hover:bg-primary-teal/5"
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
      {variant === 'elite' && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
      )}
    </motion.button>
  );
};

// --- Layout Wrappers ---
interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  pattern?: 'light' | 'dark' | 'navy' | 'gradient' | 'grid';
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, pattern = 'light' }) => {
  const backgrounds = {
    light: "bg-white text-primary-navy",
    dark: "bg-neutral-light text-primary-navy", 
    navy: "bg-primary-navy text-white", 
    gradient: "bg-gradient-to-b from-white to-neutral-light text-primary-navy",
    grid: "bg-neutral-light bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
  };

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${backgrounds[pattern]} ${className}`}>
      {pattern === 'navy' && (
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      )}
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
};

// --- Animations ---
export const FadeInView: React.FC<{ children: React.ReactNode, delay?: number, className?: string, priority?: boolean }> = ({ children, delay = 0, className = "", priority = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={priority ? undefined : { opacity: 1, y: 0 }}
      animate={priority ? { opacity: 1, y: 0 } : undefined}
      viewport={priority ? undefined : { once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedCounter: React.FC<{ value: number, suffix?: string }> = ({ value, suffix = '' }) => {
  return (
    <span className="flex">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {value}
      </motion.span>
      {suffix}
    </span>
  );
}

// --- Typography ---
export const GradientText: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-primary-teal via-secondary-energy to-secondary-wellness ${className}`}>
    {children}
  </span>
);

// --- SHARED CAPSULE STYLES ---
const capsuleBaseClass = `
  relative rounded-[2rem] border transition-all duration-500 group overflow-hidden
`;

// --- PROBLEM CAPSULE ---
export const ProblemCapsule: React.FC<{ 
  icon: React.ElementType, 
  title: string, 
  desc: string, 
  quadrant?: 1 | 2 | 3 | 4, 
  delay?: number
}> = ({ icon: Icon, title, desc, quadrant, delay = 0 }) => {
  
  const renderConnector = () => {
    if (!quadrant) return null;

    const beamStyle = "absolute top-1/2 w-24 h-[2px] bg-gradient-to-r from-red-200 to-transparent hidden lg:block z-0 pointer-events-none";
    const dotStyle = "absolute w-2 h-2 rounded-full bg-red-400 shadow-sm top-1/2 -translate-y-1/2";

    switch (quadrant) {
      case 1: return (
          <div className={`${beamStyle} right-full origin-right rotate-[20deg]`}>
             <div className={`${dotStyle} left-0`} /> 
          </div>
        );
      case 2: return (
          <div className={`${beamStyle} left-full origin-left rotate-[20deg]`}>
             <div className={`${dotStyle} right-0`} />
          </div>
        );
      case 3: return (
          <div className={`${beamStyle} left-full origin-left rotate-[-20deg]`}>
             <div className={`${dotStyle} right-0`} />
          </div>
        );
      case 4: return (
          <div className={`${beamStyle} right-full origin-right rotate-[-20deg]`}>
             <div className={`${dotStyle} left-0`} />
          </div>
        );
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`${capsuleBaseClass} bg-white border-gray-100 p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(239,68,68,0.1)] z-10 flex flex-col relative`}
    >
       {renderConnector()}
       <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
       <div className="relative z-10 flex flex-col">
          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-primary-navy mb-2 leading-tight">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed font-sans">{desc}</p>
       </div>
    </motion.div>
  );
};


// --- PROGRAM CAPSULE ---
export const ProgramCapsule: React.FC<{ 
  title: string, 
  price: string, 
  description?: string, 
  bestFor?: string,
  duration?: string,
  features: string[], 
  cta: string, 
  isElite?: boolean, 
  isPopular?: boolean,
  priority?: boolean
}> = ({ title, price, description, bestFor, duration, features, cta, isElite, isPopular, priority = false }) => {
  
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={priority ? undefined : { opacity: 1, scale: 1 }}
      animate={priority ? { opacity: 1, scale: 1 } : undefined}
      viewport={priority ? undefined : { once: true }}
      transition={{ duration: 0.5 }}
      className={`${capsuleBaseClass} flex flex-col p-6 md:p-8 w-full h-full
        ${isElite 
          ? 'bg-primary-navy border-white/10 shadow-[0_20px_50px_-12px_rgba(10,29,55,0.5)]' 
          : 'bg-white border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(53,147,141,0.15)]'
        }
      `}
    >
      <div className={`absolute top-[-20%] right-[-20%] w-64 h-64 rounded-full blur-[50px] transition-colors duration-500 pointer-events-none
         ${isElite ? 'bg-secondary-energy/10' : 'bg-primary-teal/5 group-hover:bg-primary-teal/10'}
      `} />

      {/* Header */}
      <div className="relative z-10 mb-6">
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className={`font-heading font-bold text-lg uppercase tracking-wider ${isElite ? 'text-white' : 'text-primary-navy'}`}>
            {title}
          </h3>
           {isElite && <Star className="w-5 h-5 text-secondary-energy fill-secondary-energy animate-pulse flex-shrink-0" />}
        </div>
        
        <div className="flex items-baseline gap-1">
           <span className={`text-3xl font-heading font-bold ${isElite ? 'text-transparent bg-clip-text bg-gradient-to-r from-secondary-energy to-secondary-wellness' : 'text-primary-teal'}`}>
             {price}
           </span>
        </div>

        {/* Best For Badge */}
        {bestFor && (
           <div className={`mt-4 p-3 rounded-xl text-sm leading-relaxed flex gap-3 items-start ${isElite ? 'bg-white/5 border border-white/5' : 'bg-gray-50'}`}>
              <Users className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isElite ? 'text-secondary-energy' : 'text-primary-teal'}`} />
              <p className={`${isElite ? 'text-gray-300' : 'text-gray-600'}`}>
                 <span className="font-bold block text-xs uppercase tracking-wide mb-1 opacity-70">Best For</span>
                 {bestFor}
              </p>
           </div>
        )}
        {description && !bestFor && (
          <p className={`mt-3 text-sm leading-relaxed ${isElite ? 'text-gray-400' : 'text-gray-500'}`}>
            {description}
          </p>
        )}
      </div>

      <div className={`h-px w-full mb-6 ${isElite ? 'bg-white/10' : 'bg-gray-100'}`} />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow relative z-10">
        {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center 
                  ${isElite ? 'bg-secondary-energy/20 text-secondary-energy' : 'bg-primary-teal/10 text-primary-teal'}
              `}>
                  <Check className="w-2.5 h-2.5" strokeWidth={3} />
              </div>
              <span className={`text-sm transition-colors ${isElite ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature}
              </span>
            </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="relative z-10 mt-auto">
         <Button 
            variant={isElite ? 'elite' : 'outline'} 
            className={`w-full justify-between group/btn ${isElite ? '' : 'hover:bg-primary-teal hover:text-white border-primary-teal/30 text-primary-navy'}`}
         >
            <span>{cta}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
         </Button>
      </div>
    </motion.div>
  );
}

// --- RESULT CAPSULE (HOME) ---
export const BioMetricResultCard: React.FC<{ 
  quote: string, 
  author: string, 
  metric: string, 
  delay?: number 
}> = ({ quote, author, metric, delay = 0 }) => {
  
  const numberMatch = metric.match(/[\d.-]+/);
  const metricValue = numberMatch ? numberMatch[0] : "";
  const metricLabel = metric.replace(metricValue, "").trim();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={`${capsuleBaseClass} bg-white border-gray-100 p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(53,147,141,0.15)] flex flex-col justify-between`}
    >
      <div className="absolute top-[-20%] right-[-20%] w-48 h-48 rounded-full bg-primary-teal/5 blur-[40px] group-hover:bg-primary-teal/10 transition-colors duration-500" />
      
      <div className="relative z-10">
         <div className="mb-6">
            <div className="flex items-baseline">
                <h3 className="text-5xl md:text-6xl font-heading font-bold text-primary-navy tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">
                  {metricValue}
                </h3>
                <span className="ml-2 text-base md:text-lg font-bold text-primary-teal uppercase tracking-wider">
                  {metricLabel}
                </span>
            </div>
            <div className="h-12 w-full mt-2 opacity-50">
               <svg width="100%" height="100%" viewBox="0 0 200 50" preserveAspectRatio="none">
                  <motion.path 
                     d="M0,40 C50,40 50,10 100,25 C150,40 150,0 200,10"
                     fill="none"
                     stroke="#35938D"
                     strokeWidth="3"
                     strokeLinecap="round"
                     initial={{ pathLength: 0 }}
                     whileInView={{ pathLength: 1 }}
                     transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                     <linearGradient id="liquidGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#35938D" stopOpacity="0" />
                        <stop offset="50%" stopColor="#35938D" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#35938D" stopOpacity="0" />
                     </linearGradient>
                  </defs>
                  <path d="M0,40 C50,40 50,10 100,25 C150,40 150,0 200,10 V50 H0 Z" fill="url(#liquidGrad)" />
               </svg>
            </div>
         </div>

         <div className="h-px w-12 bg-gray-200 mb-6"></div>

         <p className="text-gray-600 italic leading-relaxed text-base md:text-lg font-serif">
           "{quote}"
         </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-3">
         <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-teal to-secondary-wellness flex items-center justify-center text-white font-bold shadow-md">
           {author.charAt(0)}
         </div>
         <div>
           <p className="font-bold text-primary-navy text-sm">{author}</p>
           <div className="flex items-center gap-1">
             <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
             <p className="text-[10px] uppercase tracking-widest text-gray-400">Success Story</p>
           </div>
         </div>
      </div>
    </motion.div>
  );
}

// --- DETAILED TESTIMONIAL CARD (RESULTS PAGE) ---
export const DetailedTestimonialCard: React.FC<{ 
  author: string, 
  age: string, 
  location: string, 
  date: string, 
  metric: string, 
  quote: string, 
  story: string, 
  image: string,
  delay?: number 
}> = ({ author, age, location, date, metric, quote, story, image, delay = 0 }) => {
  return (
     <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className="break-inside-avoid mb-6 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group relative"
     >
        {/* Journey Image (Natural Aspect Ratio) */}
        <div className="relative w-full overflow-hidden bg-gray-100">
             <img 
               src={image} 
               alt={author} 
               className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-transparent to-transparent opacity-80"></div>
             
             {/* Overlay Info */}
             <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-2 opacity-80">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {location}</span>
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl leading-tight">{author}, {age}</h3>
             </div>
        </div>

        {/* Metric Highlight Badge */}
        <div className="relative -mt-6 px-6 z-20">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-secondary-energy/10 text-secondary-energy flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5" />
                 </div>
                 <p className="text-primary-navy font-bold text-sm leading-tight">{metric}</p>
            </div>
        </div>

        {/* Story Content */}
        <div className="p-6 pt-6 flex-grow flex flex-col">
            <div className="mb-4">
                 <Quote className="w-8 h-8 text-primary-teal/20 mb-2 rotate-180" />
                 <h4 className="font-heading font-bold text-lg text-primary-navy leading-tight italic">"{quote}"</h4>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line flex-grow">
                {story}
            </p>
        </div>
     </motion.div>
  )
}

export const ConnectorLine: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg className={`absolute pointer-events-none z-0 ${className}`} width="100%" height="100%" overflow="visible">
    <defs>
      <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5">
        <circle cx="5" cy="5" r="5" fill="#35938D" />
      </marker>
    </defs>
    <path d="M0,50 Q50,50 100,50" stroke="#35938D" strokeWidth="1" fill="none" markerEnd="url(#dot)" strokeDasharray="4 4" className="opacity-30" />
  </svg>
);

export const BezierCurve: React.FC<{ startX: number, startY: number, endX: number, endY: number, color?: string, dashed?: boolean }> = ({ 
  startX, startY, endX, endY, color = "#35938D", dashed = false 
}) => {
  const midX = (startX + endX) / 2;
  const path = `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;

  return (
    <motion.path 
      d={path} 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeDasharray={dashed ? "4 4" : "none"}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  );
};

// --- ACCORDION ITEM (FAQ) ---
export const AccordionItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={`font-heading font-bold text-lg transition-colors ${isOpen ? 'text-primary-teal' : 'text-primary-navy group-hover:text-primary-teal'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary-teal text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-primary-teal/10'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
