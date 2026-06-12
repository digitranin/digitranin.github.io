import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBook, FaFileAlt, FaPrint, FaUniversalAccess, FaPencilAlt,
  FaGlobe, FaBars, FaTimes, FaArrowUp, FaEnvelope, FaLinkedin,
  FaTwitter, FaCheckCircle, FaStar, FaLayerGroup, FaTabletAlt,
  FaChevronDown, FaUsers, FaAward, FaMapMarkerAlt
} from "react-icons/fa";

const useCountUp = (target, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
};

const AnimatedStat = ({ value, label, suffix = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 1800, visible);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-gray-600 mt-2 font-medium">{label}</div>
    </div>
  );
};

const services = [
  {
    icon: <FaLayerGroup size={36} className="text-orange-500" />,
    title: "Editorial Support",
    desc: "Professional editing, proofreading, and content development tailored to your publication's voice and audience.",
    features: ["Manuscript Editing", "Copyediting & Proofreading", "Content Development"],
    color: "from-orange-500/20 to-orange-600/10",
    image: "/service_editorial.png"
  },
  {
    icon: <FaPencilAlt size={36} className="text-amber-500" />,
    title: "Book & Magazine Design",
    desc: "Precision-driven, elegant typesetting and layout for both print and digital formats.",
    features: ["Page Layout & Typesetting", "Cover Design", "Adobe InDesign Workflow"],
    color: "from-amber-500/20 to-amber-600/10",
    image: "/service_design.png"
  },
  {
    icon: <FaTabletAlt size={36} className="text-orange-400" />,
    title: "eBook Production",
    desc: "Seamless conversion to EPUB, MOBI, and PDF formats ready for any digital platform worldwide.",
    features: ["EPUB 3 Production", "Fixed & Reflowable Layouts", "Multi-platform Ready"],
    color: "from-orange-400/20 to-orange-500/10",
    image: "/service_ebook.png"
  },
  {
    icon: <FaUniversalAccess size={36} className="text-amber-400" />,
    title: "Accessibility Compliance",
    desc: "Making publications inclusive for everyone - WCAG, EPUB Accessibility, and PDF/UA standards.",
    features: ["WCAG 2.1 Compliance", "Screen Reader Optimized", "EPUB Accessibility"],
    color: "from-amber-400/20 to-amber-500/10",
    image: "/service_accessibility.png"
  },
  {
    icon: <FaPrint size={36} className="text-orange-500" />,
    title: "Print Production",
    desc: "High-quality print-ready file preparation with precision and care for every title.",
    features: ["Print-ready PDFs", "Color Management", "Preflight Checks"],
    color: "from-orange-500/20 to-orange-600/10",
    image: "/service_typesetting.png"
  },
  {
    icon: <FaGlobe size={36} className="text-amber-300" />,
    title: "Digital Publishing",
    desc: "End-to-end digital publishing solutions for publishers, authors, and educational institutions globally.",
    features: ["Digital Distribution", "Interactive eBooks", "Learning Content"],
    color: "from-amber-300/20 to-amber-400/10",
    image: "/service_digital.png"
  },
];

const markets = [
  { name: "India", icon: "🇮🇳" },
  { name: "North America", icon: "🌎" },
  { name: "Europe", icon: "🌍" },
  { name: "International", icon: "🌏" },
];

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

export default function Studio7Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-orange-500 to-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${showTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <FaArrowUp size={18} />
      </button>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
              <FaBook className="text-white text-sm" />
            </div>
            <div>
              <span className={`text-xl font-extrabold tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}>Studio7</span>
              <span className={`text-xs block -mt-1 font-medium ${scrolled ? "text-orange-600" : "text-orange-300"}`}>Digital Publishing</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[["services", "Services"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`font-medium transition-colors duration-200 ${scrolled ? "text-gray-600 hover:text-orange-700" : "text-white/90 hover:text-white"}`}>
                {label}
              </button>
            ))}
            <Link to="/" className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold text-sm border ${scrolled ? "bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100" : "bg-white/10 border-white/20 text-white hover:bg-white hover:text-orange-900"}`}>
              ← DigiTran Home
            </Link>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? "text-gray-900" : "text-white"}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 pb-6 space-y-3">
            {[["services", "Services"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className="block w-full text-left text-gray-700 py-3 border-b border-gray-100 hover:text-orange-700 font-medium">
                {label}
              </button>
            ))}
            <Link to="/" className="block text-orange-700 py-3 font-semibold">← Back to DigiTran</Link>
          </div>
        )}
      </nav>

      {/* Hero — unique teal/amber editorial theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #0f2e2e 0%, #0d3d30 40%, #1a2a1a 70%, #0c1f2c 100%)" }}>
        {/* Diagonal decorative strip */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 70%)" }} />
          {/* Fine grid overlay */}
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex flex-col md:grid md:grid-cols-5 items-center gap-12 lg:gap-16">
          {/* Left: Text */}
          <div className="md:col-span-3 space-y-7 text-center md:text-left w-full">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border" style={{ background: "rgba(245,158,11,0.12)", borderColor: "rgba(245,158,11,0.35)", color: "#fbbf24" }}>
              <FaBook size={10} />
              <span>A DigiTran Technologies Division</span>
            </div>

            <h1 className="text-3xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-white">
              Crafting Stories,  <span className="block text-teal-300">One Page at a Time.</span>


            </h1>

            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              From manuscript to market — editorial, typesetting, eBook production, accessibility &amp; digital publishing for publishers worldwide.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <button
                onClick={() => scrollTo("services")}
                className="px-8 py-4 rounded-xl font-bold text-base text-gray-900 hover:scale-105 transition-all duration-300 shadow-xl"
                style={{ background: "linear-gradient(135deg, #fbbf24, #f97316)" }}
              >
                Explore Services
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-4 rounded-xl font-bold text-base text-white border border-teal-400/40 hover:bg-teal-900/30 transition-all duration-300"
              >
                Get in Touch →
              </button>
            </div>

          </div>

          {/* Right: Image with decorative frame */}
          <div className="md:col-span-2 w-full flex justify-center items-center mt-8 md:mt-0">
            <div className="relative">
              {/* Amber glow */}
              <div className="absolute inset-0 rounded-3xl blur-3xl" style={{ background: "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)", transform: "scale(1.15)" }} />
              {/* Teal corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-teal-400/60 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-amber-400/60 rounded-br-2xl" />
              <img
                src="/studio7_hero.png"
                alt="Studio7 — Publishing Solutions"
                className="relative z-10 w-full max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-2xl object-cover border border-white/10"
                style={{ filter: "drop-shadow(0 8px 40px rgba(245,158,11,0.25)) drop-shadow(0 0 80px rgba(20,184,166,0.15))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling service tags */}
      <div className="bg-white py-4 overflow-hidden border-y border-gray-100">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {["Editorial Support", "Book Design", "DTP & Typesetting", "eBook Production", "EPUB 3", "PDF/UA", "Accessibility", "Cover Design", "Print Production", "Digital Publishing", "Educational Content", "Corporate Publications"].map((tag, i) => (
            <span key={i} className="text-gray-600 font-semibold text-sm flex items-center gap-2">
              <FaBook size={10} className="text-orange-500" /> {tag}
            </span>
          ))}
          {["Editorial Support", "Book Design", "DTP & Typesetting", "eBook Production", "EPUB 3", "PDF/UA", "Accessibility", "Cover Design"].map((tag, i) => (
            <span key={`b${i}`} className="text-gray-600 font-semibold text-sm flex items-center gap-2">
              <FaBook size={10} className="text-orange-500" /> {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatedStat value={114} label="Books Typeset" />
          <AnimatedStat value={75} label="eBooks Produced" />
          <AnimatedStat value={32} label="Covers Designed" />
          <AnimatedStat value={65} label="Titles Printed" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">One source, one environment, one technology — many formats. We develop tools that automate content processing for maximum efficiency.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <div key={i} className={`group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${svc.image})` }}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <FaCheckCircle className="text-orange-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-50 py-24 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 text-orange-800 text-sm font-medium mb-4">
              <FaUsers size={12} /> About Studio7
            </div>
            <h2 className="text-2xl lg:text-[2.4rem] xl:text-4xl font-extrabold leading-tight lg:whitespace-nowrap">
              A Story of Passion for <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Books & Publishing</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-8 space-y-6 text-base">
              <p className="text-gray-600 leading-relaxed">
                Studio7 Digital Publishing was founded on a passion for books, content creation, and publishing excellence. Our journey is driven by creativity, innovation, and a commitment to delivering high-quality publishing solutions, built on trust, collaboration, and long-term partnerships.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Studio7 serves publishers, authors, educational institutions, and organizations across global markets, providing publishing, content production, design, and digital publishing services. Our team of experienced publishing professionals, graphic designers, DTP specialists, illustrators, and technology experts has contributed to a wide range of projects, including books, journals, educational content, corporate publications, digital learning materials, infographics, and technical illustrations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Working with professional publishing software and editorial workflow solutions such as Adobe InDesign, Adobe InCopy, and WoodWing Studio, we enable seamless collaboration between authors, editors, designers, and production teams, helping clients streamline content creation, review, and publishing processes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By combining publishing expertise with modern technology, we transform ideas into professionally crafted print and digital publications. Our capabilities span books, magazines, journals, catalogs, annual reports, white papers, eBooks, educational resources, and digital content assets, helping clients improve efficiency, reduce production costs, and accelerate time-to-market.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Studio7, we believe every publication tells a story. Our mission is to help clients deliver that story with clarity, quality, and impact across print, digital, and accessible formats for audiences worldwide.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Publishers", "Authors", "Educational Institutions", "Corporates"].map((tag) => (
                  <span key={tag} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 font-medium shadow-sm">{tag}</span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              {[
                { icon: <FaBook size={20} className="text-orange-500" />, title: "Publishing Expertise", desc: "20+ years of combined publishing knowledge" },
                { icon: <FaLayerGroup size={20} className="text-amber-500" />, title: "Multi-Format Output", desc: "Print, EPUB, PDF, interactive eBooks" },
                { icon: <FaUniversalAccess size={20} className="text-orange-400" />, title: "Accessibility Focus", desc: "WCAG & EPUB accessibility standards" },
                { icon: <FaGlobe size={20} className="text-amber-400" />, title: "Global Reach", desc: "Clients in India, USA, Europe & beyond" },
                { icon: <FaAward size={20} className="text-orange-600" />, title: "Quality Standards", desc: "ISO-grade quality assurance processes" },
                { icon: <FaUsers size={20} className="text-amber-600" />, title: "Expert Team", desc: "Designers, DTP & tech specialists" },
              ].map((card, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm leading-tight">{card.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-snug">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >


      {/* Why Choose Studio7 */}
      < section className="bg-white py-20" >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">Why Studio7?</h2>
            <p className="text-xl text-gray-500">Our philosophy: one source, one environment, one technology — many formats</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Fast Turnaround", desc: "Automated workflows ensure quick delivery without compromising quality." },
              { icon: "🎯", title: "Precision & Quality", desc: "Every title gets meticulous attention from our expert team of specialists." },
              { icon: "🔧", title: "Custom Tooling", desc: "We build proprietary tools to automate Adobe InDesign workflows at scale." },
              { icon: "🌐", title: "Multi-Format Output", desc: "From a single source — print PDFs, EPUB 3, accessible PDFs, and more." },
              { icon: "♿", title: "Accessibility First", desc: "We ensure publications are inclusive and compliant with global standards." },
              { icon: "🤝", title: "Long-term Partnerships", desc: "We build lasting relationships with publishers, not just one-time projects." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact */}
      < section id="contact" className="bg-gradient-to-br from-orange-50 to-amber-50 py-24 text-gray-900" >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 text-orange-800 text-sm font-medium mb-8">
            <FaEnvelope size={12} /> Let's work together
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
            Ready to publish your
            <span className="block bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">next great work?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Tell us about your project — whether it's a single title or a full publishing program, we'd love to collaborate.
          </p>
          <a
            href="mailto:info@digitranin.com"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/30 mb-10"
          >
            <FaEnvelope /> info@digitranin.com
          </a>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/company/digitran-tech/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white shadow-sm border border-gray-200 rounded-lg flex items-center justify-center text-orange-600 hover:bg-orange-50 transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com/digitranin" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white shadow-sm border border-gray-200 rounded-lg flex items-center justify-center text-orange-400 hover:bg-orange-50 transition-all duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="mailto:info@digitranin.com" className="w-12 h-12 bg-white shadow-sm border border-gray-200 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition-all duration-300">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-gray-100 py-12 text-gray-900 border-t border-gray-200" >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <FaBook className="text-white text-sm" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-gray-900">Studio7 Digital Publishing</div>
                <div className="text-xs text-orange-600">A division of DigiTran Technologies</div>
              </div>
            </div>
            <div className="flex gap-8 text-sm text-gray-600">
              {[["services", "Services"], ["about", "About"], ["contact", "Contact"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-orange-700 font-medium transition-colors">{label}</button>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm text-center ">
            <p>© Studio7 Digital Publishing — <br className="md:hidden" />DigiTran Technologies. All rights reserved.</p>
            <Link to="/" className="hidden sm:inline-block text-orange-700 hover:text-orange-900 transition-colors font-medium">
              ← Back to DigiTran Home
            </Link>
          </div>
        </div>
      </footer >

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div >
  );
}
