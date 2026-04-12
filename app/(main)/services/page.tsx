import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BarChart3, Brain, ShieldCheck, CheckCircle2,
  ArrowRight, TrendingUp, Cpu, AlertTriangle,
  Database, GitBranch, Layers, Lock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'OilifyAI services: Predictive Logistics, AI Training, and Compliance & Reporting for the energy sector.',
};

const services = [
  {
    id: 'logistics',
    icon: BarChart3,
    badge: '01 — Logistics',
    title: 'Predictive Logistics',
    tagline: 'Know tomorrow\'s bottlenecks today.',
    description:
      'Our predictive logistics platform fuses real-time sensor data, historical field records, and geospatial feeds to forecast supply-chain disruptions weeks before they occur — enabling proactive decision-making across your entire operational footprint.',
    features: [
      { icon: TrendingUp, text: 'Demand forecasting with 94% accuracy across 90-day horizons' },
      { icon: Cpu, text: 'Edge-deployed inference engines for offshore and remote sites' },
      { icon: GitBranch, text: 'Automated route optimization for vessel and land-based logistics' },
      { icon: Database, text: 'Seamless ERP integration (SAP, Oracle, custom APIs)' },
      { icon: AlertTriangle, text: 'Early-warning alerts for equipment failure and supply gaps' },
      { icon: Layers, text: 'Digital twin simulation of your full supply chain' },
    ],
    accentColor: '#f97316',
    impact: ['35% reduction in unplanned downtime', '20% lower logistics costs', 'Real-time visibility across all nodes'],
  },
  {
    id: 'training',
    icon: Brain,
    badge: '02 — AI Training',
    title: 'AI Training & Development',
    tagline: 'Models as unique as your operation.',
    description:
      'Off-the-shelf AI rarely fits the specific demands of oil-field environments. Our engineering team builds, fine-tunes, and deploys custom ML models — trained on your proprietary data, validated against your operational KPIs, and maintained by our Guyanese experts.',
    features: [
      { icon: Brain, text: 'Custom LLM fine-tuning on operational manuals and field data' },
      { icon: Cpu, text: 'Computer vision models for visual inspection and anomaly detection' },
      { icon: Database, text: 'Time-series forecasting for production and reservoir analysis' },
      { icon: GitBranch, text: 'MLOps pipelines with automated retraining and drift detection' },
      { icon: Layers, text: 'Transfer learning from global energy datasets to local context' },
      { icon: TrendingUp, text: 'Explainable AI (XAI) dashboards for regulatory transparency' },
    ],
    accentColor: '#3b82f6',
    impact: ['Full model ownership — no vendor lock-in', 'On-premises or cloud deployment', '24/7 Guyanese engineering support'],
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    badge: '03 — Compliance',
    title: 'Compliance & Reporting',
    tagline: 'Audit-ready, always.',
    description:
      'Navigating Guyana\'s EPA requirements, international HSE standards, and SEC reporting obligations is complex and costly. OilifyAI automates the entire compliance lifecycle — from data collection to submission — reducing risk and freeing your team for higher-value work.',
    features: [
      { icon: ShieldCheck, text: 'Automated GEMA, EPA-GY, and ISO 14001 compliance monitoring' },
      { icon: Lock, text: 'SEC and ESG reporting automation for public companies' },
      { icon: AlertTriangle, text: 'Real-time HSE incident detection and risk scoring' },
      { icon: Database, text: 'Immutable audit trail with blockchain-backed record-keeping' },
      { icon: TrendingUp, text: 'Emissions tracking: Scope 1, 2, and 3 carbon accounting' },
      { icon: GitBranch, text: 'Regulatory change monitoring — auto-update rule engines' },
    ],
    accentColor: '#10b981',
    impact: ['3× faster compliance cycles', 'Zero missed filing deadlines', 'Full regulatory audit trail'],
  },
];

const addOns = [
  { icon: Cpu, title: 'Pipeline Integrity AI', desc: 'Corrosion prediction and smart pigging data analysis.' },
  { icon: BarChart3, title: 'Production Optimization', desc: 'Maximize reservoir recovery with AI-driven drawdown models.' },
  { icon: AlertTriangle, title: 'Risk Analytics', desc: 'Enterprise-wide risk scoring and scenario modeling.' },
  { icon: Lock, title: 'Cybersecurity for OT/IT', desc: 'AI threat detection tuned for SCADA and ICS environments.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1f3a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label justify-center mb-4">Our Services</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Industrial AI Services
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Three pillars of intelligence for the modern energy enterprise — built by Guyanese engineers who know the field.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${isEven ? 'bg-[#f8fafc]' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-start ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                    style={{ background: `${service.accentColor}15`, color: service.accentColor }}
                  >
                    {service.badge}
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-[#0b1f3a] tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="text-xl font-semibold mb-4" style={{ color: service.accentColor }}>
                    {service.tagline}
                  </p>
                  <p className="text-[#475569] leading-relaxed mb-8 text-base">
                    {service.description}
                  </p>

                  {/* Impact pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.impact.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border"
                        style={{
                          background: `${service.accentColor}10`,
                          borderColor: `${service.accentColor}30`,
                          color: service.accentColor,
                        }}
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Feature Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${isEven ? 'lg:order-1' : ''}`}>
                  {service.features.map(({ icon: FIcon, text }) => (
                    <div
                      key={text}
                      className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#f97316]/30 transition-colors"
                    >
                      <div
                        className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: `${service.accentColor}15` }}
                      >
                        <FIcon className="w-4 h-4" style={{ color: service.accentColor }} />
                      </div>
                      <p className="text-sm text-[#475569] leading-snug">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Add-ons */}
      <section className="py-20 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-3">Extended Platform</p>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Additional Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {addOns.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#f97316]/30 transition-colors">
                <Icon className="w-6 h-6 text-[#f97316] mb-3" />
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-[#94a3b8] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-[#0b1f3a] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[#64748b] mb-8">
            Talk to our team about a custom package built for your operation.
          </p>
          <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl inline-flex items-center gap-2 text-base">
            Contact Us Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
