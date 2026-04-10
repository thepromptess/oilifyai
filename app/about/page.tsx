import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Oilify AI is a cloud-based compliance platform built specifically for Guyana\'s petroleum sector.',
};

export default function AboutPage() {
  return (
    <div className="bg-white pt-32">

      {/* What */}
      <section className="py-20 lg:py-28 border-b border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-black text-[#f97316] tracking-tight mb-8">
            What
          </h2>
          <p className="text-xl lg:text-2xl text-[#1e293b] leading-relaxed">
            Oilify AI is a cloud-based compliance platform built specifically for Guyana&apos;s
            petroleum sector. It automates the Local Content certification process for businesses,
            individual workers, and corporations operating under the Local Content Act No. 18 of 2021.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 lg:py-28 border-b border-[#e2e8f0]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-black text-[#f97316] tracking-tight mb-8">
            Why
          </h2>
          <p className="text-xl lg:text-2xl text-[#1e293b] leading-relaxed">
            The Local Content Act was designed to ensure Guyanese businesses and workers benefit
            from the country&apos;s petroleum boom. But the certification process is complex, the
            documentation requirements are strict, and the deadlines are binding. A single
            inconsistency between documents can result in immediate rejection. Most businesses
            navigate this alone, without legal or administrative support. Oilify AI exists to
            change that.
          </p>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-black text-[#f97316] tracking-tight mb-8">
            Outcome
          </h2>
          <p className="text-xl lg:text-2xl text-[#1e293b] leading-relaxed">
            When you use Oilify AI, you arrive at the government portal prepared. Your documents
            are complete, consistent, and formatted exactly as the Local Content Secretariat
            requires. Your compliance ratios are tracked in real time. Your deadlines are managed
            automatically. Your opportunities are surfaced the moment they open. You spend less
            time on paperwork and more time earning.
          </p>
        </div>
      </section>

    </div>
  );
}
