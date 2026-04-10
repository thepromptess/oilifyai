'use client';

import { useState, FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-[#f97316] shrink-0" />
        <span className="text-[#f97316] text-sm font-semibold">You&apos;re subscribed!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2">
      <span className="text-[#94a3b8] text-sm whitespace-nowrap shrink-0">
        Subscribe to The Oilify AI Weekly
      </span>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-white text-sm placeholder-[#475569] focus:border-[#f97316] transition-colors"
      />
      <button
        type="submit"
        className="btn-primary px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
