
import React from 'react';
import { Section, FadeInView, DetailedTestimonialCard, Button } from '../components/UI';
import { ALL_TESTIMONIALS } from '../constants';
import { Play, Star, Trophy, ArrowRight } from 'lucide-react';

const Results: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white pt-20">
       {/* HERO */}
       <Section pattern="grid" className="pt-16 pb-12 bg-gray-50/50">
           <div className="text-center max-w-4xl mx-auto">
               <FadeInView priority={true}>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-energy/10 text-secondary-energy text-xs font-bold uppercase tracking-widest mb-6">
                       <Trophy className="w-4 h-4" />
                       <span>Wall of Victory</span>
                   </div>
                   <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-navy mb-6">
                       Real People. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-teal to-secondary-wellness">Real Reversals.</span>
                   </h1>
                   <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
                       From diabetes reversal to hormonal balance, these stories are proof that your biology can be upgraded.
                   </p>
               </FadeInView>
           </div>
       </Section>

       {/* UNIFIED MASONRY GALLERY */}
       <Section pattern="light" className="py-12 md:py-20">
           <div className="container mx-auto max-w-7xl">
                {/* MASONRY LAYOUT */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    
                    {/* 1. SPOTLIGHT VIDEO CARD (Inserted into flow) */}
                    <FadeInView priority={true} className="break-inside-avoid mb-6">
                        <div 
                            className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-black shadow-2xl group cursor-pointer border border-gray-100/10"
                            onClick={togglePlay}
                        >
                            {/* Video  */}
                            <video
                                ref={videoRef}
                                src="/images/testimonial.mp4"
                                className="absolute inset-0 w-full h-full object-cover"
                                onEnded={() => setIsPlaying(false)}
                            />
                            
                            {/* Overlay Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}></div>
                            
                            {/* Play Button */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 z-20 group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                            
                            {/* Text Info */}
                            <div className={`absolute bottom-0 left-0 right-0 p-8 z-20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-energy text-primary-navy text-[10px] font-bold uppercase tracking-widest mb-3 shadow-lg">
                                    <Play className="w-3 h-3 fill-current" />
                                    <span>Video Story</span>
                                </div>
                                <p className="text-gray-300 text-sm font-sans flex items-center gap-2">
                                    Watch Prerna's Journey <ArrowRight className="w-4 h-4" />
                                </p>
                            </div>
                        </div>
                    </FadeInView>

                    {/* 2. ALL TESTIMONIALS */}
                    {ALL_TESTIMONIALS.map((t, i) => (
                        <DetailedTestimonialCard 
                            key={t.id}
                            {...t}
                            story={t.story || ""}
                            image={t.image || ""}
                            age={t.age || ""}
                            location={t.location || ""}
                            date={t.date || ""}
                            delay={i < 6 ? 0 : i * 0.05} // Immediate for first 6, staggered for rest
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                     <FadeInView>
                        <h3 className="text-2xl font-heading font-bold text-primary-navy mb-6">Ready to write your own story?</h3>
                        <Button variant="elite" size="lg" className="px-10 py-4 text-lg shadow-xl shadow-secondary-energy/20">
                            Start Your Transformation
                        </Button>
                     </FadeInView>
                </div>
           </div>
       </Section>
    </div>
  );
};

export default Results;
