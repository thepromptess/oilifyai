import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    "Oilify AI is a cloud-based compliance platform built specifically for Guyana's petroleum sector.",
};

const sections = [
  {
    headline: 'What',
    body: "Oilify AI is a cloud-based compliance platform built specifically for Guyana\u2019s petroleum sector. It automates the Local Content certification process for businesses, individual workers, and corporations operating under the Local Content Act No. 18 of 2021.",
  },
  {
    headline: 'Why',
    body: "The Local Content Act was designed to ensure Guyanese businesses and workers benefit from the country\u2019s petroleum boom. But the certification process is complex, the documentation requirements are strict, and the deadlines are binding. A single inconsistency between documents can result in immediate rejection. Most businesses navigate this alone, without legal or administrative support. Oilify AI exists to change that.",
  },
  {
    headline: 'Outcome',
    body: "When you use Oilify AI, you arrive at the government portal prepared. Your documents are complete, consistent, and formatted exactly as the Local Content Secretariat requires. Your compliance ratios are tracked in real time. Your deadlines are managed automatically. Your opportunities are surfaced the moment they open. You spend less time on paperwork and more time earning.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#060e1a] min-h-screen pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6">
        {sections.map(({ headline, body }) => (
          <div
            key={headline}
            className="bg-[#0d2242] rounded-2xl border border-white/8 p-8 lg:p-12"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-[#f97316] tracking-tight mb-6">
              {headline}
            </h2>
            <p className="text-lg lg:text-xl text-white leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
