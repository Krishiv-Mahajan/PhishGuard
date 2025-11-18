import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Globe, Star, Users, ShieldCheck, Smartphone, Scan, Brain, Mail, Code, Lock, User, Building, GraduationCap, Heart, Download } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);
  const [activePricing, setActivePricing] = useState('free');

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
      quote: "PhishGuard caught a fake Microsoft login page that Chrome didn't. Saved me."
    },
    {
      name: "Ananya", 
      role: "Beta Tester",
      quote: "Perfect for students like us. The AI scanner is too good."
    },
    {
      name: "CTO",
      role: "Early Partner",
      quote: "We reduced phishing incidents by 43% with PhishGuard Business."
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
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-900' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-lg font-medium">PhishGuard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
              Get Protected
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 border border-gray-900 rounded-full px-3 py-1 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm">Protecting 50,000+ Users</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
            Stay Safe from
            <span className="block text-gray-400">Phishing. Automatically.</span>
          </h1>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            AI-powered browser protection that blocks malicious links, fake login pages, and scam emails in real time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors text-sm font-medium flex items-center space-x-2">
              <Download className="h-4 w-4" />
              <span>Download Extension</span>
            </button>
            <button className="border border-gray-900 text-gray-400 px-6 py-3 rounded hover:border-gray-700 transition-colors text-sm">
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
            {features.map((feature, index) => (
              <div key={index} className="border border-gray-900 rounded-lg p-6 hover:border-gray-700 transition-colors">
                <div className="mb-4">
                  <feature.icon className="h-5 w-5 text-gray-400" />
                </div>
                <h3 className="text-white font-medium mb-3">{feature.title}</h3>
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

          <div className="border border-gray-900 rounded-lg p-6">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1 bg-gray-900 rounded p-1">
                {demoScenarios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`px-3 py-1 rounded text-xs transition-colors ${
                      activeDemo === index
                        ? 'bg-white text-black'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 rounded p-4">
              <div className="mb-4">
                <h3 className="text-white font-medium mb-1">{demoScenarios[activeDemo].title}</h3>
                <p className="text-gray-500 text-sm">{demoScenarios[activeDemo].description}</p>
              </div>
              
              <div className="space-y-2">
                {activeDemo === 0 && (
                  <div className="bg-red-900/20 border border-red-900/30 rounded p-3">
                    <div className="flex items-center space-x-2 text-red-400 text-sm">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Phishing blocked</span>
                    </div>
                  </div>
                )}
                
                {activeDemo === 1 && (
                  <div className="bg-green-900/20 border border-green-900/30 rounded p-3">
                    <div className="flex items-center space-x-2 text-green-400 text-sm">
                      <CheckCircle className="h-4 w-4" />
                      <span>Website verified</span>
                    </div>
                  </div>
                )}
                
                {activeDemo === 2 && (
                  <div className="bg-blue-900/20 border border-blue-900/30 rounded p-3">
                    <div className="flex items-center space-x-2 text-blue-400 text-sm">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Scanning in progress</span>
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-8">
            Why Choose PhishGuard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>Catches zero-day phishing pages within seconds of appearing.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>AI + heuristic engine — not just static blocklists.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>Lightweight — no slowdown to your browsing.</p>
              </div>
            </div>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>Privacy-first — we do not log personal data.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>Beautiful UI — made for non-technical people too.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                <p>Built for 2025 threats — detects AI-generated scams.</p>
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
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-gray-900 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white text-sm font-medium">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
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
            <div className="border border-gray-900 rounded-lg p-8">
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
                {pricingPlans[activePricing as keyof typeof pricingPlans].features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white text-black py-3 rounded hover:bg-gray-200 transition-colors text-sm font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm">
              Everything you need to know about PhishGuard
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-900 rounded-lg p-6">
                <h3 className="text-white font-medium mb-3">{faq.question}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
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
      <footer className="border-t border-gray-900 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm font-medium">PhishGuard</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                AI-powered anti-phishing protection for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Pages</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <a href="#" className="block hover:text-gray-300 transition-colors">Home</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Features</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Pricing</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Business</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Download Extension</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Legal</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <a href="#" className="block hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Security Practices</a>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Contact</h4>
              <div className="space-y-2 text-xs text-gray-500">
                <a href="#" className="block hover:text-gray-300 transition-colors">Support</a>
                <a href="#" className="block hover:text-gray-300 transition-colors">Business Inquiries</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-900 pt-8 text-center">
            <p className="text-gray-600 text-xs">
              &copy; 2024 PhishGuard. Protecting users from phishing attacks worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}