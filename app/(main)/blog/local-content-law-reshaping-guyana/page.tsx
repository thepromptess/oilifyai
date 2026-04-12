import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Law That Started in Oil Is Now Reshaping All of Guyana',
  description:
    'The Local Content Act No. 18 of 2021 was written for the oil and gas sector. But according to the minister who helped shape it, that expansion is deliberate, accelerating, and not stopping.',
};

export default function BlogPost() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0b1f3a] pt-32 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#94a3b8] text-sm hover:text-[#f97316] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-wider">April 2026</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[#94a3b8] text-xs">Issue No. 1</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[#94a3b8] text-xs">The Oilify AI Weekly</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            The Law That Started in Oil Is Now Reshaping All of Guyana
          </h1>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">

          {/* Body text styles via inline className for consistency */}
          <div className="space-y-6 text-[#1e293b] text-lg leading-relaxed">

            <p>
              If you are a business owner, investor, or professional operating anywhere in Guyana
              right now, there is a piece of legislation you need to understand. Not because it
              might affect you someday. Because it already is.
            </p>

            <p>
              The Local Content Act No. 18 of 2021 was written for the oil and gas sector. It was
              designed to make sure that as ExxonMobil, Hess, and other global operators extracted
              billions of dollars of wealth from the Stabroek Block, Guyanese businesses and workers
              got a real share of that opportunity. Since its implementation it has secured hundreds
              of millions of US dollars in contracts for Guyanese firms annually.
            </p>

            <p>
              But something interesting has happened since then. The Act has started reaching further
              than its authors intended. And according to the minister who helped shape it, that
              expansion is deliberate, it is accelerating, and it is not stopping.
            </p>

            {/* Section heading */}
            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              What the Minister Said in Parliament
            </h2>

            <p>
              On February 10, 2026, Natural Resources Minister Vickram Bharrat addressed Parliament
              during consideration of the 2026 budget estimates. What he said matters for anyone
              doing business in Guyana, regardless of sector.
            </p>

            {/* Blockquote 1 */}
            <blockquote className="border-l-4 border-[#f97316] pl-6 py-1 my-2">
              <p className="text-[#1e293b] italic leading-relaxed">
                When we designed, passed and implemented the local content legislation, it was
                primarily intended for the oil and gas sector. But what we have done over the years
                is that we have tried to get investors who are investing in other sectors to also at
                least be compliant or try to be compliant or in line with the local content
                legislation.
              </p>
              <cite className="block mt-3 text-sm font-semibold text-[#f97316] not-italic">
                Minister Vickram Bharrat, Parliament, February 10, 2026
              </cite>
            </blockquote>

            <p>
              The minister was responding to a question from opposition MP Juretha Fernandes, who
              asked whether the government was considering a dedicated Local Content policy for the
              mining sector. His answer went further than that.
            </p>

            {/* Blockquote 2 */}
            <blockquote className="border-l-4 border-[#f97316] pl-6 py-1 my-2">
              <p className="text-[#1e293b] italic leading-relaxed">
                You find that a lot of investors coming to Guyana now, even in agriculture, tourism,
                mining, they have actually been following the pattern or coming in line with the
                local content legislation.
              </p>
              <cite className="block mt-3 text-sm font-semibold text-[#f97316] not-italic">
                Minister Bharrat
              </cite>
            </blockquote>

            <p>
              And on the question of dedicated legislation for other sectors he confirmed: It is
              something that we are considering, whether there is need to have a dedicated local
              content legislation for mining or for the other sectors.
            </p>

            {/* Section heading */}
            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              What This Means in Plain Terms
            </h2>

            <p>
              The Local Content framework is no longer petroleum-only in practice. Here is what is
              actually happening on the ground.
            </p>

            <ul className="space-y-4 pl-0">
              {[
                'Companies entering Guyana in agriculture are voluntarily structuring their operations to align with Local Content principles even without a legal mandate.',
                'Investors in tourism are doing the same. The principle of prioritizing Guyanese nationals in employment and procurement is becoming a baseline expectation across industries.',
                'The mining sector is next in line for formal legislation. The minister confirmed the government is actively examining whether dedicated law is required.',
                "The petroleum sector\u2019s framework is becoming the template for how Guyana manages foreign investment across all regulated industries.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#f97316] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              If you are a Guyanese business that has been thinking Local Content compliance only
              applies to oil, that thinking needs to change. And if you are a foreign investor
              entering any sector in Guyana, compliance with Local Content principles is
              increasingly the price of entry.
            </p>

            {/* Section heading */}
            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              Why This Matters Right Now
            </h2>

            <p>
              Guyana&apos;s economy is growing at a rate that has no parallel in the world. The IMF
              confirmed an average of 47 percent GDP growth per year since 2022, the highest in the
              world. Production in the Stabroek Block is approaching one million barrels per day.
              Revenues are projected to exceed 10 billion dollars annually by end of decade.
            </p>

            <p>
              The businesses and individuals who understand the compliance landscape before the
              legislation formalizes are the ones who will be positioned when it does. The ones who
              wait until the law is written will be scrambling to catch up. This newsletter exists
              for the first group.
            </p>

            {/* Section heading */}
            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              One Thing to Do This Week
            </h2>

            <p>
              If you have not already, visit{' '}
              <a
                href="https://lcregister.petroleum.gov.gy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f97316] hover:underline font-medium"
              >
                lcregister.petroleum.gov.gy
              </a>{' '}
              and review the requirements for Local Content certification. Whether you are in
              petroleum or another sector, understanding how this framework works gives you a
              significant advantage as compliance expectations expand across Guyana&apos;s economy.
            </p>

            <p>
              And if the process feels complex, that is exactly what Oilify AI is being built to
              simplify. Join our early access waitlist at{' '}
              <a
                href="https://oilifyai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f97316] hover:underline font-medium"
              >
                oilifyai.com
              </a>{' '}
              and be among the first to use it when we launch.
            </p>

            {/* Closing line */}
            <p className="pt-6 border-t border-[#e2e8f0] font-bold text-[#0b1f3a]">
              Powering Local Content compliance across Guyana&apos;s petroleum sector.
            </p>
          </div>
        </div>
      </article>

      {/* Back link */}
      <div className="bg-white pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#94a3b8] text-sm hover:text-[#f97316] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
