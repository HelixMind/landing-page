import {  ShieldCheck, BarChart3, GraduationCap,  } from "lucide-react";

import { Beaker, Dna, Shuffle, Database } from "lucide-react";

import { Crown, Trash2, Zap, Clock, Cpu } from "lucide-react";


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
];

const logos = ["/log1.png", "/log2.png", "/log3.png", "/log4.png", "/log5.png"];
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

const features = [
  {
    title: "DNA Scanner",
    description:
      "Scan and analyze genomic sequences with automated interpretation. Upload FASTA files, extract genetic patterns, and uncover biologically meaningful insights in seconds.",
    icon: <Dna className="w-6 h-6" />,
    image: "/dna-scanner.PNG",
    isActive: true,
  },
  {
    title: "Mutation Simulator",
    description:
      "Simulate gene mutations and evolutionary changes to predict microbial behavior, resistance development, and possible biological outcomes.",
    icon: <Shuffle className="w-6 h-6" />,
    image: "/mutation-sim.PNG",
    isActive: false,
  },
  {
    title: "Microbe Lab",
    description:
      "A virtual microbial environment where digital microbes can be grown, observed, and tested to explore hypotheses without wet-lab limitations.",
    icon: <Beaker className="w-6 h-6" />,
    image: "/microbe-lab.PNG",
    isActive: false,
  },
  {
    title: "AMR Database",
    description:
      "Access and analyze antimicrobial resistance data to study resistance patterns, track microbial threats, and support predictive research.",
    icon: <Database className="w-6 h-6" />,
    image: "/amr-database.PNG",
    isActive: false,
  },
];

const advantagePoints = [
  {
    _id: 1,
    badge: "AI Research",
    title: "Scientific Intelligence",
    description:
      "HelixMind applies advanced AI models to biological data, enabling accurate predictions grounded in real scientific principles.",
  },
  {
    _id: 2,
    badge: "Accuracy",
    title: "Reliable Pipelines",
    description:
      "From FASTA parsing to genomic analysis, our pipelines are built for precision, reproducibility, and real research use cases.",
  },
  {
    _id: 3,
    badge: "Workflow",
    title: "Unified Platform",
    description:
      "One platform for prediction, simulation, and analysis—eliminating fragmented tools and accelerating research timelines.",
  },
  {
    _id: 4,
    badge: "Validation",
    title: "Research-Ready Results",
    description:
      "Designed with scientific validation in mind, HelixMind supports benchmarking, collaboration, and real-world research impact.",
  },
];

const testimonials = [
  {
    name: "Wei Chen",
    role: "Professional Trader",
    image: "/av1.jpg",
    content:
      "Since joining HelixMind Inner Circle, my trading strategies have reached a whole new level. The exclusive insights and guidance here are invaluable.",
  },
  {
    name: "Sarah Johnson",
    role: "Crypto Fund Manager",
    image: "./av2.jpg",
    content:
      "Being part of HelixMind Inner Circle has completely transformed how our fund approaches crypto. The tools and networking opportunities are unmatched.",
  },
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    image: "/av3.jpg",
    content:
      "I never realized the difference a community could make until I joined HelixMind Inner Circle. The support and market intelligence are game-changing.",
  },
  {
    name: "Mei Zhang",
    role: "DeFi Developer",
    image: "/av4.jpg",
    content:
      "The insights I’ve gained from HelixMind Inner Circle are unlike anything I’ve seen elsewhere. It’s boosted our trading efficiency dramatically.",
  },
  {
    name: "Javier Rodriguez",
    role: "Forex Security Expert",
    image: "/av5.jpg",
    content:
      "What sets HelixMind Inner Circle apart is the expert guidance on security and risk management. I feel far more confident navigating the markets now.",
  },
  {
    name: "James Thompson",
    role: "Portfolio Manager",
    image: "/av6.jpg",
    content:
      "Joining HelixMind Inner Circle has simplified managing complex portfolios. The shared strategies are both practical and highly effective.",
  },
  {
    name: "Camila Martinez",
    role: "Forex Analyst",
    image: "/av7.jpg",
    content:
      "Access to HelixMind Inner Circle has sharpened my analysis and workflow. The insights and community support make all the difference.",
  },
];

const footerLinks = [
  {
    _id: "001",
    title: "Pages",
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

const footerNavItems = [
  {
    _id: "001",
    title: "Home",
    href: "/",
  },
  {
    _id: "002",
    title: "About",
    href: "/about",
  },
];

const legal = [
  {
    _id: "001",
    title: "Privacy Policy",
    href: "#",
  },
  {
    _id: "002",
    title: "Terms of Services",
    href: "#",
  },
];

const forDevelopers = [
  {
    _id: "001",
    title: "GitHub Org",
    href: "https://github.com/HelixMind",
  },
  {
    _id: "002",
    title: "Resources",
    href: "#",
  },
];

// custom
const teamMembers = [
  {
    _id: "001",
    name: "Jesse Jude",
    avatar: "/jesse-jude.png",
    role: "Founder & CEO",
    content:
      "Responsible for setting HelixMind’s vision, culture, and strategic direction. Focused on building the core frameworks, systems, and community standards that prioritize clarity, disciplined thinking, and long-term leverage..",
  },
  {
    _id: "002",
    name: "Eremie Johnson",
    avatar: "/johnson-eremie.jpeg",
    role: "Co-Founder & Software Engineer",
    content:
      "Leads market research and macro analysis, known for accurately anticipating major market moves.",
  },
  {
    _id: "003",
    name: "Christopher Nzenwata",
    avatar: "./nzenwata-christopher.jpg",
    role: "Frontend Engineer",
    content:
      "Designs and implements HelixMind’s user-facing experience. Focused on clarity, usability, and building interfaces that stay out of the way of serious thinking.",
  },
  {
    _id: "004",
    name: "Micheal Great",
    avatar: "./great-ebuka.jpeg",
    role: "Computational Biologist",
    content:
      "Brings a research-driven contributions to HelixMind, applying computational and scientific approaches from biology to complex problem-solving and data interpretation.",
  },
  {
    _id: "005",
    name: "Aaron Syme",
    avatar: "./tm3.jpg",
    role: "Computational Biologist",
    content:
      "Brings a research-driven mindset to HelixMind, applying computational and analytical approaches from biology to complex problem-solving and data interpretation.",
  },
];

const corePrinciples = [
  {
    title: "Define Requirements",
    description:
      "We start by defining the problem clearly. No assumptions, no vague goals—only well-understood constraints and objectives before action.",
    icon: <Crown className="w-6 h-6" />,
  },
  {
    title: "Remove Waste",
    description:
      "If something doesn’t meaningfully improve outcomes, it’s removed. We value focus over motion and eliminate distractions that dilute signal.",
    icon: <Trash2 className="w-6 h-6" />,
  },
  {
    title: "Simplify",
    description:
      "Complexity is reduced wherever possible. Clear systems, clear thinking, and repeatable frameworks take priority over cleverness.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Speed Cycles",
    description:
      "We shorten feedback loops to learn faster. Decisions are tested, reviewed, and refined quickly to avoid stagnation.",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: "Automate",
    description:
      "Once a process is proven, we automate it. This frees attention for higher-leverage thinking and continuous improvement.",
    icon: <Cpu className="w-6 h-6" />,
  },
];

const ourStory = [
  {
    title: "The Genesis",
    description:
      "HelixMind began as a small, private group of people interested in thinking clearly about markets, systems, and decision-making. The goal was simple: create a focused space where serious ideas could be shared without noise, hype, or performative expertise.",
  },
  {
    title: "The Evolution",
    description:
      "Starting with just a handful of members, HelixMind is growing carefully. Each new addition is selected for curiosity, discipline, and the ability to contribute thoughtful insight. The emphasis isn’t scale—it’s signal quality and long-term value.",
  },
  {
    title: "The Present",
    description:
      "HelixMind is still early. We’re building the foundations: shared frameworks, better tools, and a culture of rigorous thinking. The community is small, intentional, and evolving—designed to compound knowledge over time rather than chase short-term wins.",
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
    avgReturn: 923, // +923%
    callsMade: 28, // 28 Calls Made
    winners: 27, // 27 Winners
  },
  {
    month: "December 2024",
    avgReturn: 1234, // +1,234%
    callsMade: 31,
    winners: 30,
  },
  {
    month: "January 2025",
    avgReturn: 847, // +847%
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
  footerNavItems,
  legal,
  forDevelopers,
  teamMembers,
  corePrinciples,
  ourStory,
  topTrades,
  monthlyAnalyticsData,
  recentPerformance,
  requirements,
  applicationProcess,
};
