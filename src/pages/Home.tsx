import { useState, useEffect } from 'react';
import { Shield, AlertTriangle, CheckCircle, Globe, Download, Star, Users, ShieldCheck, Eye, Zap, Smartphone, Monitor } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDemo, setActiveDemo] = useState(0);

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Instantly detects and blocks phishing attempts before they can harm you"
    },
    {
      icon: Eye,
      title: "Smart Detection",
      description: "Advanced AI algorithms identify suspicious websites and emails"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Works seamlessly in the background without slowing down your browsing"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Active Users" },
    { icon: Shield, value: "1M+", label: "Threats Blocked" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ];

  const demoScenarios = [
    {
      title: "Phishing Email Detection",
      description: "Automatically flags suspicious emails with phishing indicators",
      status: "blocked",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Website Safety Check",
      description: "Real-time analysis of website security and reputation",
      status: "safe",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Link Verification",
      description: "Scans links before you click to prevent malicious redirects",
      status: "scanning",
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">PhishGuard</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Get Protected
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Protecting 50,000+ Users Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Stay Safe from
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Phishing</span>
              <br />Attacks Online
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              PhishGuard is your intelligent browser extension that detects and blocks phishing attempts 
              in real-time. Protect your personal information, passwords, and financial data from cyber criminals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Add to Browser Free</span>
              </button>
              <button className="border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Protection Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced security technology working 24/7 to keep you safe from online threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See PhishGuard in Action
            </h2>
            <p className="text-xl text-gray-300">
              Watch how our extension protects you from different types of phishing attacks
            </p>
          </div>

          <div className="bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-2 bg-slate-700 rounded-xl p-2">
                {demoScenarios.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDemo(index)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDemo === index
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Scenario {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 min-h-64">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${demoScenarios[activeDemo].color}`}></div>
                <span className="text-white font-semibold">{demoScenarios[activeDemo].title}</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 text-lg mb-6">{demoScenarios[activeDemo].description}</p>
                  
                  <div className="space-y-4">
                    {activeDemo === 0 && (
                      <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-red-300">
                          <AlertTriangle className="h-5 w-5" />
                          <span className="font-semibold">Phishing Detected!</span>
                        </div>
                        <p className="text-red-200 mt-2">This email contains suspicious links and has been blocked</p>
                      </div>
                    )}
                    
                    {activeDemo === 1 && (
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-green-300">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-semibold">Website is Safe</span>
                        </div>
                        <p className="text-green-200 mt-2">This website has been verified and is safe to browse</p>
                      </div>
                    )}
                    
                    {activeDemo === 2 && (
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-blue-300">
                          <ShieldCheck className="h-5 w-5" />
                          <span className="font-semibold">Scanning Link...</span>
                        </div>
                        <p className="text-blue-200 mt-2">Analyzing destination URL for potential threats</p>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <Monitor className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-700 rounded"></div>
                    <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-700 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Protected Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust PhishGuard to keep them safe online
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3">
              <Globe className="h-6 w-6" />
              <span>Add to Chrome</span>
            </button>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3">
              <Globe className="h-6 w-6" />
              <span>Add to Firefox</span>
            </button>
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3">
              <Smartphone className="h-6 w-6" />
              <span>Mobile App</span>
            </button>
          </div>
          
          <p className="text-gray-400">
            Free forever • No credit card required • 30-second setup
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">PhishGuard</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PhishGuard. Protecting users from phishing attacks worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}