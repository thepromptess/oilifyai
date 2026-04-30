import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Guyana's Local Content Act Is Being Rebuilt From the Inside Out",
  description:
    'The first iteration of the act set the foundation. Now the hard work begins: closing loopholes, expanding sectors, and ensuring that the businesses benefiting from local content are genuinely, verifiably local.',
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
            <span className="text-[#94a3b8] text-xs">8 min read</span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-[#94a3b8] text-xs">Oilify AI Blog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Guyana&apos;s Local Content Act Is Being Rebuilt From the Inside Out
          </h1>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            The first iteration of the act set the foundation. Now the hard work begins: closing
            loopholes, expanding sectors, and ensuring that the businesses benefiting from local
            content are genuinely, verifiably local.
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6 text-[#1e293b] text-lg leading-relaxed">

            <p>
              When Guyana enacted its Local Content Act, it joined a relatively small group of
              oil-producing nations that chose to legislate local participation rather than simply
              encourage it. Most countries that discover oil end up with citizens who are bystanders
              in their own petroleum industry. Guyana made a different choice.
            </p>

            <p>
              Four years into implementation, the act has achieved something measurable. Over 1,300
              companies are now certified. Oil companies have reoriented their procurement and supply
              chains. The question &ldquo;do you have a local content certificate?&rdquo; has become
              routine in the sector. That is not a small thing.
            </p>

            <p>
              But the secretariat is not resting on that foundation. In a year-end conversation on
              the Energy Perspectives podcast, Director Michael Monroe mapped out where the act is
              headed next, what gaps are being closed, and what the word &ldquo;local&rdquo; is
              going to have to mean more precisely going forward.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              THE FRONTING PROBLEM IS REAL, AND IT IS BEING ADDRESSED
            </h2>

            <p>
              When the act placed a premium on being Guyanese, it created, almost inevitably, an
              incentive to appear Guyanese without fully being so. Director Monroe named this
              directly: fronting. It happens when a Guyanese person is listed as the owner or
              majority shareholder of a company while the actual control and economic benefit flows
              to a non-Guyanese minority holder.
            </p>

            <p>
              The secretariat has been dealing with this since the act&apos;s inception. What is
              changing now is the approach. Ad hoc, case-by-case handling is being replaced with
              structural amendments to the act itself, ones that make it harder to construct these
              arrangements in the first place.
            </p>

            <blockquote className="border-l-4 border-[#f97316] pl-6 py-1 my-2">
              <p className="text-[#1e293b] italic leading-relaxed">
                We are armed with the different types of commercial structures and machinations that
                persons come up with to present themselves as Guyanese. We now have to look at how
                we could close that loophole.
              </p>
              <cite className="block mt-3 text-sm font-semibold text-[#f97316] not-italic">
                Michael Monroe, Director, Local Content Secretariat
              </cite>
            </blockquote>

            <p>
              Among the tools being explored: requiring that companies seeking certification be tax
              resident in Guyana. The reasoning is more than procedural. One of the stated objectives
              of the local content framework is to ensure that the money generated through oil sector
              procurement stays in the Guyanese economy, circulating through taxes, wages, and local
              spending. If a company wins a contract but its ownership and profits are effectively
              offshore, that objective is not being achieved regardless of what the certificate says.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              RETHINKING WHAT IT MEANS TO BE A GUYANESE COMPANY
            </h2>

            <p>
              The act currently requires 51 percent beneficial ownership by a Guyanese national for
              a company to qualify as a Guyanese company. In practice, that threshold has created
              friction. Labor shortages across the economy make it difficult for some otherwise
              legitimate businesses to meet the workforce composition requirements alongside the
              ownership requirements.
            </p>

            <p>
              The secretariat is exploring whether alternative pathways to certification might better
              serve the act&apos;s underlying goals. One possibility under consideration: reducing the
              ownership threshold to 25 percent but pairing that reduction with binding commitments,
              a defined level of local investment, a concrete upskilling program for Guyanese workers,
              and performance-based renewal reviews.
            </p>

            {/* Comparison cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="rounded-2xl border border-[#e2e8f0] overflow-hidden">
                <div className="bg-[#0b1f3a] px-5 py-3">
                  <p className="text-white font-black text-xs uppercase tracking-wider">Current Framework</p>
                </div>
                <ul className="p-5 space-y-3">
                  {[
                    '51% beneficial ownership by a Guyanese national required',
                    'Workforce composition requirements',
                    'Certificate issued on qualification',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#94a3b8] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#f97316]/30 overflow-hidden">
                <div className="bg-[#f97316] px-5 py-3">
                  <p className="text-white font-black text-xs uppercase tracking-wider">Under Consideration</p>
                </div>
                <ul className="p-5 space-y-3">
                  {[
                    'Possible alternative pathway at 25% ownership',
                    'Paired with local investment commitments and upskilling obligations',
                    'Performance-based renewal: deliver or do not renew',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#f97316] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              The logic is that local content is an outcome, not just a corporate structure. If a
              company with 25 percent Guyanese ownership is genuinely training Guyanese workers,
              investing locally, and paying taxes in-country, that may serve the act&apos;s goals
              more effectively than a company that clears the 51 percent threshold on paper but
              hollows out the intent in practice.
            </p>

            <p>
              Nothing here is decided. These are active conversations. But the direction signals
              something important: the secretariat is thinking about the act in terms of what it is
              actually producing, not just whether boxes are being checked.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              EXPANDING THE SECTORS: 20 NEW AREAS, INFORMED BY FOUR YEARS OF DATA
            </h2>

            <p>
              The Local Content Act currently identifies specific sectors in its first schedule where
              Guyanese companies must be given preference in procurement. The secretariat is now
              preparing to recommend expanding that list by approximately 20 additional areas.
            </p>

            <p>
              What makes this expansion credible is where the data comes from. Contractors and
              subcontractors are required to submit annual plans detailing their procurement
              activities, including spending in areas outside the existing first schedule. Four years
              of that reporting has given the secretariat a clear picture of where Guyanese companies
              are already being engaged, even in areas the act does not yet cover. That spending
              data, matched against the secretariat&apos;s own certification records, confirms that
              local capacity already exists in those areas.
            </p>

            <p>
              The expansion is not being driven by aspiration. It is being driven by evidence. The
              industry itself submitted proposals in November 2025 suggesting areas for inclusion, and
              those proposals largely align with what the secretariat&apos;s data already shows. When
              the expanded schedule is released, businesses operating in those areas will face new
              certification requirements and new procurement opportunities simultaneously.
            </p>

            <p>
              The secretariat is also tracking a parallel development: new petroleum exploration
              agreements recently signed with Total, QatarEnergy, Petronas, and Sivili mean
              additional companies now have legal obligations to comply with the local content
              framework. More operators means more demand across all the areas currently covered and
              all the areas about to be added.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              A DATA-DRIVEN SECRETARIAT IS A DIFFERENT KIND OF INSTITUTION
            </h2>

            <p>
              One of the quieter but more significant shifts signaled in the conversation is the
              secretariat&apos;s intention to become genuinely data-driven. The secretariat currently
              sits on four years of detailed procurement reporting from the major contractors and
              subcontractors. That data can show trends, flag gaps, identify which certified
              businesses are actually winning contracts, and reveal where the local content framework
              is producing outcomes versus where it is producing paperwork.
            </p>

            <p>
              The goal for 2026 is to build the systems to use that data actively, informing policy
              recommendations to the vice president and the minister of natural resources with real
              evidence from the ground. A secretariat that can walk into a policy conversation with
              four years of procurement data and a clear analysis of what it shows is a fundamentally
              different institution from one that can only report certification numbers. That shift
              matters for everyone who has a stake in whether local content actually works.
            </p>

            <h2 className="text-2xl font-black text-[#0b1f3a] pt-6">
              WHAT TO WATCH IN 2026
            </h2>

            <p>
              The wide stakeholder consultation on amendments to the Local Content Act is expected to
              take place in 2026. That process will follow the same model used when the original act
              was drafted: open dialogue, industry input, and public participation before any changes
              are finalized. The secretariat&apos;s draft recommendations are already being prepared
              for the vice president and minister of natural resources.
            </p>

            <p>
              The areas being considered for addition to the first schedule will likely be revealed
              during that consultation. So will the proposed changes to how Guyanese company status
              is defined. For businesses operating in or adjacent to the oil sector, that
              consultation is worth attending and worth contributing to. The act is being shaped by
              the data and proposals that stakeholders submit. Silence is not neutral in that process.
            </p>

            <p>
              Guyana&apos;s local content framework is four years old and already on its second
              iteration. That is not a sign of instability. It is a sign that the people running it
              are paying attention to what is working and what is not. The country that chose not to
              be a bystander in its own petroleum story is also choosing not to be a bystander in
              the design of the rules that govern it.
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
