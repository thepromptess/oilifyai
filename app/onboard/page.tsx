'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, FileText, Clock, ChevronRight } from 'lucide-react';

// ─── TYPES ──────────────────────────────────────────────────────────────────

type EntityType = 'sole_proprietor' | 'landlord' | 'company' | null;
type ApplicationType = 'new' | 'renewal' | null;
type OwnershipType = 'guyanese_100' | 'guyanese_jv' | 'foreign' | null;

interface Answers {
  entity: EntityType;
  application: ApplicationType;
  ownership: OwnershipType;
}

// ─── PATH LOGIC ─────────────────────────────────────────────────────────────

interface PathSummary {
  pathName: string;
  tagline: string;
  documents: number;
  timeline: string;
  highlights: string[];
  color: 'teal' | 'gold' | 'navy';
}

function resolvePath(answers: Answers): PathSummary {
  const { entity, application, ownership } = answers;
  const isNew = application === 'new';

  if (entity === 'sole_proprietor') {
    return isNew
      ? {
          pathName: 'Sole Proprietor — New Registration',
          tagline: "You're starting fresh. We'll walk you through every document you need to get your certificate for the first time.",
          documents: 8,
          timeline: '15–20 business days',
          highlights: [
            'Business registration certificate',
            'National ID or passport',
            'Proof of Guyanese citizenship',
            'Bank reference letter',
            'Tax Identification Number (TIN)',
          ],
          color: 'teal',
        }
      : {
          pathName: 'Sole Proprietor — Certificate Renewal',
          tagline: "Good news — renewal is simpler than starting out. We'll confirm what's still current and flag anything that needs refreshing.",
          documents: 5,
          timeline: '10–15 business days',
          highlights: [
            'Current Local Content certificate',
            'Updated business registration',
            'Valid National ID',
            'Recent bank statement',
            'Tax compliance certificate',
          ],
          color: 'teal',
        };
  }

  if (entity === 'landlord') {
    return isNew
      ? {
          pathName: 'Property Landlord — New Registration',
          tagline: "You have land or property that oil and gas operators need. Here's how we get you properly registered to lease it.",
          documents: 7,
          timeline: '15–20 business days',
          highlights: [
            'Land title or deed of conveyance',
            'National ID or passport',
            'Property valuation report',
            'Tax Identification Number (TIN)',
            'Proof of ownership / recent utility bill',
          ],
          color: 'gold',
        }
      : {
          pathName: 'Property Landlord — Renewal',
          tagline: "Keeping your registration current means operators can keep working with you. Renewal is straightforward.",
          documents: 4,
          timeline: '10–15 business days',
          highlights: [
            'Current Local Content certificate',
            'Updated land title',
            'Valid National ID',
            'Tax compliance certificate',
          ],
          color: 'gold',
        };
  }

  // Company paths
  if (ownership === 'guyanese_100') {
    return isNew
      ? {
          pathName: '100% Guyanese Company — New Registration',
          tagline: "As a fully Guyanese-owned company, you qualify for the highest tier of Local Content benefits. Let's get you fully registered.",
          documents: 12,
          timeline: '20–30 business days',
          highlights: [
            'Certificate of Incorporation',
            'Articles of Incorporation & By-Laws',
            'Shareholder register (proving 100% Guyanese ownership)',
            'Directors & officers list',
            'GRA Tax Compliance Certificate',
            'Audited financial statements (2 years)',
            'Bank reference letter',
          ],
          color: 'navy',
        }
      : {
          pathName: '100% Guyanese Company — Renewal',
          tagline: "Renewal keeps your access to petroleum sector contracts active. We'll check your documents and highlight anything that's expired.",
          documents: 8,
          timeline: '15–20 business days',
          highlights: [
            'Current Local Content certificate',
            'Updated Certificate of Incorporation',
            'Current shareholder register',
            'GRA Tax Compliance Certificate',
            'Updated audited financials',
          ],
          color: 'navy',
        };
  }

  if (ownership === 'guyanese_jv') {
    return isNew
      ? {
          pathName: 'Joint Venture Company — New Registration',
          tagline: "Joint ventures with majority Guyanese ownership are a key part of the Local Content framework. Here's your full document picture.",
          documents: 14,
          timeline: '25–35 business days',
          highlights: [
            'Certificate of Incorporation',
            'Joint Venture Agreement',
            'Shareholder register (showing 51%+ Guyanese ownership)',
            'Articles of Incorporation & By-Laws',
            'GRA Tax Compliance Certificate',
            'Audited financial statements (2 years)',
            'Bank reference letters (all principals)',
          ],
          color: 'teal',
        }
      : {
          pathName: 'Joint Venture Company — Renewal',
          tagline: "Keep your joint venture in good standing. Renewal confirms your ownership structure is still compliant with the Act.",
          documents: 10,
          timeline: '20–25 business days',
          highlights: [
            'Current Local Content certificate',
            'Updated Joint Venture Agreement',
            'Current shareholder register',
            'GRA Tax Compliance Certificate',
            'Updated audited financials',
          ],
          color: 'teal',
        };
  }

  // Foreign
  return isNew
    ? {
        pathName: 'Foreign Incorporated Company — New Registration',
        tagline: "Foreign companies must meet specific Local Content thresholds. We'll map every requirement under the Act so nothing catches you off guard.",
        documents: 16,
        timeline: '30–45 business days',
        highlights: [
          'Certificate of Incorporation (home jurisdiction)',
          'Certified Guyanese registration / business licence',
          'Articles of Incorporation & By-Laws',
          'Board resolution authorising Guyana operations',
          'GRA Tax Identification Number',
          'Audited financial statements (3 years)',
          'Local Content plan and commitment statement',
        ],
        color: 'gold',
      }
    : {
        pathName: 'Foreign Incorporated Company — Renewal',
        tagline: "Staying registered keeps your operating licence active. We'll make sure your compliance record is clean and your documents are current.",
        documents: 12,
        timeline: '25–35 business days',
        highlights: [
          'Current Local Content certificate',
          'Updated Guyanese business licence',
          'GRA Tax Compliance Certificate',
          'Updated audited financials',
          'Renewed Local Content plan',
        ],
        color: 'gold',
      };
}

// ─── COLOUR HELPERS ──────────────────────────────────────────────────────────

const palette = {
  navy: {
    bg: 'bg-[#1A3C5E]',
    text: 'text-[#1A3C5E]',
    border: 'border-[#1A3C5E]',
    light: 'bg-[#1A3C5E]/10',
    ring: 'ring-[#1A3C5E]',
    badge: 'bg-[#1A3C5E] text-white',
  },
  teal: {
    bg: 'bg-[#1A7A6E]',
    text: 'text-[#1A7A6E]',
    border: 'border-[#1A7A6E]',
    light: 'bg-[#1A7A6E]/10',
    ring: 'ring-[#1A7A6E]',
    badge: 'bg-[#1A7A6E] text-white',
  },
  gold: {
    bg: 'bg-[#C8A951]',
    text: 'text-[#C8A951]',
    border: 'border-[#C8A951]',
    light: 'bg-[#C8A951]/10',
    ring: 'ring-[#C8A951]',
    badge: 'bg-[#C8A951] text-[#1A3C5E]',
  },
};

// ─── PROGRESS BAR ────────────────────────────────────────────────────────────

function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-[#1A3C5E]/60 uppercase tracking-widest">
          Step {current} of {total}
        </span>
        <span className="text-xs font-semibold text-[#1A7A6E]">{pct}%</span>
      </div>
      <div className="h-1.5 w-full bg-[#1A3C5E]/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#1A7A6E] to-[#1A3C5E] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ─── OPTION CARD ─────────────────────────────────────────────────────────────

function OptionCard({
  label,
  sublabel,
  selected,
  onSelect,
  icon,
}: {
  label: string;
  sublabel?: string;
  selected: boolean;
  onSelect: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full text-left px-6 py-5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 group ${
        selected
          ? 'border-[#1A7A6E] bg-[#1A7A6E]/8 shadow-md shadow-[#1A7A6E]/15'
          : 'border-[#e2e8f0] bg-white hover:border-[#1A7A6E]/40 hover:bg-[#1A7A6E]/4'
      }`}
    >
      {/* Radio indicator */}
      <div
        className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
          selected
            ? 'border-[#1A7A6E] bg-[#1A7A6E]'
            : 'border-[#cbd5e1] group-hover:border-[#1A7A6E]/60'
        }`}
      >
        {selected && (
          <div className="w-2 h-2 rounded-full bg-white" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {icon && <span className="text-[#1A3C5E] opacity-70">{icon}</span>}
          <span
            className={`font-semibold text-base leading-snug ${
              selected ? 'text-[#1A3C5E]' : 'text-[#334155]'
            }`}
          >
            {label}
          </span>
        </div>
        {sublabel && (
          <p className="text-sm text-[#64748b] mt-1 leading-relaxed">{sublabel}</p>
        )}
      </div>
    </button>
  );
}

// ─── SCREENS ─────────────────────────────────────────────────────────────────

function Q1Screen({
  value,
  onChange,
}: {
  value: EntityType;
  onChange: (v: EntityType) => void;
}) {
  const options: { value: EntityType; label: string; sublabel: string }[] = [
    {
      value: 'sole_proprietor',
      label: 'I own or operate a business',
      sublabel: 'Sole Proprietorship — you run it yourself or with a small team.',
    },
    {
      value: 'landlord',
      label: 'I own property I lease to oil and gas operators',
      sublabel: 'Landlord — you have land or facilities that operators need.',
    },
    {
      value: 'company',
      label: 'I represent a registered company or corporation',
      sublabel: 'Company — you act on behalf of an incorporated entity.',
    },
  ];

  return (
    <div className="space-y-4">
      {options.map((opt) => (
        <OptionCard
          key={opt.value}
          label={opt.label}
          sublabel={opt.sublabel}
          selected={value === opt.value}
          onSelect={() => onChange(opt.value)}
        />
      ))}
    </div>
  );
}

function Q2Screen({
  value,
  onChange,
}: {
  value: ApplicationType;
  onChange: (v: ApplicationType) => void;
}) {
  const options: { value: ApplicationType; label: string; sublabel: string }[] = [
    {
      value: 'new',
      label: 'New Registration',
      sublabel: "First time applying — I don't have a Local Content certificate yet.",
    },
    {
      value: 'renewal',
      label: 'Renewal',
      sublabel: 'I already have a certificate and it needs to be renewed.',
    },
  ];

  return (
    <div className="space-y-4">
      {options.map((opt) => (
        <OptionCard
          key={opt.value}
          label={opt.label}
          sublabel={opt.sublabel}
          selected={value === opt.value}
          onSelect={() => onChange(opt.value)}
        />
      ))}
    </div>
  );
}

function Q3Screen({
  value,
  onChange,
}: {
  value: OwnershipType;
  onChange: (v: OwnershipType) => void;
}) {
  const options: { value: OwnershipType; label: string; sublabel: string }[] = [
    {
      value: 'guyanese_100',
      label: '100% Guyanese owned',
      sublabel: 'Every shareholder is a Guyanese citizen or Guyanese-registered entity.',
    },
    {
      value: 'guyanese_jv',
      label: '51% or more Guyanese owned',
      sublabel: 'Joint Venture — majority Guyanese ownership with some foreign partners.',
    },
    {
      value: 'foreign',
      label: 'Foreign incorporated or majority foreign owned',
      sublabel: 'The company is registered abroad or has majority foreign shareholders.',
    },
  ];

  return (
    <div className="space-y-4">
      {options.map((opt) => (
        <OptionCard
          key={opt.value}
          label={opt.label}
          sublabel={opt.sublabel}
          selected={value === opt.value}
          onSelect={() => onChange(opt.value)}
        />
      ))}
    </div>
  );
}

function SummaryScreen({ answers }: { answers: Answers }) {
  const path = resolvePath(answers);
  const colors = palette[path.color];

  return (
    <div className="space-y-6">
      {/* Path name banner */}
      <div className={`rounded-2xl p-6 ${colors.light} border ${colors.border}`}>
        <p className="text-xs font-bold uppercase tracking-widest text-[#64748b] mb-1">
          Your path
        </p>
        <h2 className={`text-xl font-black leading-tight ${colors.text}`}>
          {path.pathName}
        </h2>
        <p className="text-sm text-[#475569] mt-2 leading-relaxed">
          {path.tagline}
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 text-center">
          <FileText className="w-6 h-6 text-[#1A3C5E] mx-auto mb-2 opacity-70" />
          <p className="text-3xl font-black text-[#1A3C5E]">{path.documents}</p>
          <p className="text-xs font-semibold text-[#64748b] mt-1 uppercase tracking-wide">
            Documents required
          </p>
        </div>
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 text-center">
          <Clock className="w-6 h-6 text-[#1A7A6E] mx-auto mb-2 opacity-80" />
          <p className="text-lg font-black text-[#1A3C5E] leading-tight">{path.timeline}</p>
          <p className="text-xs font-semibold text-[#64748b] mt-1 uppercase tracking-wide">
            Processing time
          </p>
        </div>
      </div>

      {/* Key documents preview */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[#64748b] mb-4">
          Key documents you'll need
        </p>
        <ul className="space-y-2.5">
          {path.highlights.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${colors.text}`} />
              <span className="text-sm text-[#334155] leading-snug">{item}</span>
            </li>
          ))}
          {path.documents > path.highlights.length && (
            <li className="flex items-start gap-3">
              <span className={`text-xs font-semibold mt-0.5 ${colors.text}`}>+{path.documents - path.highlights.length} more</span>
              <span className="text-sm text-[#94a3b8] leading-snug italic">
                We'll show you the full list inside your dashboard.
              </span>
            </li>
          )}
        </ul>
      </div>

      {/* CTA */}
      <div className="pt-2">
        <Link
          href="/#waitlist"
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-base transition-all duration-200 hover:shadow-lg ${colors.badge} hover:opacity-90`}
        >
          Get Started — Join the Waitlist
          <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-center text-xs text-[#94a3b8] mt-3">
          We'll reach out within 48 hours to set up your account.
        </p>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────

interface Step {
  id: string;
  question: string;
  description?: string;
}

function getSteps(entity: EntityType): Step[] {
  const base: Step[] = [
    {
      id: 'entity',
      question: 'What best describes you?',
      description: "Let's start simple. Pick the option that fits your situation.",
    },
    {
      id: 'application',
      question: 'What are you applying for?',
      description: "Are you coming in for the first time, or keeping an existing certificate current?",
    },
  ];

  if (entity === 'company') {
    base.push({
      id: 'ownership',
      question: "What is your company's ownership structure?",
      description: "Ownership structure determines which tier of the Local Content Act applies to you.",
    });
  }

  return base;
}

export default function OnboardPage() {
  const [answers, setAnswers] = useState<Answers>({
    entity: null,
    application: null,
    ownership: null,
  });
  const [step, setStep] = useState(0); // 0-indexed; last step = summary

  const steps = getSteps(answers.entity);
  const totalSteps = steps.length; // summary is step index = totalSteps
  const isSummary = step === totalSteps;

  // Current step meta (null on summary)
  const currentStepMeta = isSummary ? null : steps[step];

  // Can advance?
  function canAdvance(): boolean {
    if (isSummary) return false;
    const id = steps[step].id;
    if (id === 'entity') return answers.entity !== null;
    if (id === 'application') return answers.application !== null;
    if (id === 'ownership') return answers.ownership !== null;
    return false;
  }

  function handleNext() {
    if (!canAdvance()) return;

    // If entity changed away from company, clear ownership
    const nextStep = step + 1;
    const nextSteps = getSteps(answers.entity);

    setStep(nextStep);
    // Re-derive steps after state settles — if entity changed to non-company,
    // ownership stays null which is fine.
  }

  function handleBack() {
    if (step === 0) return;
    setStep((s) => s - 1);
  }

  function setEntity(v: EntityType) {
    // Reset downstream answers when entity changes
    setAnswers({ entity: v, application: null, ownership: null });
  }

  // Steps shown in progress bar = all question steps (not summary)
  // Progress bar: current question step out of total question steps
  const progressCurrent = Math.min(step + 1, totalSteps);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      {/* ── TOP BAR ──────────────────────────────────────────────────────── */}
      <header className="bg-white border-b border-[#e2e8f0] px-6 py-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#1A3C5E] flex items-center justify-center">
              <Cpu className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-[#1A3C5E] text-lg tracking-tight">
              Oilify<span className="text-[#1A7A6E]">AI</span>
            </span>
          </Link>
          <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-widest">
            Getting Started
          </span>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-lg">

          {/* Progress bar — hidden on summary */}
          {!isSummary && (
            <div className="mb-10">
              <ProgressBar current={progressCurrent} total={totalSteps} />
            </div>
          )}

          {/* Summary header */}
          {isSummary && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1A7A6E]/15 mb-4">
                <CheckCircle2 className="w-7 h-7 text-[#1A7A6E]" />
              </div>
              <h1 className="text-2xl font-black text-[#1A3C5E] mb-2">
                Here's your compliance path.
              </h1>
              <p className="text-sm text-[#64748b] leading-relaxed">
                Based on your answers, this is exactly what you'll need to get compliant under Guyana's Local Content Act.
              </p>
            </div>
          )}

          {/* Question header */}
          {!isSummary && currentStepMeta && (
            <div className="mb-7">
              <h1 className="text-2xl font-black text-[#1A3C5E] leading-tight mb-2">
                {currentStepMeta.question}
              </h1>
              {currentStepMeta.description && (
                <p className="text-sm text-[#64748b] leading-relaxed">
                  {currentStepMeta.description}
                </p>
              )}
            </div>
          )}

          {/* Question body */}
          {!isSummary && (
            <div className="mb-8">
              {steps[step].id === 'entity' && (
                <Q1Screen value={answers.entity} onChange={setEntity} />
              )}
              {steps[step].id === 'application' && (
                <Q2Screen
                  value={answers.application}
                  onChange={(v) => setAnswers((a) => ({ ...a, application: v }))}
                />
              )}
              {steps[step].id === 'ownership' && (
                <Q3Screen
                  value={answers.ownership}
                  onChange={(v) => setAnswers((a) => ({ ...a, ownership: v }))}
                />
              )}
            </div>
          )}

          {/* Summary screen */}
          {isSummary && <SummaryScreen answers={answers} />}

          {/* Navigation buttons */}
          {!isSummary && (
            <div className="flex items-center gap-4">
              {step > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#e2e8f0] bg-white text-[#1A3C5E] font-semibold text-sm hover:border-[#1A3C5E]/40 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                disabled={!canAdvance()}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  canAdvance()
                    ? 'bg-[#1A3C5E] text-white hover:bg-[#1A7A6E] shadow-md shadow-[#1A3C5E]/20 hover:shadow-[#1A7A6E]/25'
                    : 'bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed'
                }`}
              >
                {step === totalSteps - 1 ? 'See My Path' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Back button on summary */}
          {isSummary && (
            <button
              type="button"
              onClick={handleBack}
              className="mt-4 flex items-center gap-2 text-sm text-[#64748b] hover:text-[#1A3C5E] transition-colors mx-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Go back and change my answers
            </button>
          )}
        </div>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="py-6 px-6 border-t border-[#e2e8f0] bg-white">
        <p className="text-center text-xs text-[#94a3b8]">
          Oilify AI — Local Content Compliance Platform for Guyana's Petroleum Sector.{' '}
          <Link href="/" className="text-[#1A7A6E] hover:underline font-medium">
            Back to home
          </Link>
        </p>
      </footer>
    </div>
  );
}
