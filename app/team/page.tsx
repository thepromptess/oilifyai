import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the team behind Oilify AI, a product of AI Design Atelier (AiDA).',
};

const team = [
  {
    initials: 'CHS',
    name: 'Cloyette Harris-Stoute',
    title: 'Founder and Product Lead',
    bio: 'Cloyette Harris-Stoute is a Certified AI Consultant with over two decades of experience in healthcare technology, specializing in regulatory compliance systems, data management, and large-scale technology implementation. She has led complex system deployments across major US healthcare institutions including Mount Sinai Hospital. She holds a CPD Certified AI Consultant credential, serves as G100 Chair for Youth Leadership and Entrepreneurship in Georgetown Guyana, and sits on the Queens Public Library Board of Trustees in New York.',
  },
  {
    initials: 'RH',
    name: 'Ray Harris',
    title: 'Chief Operating Officer',
    bio: 'Ray Harris brings extensive experience in entrepreneurship and business operations to the Oilify AI team. He oversees the operational infrastructure and day-to-day execution of the platform\u2019s growth and delivery.',
  },
  {
    initials: 'RH',
    name: 'Rawley Harris',
    title: 'Chief Financial Officer',
    bio: 'Rawley Harris brings financial leadership experience from the US Department of Veterans Affairs to the Oilify AI team. He manages the platform\u2019s financial strategy, reporting, and fiscal accountability.',
  },
  {
    initials: 'CH',
    name: 'Dr. Colin Harris',
    title: 'Strategic Advisor',
    bio: 'Dr. Colin Harris holds a doctorate in education and brings expertise in technology and project management. He provides strategic guidance on platform development, implementation methodology, and organizational growth.',
  },
  {
    initials: 'MM',
    name: 'Marlon McRae',
    title: 'Chief Security Officer',
    bio: 'Marlon McRae brings cybersecurity expertise to the Oilify AI team. He leads the platform\u2019s security architecture, data protection standards, and compliance with Guyanese data residency requirements.',
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0b1f3a] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">Our People</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            The Oilify AI Team
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl leading-relaxed">
            Oilify AI is a product of AI Design Atelier (AiDA). The following team leads the
            development and operations of the Oilify AI platform.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map(({ initials, name, title, bio }) => (
              <div
                key={name}
                className="bg-white rounded-2xl border border-[#e2e8f0] p-8 flex flex-col gap-6"
              >
                {/* Photo placeholder */}
                <div className="w-20 h-20 rounded-xl bg-[#0b1f3a] flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-lg tracking-tight">
                    {initials}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-xl font-black text-[#0b1f3a] tracking-tight mb-1">
                    {name}
                  </h2>
                  <p className="text-[#f97316] text-sm font-semibold mb-4">
                    {title}
                  </p>
                  <p className="text-[#64748b] text-sm leading-relaxed">
                    {bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            Join the Team
          </h2>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            Oilify AI is building its core team. If you are a developer, compliance specialist, or
            Guyana market expert interested in joining us, reach out at{' '}
            <a
              href="mailto:hello@oilifyai.com"
              className="text-[#f97316] hover:underline font-medium"
            >
              hello@oilifyai.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
