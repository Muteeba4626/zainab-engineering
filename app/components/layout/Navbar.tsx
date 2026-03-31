'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/clients', label: 'Clients' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 lg:py-4 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 font-headline"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-primary">Zainab</span> Engineering
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'text-primary bg-primary/5'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
          >
            <span>Get Quote</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Separate element with high z-index */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 z-[100] lg:hidden"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile Menu Drawer - Completely solid white */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[101] shadow-2xl lg:hidden"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200 bg-white">
                <span className="text-base font-semibold text-slate-900">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-4 py-3 bg-white">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 mb-1 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {/* Request Quote Button */}
                <div className="mt-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-primary text-white px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-primary-container"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  >
                    <span>Request Quote</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
