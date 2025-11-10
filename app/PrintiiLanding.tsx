"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function PrintiiLanding() {
  const [form, setForm] = useState({ name: "", email: "", company: "", location: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nLocation: ${form.location}\n\nMessage:\n${form.message}`
    );
    // As requested, only use info@printi
    window.location.href = `mailto:info@printi?subject=Printii%20Enquiry&body=${body}`;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-sky-500 shadow-lg overflow-hidden flex items-center justify-center">
              <Image src={
                (typeof window === "undefined")
                  ? "/printii-logo.png"
                  : "/printii-logo.png"
              } alt="Printii" width={36} height={36} />
            </div>
            <div>
              <p className="text-lg font-semibold leading-none">Printii</p>
              <p className="text-[11px] text-slate-300">Instantly Create. Instantly Print.</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#operators" className="hover:text-white">For Venues</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-2xl bg-white/10 hover:bg-white/20 px-4 py-2 text-sm">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -inset-40 bg-[radial-gradient(60rem_60rem_at_20%_20%,rgba(168,85,247,0.25),transparent),radial-gradient(60rem_60rem_at_80%_0%,rgba(56,189,248,0.25),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Phone‑Case Printing,
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500">
                  Ready in ~2 minutes
                </span>
              </h1>
              <p className="mt-4 text-slate-300 text-lg">
                Printii brings 24/7, unmanned, on‑site personalisation to shopping centres, attractions and events. Tap, design, pay — your case prints while you watch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#operators" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 font-medium shadow-lg">Host a machine</a>
                <a href="#features" className="rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/20">See features</a>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-pink-400"/> Epson UV printhead</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400"/> Contactless via Nayax</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400"/> 700+ case capacity</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400"/> Custom designs & cut‑outs</li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-2xl">
                <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black grid place-items-center">
                  <div className="rounded-2xl p-6 bg-black/30 border border-white/10">
                    <div className="text-center">
                      <p className="text-sm text-slate-300">Demo UI</p>
                      <h3 className="text-xl font-semibold">Design → Pay → Print</h3>
                    </div>
                    <ol className="mt-4 space-y-2 text-sm text-slate-300">
                      <li>1. Scan QR and choose phone model</li>
                      <li>2. Upload photo or choose design</li>
                      <li>3. Confirm preview & checkout</li>
                      <li>4. Collect your case in ~120 seconds</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full blur-2xl bg-fuchsia-500/40"/>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
        <div className="mt-6 grid md:grid-cols-4 gap-6">
          {[
            {step: 'Scan & select', desc: 'Guests scan a QR, pick phone model, and start designing.'},
            {step: 'Design', desc: 'Upload photos or use templates with cut‑out options.'},
            {step: 'Pay', desc: 'Contactless payments via Nayax (cards, Apple/Google Pay).'},
            {step: 'Print & collect', desc: 'Epson UV prints in ~2 minutes; case dispenses instantly.'},
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Step {i+1}</p>
              <p className="mt-1 font-semibold">{s.step}</p>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Why venues host Printii</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {title: 'Unmanned 24/7', desc: 'Remote monitoring, low footprint, rapid restock.'},
            {title: 'High throughput', desc: 'Compact cabinet, ~700 case stock, fast print cycle.'},
            {title: 'New revenue stream', desc: 'Attracts footfall and captures impulse purchases.'},
            {title: 'Brandable wrap', desc: 'Custom skins to match your centre or event theme.'},
            {title: 'Secure & compliant', desc: 'Nayax PCI‑compliant payments, UK‑voltage hardware.'},
            {title: 'Actionable analytics', desc: 'Live sales, inventory, and error alerts.'},
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">{f.title}</p>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Operators / Venues */}
      <section id="operators" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-semibold">For Shopping Centres & Attractions</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">
            We’re lining up early placements across the UK. If you manage space at a mall, arcade or tourist site, we’d love to collaborate on a branded wrap and tailored offer for your visitors.
          </p>
          <ul className="mt-5 grid md:grid-cols-3 gap-3 text-sm text-slate-300">
            <li className="rounded-xl border border-white/10 p-3">Footprint: ~0.9m × 0.8m × 1.8m</li>
            <li className="rounded-xl border border-white/10 p-3">Power: 220–230V, ~300W working</li>
            <li className="rounded-xl border border-white/10 p-3">Payments: Nayax contactless</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Talk to us</h2>
        <p className="mt-2 text-slate-300">Have a location or want to host a machine? Send us a message and we’ll get back quickly.</p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input required name="name" value={form.name} onChange={onChange} placeholder="Your name" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email address" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="company" value={form.company} onChange={onChange} placeholder="Company (optional)" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <input name="location" value={form.location} onChange={onChange} placeholder="Location / Venue" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} rows={5} placeholder="Tell us about your site, timeframe and any requirements…" className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <div className="flex items-center gap-3">
            <button type="submit" className="rounded-2xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-sky-500 px-6 py-3 font-medium shadow-lg">Send enquiry</button>
            {sent && <span className="text-sm text-slate-300">Thanks — your email draft just opened. Send it to finish.</span>}
          </div>
        </form>

        <div className="mt-6 text-sm text-slate-300">
          <p>Email: <a className="underline" href="mailto:info@printi">info@printi</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Printii Ltd. All rights reserved.</p>
          <div className="text-sm text-slate-400">Made for malls, events & attractions.</div>
        </div>
      </footer>
    </main>
  );
}
