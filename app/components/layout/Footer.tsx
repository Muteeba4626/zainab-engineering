'use client';

import Link from 'next/link';
import NewsletterSubscribe from '../sections/NewsletterSubscribe';

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full rounded-t-[1.5rem] sm:rounded-t-[2rem] lg:rounded-t-[4rem] overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 max-w-screen-2xl mx-auto">
        {/* Company Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-primary">Zainab</span> Engineering
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Pioneering the future of industrial energy architecture through precision and innovation since 1991.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://wa.me/+92412658851" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-green-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.406.836 2.965 1.282 4.551 1.283 4.904 0 8.895-3.991 8.898-8.895 0-2.376-.925-4.61-2.603-6.29s-3.914-2.602-6.291-2.602c-4.904 0-8.895 3.991-8.898 8.896-.001 1.666.463 3.287 1.341 4.706l-.882 3.223 3.334-.874z"/>
              </svg>
            </a>
            <a href="mailto:zec2001@hotmail.com" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
            <a href="tel:+92412658851" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-primary flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-semibold text-sm mb-4 sm:mb-6">
            Quick Links
          </h5>
          <ul className="space-y-3">
            {[
              { href: '/products', label: 'Products' },
              { href: '/services', label: 'Services' },
              { href: '/clients', label: 'Our Clients' },
              { href: '/about', label: 'About Us' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1 group">
                  <svg className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-white font-semibold text-sm mb-4 sm:mb-6">
            Contact
          </h5>
          <div className="text-slate-400 text-sm space-y-3">
            <p>2-KM Jhang Road, Gulfishan Morr</p>
            <p>Faisalabad, Pakistan</p>
            <p className="text-primary">+92-41-2658851</p>
            <p>zec2001@hotmail.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-white font-semibold text-sm mb-4 sm:mb-6">
            Newsletter
          </h5>
          <p className="text-slate-400 text-sm mb-4">
            Get technical insights delivered to your inbox.
          </p>
          <NewsletterSubscribe variant="footer" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-5 sm:px-8 lg:px-12 py-6 border-t border-white/5 max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} Zainab Engineering. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-slate-600 text-xs flex items-center gap-1">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            ISO 9001 Certified
          </span>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/+92412658851"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-green-500/25 hover:shadow-2xl hover:shadow-green-500/40 hover:scale-105 active:scale-95 transition-all"
      >
        <svg fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.406.836 2.965 1.282 4.551 1.283 4.904 0 8.895-3.991 8.898-8.895 0-2.376-.925-4.61-2.603-6.29s-3.914-2.602-6.291-2.602c-4.904 0-8.895 3.991-8.898 8.896-.001 1.666.463 3.287 1.341 4.706l-.882 3.223 3.334-.874z"/>
        </svg>
        <span className="font-semibold text-sm hidden sm:inline">Chat Now</span>
      </a>
    </footer>
  );
}
