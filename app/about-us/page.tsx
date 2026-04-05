"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Business Partners with brand colors and logos (using CDN logos)
const businessPartners = [
  { name: "ABB", color: "#FF000F", logo: "https://cdn.worldvectorlogo.com/logos/abb-logo.svg" },
  { name: "Schneider Electric", color: "#3DCD58", logo: "https://cdn.worldvectorlogo.com/logos/schneider-electric-logo-1.svg" },
  { name: "Siemens", color: "#009999", logo: "https://cdn.worldvectorlogo.com/logos/siemens-logo-1.svg" },
  { name: "Hyundai", color: "#002C5F", logo: "https://cdn.worldvectorlogo.com/logos/hyundai-motor-company-2.svg" },
  { name: "Legrand", color: "#E31937", logo: "https://cdn.worldvectorlogo.com/logos/legrand-1.svg" },
  { name: "Hager", color: "#E30613", logo: "https://cdn.worldvectorlogo.com/logos/hager-1.svg" },
  { name: "Eaton", color: "#005587", logo: "https://cdn.worldvectorlogo.com/logos/eaton-1.svg" },
  { name: "Fuji Electric", color: "#E60012", logo: "https://cdn.worldvectorlogo.com/logos/fuji-electric.svg" },
  { name: "Socomec", color: "#003DA5", logo: "https://cdn.worldvectorlogo.com/logos/socomec.svg" },
  { name: "Mitsubishi", color: "#E60012", logo: "https://cdn.worldvectorlogo.com/logos/mitsubishi-electric-1.svg" },
  { name: "Phoenix Contact", color: "#00843D", logo: "https://cdn.worldvectorlogo.com/logos/phoenix-contact-1.svg" },
  { name: "Lovato Electric", color: "#0066B3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Lovato_Electric_logo.svg/320px-Lovato_Electric_logo.svg.png" },
  { name: "CIRCUTOR", color: "#00A651", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/CIRCUTOR_logo.svg/320px-CIRCUTOR_logo.svg.png" },
  { name: "TECO", color: "#0066B3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Teco_Electric_%26_Machinery_logo.svg/320px-Teco_Electric_%26_Machinery_logo.svg.png" },
  { name: "ETI", color: "#00843D", logo: "" },
  { name: "Telergon", color: "#E31937", logo: "" },
  { name: "ENTES", color: "#E31937", logo: "" },
  { name: "KEMAR", color: "#0066B3", logo: "" },
  { name: "GAVE", color: "#1B75BB", logo: "" },
  { name: "SMC", color: "#003DA5", logo: "" },
  { name: "T-GAMI", color: "#003DA5", logo: "" },
  { name: "TRACON", color: "#0066B3", logo: "" },
  { name: "TERASAKI", color: "#003DA5", logo: "" },
  { name: "EFEN", color: "#0066B3", logo: "" },
  { name: "MARUYASU", color: "#E60012", logo: "" },
  { name: "Finder", color: "#0071BC", logo: "" },
  { name: "Hitachi", color: "#E60012", logo: "https://cdn.worldvectorlogo.com/logos/hitachi-2.svg" },
  { name: "Ricontro", color: "#0071BC", logo: "" },
];

// Industries served
const industries = [
  "Textile Processing", "Textile Spinning", "Textile Weaving", "Food Industries",
  "Chemical Industries", "Banks", "Fertilizer", "Pharmaceuticals",
  "Power Generation & Distribution", "Schools/Colleges & Universities",
  "Hospital Installations", "Office Developments", "Retail Developments",
  "Light & Heavy Industrial", "Hotels", "Apartments", "Sports Centres",
  "Restaurants", "Health & Fitness Centres", "Social Housing"
];

export default function AboutUsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            if (entry.target.id) {
              setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-up, .slide-in-left, .slide-in-right, .scale-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-16 lg:pt-20">
        
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 px-5 sm:px-8 lg:px-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/images/about/handshake.png')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 max-w-screen-xl mx-auto text-center">
            <div className="fade-up">
              <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Established Since 1991
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white leading-tight mb-6">
                About <span className="text-primary">Zainab Engineering</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
                Specialized Electric Panels & Distribution Boards Manufacturer, 
                providing quality products and exceptional service across Pakistan.
              </p>
            </div>
          </div>
        </section>

        {/* About Company */}
        <section id="about-company" className="py-16 lg:py-20 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="fade-up text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900">
                About Our <span className="text-primary">Company</span>
              </h2>
            </div>
            <div className="fade-up max-w-4xl mx-auto">
              <p className="text-slate-600 text-lg leading-relaxed text-center mb-8">
                THE ZAINAB ENGINEERING is a wholly owned private company offering contracting services, 
                particularly in the public and private sectors throughout Pakistan. In response to market 
                demands, the Company has concentrated on developing a broad range of in-house expertise 
                specializing in electrical panel manufacturing and installation services.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed text-center">
                We manufacture Electrical Panels in varied standard and customized configurations per 
                client specifications to meet various industrial requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission - Premium Animated Cards like Tariq Electric */}
        <section id="mission" className="py-20 lg:py-28 px-5 sm:px-8 lg:px-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 scroll-mt-24 relative overflow-hidden">
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-screen-xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="fade-up text-center mb-16">
              <span className="inline-block bg-gradient-to-r from-primary/20 to-secondary-container/20 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-primary/20">
                Our Foundation
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-white">
                Vision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">Mission</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Vision Card - Premium Style */}
              <div className="slide-in-left group">
                <div className="relative h-full">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary-container to-primary rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 lg:p-12 rounded-3xl border border-slate-700/50 backdrop-blur-xl h-full overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,80,203,0.15)_0%,transparent_50%)]"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      {/* Icon with glow */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-primary/30">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                        VISION
                      </h3>
                      
                      <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
                        We act with Integrity in all of our interactions never compromising our business ethics. 
                        This is the cornerstone of who we are as a company, and is essential to our future success.
                      </p>

                      {/* Decorative line */}
                      <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-transparent transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Card - Premium Style */}
              <div className="slide-in-right group">
                <div className="relative h-full">
                  {/* Glowing border effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container via-tertiary to-secondary-container rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 lg:p-12 rounded-3xl border border-slate-700/50 backdrop-blur-xl h-full overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,210,253,0.15)_0%,transparent_50%)]"></div>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-secondary-container/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                    
                    <div className="relative z-10">
                      {/* Icon with glow */}
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-secondary-container/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-br from-secondary-container to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg shadow-secondary-container/30">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-headline font-bold text-white mb-6 group-hover:text-secondary-container transition-colors duration-300">
                        MISSION
                      </h3>
                      
                      <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
                        To provide a level of service that will exceed the expectations of our clients, maintain 
                        the highest level of quality and allow our employees the opportunity to grow and prosper.
                      </p>

                      {/* Decorative line */}
                      <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-secondary-container to-transparent transition-all duration-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Values - Premium Cards */}
            <div className="fade-up mt-16">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary-container/20 to-tertiary/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-r from-slate-800/80 via-slate-800/60 to-slate-800/80 rounded-3xl p-10 lg:p-14 border border-slate-700/50 backdrop-blur-xl">
                  <h3 className="text-3xl lg:text-4xl font-headline font-bold text-white text-center mb-12">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary-container to-tertiary">Values</span>
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-8">
                    {[
                      { icon: "shield", title: "Safety", desc: "We care about people", color: "primary", delay: 0 },
                      { icon: "check", title: "Reliability", desc: "We have integrity", color: "secondary-container", delay: 0.2 },
                      { icon: "chat", title: "Responsiveness", desc: "We listen to you", color: "tertiary", delay: 0.4 }
                    ].map((value, i) => (
                      <div key={i} className="scale-in group text-center" style={{ transitionDelay: `${value.delay}s` }}>
                        <div className={`relative mx-auto mb-6 w-20 h-20`}>
                          <div className={`absolute inset-0 bg-${value.color}/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                          <div className={`relative w-full h-full bg-gradient-to-br ${value.color === 'primary' ? 'from-primary to-primary-container' : value.color === 'secondary-container' ? 'from-secondary-container to-secondary' : 'from-tertiary to-tertiary-container'} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                            {value.icon === 'shield' && (
                              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            )}
                            {value.icon === 'check' && (
                              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            )}
                            {value.icon === 'chat' && (
                              <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <h4 className="text-white font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h4>
                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{value.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 lg:py-20 px-5 sm:px-8 lg:px-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="fade-up text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-2">
                Industries We <span className="text-primary">Serve</span>
              </h2>
            </div>
            <div className="fade-up flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Care */}
        <section id="customer-care" className="py-16 lg:py-20 px-5 sm:px-8 lg:px-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Commitment</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-2 mb-6">
                  Customer <span className="text-primary">Care</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The management of Zainab Engineering believes that customer satisfaction is an important 
                  key to the success of our business. This message is cascaded throughout the company.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our reputation is based upon recommendations and this has helped set us apart from our competitors.
                </p>
              </div>
              <div className="fade-up">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Code of Conduct</h3>
                  <ul className="space-y-4">
                    {["Be polite, friendly and courteous", "Maintain high professionalism", "Carry cooperative attitudes", "Acknowledge concerns", "Be informative", "Listen to feedback"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section id="team" className="py-16 lg:py-20 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-up grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-6 rounded-2xl text-center hover:bg-primary/20 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <div className="text-slate-600">Team Members</div>
                </div>
                <div className="bg-secondary-container/20 p-6 rounded-2xl text-center hover:bg-secondary-container/30 transition-colors">
                  <div className="text-4xl font-bold text-secondary-container mb-2">30+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="bg-tertiary/10 p-6 rounded-2xl text-center hover:bg-tertiary/20 transition-colors">
                  <div className="text-4xl font-bold text-tertiary mb-2">500+</div>
                  <div className="text-slate-600">Projects Done</div>
                </div>
                <div className="bg-slate-100 p-6 rounded-2xl text-center hover:bg-slate-200 transition-colors">
                  <div className="text-4xl font-bold text-slate-700 mb-2">100%</div>
                  <div className="text-slate-600">Satisfaction</div>
                </div>
              </div>
              <div className="fade-up">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our People</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-2 mb-6">
                  Our <span className="text-primary">Team</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We have employed a professional, experienced and dedicated team of around 40 people 
                  who are adept in manufacturing. These professionals work in tandem to complete tasks 
                  within the stipulated time frame.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Each product from our production unit is expertly designed, constructed and of superior quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section id="quality-assurance" className="py-16 lg:py-20 px-5 sm:px-8 lg:px-20 bg-slate-900 scroll-mt-24">
          <div className="max-w-screen-xl mx-auto">
            <div className="fade-up text-center">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Standards</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-white mt-2 mb-6">
                Quality <span className="text-primary">Assurance</span>
              </h2>
              <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4">
                Our quality experts supervise production at every stage from raw materials to finished product.
              </p>
              <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
                Equipped with sophisticated machinery and skilled team, we ensure production of superior, 
                reliable and cost-effective products.
              </p>
            </div>
          </div>
        </section>

        {/* Business Partners - Premium Marquee Style like Tariq Electric */}
        <section id="business-partners" className="py-20 lg:py-28 overflow-hidden scroll-mt-24 bg-gradient-to-b from-slate-50 to-white relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,80,203,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,210,253,0.05)_0%,transparent_50%)]"></div>
          
          <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-20 mb-14 relative z-10">
            <div className="fade-up text-center">
              <span className="inline-block bg-gradient-to-r from-primary/10 to-secondary-container/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4 border border-primary/20">
                Trusted Partners
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold text-slate-900">
                Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">Partners</span>
              </h2>
              <p className="text-slate-600 text-lg mt-4 max-w-2xl mx-auto">
                We are proud to partner with world-renowned electrical equipment manufacturers
              </p>
            </div>
          </div>
          
          {/* Marquee Container with gradient overlays */}
          <div className="relative">
            {/* Left gradient overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            {/* Right gradient overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 lg:w-64 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* Marquee Row 1 - Left to Right */}
            <div className="relative mb-6 overflow-hidden">
              <div className="flex partner-marquee-left">
                {[...businessPartners.slice(0, 14), ...businessPartners.slice(0, 14)].map((partner, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 mx-3 group"
                  >
                    <div className="relative bg-white px-8 py-6 rounded-2xl border-2 border-slate-100 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer min-w-[180px] h-[100px] flex items-center justify-center group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      {partner.logo ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-h-12 max-w-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <span 
                        className={`font-bold text-xl whitespace-nowrap transition-all duration-500 ${partner.logo ? 'hidden' : ''}`}
                        style={{ color: partner.color }}
                      >
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee Row 2 - Right to Left */}
            <div className="relative overflow-hidden">
              <div className="flex partner-marquee-right">
                {[...businessPartners.slice(14), ...businessPartners.slice(14)].map((partner, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 mx-3 group"
                  >
                    <div className="relative bg-white px-8 py-6 rounded-2xl border-2 border-slate-100 hover:border-secondary-container/50 hover:shadow-xl hover:shadow-secondary-container/10 transition-all duration-500 cursor-pointer min-w-[180px] h-[100px] flex items-center justify-center group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      {partner.logo ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-h-12 max-w-[140px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <span 
                        className={`font-bold text-xl whitespace-nowrap transition-all duration-500 ${partner.logo ? 'hidden' : ''}`}
                        style={{ color: partner.color }}
                      >
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Count Badge */}
          <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-20 mt-14 text-center">
            <div className="fade-up inline-flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container px-10 py-5 rounded-full shadow-xl shadow-primary/20">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-white">{businessPartners.length}+</span>
                <div className="text-left">
                  <div className="text-white/90 font-medium text-sm">International</div>
                  <div className="text-white font-bold">Brands</div>
                </div>
              </div>
              <div className="h-10 w-px bg-white/30"></div>
              <div className="text-white/90 text-sm">
                Trusted Worldwide
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-20 px-5 sm:px-8 lg:px-20 bg-gradient-to-r from-primary to-primary-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let us help you with your electrical panel and distribution board needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-colors">
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/products" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30">
                View Products
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      <style jsx>{`
        /* Fade up animation */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Slide in from left */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-in-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Slide in from right */
        .slide-in-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition-delay: 0.2s;
        }
        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* Scale in animation */
        .scale-in {
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .scale-in.animate-in {
          opacity: 1;
          transform: scale(1);
        }

        /* Marquee animations - smoother */
        @keyframes partner-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes partner-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .partner-marquee-left {
          animation: partner-scroll-left 45s linear infinite;
        }
        .partner-marquee-right {
          animation: partner-scroll-right 45s linear infinite;
        }
        .partner-marquee-left:hover,
        .partner-marquee-right:hover {
          animation-play-state: paused;
        }

        /* Gradient animation */
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }

        /* Pulse slow animation */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
