import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaPhone,
  FaBrain,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
  FaPalette,
  FaRobot,
  FaChartBar,
  FaProjectDiagram,
  FaArrowUp,
  FaQuoteLeft,
  FaStar,
  FaPlay,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaCode,
} from "react-icons/fa";

// Enhanced Logo Component
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg">
      DT
    </div>
  </div>
);

// Socials
const socials = [
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/digitran-tech/", color: "hover:text-blue-600" },
  { icon: <FaGithub />, url: "https://github.com/digitranin", color: "hover:text-gray-700" },
  { icon: <FaTwitter />, url: "https://twitter.com/digitranin", color: "hover:text-blue-400" },
  { icon: <FaEnvelope />, url: "mailto:info@digitranin.com", color: "hover:text-red-500" },
];

// Enhanced Technologies with better organization and more items
const technologies = [
  { name: "AI/ML", icon: <FaBrain size={44} className="text-blue-600" />, category: "AI" },
  { name: "React", icon: <FaReact size={40} className="text-blue-400" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-600" />, category: "Backend" },
  { name: "Python", icon: <FaPython size={40} className="text-yellow-600" />, category: "Backend" },
  { name: "AWS", icon: <FaAws size={40} className="text-yellow-500" />, category: "Cloud" },
  { name: "Docker", icon: <FaDocker size={40} className="text-blue-500" />, category: "DevOps" },
  // Additional Tech
  { name: "TypeScript", icon: <FaCode size={40} className="text-blue-700" />, category: "Frontend" },
  { name: "MongoDB", icon: <FaDatabase size={40} className="text-green-800" />, category: "Database" },
  { name: "PostgreSQL", icon: <FaDatabase size={40} className="text-indigo-600" />, category: "Database" },
  { name: "Flutter", icon: <FaMobileAlt size={40} className="text-blue-400" />, category: "Mobile" },
  { name: "FastAPI", icon: <FaPython size={40} className="text-green-700" />, category: "Backend" },
  { name: "Figma", icon: <FaPalette size={40} className="text-pink-500" />, category: "Design" },
];

// Industries with enhanced styling
const industries = [
  { name: "Banking/Finance", icon: "🏦", color: "bg-blue-100 text-blue-800" },
  { name: "Retail", icon: "🛒", color: "bg-green-100 text-green-800" },
  { name: "Healthcare", icon: "❤️", color: "bg-red-100 text-red-800" },
  { name: "Education", icon: "🎓", color: "bg-purple-100 text-purple-800" },
  { name: "Logistics", icon: "🚚", color: "bg-orange-100 text-orange-800" },
  { name: "Travel", icon: "✈️", color: "bg-sky-100 text-sky-800" },
  { name: "Real Estate", icon: "🏠", color: "bg-amber-100 text-amber-800" },
  { name: "Payments", icon: "💳", color: "bg-emerald-100 text-emerald-800" },
  { name: "SaaS", icon: "☁️", color: "bg-indigo-100 text-indigo-800" },
  { name: "AI/ML", icon: "🤖", color: "bg-pink-100 text-pink-800" },
];

// Enhanced services with better descriptions
const whatWeDo = [
  {
    icon: <FaCloud size={36} className="text-blue-700" />,
    title: "Website Solutions",
    desc: "Beautiful, performant sites & platforms to present your business at its best.",
    features: ["Responsive Design", "SEO Optimized", "Performance Focused"]
  },
  {
    icon: <FaMobileAlt size={36} className="text-green-600" />,
    title: "Mobile Apps",
    desc: "iOS & Android apps, both native and cross-platform, with a focus on stellar UX.",
    features: ["Native Development", "Cross-Platform", "App Store Optimization"]
  },
  {
    icon: <FaPalette size={36} className="text-fuchsia-700" />,
    title: "UI/UX Design",
    desc: "User-centric, research-driven design from wireframe to pixel-perfect visuals.",
    features: ["User Research", "Prototyping", "Design Systems"]
  },
  {
    icon: <FaRobot size={36} className="text-yellow-500" />,
    title: "Robotic Automation",
    desc: "RPA agents that automate repetitive tasks, boosting speed and accuracy.",
    features: ["Process Automation", "AI Integration", "Workflow Optimization"]
  },
  {
    icon: <FaDatabase size={36} className="text-purple-700" />,
    title: "Big Data & Analytics",
    desc: "Extracting insights from massive datasets to power your business decisions.",
    features: ["Data Visualization", "Predictive Analytics", "Real-time Processing"]
  },
  {
    icon: <FaProjectDiagram size={36} className="text-orange-500" />,
    title: "IoT Solutions",
    desc: "Connecting devices and automating data flows for modern, smart businesses.",
    features: ["Device Integration", "Cloud Connectivity", "Edge Computing"]
  },
  {
    icon: <FaBrain size={36} className="text-blue-400" />,
    title: "AI & Machine Learning",
    desc: "Augment your processes with custom AI and ML models.",
    features: ["Custom Models", "NLP Solutions", "Computer Vision"]
  },
  {
    icon: <FaAws size={36} className="text-pink-600" />,
    title: "ERP & Digital Product Dev",
    desc: "Integrated business management and custom digital solutions.",
    features: ["System Integration", "Custom Development", "Legacy Modernization"]
  },
];

// Enhanced work samples with better data
const works = [
  {
    title: "E-Commerce Platform",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    desc: "Scalable online marketplace for seamless shopping experiences.",
    link: "https://www.depop.com/", // GenZ Fashion
    tech: ["React", "Node.js", "MongoDB"],
    category: "E-Commerce"
  },
  {
    title: "SaaS Dashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    desc: "Real-time analytics and data visualization for SaaS products.",
    link: "https://www.elyosenergy.com", // Energy optimization SaaS startup
    tech: ["React", "Python", "AWS"],
    category: "Analytics"
  },
  {
    title: "Logistics Automation",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop",
    desc: "Efficient fleet tracking and route optimization for logistics.",
    link: "https://www.shipbob.com", // Growing e-commerce logistics platform
    tech: ["Flutter", "FastAPI", "PostgreSQL"],
    category: "Logistics"
  },
  {
    title: "Mobile Banking App",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    desc: "Secure banking application with intuitive mobile experience.",
    link: "https://www.teller.io", // Banking API startup for fintech developers
    tech: ["React Native", "Node.js", "AWS"],
    category: "FinTech"
  },
  {
    title: "Healthcare Portal",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    desc: "Telemedicine platform connecting patients and providers.",
    link: "https://www.healthtap.com", // AI-powered healthcare platform
    tech: ["React", "Python", "Docker"],
    category: "Healthcare"
  },
  {
    title: "EdTech Solution",
    img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop",
    desc: "Learning management system for interactive education.",
    link: "https://www.physicsandmathstutor.com", // Growing educational platform
    tech: ["React", "Node.js", "MongoDB"],
    category: "Education"
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup Inc.",
    content: "DigiTran transformed our vision into reality. Their expertise in AI and modern web technologies is unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "CTO, E-Commerce Pro",
    content: "The team's attention to detail and technical excellence exceeded our expectations. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, HealthTech Solutions",
    content: "Professional, innovative, and delivered on time. DigiTran is our go-to development partner.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

// Particle animation component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white opacity-10 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.id * 0.1}s`,
            animationDuration: `${particle.speed}s`,
          }}
        />
      ))}
    </div>
  );
};

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default function EnhancedDigiTranApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [successMsg, setSuccessMsg] = useState("");
  const [showThank, setShowThank] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", section: "home" },
    { label: "Services", href: "#services", section: "services" },
    { label: "Work", href: "#work", section: "work" },
    { label: "About", href: "#about", section: "about" },
      ];

  // Enhanced scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", ...navLinks.map(l => l.section)];
      let found = "home";
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) found = id;
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact form handler
const handleContactSubmit = (e) => {
  e.preventDefault();
  setShowThank(true);
  e.target.reset();
  setTimeout(() => setShowThank(false), 2000);
};

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-4 mx-auto"></div>
          <h2 className="text-white text-xl font-bold">Loading DigiTran...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      {/* Custom cursor effect */}
      <div 
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1)',
        }}
      />

      {/* Enhanced Navbar with glassmorphism */}
      <nav className="w-full bg-white shadow-lg fixed top-0 left-0 z-40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 relative">
          <a href="#home" className="flex items-center gap-2 group">
            <Logo />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight select-none group-hover:scale-105 transition-transform">
              DigiTran Technologies
            </span>
          </a>
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                href={link.href}
                key={link.label}
                className={`py-2 px-4 transition-all duration-300 rounded-lg relative overflow-hidden group ${
                  activeSection === link.section
                    ? "text-blue-700 font-bold bg-blue-50"
                    : "hover:text-blue-700 hover:bg-blue-50"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10"></div>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold ml-4 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </a>
          <button
            className="md:hidden flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars className="w-6 h-6 text-blue-800" />
          </button>

          {/* Enhanced Mobile Sidebar */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="fixed right-0 top-0 z-50 w-80 bg-white shadow-2xl h-full flex flex-col p-8 transition-transform duration-300 ease-out">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Logo />
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      DigiTran
                    </span>
                  </div>
                  <button
                    className="text-gray-400 hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <FaTimes className="w-6 h-6" />
                  </button>
                </div>
                {navLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`block text-lg py-3 px-4 mb-2 rounded-lg transition-all duration-300 ${
                      activeSection === link.section
                        ? "text-blue-700 font-bold bg-blue-50"
                        : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-6 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  onClick={() => setSidebarOpen(false)}
                >
                  Let's Talk
                </a>
              </div>
            </>
          )}
        </div>
      </nav>

      <main className="pt-2">
        {/* Enhanced Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-purple-900 text-white py-20 md:py-32 overflow-hidden">
          <ParticleBackground />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12 relative z-10">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  Transforming 
                  <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Ideas Into Reality
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                  We deliver cutting-edge digital solutions that drive innovation and accelerate your business growth.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <span>Start Your Project</span>
                  <FaRocket className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#work" 
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 group"
                >
                  <FaPlay className="group-hover:translate-x-1 transition-transform" />
                  <span>View Our Work</span>
                </a>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">20+</div>
                  <div className="text-sm text-blue-200">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">5+</div>
                  <div className="text-sm text-purple-200">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-300">10+</div>
                  <div className="text-sm text-pink-200">Clients</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse opacity-20 absolute -inset-4"></div>
                <div className="w-72 h-72 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 p-8">
                    {[FaCode, FaLightbulb, FaRocket, FaShieldAlt, FaBrain, FaCloud].map((Icon, index) => (
                      <div 
                        key={index}
                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center animate-bounce"
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <Icon className="text-white text-xl" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="bg-gray-50 py-20" id="services">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to deployment, we provide end-to-end digital solutions that transform your business
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatWeDo.map((service, index) => (
                <div
                  key={service.title}
                  className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Enhanced Industries Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Industries We Serve</h2>
              <p className="text-xl text-gray-600">Delivering specialized solutions across diverse sectors</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className={`${industry.color} p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <div className="font-semibold text-sm">{industry.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Technology Stack</h2>
              <p className="text-xl text-gray-600">Cutting-edge tools and frameworks we use to build amazing solutions</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Work Section */}
        <section className="bg-white py-20" id="work">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful projects across various industries
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, index) => (
                <div
                  key={work.title}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={work.img} 
                      alt={work.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                      {work.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {work.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tech.map((tech, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                          {tech}
                        </span>
						
                      ))}
                    </div>
					{/*/*<a 
                      href={work.link}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      View Project
                      <FaArrowUp className="rotate-45 group-hover:translate-x-1 transition-transform" />
                    </a>*/}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20" id="testimonials">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  <div className="mb-6">
                    <FaQuoteLeft className="text-3xl text-blue-200 mb-4" />
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-20" id="about">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About DigiTran
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed pt-4">
                  We are a passionate team of developers, designers, and innovators dedicated to transforming businesses through cutting-edge technology solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With over 5 years of experience and 20+ successful projects, we've helped companies across various industries achieve their digital transformation goals. Our expertise spans from AI/ML solutions to modern web and mobile applications.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
                    <div className="text-sm text-gray-600">Industries Served</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-xl shadow-lg">
                        <FaBrain className="text-2xl text-blue-600 mb-2" />
                        <h4 className="font-semibold text-gray-900">AI/ML Expertise</h4>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-lg">
                        <FaRocket className="text-2xl text-purple-600 mb-2" />
                        <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                      </div>
                    </div>
                    <div className="space-y-4 mt-8">
                      <div className="bg-white p-4 rounded-xl shadow-lg">
                        <FaShieldAlt className="text-2xl text-green-600 mb-2" />
                        <h4 className="font-semibold text-gray-900">Secure Solutions</h4>
                      </div>
                      <div className="bg-white p-4 rounded-xl shadow-lg">
                        <FaLightbulb className="text-2xl text-yellow-600 mb-2" />
                        <h4 className="font-semibold text-gray-900">Innovation Focus</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
		
<section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20" id="contact">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Let's Build Something Amazing Together
      </h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Ready to transform your ideas into reality? Get in touch with our team of experts.
      </p>
    </div>
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Info, Socials, Offices */}
      <div className="space-y-8">
        {/* Contact Methods */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <FaEnvelope className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Us</h3>
              <p className="text-blue-200">info@digitranin.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <FaPhone className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Call Us</h3>
              <p className="text-purple-200">+1 (623) 212-6015</p>
            </div>
          </div>
        </div>
        {/* Socials */}
        <div className="pt-8">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Office Cards */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* India Office */}
          <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-white/20">
            <div className="flex items-center mb-2 gap-2">
              <FaMapMarkerAlt className="text-green-300 text-xl" />
              <span className="font-bold text-lg text-green-100">India Office</span>
            </div>
            <div className="text-white mb-1 font-semibold">Innovative Minds</div>
            <div className="text-blue-100 text-sm">Devi Kripa, Manipal - 576104<br />Karnataka, India</div>
            <div className="mt-2 flex items-center gap-2 text-blue-200">
              <FaEnvelope className="text-blue-200" />
              <a href="mailto:info@digitranin.com" className="underline">info@digitranin.com</a>
            </div>
          </div>
          {/* USA Office */}
          <div className="bg-white/10 rounded-2xl p-6 flex flex-col items-start shadow-lg border border-white/20">
            <div className="flex items-center mb-2 gap-2">
              <FaMapMarkerAlt className="text-indigo-300 text-xl" />
              <span className="font-bold text-lg text-indigo-100">USA Office</span>
            </div>
            <div className="text-white mb-1 font-semibold">Innovation Park Drive</div>
            <div className="text-blue-100 text-sm">Oro Valley, AZ 85755, USA</div>
            <div className="mt-2 flex items-center gap-2 text-blue-200">
              <FaEnvelope className="text-blue-200" />
              <a href="mailto:sales@digitranin.com" className="underline">sales@digitranin.com</a>
            </div>
            <div className="mt-2 flex items-center gap-2 text-purple-200">
              <FaPhone className="text-purple-200" />
              <span>+1 (623) 212-6015</span>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative">
        <form onSubmit={e => {
          e.preventDefault();
          setShowThank(true);
          e.target.reset();
          setTimeout(() => setShowThank(false), 2000);
        }}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors"
                required
                name="name"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors"
                required
                name="email"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors"
              required
              name="subject"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              required
              name="message"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        
            {showThank && (
              <div className="text-center text-green-400 font-bold pt-4">
                Thank you! Your message has been sent.
              </div>
            )}

        </form>
      </div>
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <Logo />
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    DigiTran Technologies
                  </span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Transforming businesses through innovative digital solutions. We're your trusted partner in the digital transformation journey.
                </p>
                <div className="flex gap-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  {navLinks.filter(link => link.label !== "Let's Talk").map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white transition-colors cursor-pointer">Web Development</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Mobile Apps</li>
                  <li className="hover:text-white transition-colors cursor-pointer">AI/ML Solutions</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Cloud Services</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 DigiTran Technologies. All rights reserved. Built with ❤️ by DigiTran Team.</p>
            </div>
          </div>
        </footer>
      </main>

      <ScrollToTop />
    </div>
  );
}
