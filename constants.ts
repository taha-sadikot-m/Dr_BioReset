
import { NavItem, Program, Testimonial, BlogCategory, Guide, FAQItem, ProcessStep, AudienceItem } from './types';
import { Microscope, Activity, Apple, Moon, Heart, FileText, PlayCircle, ClipboardCheck, Zap, PenTool, CheckCircle, Brain, Trophy, ShieldCheck, Flame, Wind } from 'lucide-react';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'Results', path: '/results' },
  { label: 'About Us', path: '/about' },
  { label: 'Learn', path: '/learn' },
];

export const HERO_CONTENT = {
  headline: "Reverse Diabetes & PCOD Naturally Without Lifelong Medication",
  subheadline: "India's #1 Doctor-Led Biohacking Program. Personalized. Scientific. Life-Changing.",
  ctaPrimary: "Take Your Free Reversal Quiz",
  ctaSecondary: "Book ₹499 Discovery Call"
};

export const TRUST_METRICS = [
  { label: "Indians Reversed", value: "5000+", sub: "Documented Cases" },
  { label: "Success Rate", value: "97%", sub: "Clinically Verified" },
  { label: "Doctor-Led", value: "100%", sub: "Medical Supervision" },
  { label: "Medication Dependency", value: "0", sub: "The Ultimate Goal" }
];

export const SOLUTION_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: "Diagnose",
    description: "Advanced labs + biohacking assessment to find the root cause.",
    icon: Microscope
  },
  {
    id: 2,
    title: "Design",
    description: "Personalized nutrition, movement, & lifestyle protocol.",
    icon: PenTool
  },
  {
    id: 3,
    title: "Deliver",
    description: "Track progress, optimize in real-time, reverse naturally.",
    icon: Zap
  }
];

export const TARGET_AUDIENCE: AudienceItem[] = [
  { id: '1', text: "Women 20–45 with PCOD, irregular periods, acne, bloating" },
  { id: '2', text: "Men/Women 28–60 with prediabetes or diabetes" },
  { id: '3', text: "Fatigue, insulin resistance, or unexplained weight gain" },
  { id: '4', text: "People frustrated with medication dependence" }
];

export const PROGRAMS: Program[] = [
  {
    id: 'discovery',
    title: 'Discovery Program',
    price: '₹499',
    bestFor: 'First-time users exploring reversal options',
    features: [
      '15-min Expert Consult',
      'Personalized Reversal Score',
      'Biohacking Analysis'
    ],
    cta: 'Start Here'
  },
  {
    id: 'starter',
    title: 'Starter BioReset',
    price: '₹4,999/month',
    bestFor: 'Those ready to start their reversal journey with guidance',
    features: [
      '4 Consults + Full Plan',
      'Diet, Exercise, Supplements',
      'WhatsApp Support'
    ],
    cta: 'Get Started'
  },
  {
    id: 'premium',
    title: 'Premium BioReset',
    price: '₹9,999/month',
    bestFor: 'Individuals seeking comprehensive, personalized care',
    features: [
      'Doctor-Led Concierge Model',
      'Lab Analysis + Supplement Guide',
      'Sleep, Hormonal & Stress Opt.'
    ],
    cta: 'Go Premium',
    popular: true
  },
  {
    id: 'reversal',
    title: 'Reversal Protocol',
    price: '₹25,000 / 90 days',
    bestFor: 'Committed individuals targeting complete reversal in 90 days',
    features: [
      'Full Reversal Plan + Results',
      'HbA1c, TSH, Weight Tracking',
      'Cycle Normalization',
      'Personalized Milestones'
    ],
    cta: 'Complete Reversal'
  },
  {
    id: 'elite',
    title: 'Anti-Aging Elite',
    price: '₹50,000+/month',
    bestFor: 'High-achievers investing in longevity and optimal health',
    features: [
      'Hormonal Rejuvenation',
      'Biological Age Reversal',
      'Peptides, Red Light, IV Therapy'
    ],
    cta: 'Join Elite',
    isElite: true
  }
];

export const DISCOVERY_DETAILS = {
  title: "1️⃣ Discovery Program - ₹499",
  duration: "Single 15-minute consultation",
  whatYouGet: [
    "Personalized reversal score based on your current health metrics",
    "Biohacking readiness analysis to understand your starting point",
    "Expert guidance on the best program for your needs"
  ]
};

// Simplified testimonials for Home Page
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "My HbA1c dropped from 8.3 to 5.9 in 12 weeks.",
    author: "Meena S.",
    metric: "-0.7 HbA1c"
  },
  {
    id: 2,
    quote: "My PCOD symptoms disappeared, periods normalized naturally.",
    author: "Megha Rathore",
    metric: "Regulated Cycle"
  },
  {
    id: 3,
    quote: "Lost 15 kg in 5 months. Energy level doubled.",
    author: "Ritika Sharma",
    metric: "-15kg Weight"
  }
];

// Full Testimonials for Results Page
export const ALL_TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        author: "Ritika Sharma",
        age: "25 yrs",
        location: "Mumbai",
        date: "Feb 2024",
        metric: "-15 kg | Belly Fat Reduced",
        quote: "I never experienced this before. I too gained muscle mass.",
        story: "I was struggling with bloating and fatigue. Diet plan bana-bana ke thak gayi thi — nothing worked long-term. Dr Harshal he is one of my college friend so he gave me scientific approach — balance diet, light movement and deep sleep where I am mostly lagging and his sleep protocol is 🤌 amazing.\n\n2 months mein meri energy level double ho gayi and belly fat visibly kam hua. I lost 15 kg in 5 months from 76 kg to 61 kg.",
        image: "/images/ritika_sharma.jpeg" // Fitness/Exercise
    },
    {
        id: 2,
        author: "Prerna Ahuja",
        age: "33 yrs",
        location: "Delhi",
        date: "Jun 2024",
        metric: "-10 kg | Sleep Restored",
        quote: "Bas 3 months mein 10 kg down with peaceful sleep!",
        story: "After my second baby, mera weight control mein nahi aa raha tha. Sleep disrupted, stress high, aur mood swings har roz. Dr Harshal sir ne mujhe bataya ki hormones tab tak work nahi karenge jab tak main sleep aur light exposure theek nahi karti.\n\nHe added magnesium and omega 3s, taught circadian rhythm hacks — and bas 3 months mein 10 kg down with peaceful sleep! Sir follows a root-cause approach.",
        image: "/images/prerna_ahuja.jpeg" // Peaceful/Morning
    },
    {
        id: 3,
        author: "Arjun Malik",
        age: "31 yrs",
        location: "Bangalore",
        date: "Oct 2023",
        metric: "-15 kg | Improved Focus",
        quote: "Mera focus bhi improve hua aur 15 kg lose ho gaya.",
        story: "Because of my IT job, I was relying too much on junk food. Dr Harshal Giri personally guided me — he didn’t judge me, just explained how to work with metabolism through timing and smart NEAT movement.\n\nIntermittent fasting, daily walks and a clean high-protein Indian diet. Now I feel light and energetic. He knows when to fast when not to; the diet he suggested to me he suggested just the opposite to my wife so it was truly personalised.",
        image: "/images/arjun_malik.jpeg" // Healthy Food/Diet
    },
    {
        id: 4,
        author: "Megha Rathore",
        age: "26 yrs",
        location: "Jaipur",
        date: "Apr 2024",
        metric: "Cycle Normalised | -11.5 lbs",
        quote: "No medicine, no crazy workout, he gave some hacks.",
        story: "Mujhe PCOD aur constant cravings ki problem thi. Dr Harshal Giri ne mere gut aur sleep pattern pe kaam kiya. Unhone meri body ko heal karna sikhaya — when to eat, how to move, and how to breathe for metabolic control.\n\nWithin 6 months my cycle normalised and stubborn weight came down by 11.5 lbs.",
        image: "/images/megha_rathore.jpeg" // Yoga/Health
    },
    {
        id: 5,
        author: "Simran Kaur",
        age: "29 yrs",
        location: "Chandigarh",
        date: "Jan 2025",
        metric: "-13 kg | Skin & Hair Improved",
        quote: "Most importantly – I got disciplined!",
        story: "Hiiij i was too much in junk food and party and I use to fear diet starvation but Dr Giri, he make me eat even more - mujhe protein aur micronutrient balance bataya.\n\nHis biohacking plan help me lose 13 kg and my skin my hair they change a lot. Thank you sir for changing my life naturally. 🌿",
        image: "/images/simran_kaur.jpeg" // Healthy food
    },
    {
        id: 6,
        author: "Devansh Kapoor",
        age: "29 yrs",
        location: "Pune",
        date: "Sep 2023",
        metric: "-20 kg | Stress Reduced",
        quote: "Feels like he doesn’t just train your body; he reprograms your brain too.",
        story: "Bro, stress fat is real! 😂 I was hitting the gym every day but still gaining fat. Harshal explained cortisol and stress hormones like a pro.\n\nWe worked on meal timing, added adaptogens, and got my sleep right. End result — 20 kg down, mind calm, energy high.",
        image: "/images/devanh_kapoor.jpeg" // Gym
    },
    {
        id: 7,
        author: "Siddharth Menon",
        age: "38 yrs",
        location: "Kochi",
        date: "Nov 2023",
        metric: "-11 kg | Energy Restored",
        quote: "He gives logic that just clicks.",
        story: "My sleep was destroyed thanks to work stress. Harshal taught me small hacks — sunlight in the morning, magnesium at night, and better meal timing melatonin cycling.\n\nMan, that stuff works! I lost 11 kg without feeling tired once. He gave me diet and workout too.",
        image: "/images/siddharth_menon.jpeg" // Nature/Morning
    },
    {
        id: 8,
        author: "Vaishnavi Suthar",
        age: "29 yrs",
        location: "Udaipur",
        date: "Feb 2025",
        metric: "Better Recovery | Energy High",
        quote: "He’s less like a doctor and more like that one friend who knows exactly what your body needs.",
        story: "Honestly I didn’t even realise when the weight started dropping. 😅 Harshal just made me fix small things — when I sleep, what I eat, and how I start my mornings and which exercise I should do.\n\nIt help in better recovery and the right supplements. I used to feel tired all the time, now I wake up with actual energy.",
        image: "/images/vaishnavi_suthar.jpeg" // Gym/Active
    },
    {
        id: 9,
        author: "Ananya Rao",
        age: "27 yrs",
        location: "Bangalore",
        date: "Sep 2025",
        metric: "70kg -> 54kg (-16kg)",
        quote: "I finally love the person I see in the mirror.",
        story: "This took time… and patience… but, it was worth it. I started with Harshal at 70 kg, exhausted and low on confidence. He didn’t put me on any ‘diet plan’ — just taught me how my body actually works.\n\nSimple food, good sleep, hydration, a bit of movement and the right supplements — that’s it. 1.5 years later, I’m 54 kg, clear-headed, and I finally love the person I see in the mirror.",
        image: "/images/ananya_rao.jpeg" // Happy/Mirror
    },
    {
        id: 10,
        author: "Rahul Menon",
        age: "32 yrs",
        location: "Chennai",
        date: "Sep 2025",
        metric: "-10 kg | Digestion Improved",
        quote: "The biggest difference wasn’t the weight — it was how I felt.",
        story: "This was 3 months of pure consistency no crazy diets, no 2-hour gym sessions. Harshal just helped me clean up my routine — when to eat, when to move, and when to stop scrolling and actually sleep 😂\n\nThe biggest difference wasn’t the weight — it was how I felt. My energy, focus and digestion all improved big time. 22 lbs (10 Kg) down, confidence way up.",
        image: "/images/rahul_menon.jpeg" // Lifestyle/Meditation
    },
    {
        id: 11,
        author: "Meena S",
        age: "46 yrs",
        location: "Pune",
        date: "Jan 2025",
        metric: "HbA1c 6.4 -> 5.7",
        quote: "I never thought diabetes could be reversed without medicine.",
        story: "When I first met Harshal, my sugar reports were getting worse every year. He explained everything in such a chill way — food, sleep, even mindset.\n\nWithin months, my HbA1c came down from 6.4 to 5.7 naturally! Dr giri ne mujhe khana chhodne ki jagah replace karna sikhaya so that I can still eat some sweets.",
        image: "/images/meena_s.jpeg" // Medical/Health
    }
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: 'diabetes', title: 'Diabetes Reversal Science', icon: Microscope, count: 12 },
  { id: 'pcod', title: 'PCOD & Hormonal Health', icon: Activity, count: 8 },
  { id: 'nutrition', title: 'Nutrition for Insulin Control', icon: Apple, count: 15 },
  { id: 'biohacking', title: 'Biohacking Sleep & Stress', icon: Moon, count: 6 },
  { id: 'longevity', title: 'Women’s Hormonal Longevity', icon: Heart, count: 5 },
];

export const FEATURED_GUIDES: Guide[] = [
  { id: 'g1', title: 'The Insulin Reset Protocol', type: 'PDF Blueprint', downloadUrl: '#' },
  { id: 'g2', title: 'Circadian Rhythms & Sleep', type: 'Video Masterclass', downloadUrl: '#' },
  { id: 'g3', title: 'Superfoods for PCOD', type: 'Dietary Sheet', downloadUrl: '#' },
];

export const FAQS: FAQItem[] = [
  {
    question: "How long does it take to reverse Type 2 Diabetes?",
    answer: "While every body is unique, most of our patients see significant drops in blood sugar within 21 days and HbA1c reduction within 3 months. Complete reversal typically takes 3-6 months of adherence to the protocol."
  },
  {
    question: "Do I have to stop eating carbs completely?",
    answer: "No. BioReset isn't about 'no carbs', it's about 'right carbs at the right time'. We use Continuous Glucose Monitoring (CGM) data to personalize your carbohydrate intake based on your body's unique tolerance."
  },
  {
    question: "Is the program suitable for vegetarians/vegans?",
    answer: "Absolutely. Our nutrition protocols are 100% personalized. We have successfully reversed diabetes and PCOD for hundreds of vegetarians and vegans by focusing on plant-based proteins and fiber."
  },
  {
    question: "Can I stop my medication immediately?",
    answer: "We never recommend stopping medication without doctor supervision. Our goal is to naturally improve your markers so your doctor *has* to reduce your dosage. Many patients become medication-free, but it is a gradual, safe process."
  }
];

// --- FOUNDER PAGE DATA ---

export const FOUNDER_CREDENTIALS = [
    {
        category: "Clinical Expertise",
        items: [
            "Bachelor & Master of Physiotherapy (Sports & MSK)",
            "PhD in Exercise Science (Univ. of Bath – in progress)",
            "Advanced Training in Spinal Care & Rehab"
        ]
    },
    {
        category: "Performance Science",
        items: [
            "ACE Certified Personal Trainer & Health Coach",
            "NASM Fitness Nutrition Specialist",
            "Animal Flow Level 1 & 2 Instructor"
        ]
    },
    {
        category: "Lifestyle Medicine",
        items: [
            "Physician – American College of Lifestyle Medicine",
            "Expertise in Metabolic Disorders Reversal",
            "Former Expert at Upgrade Labs (USA)"
        ]
    }
];

export const CELEBRITY_CLIENTS = [
    "Anant Ambani",
    "Kartik Aaryan",
    "Mandira Bedi",
    "Kalki Koechlin",
    "Cyrus S. Poonawalla",
    "Pranav Adani"
];

export const BIORESET_METHOD_PILLARS = [
    {
        title: "Metabolic Reprogramming",
        desc: "Resetting metabolic flexibility, gut health, hormonal balance, and inflammation.",
        icon: Flame
    },
    {
        title: "Performance Physiology",
        desc: "Strength, conditioning, mobility, biomechanics, and movement efficiency.",
        icon: Activity
    },
    {
        title: "Precision Nutrition",
        desc: "Data-driven nutrition, CGM insights, biomarkers, and advanced supplement stacks.",
        icon: Apple
    },
    {
        title: "Sleep & Recovery",
        desc: "HRV science, circadian alignment, breathwork, and nervous system training.",
        icon: Moon
    },
    {
        title: "Lifestyle Re-engineering",
        desc: "Creating habits, routines, and environments designed for high performance.",
        icon: Wind
    }
];
