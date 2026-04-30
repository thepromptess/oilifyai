import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'You Can Get the Local Content Certificate. Here Is How You Actually Get the Business.',
  description:
    "Guyana's Local Content Secretariat just made it faster and simpler to get certified. But the Director is clear: the certificate is the starting line, not the finish line.",
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
            <span className="text-[#f97316] text-xs font-bold uppercase tracking-wider">December 31, 2025</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[#94a3b8] text-xs">7 min read</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[#94a3b8] text-xs">Oilify AI Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            You Can Get the Local Content Certificate. Here Is How You Actually Get the Business.
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            Guyana&apos;s Local Content Secretariat just made it faster and simpler to get certified.
            But the Director is clear: the certificate is the starting line, not the finish line.
            Here is what local businesses and diaspora entrepreneurs need to know right now.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-[#1e293b] text-lg leading-relaxed">

            <p>
              There is a moment in a developing economy when the rules shift from being about access
              to being about performance. Guyana has reached that moment. The Local Content Act
              opened the door. Now the question is whether Guyanese businesses are ready to walk
              through it.
            </p>

            <p>
              In the final episode of Energy Perspectives for 2025, Director of the Local Content
              Secretariat Michael Monroe laid out plainly what the system now offers, what it still
              requires from business owners, and where the real opportunities are opening up in 2026.
              The conversation was practical, direct, and worth paying close attention to.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              THE CERTIFICATION PROCESS JUST GOT FASTER
            </h2>

            <p>
              One of the most concrete announcements out of the secretariat is a new structured
              timeline for local content certification, taking effect January 2026. For the first
              time, businesses will know exactly how long the process should take before they even
              begin. The uncertainty that has frustrated applicants is being replaced with a clear,
              technology-driven system.
            </p>

            <p>Here is how the new timelines break down by business type:</p>

            {/* Timeline table */}
            <div className="my-2 rounded-2xl border border-[#e2e8f0] overflow-hidden">
              <div className="bg-[#0b1f3a] px-6 py-4">
                <p className="text-white font-black text-sm uppercase tracking-wider">
                  NEW APPLICATION TIMELINES FROM JANUARY 2026
                </p>
              </div>
              <div className="divide-y divide-[#e2e8f0]">
                <div className="grid grid-cols-3 bg-[#f8fafc] px-6 py-3 text-xs font-bold text-[#64748b] uppercase tracking-wider">
                  <span>Business Type</span>
                  <span>New Application</span>
                  <span>Renewal</span>
                </div>
                {[
                  ['Sole proprietorship', '5 business days', '3 business days'],
                  ['100% Guyanese-owned company', '15 business days', '10 business days'],
                  ['Company with foreign shareholding', '21 business days', '15 business days'],
                ].map(([type, newApp, renewal]) => (
                  <div key={type} className="grid grid-cols-3 px-6 py-4 text-sm text-[#1e293b]">
                    <span className="font-medium">{type}</span>
                    <span className="text-[#f97316] font-semibold">{newApp}</span>
                    <span className="text-[#64748b]">{renewal}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              The timelines only begin once a complete application is submitted through the new
              online portal. That is the critical detail. Under the old system, incomplete
              submissions created back-and-forth delays that could stretch the process for weeks.
              The portal now prompts applicants to submit every required document upfront, and the
              clock does not start until everything is in. Partial submissions will not be considered
              submitted at all.
            </p>

            <p>
              What this means practically: If you submit a complete application on a Wednesday, your
              five business days run Wednesday, Thursday, Friday, then Monday, Tuesday. The portal
              will tell you exactly which documents are required based on your business type, so
              there is no more guesswork about what to prepare.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              GETTING CERTIFIED IS THE STARTING LINE, NOT THE FINISH LINE
            </h2>

            <p>
              Director Monroe was measured but honest about something worth hearing directly. Over
              1,300 companies are already certified as of the close of 2025. The secretariat has no
              interest in limiting that number. In fact, the wider the pool of certified businesses,
              the stronger the local participation in the sector. But certification alone does not
              guarantee contracts.
            </p>

            <p>The certificate earns you a seat at the table. What happens after that is on you.</p>

            <p>
              Guyanese companies compete against each other for the business that falls within local
              content targets. And in areas where targets are set below 100 percent, foreign
              companies can and do bid for the remaining share. The playing field is not empty. The
              businesses that succeed are the ones that understand the procurement systems of the oil
              companies, show up to the right rooms, and have their financial affairs in order before
              an opportunity arrives.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              WHERE THE REAL OPENING IS FOR SMEs AND WOMEN-OWNED BUSINESSES
            </h2>

            <p>
              Two groups came up repeatedly in the conversation as priorities the secretariat is
              actively working to support: small and medium-sized enterprises, and women-owned
              businesses.
            </p>

            <p>
              The secretariat has already begun conversations with contractors and subcontractors
              about earmarking specific procurement areas for these groups. Director Monroe is
              building a list, right now, of certified women-owned businesses and SMEs to present to
              the oil companies as a starting point for those targeted allocations. But he can only
              include businesses in that list if the data is in the system.
            </p>

            <p>
              That means: when you apply or renew your certification, disclose your ownership
              structure. If your business is women-owned, say so. If you are an SME, make sure that
              is reflected in your submission. The secretariat cannot advocate for a demographic it
              cannot identify in its own data.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              ACCESS TO FINANCING IS NO LONGER THE WALL IT USED TO BE
            </h2>

            <p>
              One of the barriers that has historically kept smaller Guyanese businesses from
              participating meaningfully in the oil sector is capital. The procurement cycles in oil
              and gas are long, and local businesses often cannot bridge the gap between winning a
              contract and getting paid.
            </p>

            <p>
              Two developments are changing that. First, local banks including GBTI now offer
              invoice financing, which means a certified business that wins a contract from ExxonMobil
              or SBM can take that invoice to the bank and access credit against it before payment
              arrives. Second, the government is developing a dedicated development bank offering
              zero-interest financing specifically for SMEs and women-owned businesses operating in
              this space.
            </p>

            <p>
              These are not hypothetical programs. They are either already available or in active
              development. If you have been waiting for the financing piece to come together before
              taking the sector seriously, 2026 may be the year to stop waiting.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              WHAT YOU SHOULD DO BEFORE THE END OF THE FIRST QUARTER
            </h2>

            <ul className="space-y-5 pl-0">
              {[
                {
                  n: '1',
                  text: 'Register on the new online portal. Get your account set up before you need to use it. Early registration puts you ahead of the rush when the portal launches.',
                },
                {
                  n: '2',
                  text: 'Gather your documentation now. The portal will tell you exactly what is needed based on your business type. Pull those documents together in advance so your submission is complete from day one.',
                },
                {
                  n: '3',
                  text: 'Disclose your ownership and demographics fully. If your business is women-owned or qualifies as an SME, make sure that is reflected in your application. The secretariat is actively building lists to present to contractors.',
                },
                {
                  n: '4',
                  text: 'Explore invoice financing with your bank. Talk to GBTI or other local banks about what invoice financing products are now available. Understanding the terms before you need the funds puts you in a stronger position.',
                },
                {
                  n: '5',
                  text: 'Show up to the Guyana Energy Conference. The 2026 expo runs February 17 to 20 at the Marriott in Georgetown. The companies whose procurement systems you need to understand will be in that room. There is no substitute for being present.',
                },
              ].map(({ n, text }) => (
                <li key={n} className="flex items-start gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center text-white font-black text-sm">
                    {n}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <p>
              The secretariat has an open-door policy. Director Monroe said so directly. If you have
              questions about your application, your certification status, or how to position your
              business, you can walk in. You do not have to figure this out alone.
            </p>

            <p>
              2026 is being described internally as the second wave of local content implementation.
              The foundation has been laid. The question now is who shows up to build on it.
            </p>

            {/* Closing bold line */}
            <p className="pt-6 border-t border-[#e2e8f0] font-bold text-[#0b1f3a]">
              Powering Local Content compliance across Guyana&apos;s petroleum sector.
            </p>

            {/* Source note */}
            <p className="text-[#94a3b8] text-sm italic leading-relaxed border-t border-[#e2e8f0] pt-6">
              SOURCE NOTE: This post draws from the December 31, 2025 episode of the Guyana Energy
              Conference and Supply Chain Expo podcast, featuring Director of the Local Content
              Secretariat Michael Monroe in conversation with host Michella. The full episode is
              available wherever you listen to podcasts.
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
