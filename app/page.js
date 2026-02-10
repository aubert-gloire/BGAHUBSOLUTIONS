'use client'

import { Code2, Brain, TrendingUp, Menu, X, ArrowRight, Zap, Cpu, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen relative">
      {/* Floating Particles */}
      <div className="particle" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
      <div className="particle" style={{ top: '20%', left: '80%', animationDelay: '2s' }}></div>
      <div className="particle" style={{ top: '40%', left: '15%', animationDelay: '4s' }}></div>
      <div className="particle" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
      <div className="particle" style={{ top: '80%', left: '20%', animationDelay: '3s' }}></div>
      <div className="particle" style={{ top: '30%', left: '50%', animationDelay: '5s' }}></div>
      <div className="particle" style={{ top: '70%', left: '60%', animationDelay: '2.5s' }}></div>
      <div className="particle" style={{ top: '15%', left: '90%', animationDelay: '4.5s' }}></div>

      {/* Cursor Glow Effect */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139, 127, 232, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <nav className="fixed w-full bg-bga-primary/90 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                {/* Hexagon logo with layered effect */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8B7FE8' }} />
                      <stop offset="100%" style={{ stopColor: '#B4A7FF' }} />
                    </linearGradient>
                    <linearGradient id="logoGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#6B5CE7' }} />
                      <stop offset="100%" style={{ stopColor: '#8B7FE8' }} />
                    </linearGradient>
                  </defs>
                  {/* Background hexagon */}
                  <polygon
                    points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                    fill="url(#logoGradient1)"
                    opacity="0.3"
                  />
                  {/* Main hexagon */}
                  <polygon
                    points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
                    fill="url(#logoGradient2)"
                  />
                  {/* Inner design - B */}
                  <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fill="white"
                    fontSize="40"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    B
                  </text>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-tight">BGA HUB</span>
                <span className="text-[10px] text-bga-accent tracking-widest uppercase leading-tight">Solutions</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about-founder" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="px-6 py-2.5 bg-bga-accent rounded-full text-white font-semibold hover:bg-bga-purple transition-all hover:shadow-lg hover:shadow-bga-accent/50">Contact Us</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bga-primary border-t border-white/10">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-300 hover:text-white transition">Home</a>
              <a href="#about-founder" className="block py-2 text-gray-300 hover:text-white transition">About</a>
              <a href="#services" className="block py-2 text-gray-300 hover:text-white transition">Services</a>
              <a href="#contact" className="block py-2 text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-block animate-fade-in">
              <span className="text-bga-accent text-sm font-semibold tracking-wider uppercase">
                Premier Technology Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight animate-slide-up">
              <span className="text-white">EMPOWERING</span>
              <br />
              <span className="text-white">INNOVATION THROUGH</span>
              <br />
              <span className="text-shimmer">TECHNOLOGY</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              Transforming businesses by delivering innovative solutions that drive success
              and create value for organizations of all sizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
              <a
                href="#contact"
                className="group px-8 py-4 bg-bga-accent rounded-full text-white font-semibold hover:bg-bga-purple transition-all hover:shadow-lg hover:shadow-bga-accent/50 hover:scale-105 transform flex items-center gap-2"
              >
                Contact Us
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#services"
                className="group px-8 py-4 border-2 border-white/20 rounded-full text-white font-semibold hover:bg-white/5 transition hover:border-white/40 hover:scale-105 transform flex items-center gap-2"
              >
                Explore Details
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>


        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-bga-secondary/20">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400 animate-fade-in">
              Powering Innovation for Companies Worldwide
            </p>
          </div>

          {/* Network connection lines */}
          <div className="relative h-80 mb-12">
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(139, 127, 232, 0.2)' }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(139, 127, 232, 0.5)' }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(139, 127, 232, 0.2)' }} />
                </linearGradient>
              </defs>

              {/* Connection lines creating network effect */}
              <line x1="10%" y1="60%" x2="22%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
              <line x1="22%" y1="45%" x2="40%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
              <line x1="40%" y1="35%" x2="50%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
              <line x1="50%" y1="25%" x2="60%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
              <line x1="60%" y1="35%" x2="78%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />
              <line x1="78%" y1="45%" x2="90%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.5" />

              {/* Additional cross connections */}
              <line x1="22%" y1="45%" x2="50%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
              <line x1="50%" y1="25%" x2="78%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
              <line x1="40%" y1="35%" x2="60%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
            </svg>

            {/* Company logos positioned on the network */}
            <div className="absolute inset-0" style={{ zIndex: 2 }}>
              <div className="relative w-full h-full">
                {/* Microsoft - Left */}
                <div className="absolute" style={{ top: '60%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#00A4EF]/30 rounded-xl hover:border-[#00A4EF] hover:bg-[#00A4EF]/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="text-[#00A4EF] font-semibold text-base group-hover:text-white transition-colors">Microsoft</span>
                  </div>
                </div>

                {/* Google */}
                <div className="absolute" style={{ top: '45%', left: '22%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#4285F4]/30 rounded-xl hover:border-[#4285F4] hover:bg-[#4285F4]/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="font-semibold text-base">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#DB4437]">o</span>
                      <span className="text-[#F4B400]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#0F9D58]">l</span>
                      <span className="text-[#DB4437]">e</span>
                    </span>
                  </div>
                </div>

                {/* Amazon */}
                <div className="absolute" style={{ top: '35%', left: '40%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#FF9900]/30 rounded-xl hover:border-[#FF9900] hover:bg-[#FF9900]/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="text-[#FF9900] font-semibold text-base group-hover:text-white transition-colors">Amazon</span>
                  </div>
                </div>

                {/* Meta - Top Center */}
                <div className="absolute" style={{ top: '25%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#0668E1]/30 rounded-xl hover:border-[#0668E1] hover:bg-[#0668E1]/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="text-[#0668E1] font-semibold text-base group-hover:text-white transition-colors">Meta</span>
                  </div>
                </div>

                {/* Apple */}
                <div className="absolute" style={{ top: '35%', left: '60%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/30 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="text-white/90 font-semibold text-base group-hover:text-white transition-colors">Apple</span>
                  </div>
                </div>

                {/* Netflix */}
                <div className="absolute" style={{ top: '45%', left: '78%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#E50914]/30 rounded-xl hover:border-[#E50914] hover:bg-[#E50914]/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="text-[#E50914] font-semibold text-base group-hover:text-white transition-colors">Netflix</span>
                  </div>
                </div>

                {/* Tesla - Right */}
                <div className="absolute" style={{ top: '60%', left: '90%', transform: 'translate(-50%, -50%)' }}>
                  <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#CC0000]/30 rounded-xl hover:border-[#CC0000] hover:bg-[#CC0000]/10 transition-all duration-300 hover:scale-110 cursor-pointer group">
                    <span className="text-[#CC0000] font-semibold text-base group-hover:text-white transition-colors">Tesla</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-bga-accent/50 transition-all hover-lift">
              <div className="text-5xl font-bold text-bga-accent mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-bga-accent/50 transition-all hover-lift">
              <div className="text-5xl font-bold text-bga-accent mb-2">250+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-bga-accent/50 transition-all hover-lift">
              <div className="text-5xl font-bold text-bga-accent mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - The BGA Pillars */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-bga-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three Pillars of Technology Excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-bga-accent/50 transition-all group hover:shadow-xl hover:shadow-bga-accent/10 hover-lift animate-scale-in glow-hover" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-bga-accent to-bga-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bga-accent transition-colors">Software Development</h3>
              <p className="text-bga-accent font-semibold mb-4">Building Digital Excellence</p>
              <p className="text-gray-300 leading-relaxed">
                Our Software Development wing creates robust, scalable code that serves as the
                bedrock of every project. This is where ideas transform into engineered reality.
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-bga-accent/50 transition-all group hover:shadow-xl hover:shadow-bga-accent/10 hover-lift animate-scale-in glow-hover" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-bga-purple to-bga-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bga-accent transition-colors">AI & Machine Learning</h3>
              <p className="text-bga-accent font-semibold mb-4">Intelligent Automation</p>
              <p className="text-gray-300 leading-relaxed">
                Our AI & ML wing brings intelligence to data, providing cognitive logic that allows
                businesses to automate and evolve with intelligent precision.
              </p>
            </div>

            {/* Digital Marketing */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-bga-accent/50 transition-all group hover:shadow-xl hover:shadow-bga-accent/10 hover-lift animate-scale-in glow-hover" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-bga-accent to-bga-purple rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bga-accent transition-colors">Digital Marketing</h3>
              <p className="text-bga-accent font-semibold mb-4">Strategic Growth</p>
              <p className="text-gray-300 leading-relaxed">
                Our Digital Marketing wing transforms technical products into market leaders
                through strategic visibility and growth hacking excellence.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-bga-accent/10 to-bga-purple/10 border border-bga-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-2xl text-white font-light italic">
                "Technology without intelligence is static, and intelligence without visibility is wasted."
              </p>
              <p className="text-gray-400 mt-4">— BGA HUB Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-founder" className="py-20 px-4 sm:px-6 lg:px-8 bg-bga-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary behind BGA HUB Solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-bga-accent/30 transition-all animate-fade-in glow-hover">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden border-4 border-bga-accent/50 hover:border-bga-accent">
                  <img
                    src="/Founder.jpeg"
                    alt="Aubert Gloire Bihibindi - Founder & CEO"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="text-5xl font-bold text-white">AG</span>';
                    }}
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">Aubert Gloire Bihibindi</h3>
                  <p className="text-bga-accent font-semibold text-xl mb-6">Founder & CEO</p>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    Leading BGA HUB Solutions with a vision to transform businesses through innovative technology.
                    With expertise spanning software development, artificial intelligence, and digital marketing,
                    Aubert brings a comprehensive approach to solving complex business challenges. His commitment
                    to excellence and innovation drives our mission to deliver cutting-edge solutions that empower
                    organizations to thrive in the digital age.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-3 group hover:scale-105 transition-transform">
                      <div className="w-10 h-10 bg-bga-accent/20 rounded-lg flex items-center justify-center group-hover:bg-bga-accent/30 transition-colors">
                        <svg className="w-5 h-5 text-bga-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <a href="mailto:aubertgloire@gmail.com" className="text-white hover:text-bga-accent transition-colors">
                        aubertgloire@gmail.com
                      </a>
                    </div>

                    <div className="flex items-center justify-center md:justify-start gap-3 group hover:scale-105 transition-transform">
                      <div className="w-10 h-10 bg-bga-accent/20 rounded-lg flex items-center justify-center group-hover:bg-bga-accent/30 transition-colors">
                        <svg className="w-5 h-5 text-bga-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <a href="tel:+250788268061" className="text-white hover:text-bga-accent transition-colors">
                        +250 788 268 061
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Service Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Three specialized hubs working in perfect harmony to deliver integrated excellence
            </p>
          </div>

          <div className="space-y-8">
            {/* The Dev Hub */}
            <div className="bg-gradient-to-r from-bga-secondary/30 to-transparent border border-bga-accent/30 rounded-2xl p-8 md:p-12 hover:border-bga-accent transition-all hover-lift animate-slide-in-left">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-bga-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">The Dev Hub</h3>
                  <p className="text-bga-accent font-semibold mb-4">Software Architecture</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Building the digital infrastructure that powers modern businesses. From concept to deployment,
                    we engineer solutions that scale.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Custom Web Apps
                    </span>
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Mobile Development
                    </span>
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Cloud Infrastructure
                    </span>
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Backend Systems
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The AI Hub */}
            <div className="bg-gradient-to-r from-bga-purple/20 to-transparent border border-bga-accent/30 rounded-2xl p-8 md:p-12 hover:border-bga-accent transition-all hover-lift animate-slide-in-right">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-bga-purple rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">The AI Hub</h3>
                  <p className="text-bga-accent font-semibold mb-4">Intelligent Automation</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Transforming raw data into actionable intelligence. Our machine learning solutions
                    automate complex processes and unlock hidden insights.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-bga-purple/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      ML Models
                    </span>
                    <span className="px-4 py-2 bg-bga-purple/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Predictive Analytics
                    </span>
                    <span className="px-4 py-2 bg-bga-purple/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Natural Language Processing
                    </span>
                    <span className="px-4 py-2 bg-bga-purple/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Computer Vision
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Growth Hub */}
            <div className="bg-gradient-to-r from-bga-accent/20 to-transparent border border-bga-accent/30 rounded-2xl p-8 md:p-12 hover:border-bga-accent transition-all hover-lift animate-slide-in-left">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-bga-accent to-bga-purple rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">The Growth Hub</h3>
                  <p className="text-bga-accent font-semibold mb-4">Digital Strategy</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Amplifying your market presence through data-driven marketing strategies.
                    We turn technical excellence into market dominance.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      SEO Optimization
                    </span>
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Performance Marketing
                    </span>
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Brand Strategy
                    </span>
                    <span className="px-4 py-2 bg-bga-accent/20 border border-bga-accent/50 rounded-lg text-sm text-white">
                      Lead Generation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-bga-secondary/30 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-xl text-gray-300">
              Ready to transform your vision into reality?
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 animate-fade-in hover:border-bga-accent/30 transition-all">
            <form
              action="https://formspree.io/f/xkovgdzv"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden subject field for better email organization */}
              <input type="hidden" name="_subject" value="New BGA Hub Solutions Contact Form Submission!" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-bga-accent focus:outline-none transition focus:ring-2 focus:ring-bga-accent/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-bga-accent focus:outline-none transition focus:ring-2 focus:ring-bga-accent/20"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-bga-accent focus:outline-none transition focus:ring-2 focus:ring-bga-accent/20"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Service Interested In *</label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-bga-accent focus:outline-none transition focus:ring-2 focus:ring-bga-accent/20 cursor-pointer"
                    style={{ backgroundImage: 'none' }}
                  >
                    <option value="" className="bg-bga-secondary text-gray-300">Select a service</option>
                    <option value="software" className="bg-bga-secondary text-white">Software Development</option>
                    <option value="ai" className="bg-bga-secondary text-white">AI & Machine Learning</option>
                    <option value="marketing" className="bg-bga-secondary text-white">Digital Marketing</option>
                    <option value="all" className="bg-bga-secondary text-white">Full Integration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Project Details *</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-bga-accent focus:outline-none transition resize-none focus:ring-2 focus:ring-bga-accent/20"
                  placeholder="Tell us about your project and what you're looking to achieve..."
                ></textarea>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Preferred Meeting Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-bga-accent focus:outline-none transition focus:ring-2 focus:ring-bga-accent/20"
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-bga-accent rounded-full text-white font-semibold hover:bg-bga-purple transition-all hover:shadow-lg hover:shadow-bga-accent/50 hover:scale-105 transform"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="text-sm text-gray-400 text-center">
                We'll respond within 24 hours to schedule your consultation.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="logoGradientFooter1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8B7FE8' }} />
                      <stop offset="100%" style={{ stopColor: '#B4A7FF' }} />
                    </linearGradient>
                    <linearGradient id="logoGradientFooter2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#6B5CE7' }} />
                      <stop offset="100%" style={{ stopColor: '#8B7FE8' }} />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                    fill="url(#logoGradientFooter1)"
                    opacity="0.3"
                  />
                  <polygon
                    points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
                    fill="url(#logoGradientFooter2)"
                  />
                  <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fill="white"
                    fontSize="40"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                  >
                    B
                  </text>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">BGA HUB SOLUTIONS</span>
            </div>
            <p className="text-gray-400">
              Centralizing Intelligence. Engineering Growth.
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} BGA HUB Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
