import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Zainab Engineering',
  description: 'Our comprehensive services include design, manufacturing, installation, testing, and maintenance of electrical systems.',
};

const services = [
  {
    icon: 'architecture',
    title: 'System Design',
    description: 'Custom electrical system design tailored to your specific requirements and industry standards.',
    features: ['Load Analysis', 'Single Line Diagrams', 'Component Selection', '3D Modeling'],
  },
  {
    icon: 'precision_manufacturing',
    title: 'Manufacturing',
    description: 'State-of-the-art panel manufacturing with precision engineering and quality assurance.',
    features: ['ISO 9001 Certified', 'Quality Testing', 'Custom Fabrication', 'Component Integration'],
  },
  {
    icon: 'construction',
    title: 'Installation',
    description: 'Professional on-site installation by certified engineers following all safety protocols.',
    features: ['Site Assessment', 'Safe Installation', 'Wiring & Cabling', 'System Integration'],
  },
  {
    icon: 'science',
    title: 'Testing & Commissioning',
    description: 'Comprehensive testing and commissioning to ensure optimal system performance.',
    features: ['Functional Testing', 'Safety Checks', 'Performance Validation', 'Documentation'],
  },
  {
    icon: 'build',
    title: 'Maintenance',
    description: 'Preventive and corrective maintenance services to keep your systems running efficiently.',
    features: ['Scheduled Maintenance', 'Emergency Repairs', 'System Upgrades', 'Spare Parts'],
  },
  {
    icon: 'support_agent',
    title: 'Technical Support',
    description: '24/7 technical support and consultation for all your electrical system needs.',
    features: ['Phone Support', 'On-site Visits', 'Remote Diagnostics', 'Training'],
  },
];

const processSteps = [
  { number: '01', title: 'Consultation', description: 'Initial meeting to understand your specific power requirements and challenges.' },
  { number: '02', title: 'Assessment', description: 'Comprehensive site survey and technical analysis of existing infrastructure.' },
  { number: '03', title: 'Design', description: 'Custom system design with detailed specifications and component selection.' },
  { number: '04', title: 'Manufacturing', description: 'Precision panel fabrication in our ISO-certified facility.' },
  { number: '05', title: 'Installation', description: 'On-site execution by certified engineers following ISO 9001 protocols.' },
  { number: '06', title: 'Support', description: 'Continuous performance monitoring and rapid-response technical support.' },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 kinetic-grid-bg">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center px-8 lg:px-24 py-20 overflow-hidden">
          <div className="max-w-4xl z-10">
            <span className="inline-block py-1 px-4 mb-6 bg-secondary-fixed text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded-full">
              Advanced Engineering Solutions
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold text-on-surface leading-[0.9] tracking-tighter mb-8">
              Precision <br /><span className="text-primary">In Motion.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We architect high-efficiency systems for the next industrial era. From grid-scale solar to precision mechanical installation.
            </p>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <div className="w-full h-full bg-surface-container-highest relative">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Industrial robotic arm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQR2AGOm52_hXQiQT5P4Q-SzGCZwkR6fY4jgbH5zg4Jz6vcvOysYkh9Pvldx8P0XwAQieO7GULuRLjSplgnrtXexC7Z-ist1rCEmX2ko4_xqZ8Wga_-zv_3gq4i95qbJ3ziWP7YtB8Shbyr8ebQyAJNktgmdX71rUhUkXxJWxhQ8bXHEu7GaYnOkAvb22o2BIHJFgUliGWWa6yPAfElDloyamiSFa8nHQgB0_L4MMqZbuw-9qS3n7aTc3d_BHMFCNyiWmjIPzhzvc"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-surface/40 to-surface"></div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="px-8 lg:px-24 py-32 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">Our Services</h2>
              <p className="text-on-surface-variant max-w-2xl">Comprehensive electrical engineering solutions from concept to completion.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-surface p-10 rounded-3xl hover:translate-y-[-8px] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,102,255,0.08)] border border-outline-variant/10"
                >
                  <div className="w-14 h-14 bg-primary-container/10 text-primary rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-4">{service.title}</h3>
                  <p className="text-on-surface-variant mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-sm mr-2">check_circle</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="px-8 lg:px-24 py-32 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mt-4 tracking-tighter">From Blueprint to Power Grid</h2>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-outline-variant/30"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="group relative text-center lg:text-left">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest text-primary flex items-center justify-center font-headline font-bold mb-6 relative z-10 group-hover:bg-primary group-hover:text-white transition-all mx-auto lg:mx-0">
                      {step.number}
                    </div>
                    <h4 className="font-headline font-bold text-xl mb-3 group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical CTA */}
        <section className="relative px-8 lg:px-24 py-32 bg-on-background text-white overflow-hidden rounded-t-[4rem]">
          <div className="absolute inset-0 opacity-10">
            <img
              className="w-full h-full object-cover"
              alt="Modern corporate building"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMwh_XRrDO4Xzb_vmIZb4uXkHv34dOsiYT-hYg9YoYkCgiwNqCSp4zMWBAOPzNlezTbQFjk6c0amghOVpJhmplbe3_QhLRoTOghb78Rekp3-4lPkDveEGJ3SRIZyTi0KXAVgBLaF_lKgx8otnCIlhQL_mnqM22sYZwvRRXDKwu1oAhxQxGe3Xv0falChxcQP0fv00nxahw4G_MZ7EDt2SktVo_nHzSeVjYD-H_IjOCqGZHaxGv2wFeqnqLtuY5NWvWanypodHCu-w"
            />
          </div>
          <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8">
                Ready to <br /><span className="text-secondary-container">re-engineer</span> your efficiency?
              </h2>
              <p className="text-xl text-surface-variant/80 mb-12 max-w-lg leading-relaxed">
                Join 200+ enterprises that trust Zainab Engineering for their critical infrastructure needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-container text-white px-10 py-4 rounded-full font-headline font-bold hover:bg-primary transition-all shadow-xl shadow-primary/30 active:scale-95"
                >
                  Start Consultation
                </Link>
                <Link
                  href="/products"
                  className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-headline font-bold hover:bg-white/20 transition-all active:scale-95"
                >
                  Download Specs
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="text-4xl font-headline font-black text-secondary-container mb-2">99.9%</div>
                <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Uptime Efficiency</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="text-4xl font-headline font-black text-secondary-container mb-2">500+</div>
                <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Projects Delivered</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="text-4xl font-headline font-black text-secondary-container mb-2">24/7</div>
                <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Monitoring</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="text-4xl font-headline font-black text-secondary-container mb-2">Zero</div>
                <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Safety Incidents</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
