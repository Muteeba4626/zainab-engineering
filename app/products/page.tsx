import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Products | Zainab Engineering',
  description: 'Explore our range of electrical panels, distribution boards, MCC panels, PFI panels, ATS panels, and solar solutions.',
};

const products = [
  {
    id: 'lt-panels',
    name: 'L.T Panels',
    description: 'Low Tension panels for industrial power distribution with high reliability and efficiency.',
    icon: 'developer_board',
    specs: ['Up to 4000A Rating', 'IP54/IP65 Protection', 'IEC 61439 Compliant'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgyBEtp5lMn7x9aN6ipuqTpFUKEIPDCsETGniYZZ88DL2gH6GRZ2ZzNYijeGJqTV_baxdd9m3ZKUW1R6a8ppC23RK7MASf8UFJWrG_qmj783wPRJrv8EceN1fgXVI2NcIyLVgwxH7USAe3MJfXhKQq36LC-_Kvak71Iq3GySEZyYK4c7CaWOmvxY8ppQsvrOGPqWyLYk6VdnxarGBVk9jFjKHP_wjPk-pclMpquYYTJsBj9S4ZUCpS0Xhf3qirHXSxx63as99fjgo',
  },
  {
    id: 'pfi-panels',
    name: 'PFI Panels',
    description: 'Power Factor Improvement panels to optimize energy consumption and reduce electricity costs.',
    icon: 'electric_meter',
    specs: ['Automatic Power Factor Correction', 'Capacitor Bank Integration', 'Real-time Monitoring'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7wud3VIvEh0CfM766iWS_se2ru3sxYXVaGouf4CzL3L9EocMMfYcg3nzUcA4N0KYIIfSdOX7qO-5jc5OSoZdp5v9zBI22pcX8yJEGyoZ6UP-hPixusQXlkrNAHq2dv1LbiuVIittMxaFTA-QQjsNDz6UXezgxqYc0uZYpFPEwdvAp-BQlnDwHf4rJXNGMpkZ3H8c1cHPouqDJJD2XUxd3rqzgWyjfONZrflE8b1lLP4boBaHnXQU6QDP6ZZDQ_ZeNrTsbMFreLRY',
  },
  {
    id: 'mcc-panels',
    name: 'MCC Panels',
    description: 'Motor Control Centers with modular withdrawal units for easy maintenance and operation.',
    icon: 'settings_input_component',
    specs: ['Modular Design', 'Withdrawal Units', 'PLC Integration Ready'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdJrFCn49NnfqBywPaNm7EMKYwrYWwgihapiHNII78iHC675zLrI9qMkYiifkdi-tEp2S64d2y7EVMlEIjzf55Jjmq7BU91IcntUbZPa8APeosnylGvmy8rN9ISp9ExSOAK0uKyB2JeeZOd_N1t5rUVPLaejkkWY-oS1-lLV-uypXSuSG_YySLon5mFbmMTXfkuvtfc6-xKSPbyscLhgh_ZQwJIO2PztpLKWtgM-Jwpd8plLGXFm90NLsvqKBAGhgBzL5vf6kNGv4',
  },
  {
    id: 'ats-panels',
    name: 'ATS Panels',
    description: 'Automatic Transfer Switch panels for seamless power source switching during outages.',
    icon: 'autorenew',
    specs: ['Auto Transfer Switching', 'Generator Integration', 'Load Shedding Support'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXjuLJqceF3lva08mrkQLrOr743-qggs53fdf6ckbr27O_3kdfuO8ZWNe9v-u2H8S0uaqwo4J-C9hnP5tqm5cAYX2p6MSZEqCrxB_XoCVaWw5rj5pRJglAnRIlrlUB1tqfUWxgaziSzwnVmMXItOKzRK9Y4mafrjVXE1Phjhbp26nG0x76puEUHuWZROOOea4sSyzXJV7LVGfVtAWabcfY0UEEbMJUX8jgEW28HXVLmoBrC7nZiiOZnLonB7QYuHLzU1rrT3suyRw',
  },
  {
    id: 'distribution-boards',
    name: 'Distribution Boards',
    description: 'Comprehensive distribution solutions from residential to industrial scale applications.',
    icon: 'grid_view',
    specs: ['Custom Configurations', 'MCB/MCCB Options', 'Indoor/Outdoor Variants'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdJrFCn49NnfqBywPaNm7EMKYwrYWwgihapiHNII78iHC675zLrI9qMkYiifkdi-tEp2S64d2y7EVMlEIjzf55Jjmq7BU91IcntUbZPa8APeosnylGvmy8rN9ISp9ExSOAK0uKyB2JeeZOd_N1t5rUVPLaejkkWY-oS1-lLV-uypXSuSG_YySLon5mFbmMTXfkuvtfc6-xKSPbyscLhgh_ZQwJIO2PztpLKWtgM-Jwpd8plLGXFm90NLsvqKBAGhgBzL5vf6kNGv4',
  },
  {
    id: 'changeover-panels',
    name: 'Changeover Panels',
    description: 'Manual and automatic changeover solutions for reliable power switching.',
    icon: 'swap_horiz',
    specs: ['Manual/Auto Options', 'Interlocking System', 'High Breaking Capacity'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7wud3VIvEh0CfM766iWS_se2ru3sxYXVaGouf4CzL3L9EocMMfYcg3nzUcA4N0KYIIfSdOX7qO-5jc5OSoZdp5v9zBI22pcX8yJEGyoZ6UP-hPixusQXlkrNAHq2dv1LbiuVIittMxaFTA-QQjsNDz6UXezgxqYc0uZYpFPEwdvAp-BQlnDwHf4rJXNGMpkZ3H8c1cHPouqDJJD2XUxd3rqzgWyjfONZrflE8b1lLP4boBaHnXQU6QDP6ZZDQ_ZeNrTsbMFreLRY',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[716px] flex items-center px-8 md:px-20 overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
            <img
              alt="Industrial Engineering"
              className="w-full h-full object-cover opacity-30 grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRflbPt4ToAIuHa_fHNZTf2p6feJnZcx8rDYN9oCUd2N636RP2hLK3N_o5lFFcSO67aNqItkDjUayU5IOzGltPAsw_MDA3JYjQhwMS_V_vuGcqTRrfcEdZcLqZF2on-lV48uD4CndGT5AU1DkRpug7zO_iO3r6QJaUw-8KOT3mGDmnb2layhuhyw_kB34SemU2ZOuloCaY_JKAZxYbMY-QL7-NraIrTY4ktgAzFnSSv5A2ogg3_etQUlCi0uI7JSATNzWvPXuDDgQ"
            />
          </div>
          <div className="relative z-20 max-w-4xl">
            <span className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary-fixed text-on-secondary-container text-xs font-bold tracking-widest uppercase font-label">
              Precision Infrastructure
            </span>
            <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface mb-8">
              The Kinetic <br /><span className="text-primary">Grid.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              Engineered for high-velocity energy distribution. We redefine industrial power with technical precision, moving beyond utility into architectural performance.
            </p>
            <div className="flex items-center space-x-4">
              <div className="h-px w-20 bg-primary-container"></div>
              <span className="text-sm font-mono text-outline uppercase tracking-widest">Scroll to Explore Components</span>
            </div>
          </div>
        </section>

        {/* Product Category: Electrical Panels */}
        <section className="py-24 px-8 md:px-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface mb-4">Electrical Panels</h2>
                <p className="text-on-surface-variant max-w-lg">Advanced control systems housed in high-durability enclosures, designed for mission-critical industrial stability.</p>
              </div>
              <span className="text-8xl font-headline font-black opacity-5 pointer-events-none">EP-01</span>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="aspect-square bg-surface-container-high rounded-2xl mb-6 overflow-hidden relative border border-outline-variant/10">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      src={product.image}
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-2xl">{product.icon}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-headline font-bold text-on-surface mb-2">{product.name}</h4>
                  <p className="text-on-surface-variant text-sm mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.specs.map((spec, idx) => (
                      <span key={idx} className="text-xs bg-surface-container px-3 py-1 rounded-full text-on-surface-variant">
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform"
                  >
                    Request Quote <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-24 px-8 md:px-20 bg-on-background text-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-16">
              <h3 className="text-sm font-mono text-secondary-container uppercase tracking-widest mb-4">Technical_Specifications_Matrix</h3>
              <div className="electric-trace"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-outline/20">
              <div className="p-8 bg-on-background">
                <span className="text-xs font-mono text-outline-variant block mb-4">COMPLIANCE</span>
                <p className="font-headline text-2xl">IEC 61439-1</p>
                <p className="text-xs text-outline mt-2 font-mono">Global Safety Standard</p>
              </div>
              <div className="p-8 bg-on-background">
                <span className="text-xs font-mono text-outline-variant block mb-4">MAX VOLTAGE</span>
                <p className="font-headline text-2xl">1000V AC</p>
                <p className="text-xs text-outline mt-2 font-mono">Rated Insulation Voltage</p>
              </div>
              <div className="p-8 bg-on-background">
                <span className="text-xs font-mono text-outline-variant block mb-4">INGRESS PROT</span>
                <p className="font-headline text-2xl">IP 54 / IP 65</p>
                <p className="text-xs text-outline mt-2 font-mono">Dust &amp; Water Resistance</p>
              </div>
              <div className="p-8 bg-on-background">
                <span className="text-xs font-mono text-outline-variant block mb-4">FRAME TYPE</span>
                <p className="font-headline text-2xl">Alu-Zinc</p>
                <p className="text-xs text-outline mt-2 font-mono">Anti-Corrosive Alloy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solar Solutions */}
        <section className="py-32 px-8 md:px-20 relative overflow-hidden bg-surface-container">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full solar-gradient opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute right-40 top-40 w-12 h-12 bg-tertiary-fixed-dim rounded-full blur-xl opacity-40"></div>
          <div className="max-w-screen-2xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <span className="text-tertiary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">New Energy Systems</span>
              <h2 className="text-5xl md:text-6xl font-headline font-bold text-on-surface mb-8">Solar <br />Architecture.</h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                Beyond panels. We design integrated solar ecosystems that harness maximum yield through advanced tracking and high-density storage modules.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-tertiary">wb_sunny</span>
                  <div>
                    <h5 className="font-bold text-on-surface">Photovoltaic Integration</h5>
                    <p className="text-sm text-outline">Seamless building-integrated designs for industrial facilities.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-tertiary">battery_charging_full</span>
                  <div>
                    <h5 className="font-bold text-on-surface">Grid-Scale Storage</h5>
                    <p className="text-sm text-outline">Battery Energy Storage Systems for peak shaving and backup.</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="material-symbols-outlined text-tertiary">electric_bolt</span>
                  <div>
                    <h5 className="font-bold text-on-surface">Net Metering Solutions</h5>
                    <p className="text-sm text-outline">Grid-tied systems that maximize your energy savings.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] group">
              <div className="absolute inset-0 bg-tertiary/10 rounded-full scale-110 blur-2xl group-hover:bg-tertiary/20 transition-all duration-700"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                <img
                  alt="Solar Farm"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHfsa6Mlg-yOLiE8VSUs7ikG_-zIvvHfvQplY750OW5mgYqH1dZVTg8AFM8hEkqwajoT3iTk6irRlFugZ0iNCYrMUu88xiEBMTLzH4U_nfNhwvoA9Scks8UJTmA2eRZziAa21-dGrqERYfO4RIq-b_virdAmjySwfVn24dNR5dzEY0ZmCDBCf6_88FczjYyE2U0huDeIQ2hfnX_KZIIUjWAlrQyR75eaXXyfFciKaQkR7uRtNx5ftQ38D3mHhlROF6Qdi2i5ptcEM"
                />
                <div className="absolute inset-0 solar-gradient mix-blend-overlay opacity-30"></div>
                <div className="absolute bottom-8 left-8 p-6 glass-panel rounded-xl max-w-xs">
                  <p className="text-xs font-mono text-tertiary font-bold mb-2">SOLAR EFFICIENCY</p>
                  <p className="text-xl font-headline font-bold text-on-surface">+24.8% Yield Gain</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-8 md:px-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-6">Contact Information</h2>
            <div className="text-on-surface-variant text-sm md:text-base leading-relaxed space-y-3">
              <div>
                <span className="font-semibold text-on-surface">Address:</span>{' '}
                2-KM JHANG ROAD, GULFISHAN MORR, OPPOSITE OPAL ONE FAISALABAD.
              </div>
              <div>
                <span className="font-semibold text-on-surface">Phone:</span>{' '}
                +92-41-2658851 / +92-41-2651336
              </div>
              <div>
                <span className="font-semibold text-on-surface">Fax:</span>{' '}
                +92-41-2659981 / +92-41-2651337
              </div>
              <div className="font-semibold text-on-surface">Muhammad Irfan MAjeed</div>
              <div className="font-semibold text-on-surface">Compnay Advisor</div>
              <div className="font-semibold text-on-surface">(Attorney At Law)</div>
              <div>
                <span className="font-semibold text-on-surface">E-mail:</span>{' '}
                zec2001@hotmail.com
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 md:px-20">
          <div className="max-w-screen-2xl mx-auto bg-primary rounded-3xl p-12 md:p-20 relative overflow-hidden text-white flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Ready to engineer your next project?</h2>
              <p className="text-primary-fixed-dim text-lg">Consult with our technical engineers for a custom configuration specific to your infrastructure needs.</p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary rounded-full font-bold font-headline hover:bg-surface-container-lowest transition-colors flex items-center justify-center"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-white/30 rounded-full font-bold font-headline hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
