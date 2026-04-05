"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Industries served
const industries = [
  "Textile Processing", "Textile Spinning", "Textile Weaving", "Food Industries",
  "Chemical Industries", "Banks", "Fertilizer", "Pharmaceuticals",
  "Power Generation & Distribution", "Schools/Colleges & Universities",
  "Leisure Centres/Fitness Clubs", "Hospital Installations", "Office Developments",
  "Retail Developments", "Light and heavy industrial", "Hotels",
  "Apartments and Penthouses", "Sports Centres", "Restaurants",
  "Health and Fitness Centres", "Social Housing"
];

// Facilities
const facilities = [
  { title: "Pre-Treatment & Painting", image: "/images/about/enamel.png" },
  { title: "Good Fabrication Facility", image: "/images/about/welding.png" },
  { title: "Assembling & Wiring Facility", image: "/images/about/wires.png" },
  { title: "Testing & Quality Assurance", image: "/images/about/testing.png" },
];

export default function AboutUsPage() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="absolute inset-0 kinetic-grid -z-10 opacity-30 h-[400%] pointer-events-none"></div>

        {/* Hero Section with Background Image */}
        <section className="relative py-20 lg:py-32 px-5 sm:px-8 lg:px-20">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/about/handshake.png"
              alt="Partnership"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 max-w-screen-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm font-bold tracking-wide uppercase">Established Since 1991</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold text-white leading-tight tracking-tighter mb-6">
              About <span className="text-primary">Zainab Engineering</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Specialized Electrical Panels & Distribution Boards Manufacturer and Services Provider,
              delivering quality products and exceptional service to customers across Pakistan.
            </p>
          </div>
        </section>

        {/* About Company Section */}
        <section id="about-company" className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Who We Are</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 mb-6 tracking-tight">
                  About Our <span className="text-primary">Company</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  THE ZAINAB ENGINEERING is a wholly owned private company offering contracting services, 
                  particularly in the public and private sectors throughout Pakistan. In response to market 
                  demands, the Company has concentrated on developing a broad range of in-house expertise 
                  specializing in electrical panel manufacturing and installation services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We manufacture Electrical Panels in varied standard and customized configurations per 
                  client specifications to meet various industrial requirements.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all">
                    <div className="aspect-square relative">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-sm lg:text-base">{facility.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 tracking-tight">
                Industries We <span className="text-primary">Serve</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 hover:border-primary hover:text-primary transition-colors"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section id="mission" className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide a level of service that will exceed the expectations of our clients, maintain 
                  the highest level of quality and allow our employees the opportunity to grow and prosper. 
                  To instil confidence with all parties by professionally managing all aspects of each and 
                  every project be it large or small.
                </p>
              </div>

              {/* Vision */}
              <div id="vision" className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow scroll-mt-24">
                <div className="w-14 h-14 bg-secondary-container/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-secondary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  We act with Integrity in all of our interactions never compromising our business ethics. 
                  This is the cornerstone of who we are as a company, and is essential to our future success.
                </p>
              </div>

              {/* Values */}
              <div id="values" className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow scroll-mt-24">
                <div className="w-14 h-14 bg-tertiary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-headline font-bold text-slate-900 mb-4">Our Values</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>Safety</strong> – We care about people
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>Reliability</strong> – We have integrity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <strong>Responsiveness</strong> – We listen to what you say
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Care */}
        <section id="customer-care" className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Commitment</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 mb-6 tracking-tight">
                  Customer <span className="text-primary">Care</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The management of The Zainab Engineering believes that customer satisfaction is an important 
                  key to the success of our business. This message is cascaded throughout the company.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We have developed a comprehensive approach to customer care and to minimising defects on all 
                  our schemes. Our objective is to achieve customer satisfaction and repeat business by providing 
                  electrical solutions that conform to agreed requirements.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The Zainab Engineering has built its foundations on relationships with partners, associations, 
                  clients, contractors, and employees. Our reputation is based upon recommendations and this has 
                  helped set us apart from our competitors.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-headline font-bold text-slate-900 mb-6">Our Code of Conduct</h3>
                <p className="text-slate-600 mb-6">
                  The code of conduct at The Zainab Engineering stems from traditional values within our workforce. 
                  Trust, honesty and understanding encompass many of our beliefs:
                </p>
                <ul className="space-y-3">
                  {[
                    "Be polite, friendly and courteous",
                    "Maintain a high standard of professionalism",
                    "Carry cooperative and flexible attitudes",
                    "Acknowledge concerns",
                    "Be informative",
                    "Listen to feedback"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
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
        </section>

        {/* Equal Opportunity Policy */}
        <section id="equal-opportunity" className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Policy</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 mb-6 tracking-tight">
              Equal Opportunity <span className="text-primary">Policy</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Zainab Engineering is an equal Opportunity employer. No applicant or employee receives 
              less favorable treatment on racial, ethnic, sexual, disability or religious grounds.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We are committed to providing a working environment that is free from discrimination. Therefore, 
              the company will try to ensure that no potential or actual member of staff will receive less 
              favorable treatment on the grounds of ethnic origin, color, gender, disability, marital status, 
              age, sexuality, or religion.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The Zainab Engineering undertakes to review periodically its selection criteria and procedures 
              to maintain a system where individuals are selected, promoted and treated solely on the basis 
              of their merits and abilities.
            </p>
          </div>
        </section>

        {/* Our Team */}
        <section id="team" className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 bg-slate-50 scroll-mt-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 p-6 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">40+</div>
                    <div className="text-slate-600 font-medium">Team Members</div>
                  </div>
                  <div className="bg-secondary-container/20 p-6 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-secondary-container mb-2">30+</div>
                    <div className="text-slate-600 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-tertiary/10 p-6 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-tertiary mb-2">500+</div>
                    <div className="text-slate-600 font-medium">Projects Completed</div>
                  </div>
                  <div className="bg-slate-100 p-6 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold text-slate-700 mb-2">100%</div>
                    <div className="text-slate-600 font-medium">Client Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our People</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 mb-6 tracking-tight">
                  Our <span className="text-primary">Team</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We have employed a professional, prolific, experienced and dedicated team of around 40 people 
                  who are adept in their work related to manufacturing. These professionals work in tandem with 
                  each other to complete the task within the stipulated time frame.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Hence, each product which comes out of the production unit is dexterously designed and 
                  constructed and of superior quality and finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Satisfaction & Feedback */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Feedback</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 tracking-tight">
                Client Satisfaction & <span className="text-primary">Feedback</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-headline font-bold text-slate-900 mb-4">Quality Monitoring</h3>
                <p className="text-slate-600 leading-relaxed">
                  At The Zainab Engineering, we are constantly working to improve our quality of service to our 
                  customers and want to hear feedback from our stakeholders. In order to maintain our continuing 
                  high standards we issue a customer satisfaction report on all completed projects.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-xl font-headline font-bold text-slate-900 mb-4">Survey Solutions</h3>
                <p className="text-slate-600 leading-relaxed">
                  We have implemented a survey solution that enables clients to easily submit their insights, 
                  performance score and feedback. This way we constantly monitor the quality of workmanship 
                  through to the quality of management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Local Communities */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-20 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Community</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 mb-6 tracking-tight">
                  Supporting Local <span className="text-primary">Communities</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The Zainab Engineering is passionate about providing long-term employment opportunities within 
                  the communities in which we work. We understand that education and training are fundamental in 
                  addressing issues of aspiration and attainment.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We employ local labour and we recognise the importance of recruiting local people and how this 
                  can stimulate economic regeneration within the community through wealth circulation.
                </p>
              </div>
              <div>
                <span className="text-primary font-semibold tracking-wide uppercase text-sm">Development</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-slate-900 mt-3 mb-6 tracking-tight">
                  Training & <span className="text-primary">Apprenticeships</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The Zainab Engineering is committed to the sustainable future of the industry and offers 
                  training and development opportunities in a wide range of electrical skills.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Over the years we have consistently demonstrated commitment to young people by striving to 
                  provide sustainable employment and skills development opportunities in the community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section id="quality-assurance" className="relative py-16 lg:py-24 px-5 sm:px-8 lg:px-20 scroll-mt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
          <div className="absolute inset-0">
            <Image
              src="/images/about/quality.png"
              alt="Quality Assurance"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-20 max-w-screen-2xl mx-auto">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Standards</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-white mt-3 mb-6 tracking-tight">
                Quality <span className="text-primary">Assurance</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Our quality experts supervise production at every stage right from procurement of raw materials 
                to the final finished product.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                Equipped with the latest and sophisticated machinery, instruments, technology and skilled team 
                ensures production of the most superior, reliable and cost effective products.
              </p>
              <p className="text-white/80 leading-relaxed">
                We manufacture Electrical Panels in varied standard and customized configurations per client 
                specification to meet the various industrial requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-5 sm:px-8 lg:px-24 py-16 sm:py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(0,80,203,0.15),_transparent_50%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mb-6">
              Ready to <span className="text-primary">Work Together?</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Let us help you with your electrical panel and distribution board needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-primary/30"
              >
                Contact Us Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all border border-white/20"
              >
                View Our Products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
