import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Oilify AI automates Local Content certification for Guyanese businesses, workers, and corporations operating under the Local Content Act No. 18 of 2021.',
};

const sections = [
  {
    headline: 'What',
    body: "Oilify AI is a cloud-based compliance platform built specifically for Guyana's petroleum sector. It automates the Local Content certification process for businesses, individual workers, and corporations operating under the Local Content Act No. 18 of 2021.",
  },
  {
    headline: 'Why',
    body: "The Local Content Act was designed to ensure Guyanese businesses and workers benefit from the country's petroleum boom. But the certification process is complex, the documentation requirements are strict, and the deadlines are binding. A single inconsistency between documents can result in immediate rejection. Most businesses navigate this alone, without legal or administrative support. Oilify AI exists to change that.",
  },
  {
    headline: 'Outcome',
    body: 'When you use Oilify AI, you arrive at the government portal prepared. Your documents are complete, consistent, and formatted exactly as the Local Content Secretariat requires. Your compliance ratios are tracked in real time. Your deadlines are managed automatically. Your opportunities are surfaced the moment they open. You spend less time on paperwork and more time earning.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-[#0b1f3a] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">About</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            Local Content compliance.<br />
            <span className="text-[#f97316]">Built for Guyana.</span>
          </h1>
        </div>
      </section>

      {/* ── THREE SECTIONS ── */}
      <div className="bg-white">
        {sections.map(({ headline, body }, i) => (
          <section
            key={headline}
            className={`py-20 lg:py-28 ${
              i < sections.length - 1 ? 'border-b border-[#e2e8f0]' : ''
            }`}
          >
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <h2 className="text-5xl lg:text-6xl font-black text-[#f97316] tracking-tight mb-8">
                {headline}
              </h2>
              <p className="text-xl lg:text-2xl text-[#1e293b] leading-relaxed font-normal">
                {body}
              </p>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
