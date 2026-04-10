'use client';

import Link from 'next/link';
import { useState, FormEvent } from 'react';
import {
  ArrowRight, CheckCircle2, ShieldCheck, Bell,
  FileText, Users, Building2, UserCheck,
  Smartphone, Search, AlertCircle, ClipboardList,
  ChevronDown
} from 'lucide-react';

// ─── HOW IT WORKS ──────────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    desc: 'Sign up as a Business, Individual, or Corporation. Oilify AI maps you to the correct Local Content Act requirements automatically.',
  },
  {
    number: '02',
    title: 'Get Compliance-Ready',
    desc: 'We guide you through every document, certification, and registration needed to meet Guyana\'s Local Content Act — step by step.',
  },
  {
    number: '03',
    title: 'Submit to the Portal',
    desc: 'We prepare your complete submission package so you walk into the government portal ready. No surprises, no rejections.',
  },
  {
    number: '04',
    title: 'Stay Certified & Alert',
    desc: 'Oilify AI monitors your status, sends renewal reminders, and alerts you the moment new procurement opportunities open.',
  },
];

// ─── WHO IT'S FOR ───────────────────────────────────────────────────────────
const audiences = [
  {
    icon: Building2,
    title: 'Businesses',
    subtitle: 'Local suppliers & service companies',
    desc: 'Whether you\'re a catering company, equipment supplier, or logistics firm — if you want to work in Guyana\'s petroleum sector, Local Content registration is the door. We help you open it.',
    tags: ['Supplier Registration', 'Capacity Documentation', 'Procurement Alerts'],
  },
  {
    icon: UserCheck,
    title: 'Individuals',
    subtitle: 'Guyanese workers & professionals',
    desc: 'Skilled Guyanese workers need to be on the Local Content register to be considered for roles with operators and contractors. We make sure your profile is complete and visible.',
    tags: ['Skills Certification', 'Registry Listing', 'Job Opportunity Alerts'],
  },
  {
    icon: Users,
    title: 'Corporations',
    subtitle: 'Operators, contractors & multinationals',
    desc: 'International companies operating in Guyana\'s petroleum sector must meet Local Content spending and hiring thresholds. Oilify AI tracks your obligations and keeps you in good standing.',
    tags: ['Spend Tracking', 'Reporting Automation', 'Compliance Dashboards'],
  },
];

// ─── FEATURES ──────────────────────────────────────────────────────────────
const features = [
  {
    icon: ClipboardList,
    title: 'Guided Compliance Checklists',
    desc: 'Dynamic, role-specific checklists that adapt to your entity type and track every requirement of the Local Content Act.',
  },
  {
    icon: FileText,
    title: 'Portal Submission Prep',
    desc: 'We format and package your documents exactly as the government portal expects — eliminating rejections before they happen.',
  },
  {
    icon: ShieldCheck,
    title: 'Certification Management',
    desc: 'Track expiry dates, receive renewal reminders, and maintain a complete audit trail of every certification you hold.',
  },
  {
    icon: Search,
    title: 'Procurement Opportunity Alerts',
    desc: 'Get notified the moment relevant tenders, contracts, or hiring opportunities open in the sector — matched to your profile.',
  },
  {
    icon: Bell,
    title: 'Real-Time Status Notifications',
    desc: 'Instant alerts on registration status changes, government updates, and any new Local Content Act requirements that affect you.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    desc: 'Built for the field and the office. Everything you need to stay compliant is accessible from your phone, anywhere in Guyana.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 industrial-grid opacity-70" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#f97316]/5 blur-3xl -translate-y-1/4 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0b1f3a]/80 blur-3xl pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#f97316] to-transparent opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-36 text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/25 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse-glow" />
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">
              100% Guyanese Owned
            </span>
            <span className="text-[#f97316]/50 text-xs font-bold">|</span>
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">
              Diaspora Led
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-4">
            Your Digital Keys to the<br />
            <span className="text-[#f97316]">Stabroek Block.</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl font-semibold text-white/80 mb-5 tracking-wide">
            Local Content compliance. Automated.
          </p>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed mb-10">
            Oilify AI is the compliance app built for Guyanese businesses, workers, and corporations
            navigating the Local Content Act. We prepare you for the government portal. We keep you
            certified. We alert you when opportunities open.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#waitlist"
              className="btn-primary px-8 py-4 rounded-xl text-base flex items-center gap-2 group"
            >
              Join the Early Access Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#how-it-works"
              className="btn-outline px-8 py-4 rounded-xl text-base flex items-center gap-2"
            >
              See How It Works
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#475569] text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#f97316] to-transparent" />
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-3">How It Works</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b1f3a] tracking-tight">
              Compliance made<br />simple. Step by step.
            </h2>
            <p className="text-[#64748b] mt-4 max-w-xl mx-auto">
              From first sign-up to certified status — Oilify AI walks you through every stage
              of Local Content compliance so nothing falls through the cracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent" />

            {steps.map(({ number, title, desc }) => (
              <div key={number} className="relative bg-[#f8fafc] rounded-2xl p-7 border border-[#e2e8f0] card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] flex items-center justify-center mb-5 shadow-md shadow-orange-500/20">
                  <span className="text-white font-black text-sm">{number}</span>
                </div>
                <h3 className="text-[#0b1f3a] font-bold text-lg mb-3">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <section id="who-its-for" className="py-24 bg-[#0b1f3a] relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-3">Who It&apos;s For</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
              Built for everyone in<br />
              <span className="text-[#f97316]">Guyana&apos;s petroleum sector.</span>
            </h2>
            <p className="text-[#94a3b8] mt-4 max-w-xl mx-auto">
              Whether you&apos;re a local supplier, a skilled worker, or an international operator —
              Local Content compliance affects you. Oilify AI has a path for each.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {audiences.map(({ icon: Icon, title, subtitle, desc, tags }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#f97316]/40 transition-all hover:bg-white/8 card-hover">
                <div className="w-13 h-13 w-12 h-12 rounded-xl bg-[#f97316]/15 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
                <p className="text-[#f97316] text-xs font-semibold uppercase tracking-wider mb-4">{subtitle}</p>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#cbd5e1] text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label justify-center mb-3">Features</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0b1f3a] tracking-tight">
              Everything you need.<br />Nothing you don&apos;t.
            </h2>
            <p className="text-[#64748b] mt-4 max-w-xl mx-auto">
              Oilify AI is purpose-built for the Local Content Act — not a generic compliance tool
              retrofitted to Guyana. Every feature was designed around what Guyanese users actually need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#f8fafc] rounded-2xl p-7 border border-[#e2e8f0] card-hover group">
                <div className="w-11 h-11 rounded-xl bg-[#0b1f3a] flex items-center justify-center mb-5 group-hover:bg-[#f97316] transition-colors">
                  <Icon className="w-5 h-5 text-[#f97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#0b1f3a] text-lg mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WAITLIST FORM ────────────────────────────────────────────────── */}
      <WaitlistSection />
    </>
  );
}

function WaitlistSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    userType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.userType) {
      setError(true);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section
      id="waitlist"
      className="py-24 bg-[#f8fafc] relative overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 industrial-grid opacity-30" />
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-3xl -translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 mb-5">
            <Bell className="w-3.5 h-3.5 text-[#f97316]" />
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-widest">Early Access</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b1f3a] tracking-tight mb-4">
            Be first through<br />
            <span className="text-[#f97316]">the door.</span>
          </h2>
          <p className="text-[#64748b] leading-relaxed">
            Oilify AI is in early access. Join the waitlist and we&apos;ll reach out personally
            to get you set up before the public launch.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8 lg:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#f97316]/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8 text-[#f97316]" />
              </div>
              <h3 className="text-2xl font-black text-[#0b1f3a] mb-3">You&apos;re on the list!</h3>
              <p className="text-[#64748b] mb-2">
                Thanks, <span className="font-semibold text-[#0b1f3a]">{form.name}</span>. We&apos;ll be in touch within 48 hours.
              </p>
              <p className="text-[#94a3b8] text-sm">Your information will never be shared.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#374151] mb-1.5"
                >
                  Full Name <span className="text-[#f97316]">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#374151] mb-1.5"
                >
                  Email Address <span className="text-[#f97316]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors"
                />
              </div>

              {/* User Type */}
              <div>
                <label
                  htmlFor="userType"
                  className="block text-sm font-semibold text-[#374151] mb-1.5"
                >
                  I am a... <span className="text-[#f97316]">*</span>
                </label>
                <div className="relative">
                  <select
                    id="userType"
                    name="userType"
                    required
                    value={form.userType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm bg-white appearance-none cursor-pointer transition-colors"
                  >
                    <option value="">Select your type...</option>
                    <option value="Business">Business</option>
                    <option value="Individual">Individual</option>
                    <option value="Corporation">Corporation</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8] pointer-events-none" />
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#374151] mb-1.5"
                >
                  Message{' '}
                  <span className="text-[#94a3b8] font-normal">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your situation or what you need..."
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors resize-y"
                />
              </div>

              {/* Validation error */}
              {error && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Please fill in your full name, email, and user type.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 group"
              >
                Request Early Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trust line */}
              <p className="text-center text-[#94a3b8] text-xs leading-relaxed">
                We respond within 48 hours. Your information will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
