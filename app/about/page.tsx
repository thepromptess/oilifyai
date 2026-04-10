import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart, Globe2, Users, Cpu,
  ArrowRight, CheckCircle2, Briefcase, GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet Cloyette Harris-Stoute — Certified AI Consultant, founder of Oilify AI and AI Design Atelier, bridging two decades of healthcare technology with Guyana\'s petroleum sector.',
};

const values = [
  {
    icon: Heart,
    title: 'Guyanese at Heart',
    desc: 'Born in Guyana, building for Guyana. Every feature in Oilify AI reflects a deep understanding of what local businesses and workers actually face on the ground.',
  },
  {
    icon: Cpu,
    title: 'AI with Purpose',
    desc: 'We don\'t use AI for its own sake. Every automation in the platform exists to remove a real barrier between Guyanese people and economic opportunity.',
  },
  {
    icon: Globe2,
    title: 'Diaspora as Bridge',
    desc: 'Decades of experience in U.S. healthcare technology now applied to Guyana\'s most critical compliance challenge — proof that the diaspora builds best when it builds for home.',
  },
  {
    icon: Users,
    title: 'Workforce First',
    desc: 'Local Content compliance isn\'t just regulatory — it\'s about who gets to participate in Guyana\'s oil boom. Oilify AI exists to widen that door.',
  },
];

const milestones = [
  {
    year: '2002',
    title: 'Career in Healthcare Technology',
    desc: 'Began over two decades of experience in healthcare technology — building systems and processes that put people at the center of complex regulatory environments.',
  },
  {
    year: '2020',
    title: 'Founded AI Design Atelier (AiDA)',
    desc: 'Launched AiDA, a consultancy applying certified AI expertise to help organizations design smarter, human-centered technology solutions.',
  },
  {
    year: '2023',
    title: 'Identified the Local Content Gap',
    desc: 'Watching Guyana\'s oil boom accelerate, recognized that thousands of businesses and workers had no clear path to Local Content compliance — and set out to fix it.',
  },
  {
    year: '2025',
    title: 'Founded Oilify AI',
    desc: 'Launched Oilify AI to bring AI-powered compliance automation to Guyana\'s petroleum sector — the first app built specifically for the Local Content Act.',
  },
  {
    year: '2026',
    title: 'Early Access Launch',
    desc: 'Opening early access to businesses, individuals, and corporations across Guyana and the diaspora who are ready to get Local Content compliant.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#0b1f3a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="section-label mb-4">Our Story</p>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Built from Experience.<br />
              <span className="text-[#f97316]">Built for Guyana.</span>
            </h1>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f97316]/10 border border-[#f97316]/25 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">100% Guyanese Owned</span>
              <span className="text-[#f97316]/50 text-xs font-bold">|</span>
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Diaspora Led</span>
            </div>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Oilify AI was founded by a Guyanese-born, Queens-based Certified AI Consultant who spent
              over two decades in healthcare technology before turning that expertise toward the compliance
              challenge holding back Guyana&apos;s local workforce from its own oil boom.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Story */}
            <div>
              <p className="section-label mb-4">The Founder</p>
              <h2 className="text-4xl font-black text-[#0b1f3a] tracking-tight mb-2">
                Cloyette Harris-Stoute
              </h2>
              <p className="text-[#f97316] font-semibold mb-6">
                Certified AI Consultant · Founder, Oilify AI &amp; AI Design Atelier (AiDA)
              </p>

              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  Cloyette Harris-Stoute is a Guyanese-born, Queens, New York-based Certified AI
                  Consultant with over two decades of experience in healthcare technology. Throughout
                  her career she has designed and implemented systems that sit at the intersection of
                  complex regulation and human need — the exact intersection that Local Content
                  compliance occupies.
                </p>
                <p>
                  In 2020 she founded AI Design Atelier (AiDA), a consultancy focused on applying
                  AI strategically and responsibly across industries. But her eye never left Guyana.
                  As the Stabroek Block transformed the country into one of the world&apos;s fastest-growing
                  oil producers, she watched the Local Content Act — designed to ensure Guyanese
                  people and businesses benefit from the boom — become a compliance maze that was
                  shutting people out rather than letting them in.
                </p>
                <p>
                  Oilify AI is her answer to that problem. She built it to bridge technology and
                  heritage: bringing the systems-thinking and AI expertise she developed in U.S.
                  healthcare to bear on the most consequential compliance challenge facing Guyana&apos;s
                  local workforce. The mission is simple — make sure every Guyanese business, worker,
                  and corporation that wants to participate in the petroleum sector can.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <GraduationCap className="w-5 h-5 text-[#f97316] shrink-0" />
                  <span className="text-[#0b1f3a] text-sm font-medium">Certified AI Consultant</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <Briefcase className="w-5 h-5 text-[#f97316] shrink-0" />
                  <span className="text-[#0b1f3a] text-sm font-medium">Founder, AI Design Atelier (AiDA)</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <Briefcase className="w-5 h-5 text-[#f97316] shrink-0" />
                  <span className="text-[#0b1f3a] text-sm font-medium">20+ Years in Healthcare Technology</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <Globe2 className="w-5 h-5 text-[#f97316] shrink-0" />
                  <span className="text-[#0b1f3a] text-sm font-medium">Guyanese-Born · Queens, New York</span>
                </div>
              </div>
            </div>

            {/* Visual panel */}
            <div className="space-y-4">
              <div className="bg-[#0b1f3a] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 industrial-grid opacity-60" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#f97316]/15 rounded-full blur-2xl" />
                <div className="relative z-10">
                  {/* NYC + Georgetown bridge */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="text-center">
                      <div className="text-3xl mb-1">🗽</div>
                      <div className="text-[#94a3b8] text-xs font-semibold">Queens, NY</div>
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-px bg-gradient-to-r from-[#475569] via-[#f97316] to-[#475569]" />
                      <div className="text-center mt-1.5 text-[#f97316] text-xs font-bold">Bridging the Gap</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-1">🇬🇾</div>
                      <div className="text-[#94a3b8] text-xs font-semibold">Georgetown, GY</div>
                    </div>
                  </div>

                  <blockquote className="text-white text-xl font-bold leading-snug mb-4">
                    &ldquo;Twenty years in healthcare technology taught me one thing: the right system removes barriers between people and the access they deserve. That&apos;s exactly what Oilify AI does.&rdquo;
                  </blockquote>
                  <cite className="text-[#f97316] text-sm font-semibold not-italic">
                    — Cloyette Harris-Stoute, Founder &amp; CEO
                  </cite>

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {[
                      { label: 'Based In', value: 'Queens, New York' },
                      { label: 'Origin', value: 'Guyana' },
                      { label: 'Experience', value: '20+ Years' },
                      { label: 'Focus', value: 'Local Content' },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-white/5 rounded-lg px-3 py-2.5">
                        <div className="text-[#64748b] text-xs">{label}</div>
                        <div className="text-white text-sm font-bold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#f97316]/8 border border-[#f97316]/20 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#0b1f3a] font-bold text-sm mb-1">Also Founder of AI Design Atelier (AiDA)</div>
                  <div className="text-[#64748b] text-xs leading-relaxed">
                    AiDA is Cloyette&apos;s AI consultancy, helping organizations across industries design
                    smarter, human-centered technology. Oilify AI is AiDA&apos;s most personal mission.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label justify-center mb-3">Journey</p>
            <h2 className="text-4xl font-black text-[#0b1f3a]">From Healthcare to the Stabroek Block</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#e2e8f0]" />
            <div className="space-y-10">
              {milestones.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-8 items-start">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-[#0b1f3a] flex items-center justify-center shadow-md">
                      <span className="text-[#f97316] font-black text-xs text-center leading-tight px-1">{year}</span>
                    </div>
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

      {/* ── VALUES ── */}
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

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to get Local Content compliant?
          </h2>
          <p className="text-[#94a3b8] mb-8 max-w-xl mx-auto">
            Join the Oilify AI waitlist and we&apos;ll reach out personally to walk you through getting started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="btn-primary px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-base"
            >
              Join the Waitlist <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
