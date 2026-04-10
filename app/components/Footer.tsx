import Link from 'next/link';
import { Cpu, Globe, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import FooterNewsletter from './FooterNewsletter';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: "Who It's For", href: '/#who-its-for' },
  { label: 'Features', href: '/#features' },
  { label: 'Blog', href: '/blog' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join the Waitlist', href: '/#waitlist' },
];

export default function Footer() {
  return (
    <footer className="bg-[#060e1a] border-t border-white/10">
      {/* Guyana flag stripe */}
      <div className="h-0.5 bg-gradient-to-r from-[#009e60] via-[#fcd116] via-[#ce1126] via-black to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Left — Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Oilify<span className="text-[#f97316]">AI</span>
              </span>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed mb-5 max-w-xs">
              Powering Local Content compliance across Guyana&apos;s petroleum sector.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse-glow" />
              <span className="text-[#f97316] text-xs font-semibold">100% Guyanese Owned · Diaspora Led</span>
            </div>
          </div>

          {/* Middle — Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors flex items-center gap-1.5 group ${
                      label === 'Join the Waitlist'
                        ? 'text-[#f97316] font-semibold hover:text-[#fb923c]'
                        : 'text-[#64748b] hover:text-[#f97316]'
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-3 h-3 transition-opacity ${
                        label === 'Join the Waitlist'
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#f97316] shrink-0" />
                <a
                  href="https://oilifyai.com"
                  className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors"
                >
                  oilifyai.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a
                  href="mailto:hello@oilifyai.com"
                  className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors"
                >
                  hello@oilifyai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f97316] shrink-0 mt-0.5" />
                <span className="text-[#64748b] text-sm leading-snug">
                  Queens, New York
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter — minimal single row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <FooterNewsletter />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © 2026 Oilify AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#475569] text-xs">🇬🇾</span>
            <span className="text-[#475569] text-xs">Built for Guyana, by the diaspora</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[#475569] text-xs hover:text-[#f97316] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[#475569] text-xs hover:text-[#f97316] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
