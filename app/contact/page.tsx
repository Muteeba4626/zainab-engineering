import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/sections/ContactForm';

export const metadata = {
  title: 'Contact Us | Zainab Engineering',
  description: 'Get in touch with Zainab Engineering for your electrical panel and power solutions needs.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20 min-h-screen bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-100">
            {/* Left Side: Inquiry Form */}
            <div className="p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <div className="mb-8 lg:mb-10">
                <span className="text-primary font-semibold uppercase tracking-wide text-xs">Contact Us</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mt-3 tracking-tight leading-tight">
                  Let&apos;s build the <span className="text-primary">future.</span>
                </h1>
                <p className="text-slate-500 mt-4 max-w-md text-sm lg:text-base leading-relaxed">
                  Have a technical inquiry or a complex project? Reach out to our engineering experts today.
                </p>
              </div>

              <ContactForm />

              {/* Contact Info Cards */}
              <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                {[
                  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Headquarters', value: '2-KM Jhang Road, Faisalabad' },
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', value: '+92-41-2658851' },
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', value: 'zec2001@hotmail.com' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                      <p className="text-xs lg:text-sm font-medium mt-0.5 text-slate-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Map Visual */}
            <div className="relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900">
              <div className="absolute inset-0 opacity-40">
                <img
                  className="w-full h-full object-cover"
                  alt="Faisalabad city view"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy47f5cGlird0u-zLTFeEgsAGTP_IreOsx_GIBlRngzfW9QnOzUrTJC_3T07TkX10nt_fPWz3G516SVHe_bTu9sSRYXZsVDkGZbTG30HHTOnSIJ3MhZMItvLVe_-FLkJpl-MnpkYNJ94FhbEZTZir7D4msvVPkqY8jiJCUhjKXBwLaFFOER_Mh8f9vEWmjaiAuAvzLIRfsw1Onks-zDb6ppaU5OrDOhSOCh5QPOxw62MU9ZRKTQmpT-HNpiJFmrFiwbSdrS-BaDOo"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-900/80 to-transparent"></div>

              {/* Pulsing Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25"></div>
                  <div className="absolute inset-0 rounded-full bg-primary animate-pulse opacity-50 scale-150"></div>
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-white shadow-2xl relative z-10 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white"></div>
                  </div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg">
                    <span className="text-white font-semibold text-xs">Zainab Engineering HQ</span>
                  </div>
                </div>
              </div>

              {/* Tech Detail Overlay */}
              <div className="absolute bottom-6 right-6 text-right hidden lg:block">
                <div className="bg-white/5 backdrop-blur-sm border-l-2 border-primary p-4 max-w-xs rounded-r-lg">
                  <p className="text-white/60 text-[10px] font-semibold tracking-wider uppercase mb-2">Location</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-6">
                      <span className="text-white/40 text-[10px]">CITY</span>
                      <span className="text-white text-xs">Faisalabad</span>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                      <span className="text-white/40 text-[10px]">REGION</span>
                      <span className="text-white text-xs">Punjab, Pakistan</span>
                    </div>
                    <div className="flex justify-between items-center gap-6">
                      <span className="text-white/40 text-[10px]">STATUS</span>
                      <span className="text-primary text-xs font-semibold">OPERATIONAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-10 lg:mt-12 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 lg:p-10">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Our Offices</h2>
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              <div><span className="font-semibold text-slate-900">Address:</span> 2-KM JHANG ROAD, GULFISHAN MORR, OPPOSITE OPAL ONE FAISALABAD.</div>
              <div><span className="font-semibold text-slate-900">Phone:</span> +92-41-2658851 / +92-41-2651336</div>
              <div><span className="font-semibold text-slate-900">Fax:</span> +92-41-2659981 / +92-41-2651337</div>
              <div className="font-semibold text-slate-900">Muhammad Irfan MAjeed</div>
              <div className="font-semibold text-slate-900">Compnay Advisor</div>
              <div className="font-semibold text-slate-900">(Attorney At Law)</div>
              <div><span className="font-semibold text-slate-900">E-mail:</span> zec2001@hotmail.com</div>
              <div><span className="font-semibold text-slate-900">URL</span> www.zainabengineering.com</div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
