import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'The Oilify AI Weekly — Local Content intelligence for Guyana\'s petroleum sector, delivered free every week.',
};

const posts = [
  {
    slug: 'local-content-law-reshaping-guyana',
    title: 'The Law That Started in Oil Is Now Reshaping All of Guyana',
    date: 'April 2026',
    issue: 'Issue No. 1 · The Oilify AI Weekly',
    excerpt:
      'If you are a business owner, investor, or professional operating anywhere in Guyana right now, there is a piece of legislation you need to understand. Not because it might affect you someday. Because it already is.',
  },
  {
    slug: 'local-content-certificate-how-to-get-the-business',
    title: 'You Can Get the Local Content Certificate. Here Is How You Actually Get the Business.',
    date: 'December 31, 2025',
    issue: 'Local Content, SMEs, Guyana Business · 7 min read',
    excerpt:
      'There is a moment in a developing economy when the rules shift from being about access to being about performance. Guyana has reached that moment. The Local Content Act opened the door. Now the question is whether Guyanese businesses are ready to walk through it.',
  },
  {
    slug: 'local-content-act-being-rebuilt',
    title: "Guyana's Local Content Act Is Being Rebuilt From the Inside Out",
    date: 'December 31, 2025',
    issue: 'Policy, Local Content Act, Guyana Energy · 8 min read',
    excerpt:
      "When Guyana enacted its Local Content Act, it joined a relatively small group of oil-producing nations that chose to legislate local participation rather than simply encourage it. Most countries that discover oil end up with citizens who are bystanders in their own petroleum industry. Guyana made a different choice.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0b1f3a] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">The Oilify AI Weekly</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            Blog
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-xl">
            Local Content intelligence for Guyana&apos;s petroleum sector.
          </p>
        </div>
      </section>

      {/* Post list */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map(({ slug, title, date, issue, excerpt }) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group block bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-8 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-4 h-4 text-[#f97316] shrink-0" />
                  <span className="text-[#f97316] text-xs font-semibold uppercase tracking-wider">{date}</span>
                  <span className="text-[#94a3b8] text-xs">·</span>
                  <span className="text-[#94a3b8] text-xs">{issue}</span>
                </div>
                <h2 className="text-2xl font-black text-[#0b1f3a] tracking-tight mb-3 group-hover:text-[#f97316] transition-colors">
                  {title}
                </h2>
                <p className="text-[#475569] leading-relaxed mb-5">{excerpt}</p>
                <div className="flex items-center gap-2 text-[#f97316] text-sm font-semibold group-hover:gap-3 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
