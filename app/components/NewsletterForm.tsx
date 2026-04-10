'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function NewsletterForm({ buttonText = 'Subscribe Free' }: { buttonText?: string }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-[#f97316] shrink-0" />
        <span className="text-[#f97316] font-semibold text-sm">
          You&apos;re subscribed to The Oilify AI Weekly!
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="flex-1 px-4 py-3 rounded-xl border-2 border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] focus:border-[#f97316] transition-colors bg-white"
        />
        <button
          type="submit"
          className="btn-primary px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap"
        >
          {buttonText}
        </button>
      </div>
      <p className="text-[#94a3b8] text-xs">Free. No spam. Unsubscribe anytime.</p>
    </form>
  );
}
