'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
  MapPin, Mail, Phone, Link2, X,
  Send, CheckCircle2, AlertCircle, ArrowRight
} from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const interests = [
  'Predictive Logistics',
  'AI Training & Development',
  'Compliance & Reporting',
  'Pipeline Integrity AI',
  'Production Optimization',
  'General Inquiry',
];

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission (replace with real API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setForm({ name: '', email: '', company: '', phone: '', interest: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0b1f3a] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label justify-center mb-4">Get in Touch</p>
          <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
            Let&apos;s Build Something
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            Whether you&apos;re ready to deploy or just exploring — our Guyanese engineers are ready to talk.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-[#0b1f3a] rounded-2xl p-7 relative overflow-hidden">
                <div className="absolute inset-0 industrial-grid opacity-40" />
                <div className="relative z-10">
                  <h2 className="text-white font-bold text-lg mb-5">Contact Information</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Headquarters</div>
                        <div className="text-[#94a3b8] text-xs mt-0.5 leading-snug">
                          45 Camp Street, Georgetown<br />
                          Guyana, South America
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Email</div>
                        <a href="mailto:info@oilifyai.gy" className="text-[#94a3b8] text-xs hover:text-[#f97316] transition-colors">
                          info@oilifyai.gy
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white text-sm font-medium">Phone</div>
                        <a href="tel:+15925551234" className="text-[#94a3b8] text-xs hover:text-[#f97316] transition-colors">
                          +1 (592) 555-1234
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="text-[#94a3b8] text-xs mb-3">Follow Us</div>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-[#f97316] hover:border-[#f97316]/30 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Link2 className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-[#f97316] hover:border-[#f97316]/30 transition-colors"
                        aria-label="Twitter"
                      >
                        <X className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guyana Pride Card */}
              <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
                <div className="text-3xl mb-3">🇬🇾</div>
                <h3 className="text-[#0b1f3a] font-bold mb-2">100% Guyanese-Owned</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">
                  When you partner with OilifyAI, you invest in Guyanese talent and Guyanese innovation.
                  No middlemen. No offshore management. Just local engineers who care.
                </p>
              </div>

              {/* Response time */}
              <div className="bg-[#f97316]/8 border border-[#f97316]/20 rounded-2xl p-5">
                <CheckCircle2 className="w-5 h-5 text-[#f97316] mb-2" />
                <h3 className="text-[#0b1f3a] font-bold text-sm mb-1">Fast Response Guarantee</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">
                  All inquiries receive a response within 24 hours during business days. Demo requests are typically scheduled within 48 hours.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[#e2e8f0] p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-[#0b1f3a] mb-1">Send Us a Message</h2>
                <p className="text-[#64748b] text-sm mb-8">
                  Fill out the form and one of our Guyanese engineers will be in touch.
                </p>

                {status === 'success' ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0b1f3a] mb-2">Message Received!</h3>
                    <p className="text-[#64748b] text-sm mb-6">
                      Thank you for reaching out. Our team will respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary px-6 py-3 rounded-xl text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#374151] mb-1.5" htmlFor="name">
                          Full Name <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#374151] mb-1.5" htmlFor="email">
                          Work Email <span className="text-[#f97316]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#374151] mb-1.5" htmlFor="company">
                          Company / Organization
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#374151] mb-1.5" htmlFor="phone">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (592) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Interest */}
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5" htmlFor="interest">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm transition-colors bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {interests.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-[#374151] mb-1.5" htmlFor="message">
                        Message <span className="text-[#f97316]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, operations, or any questions you have..."
                        className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] text-[#1e293b] text-sm placeholder-[#94a3b8] transition-colors resize-y"
                      />
                    </div>

                    {/* Error state */}
                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        Something went wrong. Please try again or email us directly at info@oilifyai.gy
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary w-full py-4 rounded-xl text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#94a3b8] text-center">
                      By submitting, you agree to our{' '}
                      <Link href="#" className="text-[#f97316] hover:underline">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link href="#" className="text-[#f97316] hover:underline">Terms of Service</Link>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Office Visual */}
      <section className="py-16 bg-white border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0b1f3a] rounded-2xl p-10 relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
            <div className="absolute inset-0 industrial-grid opacity-40" />
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#f97316]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10 flex-1">
              <p className="section-label mb-3">Our Location</p>
              <h2 className="text-2xl font-black text-white mb-2">Visit Us in Georgetown</h2>
              <p className="text-[#94a3b8] text-sm max-w-sm">
                45 Camp Street, Georgetown, Guyana. We welcome site visits from potential partners and clients.
              </p>
            </div>
            <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-6 text-center min-w-[200px]">
              <div className="text-4xl mb-2">🇬🇾</div>
              <div className="text-white font-bold">Georgetown</div>
              <div className="text-[#94a3b8] text-xs mt-1">Guyana, South America</div>
              <div className="text-[#f97316] text-xs font-semibold mt-2">6.8013° N, 58.1553° W</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
