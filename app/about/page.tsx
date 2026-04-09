import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin, Users, Globe2, Award, Heart,
  Cpu, ArrowRight, CheckCircle2, TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about OilifyAI — a 100% Guyanese-owned AI company built to power the energy sector from Georgetown to global markets.',
};

const milestones = [
  { year: '2020', title: 'Founded in Georgetown', desc: 'Three Guyanese engineers quit their international consulting roles to build the AI company Guyana never had.' },
  { year: '2021', title: 'First Client — ExxonMobil GY', desc: 'Deployed our first predictive logistics pilot on the Liza Destiny FPSO with a 3-month POC.' },
  { year: '2022', title: 'Series A — $4.2M', desc: 'Raised Guyana\'s largest ever technology seed round from Caribbean and North American investors.' },
  { year: '2023', title: 'Compliance Platform Launch', desc: 'Released the Compliance Engine — automating GEMA and EPA-GY reporting for 12 operators.' },
  { year: '2024', title: '60+ Partners Worldwide', desc: 'Expanded to Trinidad, Suriname, and West Africa. Still 100% Guyanese-owned and operated.' },
];

const values = [
  { icon: Heart, title: 'Guyanese First', desc: 'Every dollar of revenue stays in the local economy. We hire locally, train locally, and build locally.' },
  { icon: Cpu, title: 'Engineering Excellence', desc: 'We hold ourselves to Silicon Valley standards. Our engineers are globally competitive and proud of it.' },
  { icon: Globe2, title: 'Responsible AI', desc: 'We build explainable, auditable AI. No black boxes. We believe technology should serve people, not replace them.' },
  { icon: Users, title: 'Community Impact', desc: 'OilifyAI runs free coding bootcamps across Guyana, training the next generation of Guyanese tech leaders.' },
];

const team = [
  {
    name: 'Devraj Persaud',
    role: 'CEO & Co-Founder',
    bio: 'Former ML engineer at Shell Global Solutions. BSc Computer Science, UG. MSc AI, University of Edinburgh.',
    flag: '🇬🇾',
    initials: 'DP',
  },
  {
    name: 'Kezia Gonsalves',
    role: 'CTO & Co-Founder',
    bio: 'Led data infrastructure at Tullow Oil for 6 years. Expert in edge ML and time-series modeling. UG + MIT.',
    flag: '🇬🇾',
    initials: 'KG',
  },
  {
    name: 'Marcus Daniels',
    role: 'Head of Compliance',
    bio: 'Regulatory attorney turned AI engineer. Previously at Guyana EPA. Specialist in GEMA, EPA, and SEC energy frameworks.',
    flag: '🇬🇾',
    initials: 'MD',
  },
  {
    name: 'Priya Ramkhelawan',
    role: 'Head of Engineering',
    bio: '12 years in industrial IoT and SCADA systems. Leads our team of 25 Guyanese engineers.',
    flag: '🇬🇾',
    initials: 'PR',
  },
];

const numbers = [
  { value: '100%', label: 'Guyanese-Owned' },
  { value: '25+', label: 'Local Engineers' },
  { value: '4', label: 'Countries Served' },
  { value: '60+', label: 'Industry Partners' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1f3a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Our Story</p>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Built by Guyanese.<br />
              <span className="text-[#f97316]">Built for the World.</span>
            </h1>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              OilifyAI is the technology story Guyana&apos;s oil boom deserved. We&apos;re not an import —
              we are the product of Guyanese intellect, Guyanese ambition, and an unwavering belief that the
              nation at the center of the world&apos;s most exciting energy frontier should own its intelligence layer.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {numbers.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-5xl font-black text-[#f97316] mb-2">{value}</div>
                <div className="text-sm text-[#64748b] font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">The Origin</p>
              <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-6">
                A Nation Booming.<br />A Technology Gap to Fill.
              </h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  When ExxonMobil announced the Stabroek Block discovery in 2015, Guyana instantly became
                  the world&apos;s hottest oil province. By 2020, production was ramping and international operators
                  were pouring billions into the country — but their AI and analytics stacks came with them from Houston, London, and Amsterdam.
                </p>
                <p>
                  Three Guyanese engineers saw a gap and a responsibility. If the country was going to earn from its
                  natural resources, it should also earn from the technology that manages them. OilifyAI was incorporated
                  in Georgetown in December 2020 with one mission: build world-class AI for the energy sector, in Guyana, by Guyanese.
                </p>
                <p>
                  Today we work with operators across the Stabroek Block, the Berbice Basin, and internationally.
                  Every engineer on our team holds a Guyanese passport. Every office is in Georgetown. Every dollar reinvested is in Guyana.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 p-4 rounded-xl bg-[#f97316]/8 border border-[#f97316]/20">
                <span className="text-3xl">🇬🇾</span>
                <div>
                  <div className="text-[#0b1f3a] font-bold text-sm">100% Guyanese-Owned</div>
                  <div className="text-[#64748b] text-xs">No foreign equity. No external control. Our future is Guyana&apos;s future.</div>
                </div>
              </div>
            </div>

            {/* Visual callout */}
            <div className="relative">
              <div className="bg-[#0b1f3a] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 industrial-grid opacity-60" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#f97316]/15 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="text-6xl mb-4">⛽</div>
                  <blockquote className="text-white text-xl font-bold leading-snug mb-4">
                    &ldquo;Guyana produces the oil. Guyana should also build the intelligence that runs it.&rdquo;
                  </blockquote>
                  <cite className="text-[#f97316] text-sm font-semibold not-italic">
                    — Devraj Persaud, CEO
                  </cite>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      { label: 'Founded', value: 'Dec 2020' },
                      { label: 'HQ', value: 'Georgetown, GY' },
                      { label: 'Team', value: '25+ engineers' },
                      { label: 'Ownership', value: '100% GY' },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/5 rounded-lg px-3 py-2.5">
                        <div className="text-[#64748b] text-xs">{label}</div>
                        <div className="text-white text-sm font-bold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-3">Journey</p>
            <h2 className="text-4xl font-black text-[#0b1f3a]">Our Milestones</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e2e8f0]" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-8 items-start pl-0">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#0b1f3a] flex items-center justify-center shadow-md">
                      <span className="text-[#f97316] font-black text-sm">{year}</span>
                    </div>
                    {/* Dot on line */}
                    <div className="absolute top-1/2 -right-8 w-3 h-3 rounded-full bg-[#f97316] border-2 border-white -translate-y-1/2" />
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-[#e2e8f0] flex-1 card-hover">
                    <h3 className="text-[#0b1f3a] font-bold mb-1.5">{title}</h3>
                    <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-3">Core Values</p>
            <h2 className="text-4xl font-black text-[#0b1f3a]">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 rounded-2xl border border-[#e2e8f0] bg-white card-hover">
                <div className="w-11 h-11 rounded-xl bg-[#f97316]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#f97316]" />
                </div>
                <h3 className="font-bold text-[#0b1f3a] mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-3">Leadership</p>
            <h2 className="text-4xl font-black text-white">The Founding Team</h2>
            <p className="text-[#94a3b8] mt-3 max-w-xl mx-auto text-sm">
              Every leader at OilifyAI is Guyanese by birth or by choice — and proud of both.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, flag, initials }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#f97316]/30 transition-colors">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mb-4 text-white font-black text-lg">
                  {initials}
                </div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h3 className="text-white font-bold">{name}</h3>
                  <span>{flag}</span>
                </div>
                <p className="text-[#f97316] text-xs font-semibold mb-3">{role}</p>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <TrendingUp className="w-10 h-10 text-[#f97316] mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl font-black text-[#0b1f3a] mb-4">
            Join the Movement
          </h2>
          <p className="text-[#64748b] mb-8">
            Whether you&apos;re an energy operator, an investor, or a Guyanese engineer looking to build something great — we want to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-base">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-outline border-[#0b1f3a] text-[#0b1f3a] hover:bg-[#0b1f3a]/5 px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-base">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
