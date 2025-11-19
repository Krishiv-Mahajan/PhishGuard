import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Globe, Star, Users, ShieldCheck, Smartphone, Scan, Brain, Mail, Code, Lock, User, Building, GraduationCap, Heart, Download } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [activePricing, setActivePricing] = useState('free');
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeDemo === 2) {
      setIsScanning(true);
      const timer = setTimeout(() => setIsScanning(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [activeDemo]);

  const features = [
    {
      icon: Scan,
      title: "Real-Time URL Protection",
      description: "Instantly scans links using AI + threat intelligence. Flags phishing, malware, crypto scams, shortened URL traps, and suspicious redirects."
    },
    {
      icon: Shield,
      title: "Browser Extension Defense",
      description: "Protects against fake login pages, scam pop-ups, credential harvesting sites, and impersonation pages with 3-level warnings: Safe • Suspicious • Dangerous"
    },
    {
      icon: Mail,
      title: "Email Scam Detector",
      description: "For Gmail/Outlook. Detects spoofed senders, highlights suspicious attachments, finds phishing wording patterns, works inside your inbox."
    },
    {
      icon: Brain,
      title: "AI Message Analyzer",
      description: "Paste any message → PhishGuard detects scam intent, urgency traps, fraud signals, and unsafe links with high accuracy."
    },
    {
      icon: Code,
      title: "Developer API",
      description: "Fast REST API to scan URLs, emails, or HTML. Perfect for SaaS platforms, security tools, and fintech verification systems."
    },
    {
      icon: Lock,
      title: "Privacy-First Security",
      description: "We only analyze URL or email metadata needed for detection. No personal data logging, ensuring complete privacy."
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Shield, value: "1M+", label: "Threats Blocked" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ];

  const demoScenarios = [
    {
      title: "Phishing Email Blocked",
      description: "Suspicious email detected and blocked",
      status: "blocked"
    },
    {
      title: "Website Verified Safe",
      description: "Security check completed",
      status: "safe"
    },
    {
      title: "Link Scanning",
      description: "Analyzing URL for threats",
      status: "scanning"
    }
  ];

  const pricingPlans = {
    free: {
      name: "Free",
      subtitle: "For Everyone",
      price: "$0",
      features: [
        "Real-time URL scanning",
        "Browser extension protection", 
        "Basic phishing alerts",
        "10 message scans/day"
      ]
    },
    pro: {
      name: "Pro",
      subtitle: "Students & Individuals",
      price: "$3/mo",
      features: [
        "Everything in Free",
        "Email scanner",
        "Unlimited message scans",
        "QR code scam detection",
        "Early access to new features"
      ]
    },
    business: {
      name: "Business",
      subtitle: "Teams & Companies",
      price: "Custom",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Policy enforcement",
        "API access",
        "SLA & priority support"
      ]
    }
  };

  const useCases = [
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Protect from internship scams, fake HR emails, scholarship frauds."
    },
    {
      icon: User,
      title: "For Professionals", 
      description: "Stay safe from corporate impersonation attacks & malicious links."
    },
    {
      icon: Heart,
      title: "For Families",
      description: "Auto-block scams targeting parents & seniors with family-friendly protection."
    },
    {
      icon: Code,
      title: "For Developers",
      description: "Safely explore unknown websites, repos, and documentation with API access."
    },
    {
      icon: Building,
      title: "For Companies",
      description: "Reduce phishing risk without expensive security tools. Team dashboard included."
    }
  ];

  const testimonials = [
    {
      name: "Rohit",
      role: "Beta User",
      quote: "PhishGuard caught a fake Microsoft login page that Chrome didn't. Saved me.",
      avatar: "👨‍💻",
      company: "Tech Startup"
    },
    {
      name: "Ananya", 
      role: "Beta Tester",
      quote: "Perfect for students like us. The AI scanner is too good.",
      avatar: "👩‍🎓",
      company: "University Student"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      quote: "We reduced phishing incidents by 43% with PhishGuard Business.",
      avatar: "👔",
      company: "TechCorp Security"
    }
  ];

  const faqs = [
    {
      question: "Does PhishGuard store my personal data?",
      answer: "No. We only analyze the URL or email metadata needed for detection. No logging."
    },
    {
      question: "Will it slow down my browser?",
      answer: "No. The extension is optimized to run under 20ms per scan."
    },
    {
      question: "Which browsers are supported?",
      answer: "Chrome, Edge, Brave, and Firefox."
    },
    {
      question: "Is PhishGuard free?",
      answer: "Yes. The free tier covers essential protection."
    },
    {
      question: "Can businesses use it?",
      answer: "Yes. Our Business dashboard lets teams track phishing risks."
    },
    {
      question: "How accurate is the AI?",
      answer: "We combine AI + heuristics + threat feeds for high accuracy and zero-day detection."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-900 shadow-lg shadow-black/50' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-lg font-medium">PhishGuard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#features" className="text-[#d9d9e9] hover:text-white transition-all relative group">
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#how-it-works" className="text-[#d9d9e9] hover:text-white transition-all relative group">
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#pricing" className="text-[#d9d9e9] hover:text-white transition-all relative group">
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#download" className="text-[#d9d9e9] hover:text-white transition-all relative group">
                Download
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 hover:shadow-lg hover:shadow-white/20 transition-all hover:scale-105">
              Get Protected
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated background gradient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 blur-3xl animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 border border-gray-900 rounded-full px-3 py-1 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm">Protecting 50,000+ Users</span>
          </div>
          
          {/* Animated Shield Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield className="h-16 w-16 text-blue-500/30 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-12 w-12 text-blue-400" />
              </div>
              {/* Scanning radar effect */}
              <div className="absolute inset-0 rounded-full border-2 border-green-500/30 animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Stay Safe from
            <span className="block bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent pb-1">
              Phishing. Automatically.
            </span>
          </h1>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            AI-powered browser protection that blocks malicious links, fake login pages, and scam emails in real time.
          </p>
          
          {/* Browser mockup preview */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              <div className="bg-gray-950 border border-gray-800 rounded px-3 py-2 flex items-center space-x-2">
                <Lock className="h-3 w-3 text-gray-600" />
                <span className="text-gray-500 text-xs">phishing-site-example.com</span>
              </div>
              <div className="mt-3 bg-red-900/20 border border-red-900/30 rounded p-3">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">PhishGuard blocked a phishing site</span>
                </div>
                <p className="text-gray-500 text-xs mt-1 ml-6">This site was attempting to steal your credentials</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-all hover:scale-105 text-sm font-medium flex items-center justify-center space-x-2 shadow-lg shadow-white/10">
              <Download className="h-4 w-4" />
              <span>Download Extension</span>
            </button>
            <button className="border border-gray-900 text-gray-400 px-6 py-3 rounded hover:border-gray-700 hover:bg-gray-900/50 transition-all text-sm">
              Try for Free
            </button>
          </div>

          <p className="text-gray-600 text-xs mb-12">
            No sign-up needed. Works instantly across Chrome, Edge, Brave & Firefox.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                The Internet Has a
                <span className="block text-red-400">Phishing Problem</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                  <p>94% of cyber attacks start with phishing.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                  <p>Scammers now use AI to create perfect fake emails and websites.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                  <p>Most browser filters detect only known threats — not new ones.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                  <p>One wrong click can expose your passwords, data, and money.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                PhishGuard
                <span className="block text-green-400">Fixes This</span>
              </h2>
              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p>Scans every link before you open it.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p>Warns you instantly when something looks suspicious.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p>Blocks dangerous sites automatically.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p>Explains the risk clearly, in simple language.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Protection Features
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Advanced security technology working 24/7 to keep you safe from online threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="group border border-gray-900 rounded-lg p-6 hover:border-gray-700 hover:shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 bg-gradient-to-b from-gray-900/0 to-gray-900/50">
                <div className="mb-4 bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-3 text-base">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              How PhishGuard Works
            </h2>
            <p className="text-gray-500 text-sm">
              Three simple steps to protect you from phishing attacks
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-4 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Scan</h3>
                <p className="text-gray-400 text-sm">Every link, email, or page passes through AI models with 120+ phishing indicators.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-purple-900/20 border border-purple-900/30 rounded-lg p-4 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Analyze</h3>
                <p className="text-gray-400 text-sm">PhishGuard checks domain reputation, page structure, SSL anomalies, suspicious JS scripts, and design similarity to brands.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-4 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Protect</h3>
                <p className="text-gray-400 text-sm">You get color-coded warning, detailed explanation, recommended action, and auto-block (optional).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              See PhishGuard in Action
            </h2>
            <p className="text-gray-500 text-sm">
              Watch how our extension protects you from different types of phishing attacks
            </p>
          </div>

          <div className="border border-gray-900 rounded-lg p-8 bg-gradient-to-b from-gray-900/30 to-black">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-gray-900 rounded-lg p-1">
                {demoScenarios.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveDemo(idx)}
                    className={`px-4 py-2 rounded-md text-sm transition-all font-medium ${
                      activeDemo === idx
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    Demo {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Browser mockup with larger URL bar */}
            <div className="bg-gray-950 rounded-lg p-6 border border-gray-800">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              
              {/* Larger URL Bar with shimmer effect */}
              <div className={`bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 flex items-center space-x-3 mb-6 relative overflow-hidden ${
                activeDemo === 2 ? 'animate-shimmer-border' : ''
              }`}>
                {activeDemo === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-shimmer"></div>
                )}
                <Lock className="h-4 w-4 text-gray-600 relative z-10" />
                <span className="text-gray-400 text-base font-mono relative z-10">
                  {activeDemo === 0 && 'paypa1-secure-login.com'}
                  {activeDemo === 1 && 'github.com'}
                  {activeDemo === 2 && 'amaz0n-verify-account.net'}
                </span>
              </div>
              
              <div className="mb-4">
                <h3 className="text-white font-semibold mb-2 text-lg">{demoScenarios[activeDemo].title}</h3>
                <p className="text-gray-500 text-sm">{demoScenarios[activeDemo].description}</p>
              </div>
              
              <div className="space-y-3">
                {activeDemo === 0 && (
                  <div className="relative">
                    {/* Scanning animation */}
                    <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-4 mb-3">
                      <div className="flex items-center space-x-3 text-blue-400">
                        <div className="relative">
                          <Scan className="h-5 w-5 animate-spin" />
                          <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">Scanning</span>
                            <span className="inline-flex space-x-0.5">
                              <span className="w-1 h-1 bg-blue-400 rounded-full animate-blink"></span>
                              <span className="w-1 h-1 bg-blue-400 rounded-full animate-blink animation-delay-200"></span>
                              <span className="w-1 h-1 bg-blue-400 rounded-full animate-blink animation-delay-400"></span>
                            </span>
                          </div>
                          <div className="w-full bg-blue-950 rounded-full h-1.5 mt-2 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full animate-progress-bar"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-4 animate-in fade-in slide-in-from-top-4 duration-500 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 animate-shimmer"></div>
                      <div className="flex items-start space-x-3 relative">
                        <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5 animate-pulse" />
                        <div className="flex-1">
                          <span className="text-red-400 font-semibold block mb-1">⚠️ Dangerous Phishing Site Blocked</span>
                          <p className="text-gray-400 text-sm">This site is impersonating PayPal to steal credentials. Domain registered 2 days ago.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 1 && (
                  <div className="relative">
                    <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-4 animate-in fade-in slide-in-from-top-4 duration-500 relative overflow-hidden">
                      {/* Animated validation bar that slides in */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 animate-slide-in-bar"></div>
                      <div className="flex items-start space-x-3 relative">
                        <div className="relative">
                          <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping"></div>
                        </div>
                        <div className="flex-1">
                          <span className="text-green-400 font-semibold block mb-1">✓ Website Verified Safe</span>
                          <p className="text-gray-400 text-sm">Valid SSL certificate • Established domain • No suspicious patterns detected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeDemo === 2 && (
                  <div className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 animate-shimmer"></div>
                    <div className="flex items-start space-x-3 text-blue-400 relative">
                      <div className="relative">
                        <ShieldCheck className="h-6 w-6 flex-shrink-0 animate-pulse mt-0.5" />
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-shield-glow"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold">🔍 Scanning in progress</span>
                          <span className="inline-flex space-x-0.5">
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-blink"></span>
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-blink animation-delay-200"></span>
                            <span className="w-1 h-1 bg-blue-400 rounded-full animate-blink animation-delay-400"></span>
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">Analyzing domain reputation, SSL certificate, and page structure</p>
                        <div className="mt-3 space-y-1.5 text-xs">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-500">Domain check complete</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-500">SSL verification complete</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-400">Analyzing page content...</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose PhishGuard */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-4">
            Why Choose PhishGuard
          </h2>
          <p className="text-gray-500 text-sm mb-12">
            The most advanced phishing protection available today
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">Zero-Day Protection</h3>
                  <p className="text-gray-400 text-sm">Catches brand-new phishing pages within seconds of appearing.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">AI-Powered Detection</h3>
                  <p className="text-gray-400 text-sm">Advanced heuristic engine — not just static blocklists.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">Lightning Fast</h3>
                  <p className="text-gray-400 text-sm">Lightweight design with no slowdown to your browsing experience.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">Privacy First</h3>
                  <p className="text-gray-400 text-sm">We do not log personal data. Your privacy is guaranteed.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">User-Friendly Interface</h3>
                  <p className="text-gray-400 text-sm">Beautiful UI designed for both technical and non-technical users.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-sm mb-1">2025-Ready</h3>
                  <p className="text-gray-400 text-sm">Built to detect AI-generated scams and modern threats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Protection for Everyone
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Tailored security for different user needs and scenarios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-900 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="mb-4">
                  <useCase.icon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-white font-medium mb-3">{useCase.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              What Users Say
            </h2>
            <p className="text-gray-500 text-sm">
              Trusted by thousands of users worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="group border border-gray-900 rounded-lg p-6 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all bg-gradient-to-b from-gray-900/30 to-transparent relative overflow-hidden">
                {/* Card glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-green-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-blue-500/20 ring-2 ring-gray-800 group-hover:ring-blue-500/30 transition-all">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-xs">{testimonial.role}</p>
                      <div className="flex items-center space-x-1.5 mt-1">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <Building className="w-2.5 h-2.5 text-white" />
                        </div>
                        <p className="text-gray-600 text-xs">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Choose the plan that fits your needs. Start free, upgrade anytime.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-900 rounded p-1">
              {Object.keys(pricingPlans).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setActivePricing(plan)}
                  className={`px-4 py-2 rounded text-sm transition-colors ${
                    activePricing === plan
                      ? 'bg-white text-black'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {pricingPlans[plan as keyof typeof pricingPlans].name}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="border border-gray-900 rounded-lg p-8 bg-gradient-to-b from-gray-900/30 to-black hover:border-gray-700 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-white mb-1">
                  {pricingPlans[activePricing as keyof typeof pricingPlans].name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {pricingPlans[activePricing as keyof typeof pricingPlans].subtitle}
                </p>
                <div className="text-3xl font-light text-white mb-6">
                  {pricingPlans[activePricing as keyof typeof pricingPlans].price}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pricingPlans[activePricing as keyof typeof pricingPlans].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-black font-semibold py-3 rounded-lg hover:from-green-400 hover:to-emerald-400 transition-all transform hover:scale-105 shadow-lg shadow-green-500/30 text-sm">
                {activePricing === 'free' ? 'Get Started Free' : activePricing === 'business' ? 'Contact Sales' : 'Start Pro Trial'}
              </button>
              <p className="text-center text-gray-600 text-xs mt-3">
                {activePricing === 'free' && 'No credit card required'}
                {activePricing === 'pro' && '7-day free trial • Cancel anytime'}
                {activePricing === 'business' && 'Custom pricing for your team'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about PhishGuard
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group border border-gray-900 rounded-lg p-6 py-7 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-gradient-to-b from-transparent to-gray-900/20 hover:from-gray-900/20">
                <h3 className="text-white font-semibold mb-3 text-left group-hover:text-blue-100 transition-colors">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-left">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-4">
            Get Protected Today
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Join thousands of users who trust PhishGuard to keep them safe online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <button className="bg-white text-black px-5 py-2.5 rounded hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Chrome</span>
            </button>
            <button className="bg-white text-black px-5 py-2.5 rounded hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Firefox</span>
            </button>
            <button className="bg-white text-black px-5 py-2.5 rounded hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Edge</span>
            </button>
            <button className="bg-white text-black px-5 py-2.5 rounded hover:bg-gray-200 transition-colors text-sm font-medium flex items-center justify-center space-x-2">
              <Smartphone className="h-4 w-4" />
              <span>Mobile</span>
            </button>
          </div>
          
          <p className="text-gray-600 text-xs">
            Free forever • No credit card required • 30-second setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-white text-base font-semibold">PhishGuard</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                AI-powered anti-phishing protection for everyone.
              </p>
              <p className="text-gray-600 text-xs italic mb-6">
                Built for a safer internet.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:support@phishguard.com" className="w-9 h-9 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all group">
                  <Mail className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Pages</h4>
              <div className="space-y-2.5 text-sm text-gray-500">
                <a href="#features" className="block hover:text-gray-300 transition-colors">Features</a>
                <a href="#pricing" className="block hover:text-gray-300 transition-colors">Pricing</a>
                <a href="#download" className="block hover:text-gray-300 transition-colors">Download</a>
                <a href="#demo" className="block hover:text-gray-300 transition-colors">Demo</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Legal</h4>
              <div className="space-y-2.5 text-sm text-gray-500">
                <a href="/privacy" className="block hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="/terms" className="block hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="/cookies" className="block hover:text-gray-300 transition-colors">Cookie Policy</a>
                <a href="/security" className="block hover:text-gray-300 transition-colors">Security</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Support</h4>
              <div className="space-y-2.5 text-sm text-gray-500">
                <a href="mailto:support@phishguard.com" className="block hover:text-gray-300 transition-colors">Email Support</a>
                <a href="/docs" className="block hover:text-gray-300 transition-colors">Documentation</a>
                <a href="/business" className="block hover:text-gray-300 transition-colors">Business Inquiries</a>
                <a href="/api" className="block hover:text-gray-300 transition-colors">API Access</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-xs">
              &copy; 2024 PhishGuard. Protecting users from phishing attacks worldwide.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-600">
              <a href="/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
              <span>•</span>
              <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
              <span>•</span>
              <a href="/cookies" className="hover:text-gray-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}