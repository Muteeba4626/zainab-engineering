"use client";

import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// Section data for the About page
const sections = [
  {
    id: "mission",
    title: "Our Mission",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    content: `To provide a level of service that will exceed the expectations of our clients, maintain the highest level of quality and allow our employees the opportunity to grow and prosper. To instil confidence with all parties by professionally managing all aspects of each and every project be it large or small.`,
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    content: `We act with Integrity in all of our interactions never compromising our business ethics. This is the cornerstone of who we are as a company, and is essential to our future success.`,
  },
  {
    id: "values",
    title: "Our Values",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    content: `The company has clear values, which are:`,
    bulletPoints: [
      { title: "Safety", description: "We care about people" },
      { title: "Reliability", description: "We have integrity" },
      { title: "Responsiveness", description: "We listen to what you say" },
    ],
    extraContent: `We have a proven track record of effectively delivering diverse projects to a broad range of customers.`,
  },
  {
    id: "customer-care",
    title: "Customer Care",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    content: `The management of The Zainab Engineering believes that customer (client) satisfaction is an important key to the success of our business. This message is cascaded throughout the company.

We have developed a comprehensive approach to customer care and to minimising defects on all our schemes. Our objective is to achieve customer satisfaction and repeat business by providing electrical solutions that conform to agreed requirements.

The Zainab Engineering has built its foundations on relationships with partners, associations, clients, contractors, and employees. Our reputation is based upon recommendations and this has helped set us apart from our competitors.`,
    bulletPoints: [
      { title: "", description: "Be polite, friendly and courteous" },
      { title: "", description: "Maintain a high stand of professionalism" },
      { title: "", description: "Carry cooperative and flexible attitudes" },
      { title: "", description: "Acknowledge concerns" },
      { title: "", description: "Be informative" },
      { title: "", description: "Listen to feedback" },
    ],
    bulletTitle: "The code of conduct at The Zainab Engineering stems from traditional values within our workforce. Trust, honesty and understanding encompass many of our beliefs:",
  },
  {
    id: "equal-opportunity",
    title: "Equal Opportunity Policy",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    content: `The Zainab Engineering is an equal Opportunity employer. No applicant or employee receives less favorable treatment on racial, ethnic, sexual, disability or religious grounds.

We are committed to providing a working environment that is free from discrimination. Therefore, the company will try to ensure that no potential or actual member of staff will receive less favorable treatment on the grounds of ethnic origin, color, gender, disability, marital status, age, sexuality, or religion.

The Zainab Engineering undertakes to review periodically its selection criteria and procedures to maintain a system where individuals are selected, promoted and treated solely on the basis of their merits and abilities.`,
  },
  {
    id: "team",
    title: "Our Team",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    content: `We have employed a professional, prolific, experienced and dedicated team of around 40 people who are adept in their work related to manufacturing. These professionals work in tandem with each other to complete the task within the stipulated time frame. Hence, each product which comes out of the production unit is dexterously designed and constructed and of superior quality and finish.`,
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    content: `Our quality experts supervise production at every stage right from procurement of raw materials to the final finished product.

Equipped with the latest and sophisticated machinery, instruments technology and skilled team ensures production of the most superior, reliable and cost effective products.`,
  },
];

export default function AboutUsPage() {
  // Handle hash scroll on page load
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
        {/* Kinetic Grid Background */}
        <div className="absolute inset-0 kinetic-grid -z-10 opacity-30 h-[200%] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 px-5 sm:px-8 lg:px-20 max-w-screen-2xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/10 mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-xs font-bold tracking-wide uppercase">Since 1991</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-headline font-bold text-on-surface leading-tight tracking-tighter mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">
                Zainab Engineering
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
              Specialized Electrical Panels & Distribution Boards Manufacturer and Services Provider, 
              meeting and exceeding each customer&apos;s expectations by providing quality products and services.
            </p>
          </div>
        </section>

        {/* Sections */}
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <div className="space-y-20 lg:space-y-32">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-40"
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 lg:gap-16 items-center`}
                >
                  {/* Icon/Visual Side */}
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary-container rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                        <svg className="w-12 h-12 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={section.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-2/3">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-slate-900 mb-6">
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {section.content.split("\n\n").map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-slate-600 leading-relaxed mb-4"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.bulletTitle && (
                        <p className="text-slate-600 leading-relaxed mb-4 mt-6">
                          {section.bulletTitle}
                        </p>
                      )}

                      {section.bulletPoints && (
                        <ul className="mt-4 space-y-3">
                          {section.bulletPoints.map((point, bIndex) => (
                            <li
                              key={bIndex}
                              className="flex items-start gap-3 text-slate-600"
                            >
                              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                                <svg
                                  className="w-4 h-4 text-primary"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </span>
                              <span>
                                {point.title && (
                                  <strong className="text-slate-900">
                                    {point.title}
                                    {point.description && " – "}
                                  </strong>
                                )}
                                {point.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.extraContent && (
                        <p className="text-slate-600 leading-relaxed mt-6">
                          {section.extraContent}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < sections.length - 1 && (
                  <div className="mt-20 lg:mt-32 border-b border-slate-200"></div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="relative px-5 sm:px-8 lg:px-24 py-16 sm:py-20 lg:py-32 bg-slate-900 text-white overflow-hidden rounded-t-[2rem] lg:rounded-t-[4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(0,80,203,0.15),_transparent_50%)]"></div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mb-6">
              Ready to <span className="text-primary">Work Together?</span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-400 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              Let us help you with your electrical panel and distribution board needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-semibold text-base transition-all shadow-lg shadow-primary/30"
            >
              Contact Us Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
