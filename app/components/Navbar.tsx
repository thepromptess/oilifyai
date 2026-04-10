'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: "Who It's For", href: '/#who-its-for' },
  { label: 'Features', href: '/#features' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-[#060e1a]/98 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center orange-glow group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-white font-bold text-xl tracking-tight">
              Oilify<span className="text-[#f97316]">AI</span>
            </span>
            <div className="text-[10px] text-[#94a3b8] uppercase tracking-widest leading-none">
              Local Content Compliance
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = href.startsWith('/') && !href.includes('#') && pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors relative group whitespace-nowrap ${
                  isActive
                    ? 'text-[#f97316]'
                    : 'text-[#cbd5e1] hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#f97316] transition-all duration-200 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/#waitlist"
            className="btn-primary px-5 py-2.5 rounded-lg text-sm whitespace-nowrap"
          >
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#060e1a]/98 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => {
            const isActive = href.startsWith('/') && !href.includes('#') && pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#f97316]/15 text-[#f97316]'
                    : 'text-[#cbd5e1] hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 py-3 px-4 rounded-lg text-sm text-center"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
