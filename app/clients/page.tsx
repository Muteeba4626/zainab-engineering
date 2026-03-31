import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Our Clients | Zainab Engineering',
  description: 'Trusted by leading industrial groups and government organizations across Pakistan.',
};

const privateClients = [
  { name: 'Nishat Group', sector: 'Textile & Energy' },
  { name: 'Interloop Limited', sector: 'Textile Manufacturing' },
  { name: 'Gourmet Group', sector: 'Food & Beverages' },
  { name: 'Sitara Group', sector: 'Textile & Chemicals' },
  { name: 'Chen One', sector: 'Retail & Manufacturing' },
  { name: 'Masood Textile Mills', sector: 'Textile' },
  { name: 'Fazal Steel', sector: 'Steel Manufacturing' },
  { name: 'Colony Textile Mills', sector: 'Textile' },
  { name: 'Five Star Group', sector: 'Food & Hospitality' },
  { name: 'Servis Industries', sector: 'Footwear & Manufacturing' },
  { name: 'Rafhan Maize', sector: 'Food Processing' },
  { name: 'Packages Limited', sector: 'Packaging' },
];

const governmentClients = [
  { name: 'WASA Faisalabad', sector: 'Water & Sanitation' },
  { name: 'OGDCL', sector: 'Oil & Gas' },
  { name: 'FIEDMC', sector: 'Industrial Development' },
  { name: 'Allied Hospital Faisalabad', sector: 'Healthcare' },
  { name: 'National Textile University', sector: 'Education' },
  { name: 'BISE Faisalabad', sector: 'Education' },
  { name: 'DHQ Hospital', sector: 'Healthcare' },
  { name: 'Pakistan Railways', sector: 'Transportation' },
];

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-32 px-8 lg:px-24 bg-surface-container-low overflow-hidden">
          <div className="absolute inset-0 kinetic-grid opacity-30"></div>
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-4 mb-6 bg-primary-fixed text-primary text-xs font-bold tracking-widest uppercase rounded-full">
                Trusted Partnerships
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter mb-8">
                Powering <span className="text-primary-container">Pakistan&apos;s</span> Industry Leaders
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                For over three decades, we&apos;ve been the trusted partner for Pakistan&apos;s most demanding industrial and government projects. Our client list includes some of the nation&apos;s largest manufacturing groups and critical infrastructure operators.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-8 bg-on-background">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-headline font-black text-secondary-container mb-2">200+</div>
              <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Active Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-headline font-black text-secondary-container mb-2">500+</div>
              <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-headline font-black text-secondary-container mb-2">30+</div>
              <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-headline font-black text-secondary-container mb-2">98%</div>
              <div className="text-sm text-surface-variant/60 uppercase tracking-widest font-bold">Client Retention</div>
            </div>
          </div>
        </section>

        {/* Private Sector Clients */}
        <section className="py-24 px-8 lg:px-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs">Private Sector</span>
              <h2 className="text-4xl font-headline font-bold text-on-surface mt-4 tracking-tighter">
                Industrial & Manufacturing
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-2xl">
                We power Pakistan&apos;s leading industrial groups with reliable, high-performance electrical infrastructure.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privateClients.map((client, index) => (
                <div
                  key={index}
                  className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-primary group-hover:text-white">factory</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg mb-2">{client.name}</h3>
                  <p className="text-sm text-on-surface-variant">{client.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Clients */}
        <section className="py-24 px-8 lg:px-24 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs">Government Sector</span>
              <h2 className="text-4xl font-headline font-bold text-on-surface mt-4 tracking-tighter">
                Public Infrastructure
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-2xl">
                Trusted by government organizations for critical infrastructure and public service facilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {governmentClients.map((client, index) => (
                <div
                  key={index}
                  className="group bg-surface p-8 rounded-2xl border border-outline-variant/10 hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-secondary group-hover:text-white">account_balance</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg mb-2">{client.name}</h3>
                  <p className="text-sm text-on-surface-variant">{client.sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 px-8 lg:px-24 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-12 md:p-20 rounded-3xl border border-outline-variant/10">
              <div className="max-w-3xl mx-auto text-center">
                <span className="material-symbols-outlined text-6xl text-primary/30 mb-8">format_quote</span>
                <blockquote className="text-2xl md:text-3xl font-headline font-medium text-on-surface leading-relaxed mb-8">
                  &ldquo;Zainab Engineering has been our trusted partner for over 15 years. Their commitment to quality and on-time delivery has been instrumental in keeping our operations running smoothly.&rdquo;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">person</span>
                  </div>
                  <div className="text-left">
                    <p className="font-headline font-bold">Industry Leader</p>
                    <p className="text-sm text-on-surface-variant">Textile Manufacturing Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 lg:px-24 bg-on-background text-white">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-8">
              Ready to join our network of <span className="text-secondary-container">satisfied clients</span>?
            </h2>
            <p className="text-xl text-surface-variant/80 mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how Zainab Engineering can power your next project with reliability and precision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary-container text-white px-10 py-4 rounded-full font-headline font-bold hover:bg-primary transition-all shadow-xl shadow-primary/30"
              >
                Get in Touch
              </Link>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-headline font-bold hover:bg-white/20 transition-all"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
