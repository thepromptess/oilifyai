import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the people building Oilify AI.',
};

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0b1f3a] pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f97316]/8 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="section-label mb-4">Our People</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
            The Team
          </h1>
          <p className="text-[#94a3b8] text-lg">
            The people building Oilify AI.
          </p>
        </div>
      </section>

      {/* Team member */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="bg-[#f8fafc] rounded-2xl border border-[#e2e8f0] p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row gap-8 items-start">

              {/* Avatar */}
              <div className="shrink-0 w-24 h-24 rounded-2xl bg-[#0b1f3a] flex items-center justify-center">
                <span className="text-white font-black text-xl tracking-tight">CHS</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-2xl font-black text-[#0b1f3a] tracking-tight mb-1">
                  Cloyette Harris-Stoute
                </h2>
                <p className="text-[#f97316] text-sm font-semibold mb-5">
                  Certified AI Consultant | Founder and CEO
                </p>
                <p className="text-[#475569] leading-relaxed">
                  Cloyette Harris-Stoute is a Certified AI Consultant with over two decades of
                  experience in healthcare technology, specializing in regulatory compliance systems,
                  data management, and large-scale technology implementation. She has led complex
                  system deployments across major US healthcare institutions including Mount Sinai
                  Hospital. She holds a CPD Certified AI Consultant credential, serves as G100 Chair
                  for Youth Leadership and Entrepreneurship in Georgetown Guyana, and sits on the
                  Queens Public Library Board of Trustees in New York. She founded Oilify AI to
                  bring systems-level AI expertise to Guyana&apos;s petroleum compliance landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are Growing */}
      <section className="py-20 bg-[#0b1f3a] relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
            We Are Growing
          </h2>
          <p className="text-[#94a3b8] text-lg leading-relaxed">
            Oilify AI is currently building its core team. If you are a developer, compliance
            specialist, or Guyana market expert interested in joining us, reach out at{' '}
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
