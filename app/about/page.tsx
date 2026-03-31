import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'About Us | Zainab Engineering',
  description: 'Learn about Zainab Engineering - Over 30 years of excellence in electrical panel manufacturing and power solutions in Pakistan.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[400px] lg:min-h-[600px] flex items-center px-5 sm:px-8 lg:px-24 py-12 lg:py-20 overflow-hidden bg-slate-50">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center w-full">
            <div className="space-y-5 lg:space-y-8">
              <span className="inline-block py-1.5 px-4 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase rounded-full">
                Our Story
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Engineering <br className="hidden sm:block" />
                <span className="text-primary">Excellence</span> <br className="hidden sm:block" />
                Since 1991.
              </h1>
              <p className="text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed">
                Zainab Engineering Company has been at the forefront of Pakistan&apos;s industrial evolution, delivering precision-engineered electrical solutions that power the nation&apos;s progress.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-8 bg-primary/5 blur-3xl rounded-full hidden lg:block"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRflbPt4ToAIuHa_fHNZTf2p6feJnZcx8rDYN9oCUd2N636RP2hLK3N_o5lFFcSO67aNqItkDjUayU5IOzGltPAsw_MDA3JYjQhwMS_V_vuGcqTRrfcEdZcLqZF2on-lV48uD4CndGT5AU1DkRpug7zO_iO3r6QJaUw-8KOT3mGDmnb2layhuhyw_kB34SemU2ZOuloCaY_JKAZxYbMY-QL7-NraIrTY4ktgAzFnSSv5A2ogg3_etQUlCi0uI7JSATNzWvPXuDDgQ"
                  alt="Zainab Engineering Facility"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 lg:px-24 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 lg:mb-8">
                  Who We Are
                </h2>
                <div className="space-y-4 lg:space-y-6 text-slate-600 leading-relaxed text-sm lg:text-base">
                  <p>
                    Zainab Engineering Company is a premier manufacturer of electrical panels and power distribution systems based in Faisalabad, Pakistan. Founded in 1991, we have grown to become one of the most trusted names in the Pakistani electrical industry.
                  </p>
                  <p>
                    Our state-of-the-art manufacturing facility spans over 20,000 square feet, equipped with the latest technology and manned by over 40 skilled engineers and technicians. We are proud to be ISO 9001:2008 certified, reflecting our commitment to quality and continuous improvement.
                  </p>
                  <p>
                    Under the visionary guidance of Muhammad Irfan Majeed (Technical Advisor), we continue to push the boundaries of electrical engineering, delivering innovative solutions that meet the evolving needs of Pakistan&apos;s industrial sector.
                  </p>
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6">
                <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100">
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-slate-900">Our Mission</h3>
                  <p className="text-slate-600 text-sm lg:text-base">
                    To provide world-class electrical engineering solutions that power Pakistan&apos;s industrial growth while maintaining the highest standards of quality, safety, and customer satisfaction.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100">
                  <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-slate-900">Our Vision</h3>
                  <p className="text-slate-600 text-sm lg:text-base">
                    To be recognized as Pakistan&apos;s leading electrical panel manufacturer, setting industry benchmarks for innovation, reliability, and sustainable energy solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-primary font-semibold tracking-wide uppercase text-xs">Core Principles</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3 tracking-tight">Our Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Quality First', desc: 'Uncompromising standards in every component.' },
                { icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', title: 'Innovation', desc: 'Pushing boundaries through continuous R&D.' },
                { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', title: 'Reliability', desc: 'Systems built for demanding environments.' },
                { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', title: 'Customer Focus', desc: 'Tailored solutions for client needs.' },
              ].map((item, i) => (
                <div key={i} className="group bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-screen-2xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
              <div className="lg:w-1/3 lg:sticky lg:top-32">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4 lg:mb-6">Our Team</h2>
                <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                  Behind every successful project is a team of 40+ dedicated specialists. Our engineers, technicians, and strategists are the backbone of Zainab Engineering.
                </p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full">
                {[
                  { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', title: 'Systems Engineering', desc: 'Designers of complex grid architectures.' },
                  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'R&D Department', desc: 'Pioneering sustainable energy tech.' },
                  { icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', title: 'Production Experts', desc: 'Managing high-precision assembly lines.' },
                  { icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z', title: 'Client Success', desc: 'Ensuring project timelines and satisfaction.' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-100">
                    <div className="text-primary mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-slate-900">Certifications & Standards</h2>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {[
                { icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', title: 'ISO 9001:2008', desc: 'Quality Management' },
                { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'IEC Standards', desc: 'International Compliance' },
                { icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Green Energy', desc: 'Sustainable Practices' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 w-full sm:w-56">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                  </svg>
                  <h3 className="font-bold text-base lg:text-lg text-slate-900">{item.title}</h3>
                  <p className="text-xs lg:text-sm text-slate-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
