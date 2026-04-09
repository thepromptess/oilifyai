import Link from 'next/link';
import { Cpu, MapPin, Mail, Phone, Link2, X, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#060e1a] border-t border-white/10">
      {/* Guyana flag stripe */}
      <div className="h-0.5 bg-gradient-to-r from-[#009e60] via-[#fcd116] via-[#ce1126] via-black to-white" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">
                  Oilify<span className="text-[#f97316]">AI</span>
                </span>
              </div>
            </Link>
            <p className="text-[#64748b] text-sm leading-relaxed mb-5">
              Guyanese-built artificial intelligence for the energy sector. From the oil fields of the Stabroek Block to global markets.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse-glow" />
              <span className="text-[#f97316] text-xs font-semibold">100% Guyanese-Owned</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors flex items-center gap-1.5 group">
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                'Predictive Logistics',
                'AI Training',
                'Compliance & Reporting',
                'Pipeline Monitoring',
                'Risk Analytics',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors flex items-center gap-1.5 group">
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" />
                <span className="text-[#64748b] text-sm">Georgetown, Guyana<br />South America</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="mailto:info@oilifyai.gy" className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors">
                  info@oilifyai.gy
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f97316] shrink-0" />
                <a href="tel:+15925551234" className="text-[#64748b] text-sm hover:text-[#f97316] transition-colors">
                  +1 (592) 555-1234
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-[#f97316] hover:border-[#f97316]/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-[#f97316] hover:border-[#f97316]/30 transition-colors"
                aria-label="Twitter"
              >
                <X className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#475569] text-sm">
            © {new Date().getFullYear()} OilifyAI Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#475569] text-xs">🇬🇾</span>
            <span className="text-[#475569] text-xs">Made with pride in Guyana</span>
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
