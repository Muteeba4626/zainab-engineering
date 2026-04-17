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

        {/* About Our Company */}
        <section className="py-16 lg:py-24 px-5 sm:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="text-center mb-10 lg:mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">About Our Company</h2>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-semibold text-primary uppercase tracking-wide">
                <span>History</span>
                <span>Founders</span>
                <span>Our Mission</span>
              </div>
            </div>

            <div className="space-y-8 text-slate-600 leading-relaxed text-sm lg:text-base">
              <p>
                The third and last distinctive attribute is sensuality. This is a startling word, and requires some explanation. In the first place, every line is voluptuous, floating, and wavy in its form; deep, rich, and exquisitely soft in its color; drowsy in its effect; like slow wild music; letting the eye repose on it, as on a wreath of cloud, without one feature of harshness to hurt, or of contrast to awaken. In the second place, the cultivation, which, in the simple blue country, has the forced formality of growth which evidently is to supply the necessities of man, here seems to leap into the spontaneous luxuriance of life, which is fitted to minister to his pleasures.
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 text-slate-700">
                <h4 className="text-base lg:text-lg font-bold text-slate-900">
                  Change is the law of life. And those who look only to the past or present are certain to miss the future.
                </h4>
              </blockquote>
              <p>
                Let us suppose, however, that the design is yielded entirely to the architect&apos;s discretion. Being a piece of domestic architecture, the chief object in its exterior design will be to arouse domestic feelings, which, as we saw before, it will do most distinctly by corresponding with the first part of character. Yet it is still more necessary that it should correspond with its situation; and hence arises another difficulty, the reconciliation of correspondence with contraries; for such, it is deeply to be regretted, are too often the individual&apos;s mind, and the dwelling-place it chooses. The polished courtier brings his refinement and duplicity with him to ape the Arcadian rustic in Devonshire; the romantic rhymer takes a[Pg 121] plastered habitation, with one back window looking into the Green Park; the soft votary of luxury endeavors to rise at seven, in some Ultima Thule of frosts and storms; and the rich stock-jobber calculates his percentages among the soft dingles and woody shores of Westmoreland.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-8">
              {[
                { value: '2789', label: 'Working Hours' },
                { value: '7523', label: 'Lines Of Code' },
                { value: '935', label: 'Testimonials Received' },
                { value: '9356', label: 'Retina Ready Icons' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8 text-slate-600 leading-relaxed text-sm lg:text-base mt-8">
              <p>
                Again, wherever the soil breaks out in simple blue country, whether in the river shore, or the broken roadside bank, or the plowed field, in nine cases out of ten it is excessively warm in its color, being either gravel or clay, the black vegetable soil never remaining free of vegetation. The warm tone of these beds of soil is an admirable relief to the blue of the distances, which we have taken as the distinctive feature of the country, tending to produce the perfect light without which no landscape can be complete.
              </p>
              <p>
                Such a system (supposing that it could be carried fully into effect, and that there were no such animals as sentimental stone-masons to give technical assistance) might, at first, seem rather an encroachment on the liberty of the subject, inasmuch as it would prevent people from indulging their edificatorial fancies, unless they knew something about the matter, or, as the sufferers would probably complain, from doing what they liked with their own. But the mistake would evidently lie in their supposing, as people too frequently do, that the outside of their house is their own, and that they have a perfect right therein to make fools of themselves in any manner, and to any extent, they may think proper.
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 text-slate-700">
                <h4 className="text-base lg:text-lg font-bold text-slate-900">
                  You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.
                </h4>
              </blockquote>
              <p>
                The florist may delight in this: the true lover of flowers never will. He who has taken lessons from nature, who has observed the real purpose and operation of flowers; how they flush forth from the brightness of the earth&apos;s being, as the melody rises up from among the moved strings of the instrument; how the wildness of their pale colors passes over her, like the evidence of a various emotion; how the quick fire of their life and their delight glows along the green banks, where the dew falls the thickest, and the mists of incense pass slowly through the twilight of the leaves, and the intertwined roots make the earth tremble with strange joy at the feeling of their motion.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-8">
              {[
                { value: '3629', label: 'Lines Of Code' },
                { value: '327', label: 'Testimonials Received' },
                { value: '1385', label: 'Retina Ready Icons' },
                { value: '289', label: 'Working Hours' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8 text-slate-600 leading-relaxed text-sm lg:text-base mt-8">
              <p>
                The general rule by which we are to determine the size is, to select the largest mass which will not overwhelm any object of fine form, within two hundred yards of it; and if it does not do this, we may be quite sure it is not too large for the distant features: for it is one of Nature&apos;s most beautiful adaptations, that she is never out of proportion with herself; that is, the minor details of scenery of the first class bear exactly the proportion to the same species of detail in scenery of the second class, that the large features of the first bear to the large features of the second.
              </p>
              <p>
                The impression produced by a given effect or influence depends upon its degree and its duration. Degree always means the proportionate energy exerted. Duration is either into time, or into space, or into both. The duration of color is in space alone, forming what is commonly called extent. The duration of sound is in space and time; the space being in the size of the waves of air, which give depth to the tone. The duration of mental emotion is in time alone. Now in all influences, as is the degree, so is the impression; as is the duration, so is the effect of the impression.
              </p>
              <blockquote className="border-l-4 border-primary/30 pl-4 text-slate-700">
                <h4 className="text-base lg:text-lg font-bold text-slate-900">
                  My formula for living is quite simple. I get up in the morning and I go to bed at night. In between, I occupy myself as best I can.
                </h4>
              </blockquote>
              <p>
                Fourthly, when the general energy, instead of pervading simultaneously the multitude of objects, as with one spirit, is independently possessed and manifested by every individual object, the result is repetition, not unity; and contrast is not merely agreeable, but necessary. Thus, a number of objects, forming the line of beauty, is pervaded by one simple energy; but if that energy is separately manifested in each, the result is painful monotony. Parallel right lines, without grouping, are always liable to this objection.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mt-8">
              {[
                { value: '6498', label: 'Retina Ready Icons' },
                { value: '254', label: 'Working Hours' },
                { value: '8795', label: 'Lines Of Code' },
                { value: '3647', label: 'Testimonials Received' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                  <div className="text-xl lg:text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wide text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-slate-600 leading-relaxed text-sm lg:text-base mt-8">
              <p>
                Our lines are to be horizontal; then the roof must be as flat as possible. We need not think of snow, because, however much we may slope the roof, it will not slip off from the material, which, here, is the only proper one; and the roof of the cottage is always very flat, which it would not be if there were any inconvenience attending such a form. But, for the sake of the second contrast, we are to have gracefulness and ease, as well as horizontality. Then we must break the line of the roof into different elevations, yet not making the difference great, or we shall have visible verticals. This must not be done at random.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">Our Offices</h3>
              <p className="text-slate-600 text-sm lg:text-base">
                Talent wins games, but teamwork and intelligence wins championships.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
