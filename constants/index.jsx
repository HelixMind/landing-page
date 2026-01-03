import { Crown, ShieldCheck, BarChart3, GraduationCap } from "lucide-react";

import { Percent, Users, TrendingUp, CheckCircle2 } from "lucide-react";

const navLinks = [
  {
    id: "Home",
    title: "Home",
    href: "/",
  },
  {
    id: "About",
    title: "About",
    href: "/about",
  },
  {
    id: "Results",
    title: "Results",
    href: "/results",
  },
  {
    id: "Join",
    title: "Join",
    href: "/join",
  },
];

const logos = ["/log1.png", "/log2.png", "/log3.png", "/log4.png", "/log5.png"];
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

const features = [
  {
    title: "Success Rate %",
    description:
      "Reflects the proportion of trades that closed in profit, demonstrating the effectiveness and consistency of our trading strategies over time.",
    icon: <Percent className="w-6 h-6" />,
    image: "/fit1.png",
    isActive: true,
  },
  {
    title: "Active Members",
    description:
      "Represents the number of traders actively using the platform, engaging with live signals, market insights, and trading opportunities.",
    icon: <Users className="w-6 h-6" />,
    image: "/fit3.png",
    isActive: false,
  },
  {
    title: "Million Volume",
    description:
      "Indicates the total trading volume executed through the platform, highlighting strong liquidity and sustained market participation.",
    icon: <TrendingUp className="w-6 h-6" />,
    image: "/fit4.png",
    isActive: false,
  },
  {
    title: "Successful Trades",
    description:
      "Shows the total number of trades that have been successfully completed through disciplined execution and controlled risk management.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    image: "/fit2.png",
    isActive: false,
  },
];

const advantagePoints = [
  {
    _id: 1,
    badge: "Research",
    description:
      "Our team of professional analysts identify opportunities through rigorous research. We focus on fundamentals, not speculation.",
    title: "Research Excellence",
  },
  {
    _id: 2,
    badge: "Execution",
    description:
      "Real-time market analysis, strategic alerts, and disciplined execution. Timing and precision drive results.",
    title: "Timely Execution",
  },
  {
    _id: 3,
    badge: "Membership",
    description:
      "Limited to serious investors only. Quality over quantity. Every member is vetted for commitment and experience.",
    title: "Selective Membership",
  },
  {
    _id: 4,
    badge: "Discipline",
    description:
      "We teach strategic position management and risk assessment. Emotional decisions are replaced with systematic analysis.",
    title: "Disciplined Approach",
  },
];

const testimonials = [
  {
    name: "Wei Chen",
    role: "Professional Trader",
    image: "/av1.jpg",
    content:
      "Since joining The GOAT Inner Circle, my trading strategies have reached a whole new level. The exclusive insights and guidance here are invaluable.",
  },
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    image: "./av2.jpg",
    content:
      "Being part of The GOAT Inner Circle has completely transformed how our fund approaches crypto. The tools and networking opportunities are unmatched.",
  },
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    image: "/av3.jpg",
    content:
      "I never realized the difference a community could make until I joined The GOAT Inner Circle. The support and market intelligence are game-changing.",
  },
  {
    name: "Mei Zhang",
    role: "DeFi Developer",
    image: "/av4.jpg",
    content:
      "The insights I’ve gained from The GOAT Inner Circle are unlike anything I’ve seen elsewhere. It’s boosted our trading efficiency dramatically.",
  },
  {
    name: "Javier Rodriguez",
    role: "Forex Security Expert",
    image: "/av5.jpg",
    content:
      "What sets The GOAT Inner Circle apart is the expert guidance on security and risk management. I feel far more confident navigating the markets now.",
  },
  {
    name: "James Thompson",
    role: "Portfolio Manager",
    image: "/av6.jpg",
    content:
      "Joining The GOAT Inner Circle has simplified managing complex portfolios. The shared strategies are both practical and highly effective.",
  },
  {
    name: "Camila Martinez",
    role: "Forex Analyst",
    image: "/av7.jpg",
    content:
      "Access to The GOAT Inner Circle has sharpened my analysis and workflow. The insights and community support make all the difference.",
  },
];

const footerLinks = [
  {
    _id: "001",
    title: "Trading",
    links: ["Markets", "Trading Fees"],
  },
  {
    _id: "002",
    title: "Resources",
    links: ["Trading Guide", "Market Analysis"],
  },
  {
    _id: "003",
    title: "Legal",
    links: ["Privacy Policy", "Terms of Services"],
  },
];

// custom
const teamMembers = [
  {
    _id: "001",
    name: "The Architect",
    avatar: "/tm1.jpg",
    role: "Founder & Chief Strategist",
    content:
      "15+ years of institutional trading experience, designing the core strategies and frameworks that give the network its edge.",
  },
  {
    _id: "002",
    name: "The Oracle",
    avatar: "/tm2.jpg",
    role: "Head of Research",
    content:
      "Leads market research and macro analysis, known for accurately anticipating major market moves.",
  },
  {
    _id: "003",
    name: "The Executor",
    avatar: "./tm3.jpg",
    role: "Operations Director",
    content:
      "Ensures timely delivery of critical intelligence so members act with precision and confidence.",
  },
];

const corePrinciples = [
  {
    title: "Exclusivity",
    description:
      "Access is intentionally limited to maintain a high-signal environment where serious traders can exchange insights without noise, overcrowding, or diluted opportunities.",
    icon: <Crown className="w-6 h-6" />,
  },
  {
    title: "Trust",
    description:
      "Every member is carefully vetted to ensure integrity, alignment, and professionalism, allowing the community to operate on transparency, confidence, and mutual respect.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "Performance",
    description:
      "Our strategies are measured by real outcomes, not promises. Consistent execution, disciplined risk management, and verifiable results define our reputation.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Continuous Learning",
    description:
      "Markets never stand still, and neither do we. We constantly adapt, refine strategies, and share insights to stay ahead in changing market conditions.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

const ourStory = [
  {
    title: "The Genesis",
    description:
      "Founded by a group of elite traders who dominated traditional markets for over a decade, The GOAT Inner Circle emerged from the need for a truly exclusive community where high-level intelligence could be shared without dilution.",
  },
  {
    title: "The Evolution",
    description:
      "What started as a private group of 12 traders has evolved into a carefully curated network of 500+ elite members. Each trader brings unique insights, creating a collective intelligence that consistently outperforms the market.",
  },
  {
    title: "The Legend",
    description:
      "Today, we're recognized as the most exclusive and successful trading community in the prediction markets space. Our members don't just trade - they shape markets and create legendary wins that become industry folklore.",
  },
];

const topTrades = [
  {
    id: "pepe",
    symbol: "$PEPE",
    date: "May 2025",
    sector: "Altcoin Sector",
    entry: "$0.000001",
    peak: "$0.000029",
    returnPercent: "+2,847%",
    positionSize: "$50,000",
    pnl: "$1,423,500",
  },
  {
    id: "wif",
    symbol: "$WIF",
    date: "December 2025",
    sector: "Solana Ecosystem",
    entry: "$0.02",
    peak: "$0.85",
    returnPercent: "+4,156%",
    positionSize: "$100,000",
    pnl: "$4,156,000",
  },
  {
    id: "bonk",
    symbol: "$BONK",
    date: "October 2025",
    sector: "Solana Ecosystem",
    entry: "$0.0000008",
    peak: "$0.000016",
    returnPercent: "+1,923%",
    positionSize: "$25,000",
    pnl: "$480,750",
  },
];

// Monthly analytics data
const monthlyAnalyticsData = [
  {
    month: "November 2024",
    avgReturn: 923,      // +923%
    callsMade: 28,       // 28 Calls Made
    winners: 27,         // 27 Winners
  },
  {
    month: "December 2024",
    avgReturn: 1234,     // +1,234%
    callsMade: 31,
    winners: 30,
  },
  {
    month: "January 2025",
    avgReturn: 847,      // +847%
    callsMade: 23,
    winners: 22,
  },
];

// recent performance
const recentPerformance = [
  {
    symbol: "$MYRO",
    date: "Jan 15, 2025",
    sector: "Solana Ecosystem",
    description: "Solana ecosystem token with strong fundamentals",
    entry: "$0.08",
    peak: "$0.24",
    returnPercent: "+200%",
    positionSize: "—",
    pnl: "+$80,000",
  },
  {
    symbol: "$JUPITER",
    date: "Jan 12, 2025",
    sector: "Solana Ecosystem",
    description: "Solana DEX aggregator with institutional adoption",
    entry: "$0.45",
    peak: "$1.23",
    returnPercent: "+173%",
    positionSize: "—",
    pnl: "+$780,000",
  },
  {
    symbol: "$RENDER",
    date: "Jan 8, 2025",
    sector: "AI Infrastructure",
    description: "AI rendering network with enterprise partnerships",
    entry: "$4.20",
    peak: "$8.90",
    returnPercent: "+112%",
    positionSize: "—",
    pnl: "+$470,000",
  },
];

const requirements = [
  {
    title: "Proven Track Record",
    description:
      "Minimum 2 years of active trading experience with documented, verifiable winning trades.",
  },
  {
    title: "Serious Capital",
    description:
      "Minimum $10K trading portfolio to ensure real exposure and aligned incentives.",
  },
  {
    title: "Active Participation",
    description:
      "Commitment to consistently share insights, analysis, and contribute to group discussions.",
  },
  {
    title: "Professional Mindset",
    description:
      "Disciplined approach to risk management, execution, and emotional control.",
  },
  {
    title: "Confidentiality",
    description:
      "Absolute discretion and respect for all proprietary strategies and shared intelligence.",
  },
  {
    title: "Long-term Vision",
    description:
      "Focus on sustainable, compounding growth rather than short-term speculative schemes.",
  },
];

const applicationProcess = [
  {
    title: "Submit Application",
    description:
      "Complete the application form with accurate and detailed information about your trading background and experience.",
  },
  {
    title: "Initial Review",
    description:
      "Our team carefully reviews each submission within 48 hours. Only applicants who meet our standards move forward.",
  },
  {
    title: "Interview Process",
    description:
      "Shortlisted candidates are invited to a private interview to assess alignment, discipline, and long-term commitment.",
  },
  {
    title: "Welcome to the Elite",
    description:
      "Approved members receive exclusive access to our private channels, research, and proprietary strategies.",
  },
];


export {
  navLinks,
  logos,
  extendedLogos,
  features,
  advantagePoints,
  testimonials,
  footerLinks,
  teamMembers,
  corePrinciples,
  ourStory,
  topTrades,
  monthlyAnalyticsData,
  recentPerformance,
  requirements,
  applicationProcess,
};
