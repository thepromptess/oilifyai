import Link from 'next/link';
import {
  ChevronRight, BarChart3, Brain, ShieldCheck,
  TrendingUp, Globe2, Award, ArrowRight,
  Zap, Users, CheckCircle2
} from 'lucide-react';

const stats = [
  { value: '94%', label: 'Prediction Accuracy' },
  { value: '3×', label: 'Faster Compliance' },
  { value: '60+', label: 'Industry Partners' },
  { value: '100%', label: 'Guyanese-Owned' },
];

const services = [
  {
    icon: BarChart3,
    title: 'Predictive Logistics',
    desc: 'AI-driven supply chain forecasting that slashes downtime and optimizes field operations from rig to refinery.',
    href: '/services#logistics',
  },
  {
    icon: Brain,
    title: 'AI Training',
    desc: 'Custom machine learning models built by Guyanese engineers — domain-specific, production-ready, and locally supported.',
    href: '/services#training',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Reporting',
    desc: 'Automated regulatory compliance with real-time dashboards aligned to EPA, GEMA, and international energy standards.',
    href: '/services#compliance',
  },
];

const whyUs = [
  { icon: Globe2, title: 'Local Expertise', desc: 'Deep knowledge of Guyana\'s regulatory environment, geology, and energy landscape.' },
  { icon: Zap, title: 'Real-Time Intelligence', desc: 'Sub-second inference pipelines that process sensor streams from thousands of field endpoints.' },
  { icon: Users, title: 'Guyanese Talent', desc: 'Our entire team is recruited, trained, and based in Guyana — creating local tech careers.' },
  { icon: Award, title: 'Industry Certified', desc: 'ISO 27001, SOC 2 Type II, and GEMA-compliant. Security and compliance by design.' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        {/* Industrial grid overlay */}
        <div className="absolute inset-0 industrial-grid opacity-70" />

        {/* Decorative circles */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#f97316]/5 blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0b1f3a]/80 blur-3xl pointer-events-none" />

        {/* Orange vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f97316] to-transparent opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f97316]/10 border border-[#f97316]/25 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse-glow" />
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">
              100% Guyanese-Owned · Est. Georgetown, GY
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-6">
            AI Built for<br />
            <span className="text-[#f97316]">Energy.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94a3b8]">Built in Guyana.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
            OilifyAI powers the next generation of oil & gas operations with predictive intelligence,
            compliance automation, and locally-trained AI models — engineered at the heart of the Stabroek Block.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/services" className="btn-primary px-8 py-4 rounded-xl text-base flex items-center gap-2 group">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-outline px-8 py-4 rounded-xl text-base flex items-center gap-2">
              Schedule a Demo
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl mx-auto">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-[#0b1f3a]/80 backdrop-blur-sm px-6 py-5">
                <div className="text-3xl font-black text-[#f97316]">{value}</div>
                <div className="text-xs text-[#94a3b8] mt-1 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#475569] text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#f97316] to-transparent" />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-3">What We Do</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b1f3a] tracking-tight">
              Industrial AI,<br />Purpose-Built
            </h2>
            <p className="text-[#64748b] mt-4 max-w-xl mx-auto">
              Three core services, one mission: equip Guyana&apos;s energy sector with the most advanced AI stack on the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={title}
                href={href}
                className="group card-hover rounded-2xl border border-[#e2e8f0] bg-white p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-5 group-hover:bg-[#f97316]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-xl font-bold text-[#0b1f3a] mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed flex-1">{desc}</p>
                <div className="flex items-center gap-1.5 mt-5 text-[#f97316] text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUYANA HERITAGE BANNER ── */}
      <section className="py-20 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Flag & origin */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <div className="text-7xl">🇬🇾</div>
              <div className="text-[#94a3b8] text-xs uppercase tracking-widest font-semibold text-center">
                Georgetown, Guyana
              </div>
            </div>

            <div className="lg:border-l border-white/15 lg:pl-10">
              <p className="section-label mb-3">Our Heritage</p>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                From the Stabroek Block to<br />
                <span className="text-[#f97316]">Silicon Valley-Class AI</span>
              </h2>
              <p className="text-[#94a3b8] leading-relaxed max-w-2xl">
                As Guyana emerges as one of the world&apos;s fastest-growing oil producers, OilifyAI stands as
                the country&apos;s flagship technology answer. We were founded by Guyanese engineers and data
                scientists who believe that the nation that powers the world should also build the intelligence
                that runs it — 100% locally owned, locally operated, and globally competitive.
              </p>
              <Link href="/about" className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm">
                Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY OILIFY AI ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-3">Why OilifyAI</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b1f3a] tracking-tight">
              The Competitive Edge
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[#e2e8f0] card-hover">
                <div className="w-11 h-11 rounded-xl bg-[#0b1f3a] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#f97316]" />
                </div>
                <h3 className="font-bold text-[#0b1f3a] mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-[#0b1f3a] via-[#122a4d] to-[#0b1f3a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-[#f97316]" />
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wider">Ready to transform your operations?</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-5">
            Start Your AI Journey<br />with Guyana&apos;s Best
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            Schedule a no-obligation demo with our engineering team and see exactly how OilifyAI integrates with your existing operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2">
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-outline px-8 py-4 rounded-xl text-base inline-flex items-center justify-center gap-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
