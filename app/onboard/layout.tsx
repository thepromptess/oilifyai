import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started | Oilify AI',
  description: 'Find your Local Content compliance path in under two minutes.',
};

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {children}
    </div>
  );
}
