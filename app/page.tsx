import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden pt-16 lg:pt-20">
        {/* Kinetic Grid Background */}
        <div className="absolute inset-0 kinetic-grid -z-10 opacity-30 h-[200%] pointer-events-none"></div>

        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[921px] flex items-center px-5 sm:px-8 lg:px-20 py-12 lg:py-0 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-16 w-full items-center">
            {/* Hero Content Left (60%) */}
            <div className="lg:col-span-6 space-y-6 lg:space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1.5 rounded-full border border-primary/10">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                </svg>
                <span className="text-[11px] sm:text-xs font-bold tracking-wide uppercase">The Next Industrial Era</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline font-bold text-on-surface leading-[0.95] tracking-tighter">
                POWERING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-container">PAKISTAN&apos;S</span> <br />
                FUTURE.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-xl leading-relaxed">
                Redefining electrical infrastructure with high-precision engineering and sustainable energy architectures for 2050 and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 lg:pt-4">
                <Link 
                  href="/products"
                  className="bg-gradient-to-r from-primary to-primary-container text-white px-6 sm:px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-semibold text-sm lg:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all text-center"
                >
                  Explore Solutions
                </Link>
                <Link 
                  href="/services"
                  className="bg-white border border-slate-200 text-slate-700 px-6 sm:px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-semibold text-sm lg:text-base hover:bg-slate-50 hover:border-slate-300 transition-all text-center"
                >
                  Technical Specs
                </Link>
              </div>
            </div>

            {/* Hero Image Right (40%) */}
            <div className="lg:col-span-4 relative group mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 transform lg:-rotate-2 hover:rotate-0 transition-transform duration-700 bg-white border border-slate-100 p-1.5 sm:p-2">
                <img
                  className="rounded-xl w-full aspect-[4/5] object-cover"
                  alt="High-tech electrical control panel"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALewx4TLkm2p-7XLqa4ZukbmCIOmqmAyLvw3QDA_KuLVNeB7tC-5gtz7cDJjBFH8YfWLyWZi1Gi9MzjJ1UsGGmCdNBrEZLvExFUFEAUM1LXfvlmzIpI8b93bWgpBkEvg1nXoBF5B7GHlmqNfRXZSuPaFfPGHd86TW_qKZlQkMGSd9rJT44eWIEHGJIzz_5LgZl5iMSg5r3zWwQgHckk5q2yn4rDO5Ffj-2ERASoV8k41DJS-yYVVOdBtUKDcqNI3zIuMnENGFLvV4"
                />
                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/50 shadow-lg">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] sm:text-xs uppercase tracking-wide font-semibold text-primary mb-0.5">System Status</div>
                      <div className="text-sm sm:text-lg font-bold text-slate-900">Grid-Active Alpha</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl sm:text-2xl font-black text-secondary-container">99.9%</div>
                      <div className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {[
              { value: '30+', label: 'Years of Excellence', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { value: '500+', label: 'Projects Completed', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
              { value: '1.2GW', label: 'Energy Managed', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { value: '40+', label: 'Expert Engineers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
            ].map((stat, i) => (
              <div key={i} className="p-5 sm:p-6 lg:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-primary/10 transition-colors">
                  <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon}/>
                  </svg>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Solutions Bento Grid */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 bg-slate-50">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-10 lg:mb-16">
              <span className="text-primary font-semibold tracking-wide uppercase text-xs">Our Expertise</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 tracking-tight">
                Core <span className="text-primary">Solutions</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {[
                { icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z', title: 'L.T Panels', desc: 'High-capacity Low Tension panels for industrial power distribution.' },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'PFI Panels', desc: 'Power Factor Improvement panels to optimize energy consumption.' },
                { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', title: 'MCC Panels', desc: 'Motor Control Centers with modular withdrawal units.' },
                { icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15', title: 'ATS Panels', desc: 'Automatic Transfer Switch for seamless power switching.' },
                { icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z', title: 'Distribution Boards', desc: 'Comprehensive solutions from residential to industrial.' },
                { icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z', title: 'Solar Solutions', desc: 'Complete solar energy systems for sustainable power.', highlight: true },
              ].map((item, i) => (
                <div key={i} className={`group p-6 sm:p-8 lg:p-10 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight 
                    ? 'bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 hover:shadow-lg hover:shadow-orange-100' 
                    : 'bg-white border border-slate-100 hover:shadow-lg hover:border-slate-200'
                }`}>
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-5 lg:mb-6 group-hover:scale-110 transition-transform ${
                    item.highlight ? 'bg-orange-100 text-orange-600' : 'bg-primary/5 text-primary'
                  }`}>
                    <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                    </svg>
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 text-sm lg:text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome & Company Overview */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold tracking-wide uppercase text-xs">WELCOME</span>
              <p className="text-slate-600 text-base lg:text-lg leading-relaxed mt-4">
                Since 1991 The Zainab Engineering is a Specialized Electrical Panels &amp; Distribution Boards Manufacturer and Services Provider at client&apos;s door step and we have learned through our long-term experience in the manufacturing and services industry, to meet and exceed each customer&apos;s expectations by providing quality products and services.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/about-us"
                  className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-container transition-all"
                >
                  See Profile
                </Link>
                <Link
                  href="/products"
                  className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all"
                >
                  Our Products
                </Link>
                <Link
                  href="/services"
                  className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-50 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  'Pre-Treatment & Painting',
                  'Good Fabrication Facility',
                  'Assembling & Wiring Facility',
                  'Testing & Quality Assurance',
                ].map((title) => (
                  <div key={title} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h3 className="text-base lg:text-lg font-bold text-slate-900">{title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">Our Partners</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { name: 'Ducati Italy', details: ['Sole Importer & Authorized Dealer', 'Power Capacitors 400-440V'] },
                  { name: 'ABB Power & Automation', details: ['Channel Partner', 'All Type of Electrical Accessories'] },
                  { name: 'Electronicon Germany', details: ['Sole Importer & Authorized Dealer', 'Power Capacitors 400-440V-400-480'] },
                  { name: 'Bremas Italy', details: ['Sole Importer & Authorized Dealer', 'Changeover Switches & Selector Switches'] },
                  { name: 'MBS Germany', details: ['Sole Importer & Authorized Dealer', 'Current Transformers'] },
                ].map((partner) => (
                  <div key={partner.name} className="bg-white border border-slate-100 rounded-2xl p-6">
                    <h4 className="text-base font-bold text-slate-900 mb-3">{partner.name}</h4>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {partner.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-16">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Our Brands</h3>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-5 sm:px-8 lg:px-24 py-16 sm:py-20 lg:py-32 bg-slate-900 text-white overflow-hidden rounded-t-[2rem] lg:rounded-t-[4rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(0,80,203,0.15),_transparent_50%)]"></div>
          <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight mb-6 lg:mb-8">
                Ready to <span className="text-primary">re-engineer</span> your efficiency?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-400 mb-8 lg:mb-12 max-w-lg leading-relaxed">
                Join 200+ enterprises that trust Zainab Engineering for their critical infrastructure needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="/contact"
                  className="bg-primary text-white px-6 sm:px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-semibold text-sm lg:text-base hover:bg-primary-container transition-all shadow-lg shadow-primary/30 text-center"
                >
                  Start Consultation
                </Link>
                <Link 
                  href="/products"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 sm:px-8 lg:px-10 py-3.5 lg:py-4 rounded-full font-semibold text-sm lg:text-base hover:bg-white/20 transition-all text-center"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: '99.9%', label: 'Uptime Efficiency' },
                { value: 'ISO', label: '9001 Certified' },
                { value: '24/7', label: 'Support Available' },
                { value: 'Zero', label: 'Safety Incidents' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border border-white/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide font-semibold">{stat.label}</div>
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
