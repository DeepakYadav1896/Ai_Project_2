import { useState } from "react"
import { motion } from "framer-motion"



const SectionHeading = ({ kicker, title, subtitle }) => (
  <div className="max-w-3xl mx-auto text-center">
    {kicker && <p className="mb-2 text-sm font-medium tracking-widest uppercase text-cyan-300/90">{kicker}</p>}
    <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-balance text-slate-300/90">{subtitle}</p>}
  </div>
);

const Stat = ({ value, label }) => (
  <div className="p-6 text-center border rounded-2xl border-white/10 bg-white/5 backdrop-blur">
    <div className="text-3xl font-bold text-white md:text-4xl">{value}</div>
    <div className="mt-1 text-sm text-slate-300">{label}</div>
  </div>
);

const ServiceCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="p-6 transition border shadow-2xl group rounded-2xl border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur">
    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-white/10 ring-1 ring-white/15">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
    <button className="inline-flex items-center gap-2 px-4 py-2 mt-4 text-sm transition border rounded-xl border-white/10 bg-white/10 text-white/90 hover:bg-white/15">Learn more
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </button>
  </motion.div>
);

const Testimonial = ({ quote, name, role }) => (
  <div className="p-6 border rounded-2xl border-white/10 bg-white/5 backdrop-blur">
    <svg className="w-6 h-6 mb-3 text-cyan-300" viewBox="0 0 24 24" fill="currentColor"><path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V22h8V11.17A5.17 5.17 0 0 0 4.83 6H7.17Zm10 0A5.17 5.17 0 0 0 12 11.17V22h8V11.17A5.17 5.17 0 0 0 14.83 6h2.34Z"/></svg>
    <p className="text-slate-200">{quote}</p>
    <div className="mt-4 text-sm text-slate-400">{name} — {role}</div>
  </div>
);

export default function InnovaEdgeHome() {


  return (
    <div className="min-h-screen w-full bg-[#06070c] text-slate-100">
      {/* Background gradient & glow */}
      <div aria-hidden className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_-10%,rgba(56,189,248,0.16),transparent),radial-gradient(50%_50%_at_110%_10%,rgba(99,102,241,0.18),transparent)]" />
        <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[90px]" />
      </div>

      {/* Hero */}
      <section className="relative">
        <div className="grid items-center gap-10 px-4 pt-16 pb-20 mx-auto max-w-7xl md:grid-cols-2 md:gap-12 md:px-6 md:pb-28 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-medium border rounded-full border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
              <span className="w-2 h-2 rounded-full bg-cyan-300" /> Innovating Beyond Boundaries
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white text-balance md:text-6xl">
              Your Edge in <span className="text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text">Digital Innovation</span>
            </h1>
            <p className="max-w-xl mt-4 text-slate-300">
              We design, build, and scale world‑class digital experiences for global brands — from high‑performance websites to AI‑powered platforms.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a to="#contact" className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-5 py-3 font-medium text-white shadow-[0_10px_35px_rgba(56,189,248,0.35)] transition hover:brightness-110">Start a Project</a>
              <a to="#services" className="px-5 py-3 font-medium transition border rounded-xl border-white/15 bg-white/5 text-white/90 hover:bg-white/10">Explore Services</a>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-4 mt-8">
              <Stat value="50+" label="International Clients" />
              <Stat value="100+" label="Projects Delivered" />
              <Stat value="24/7" label="Global Support" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-2 shadow-2xl">
              <div className="absolute z-10 px-3 py-1 text-xs rounded-full right-6 top-6 bg-black/40 text-white/80 ring-1 ring-white/15">InnovaEdge Studio</div>
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(40%_40%_at_90%_60%,rgba(99,102,241,0.25),transparent)]" />
              <div className="h-full w-full rounded-2xl bg-[conic-gradient(at_50%_50%,#0ea5e9,25%,#4f46e5,50%,#22d3ee,75%,#6366f1,100%,#0ea5e9)] opacity-20" />
              <div className="absolute grid grid-cols-6 gap-2 p-3 inset-3 rounded-2xl bg-black/40 ring-1 ring-white/10">
                {[...Array(18)].map((_, i) => (
                  <div key={i} className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
                    <div className="w-full h-12 rounded-md bg-gradient-to-br from-cyan-400/20 to-indigo-500/20" />
                    <div className="w-3/4 h-2 mt-2 rounded bg-white/10" />
                    <div className="w-1/2 h-2 mt-1 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos / trust bar */}
      <section className="border-y border-white/10 bg-white/5/10">
        <div className="grid items-center grid-cols-2 gap-6 px-4 py-8 mx-auto max-w-7xl md:grid-cols-6 md:px-6">
          {['NovaTech','BluePeak','QuantEdge','Orbitia','PrimeWorks','Helixa'].map((brand) => (
            <div key={brand} className="flex items-center justify-center text-sm text-white/60">{brand}</div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-4 py-20 md:px-6">
        <SectionHeading kicker="What we do" title="End‑to‑end services for modern brands" subtitle="From research and UX to engineering, launch, and growth — we partner as your global digital team." />
        <div className="grid gap-6 mx-auto mt-10 max-w-7xl md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={<IconMonitor />} title="Web Design & Development" desc="High‑performance, SEO‑ready websites using Next.js and modern stacks." />
          <ServiceCard icon={<IconSpark />} title="UI/UX & Branding" desc="Research‑driven design systems, brand identity, and component libraries." />
          <ServiceCard icon={<IconRobot />} title="AI & Automation" desc="Chatbots, content pipelines, and workflow automation to scale ops." />
          <ServiceCard icon={<IconMegaphone />} title="Growth & SEO" desc="Technical SEO, content strategy, and conversion optimization." />
          <ServiceCard icon={<IconPhone />} title="Mobile Apps" desc="React Native & Flutter apps with consistent brand experience." />
          <ServiceCard icon={<IconShield />} title="Enterprise & Security" desc="Secure infra, audits, and compliance for global operations." />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-4 py-20 md:px-6">
        <SectionHeading kicker="How we work" title="A clear, collaborative process" subtitle="Transparent milestones that keep teams aligned across time zones." />
        <div className="max-w-5xl mx-auto mt-10">
          <ol className="grid gap-6 md:grid-cols-4">
            {[
              ["Discover","Workshops, research, and success metrics."],
              ["Design","UX flows, wireframes, and high‑fidelity UI."],
              ["Build","Agile sprints, QA, and performance tuning."],
              ["Launch","Handover, training, analytics, and growth."],
            ].map(([title,desc],i)=> (
              <li key={title} className="relative p-5 border rounded-2xl border-white/10 bg-white/5">
                <div className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full shadow -top-3 left-5 bg-gradient-to-r from-cyan-400 to-indigo-600">{String(i+1).padStart(2,'0')}</div>
                <h3 className="mt-3 text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-4 py-20 md:px-6">
        <SectionHeading kicker="Selected work" title="Outcomes that move the needle" subtitle="A quick look at recent projects and the value we delivered." />
        <div className="grid gap-6 mx-auto mt-10 max-w-7xl md:grid-cols-3">
          {[
            {title: "Fintech Platform", result: "+65% conversions", tag: "Next.js · UX overhaul"},
            {title: "Global SaaS", result: "−38% churn", tag: "Design system · Analytics"},
            {title: "E‑commerce Revamp", result: "+42% AOV", tag: "SEO · Performance"},
          ].map((item, i) => (
            <div key={i} className="overflow-hidden border group rounded-2xl border-white/10 bg-white/5">
              <div className="relative aspect-[16/10]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-indigo-600/20" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="px-2 py-1 text-xs rounded-lg bg-black/40 text-white/90 ring-1 ring-white/15">{item.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">Outcome: {item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 md:px-6">
        <SectionHeading kicker="Client love" title="Trusted by teams across 12+ countries" />
        <div className="grid max-w-6xl gap-6 mx-auto mt-10 md:grid-cols-3">
          <Testimonial quote="InnovaEdge transformed our product experience and go‑to‑market speed." name="Sara M." role="VP Product, SaaS" />
          <Testimonial quote="Superb craft and communication. True partners for our global rollout." name="James L." role="CTO, Fintech" />
          <Testimonial quote="From brand to build, they delivered outcomes we could measure." name="Anita R." role="CMO, E‑commerce" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-20 md:px-6">
        <SectionHeading kicker="About" title="A global studio with local care" subtitle="Headquartered on the internet, collaborating across time zones to deliver resilient, scalable, and beautiful products." />
        <div className="grid items-start max-w-6xl gap-6 mx-auto mt-10 md:grid-cols-2">
          <div className="p-6 border rounded-2xl border-white/10 bg-white/5">
            <h3 className="text-white">What we value</h3>
            <ul className="grid gap-2 mt-3 text-sm text-slate-300">
              <li>• Design that drives business outcomes</li>
              <li>• Accessibility and inclusive UX</li>
              <li>• Performance and maintainability</li>
              <li>• Transparent, async‑first collaboration</li>
            </ul>
          </div>
          <div className="p-6 border rounded-2xl border-white/10 bg-white/5">
            <h3 className="text-white">Tech we use</h3>
            <p className="mt-2 text-sm text-slate-300">Next.js, React, Tailwind, Framer Motion, Node/Express, MongoDB, Sanity/Strapi, Vercel, GitHub Actions.</p>
            <div className="grid grid-cols-3 gap-3 mt-4 text-xs text-slate-300">
              {["Next.js","React","Tailwind","Framer","Node","MongoDB","Sanity","Vercel","GitHub"].map(t=> (
                <div key={t} className="px-3 py-2 text-center border rounded-lg border-white/10 bg-white/5">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative px-4 pt-16 pb-24 overflow-hidden md:px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(56,189,248,0.15),transparent)]" />
        <div className="grid items-center max-w-6xl gap-8 mx-auto md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">Ready to take your business to the next edge of innovation?</h3>
            <p className="mt-2 text-slate-300">Tell us about your goals. We’ll come back with a clear, actionable plan.</p>
          </div>
          <form className="p-6 border rounded-2xl border-white/10 bg-white/5 backdrop-blur">
            <div className="grid gap-3 md:grid-cols-2">
              <input required placeholder="Full name" className="px-4 py-3 text-sm text-white border outline-none rounded-xl border-white/10 bg-black/30 placeholder-white/40 focus:ring-2 focus:ring-cyan-400" />
              <input required type="email" placeholder="Work email" className="px-4 py-3 text-sm text-white border outline-none rounded-xl border-white/10 bg-black/30 placeholder-white/40 focus:ring-2 focus:ring-cyan-400" />
              <input placeholder="Company / Website" className="px-4 py-3 text-sm text-white border outline-none md:col-span-2 rounded-xl border-white/10 bg-black/30 placeholder-white/40 focus:ring-2 focus:ring-cyan-400" />
              <textarea placeholder="What can we help you build?" rows={4} className="px-4 py-3 text-sm text-white border outline-none md:col-span-2 rounded-xl border-white/10 bg-black/30 placeholder-white/40 focus:ring-2 focus:ring-cyan-400" />
            </div>
            <button type="submit" className="mt-4 w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 px-5 py-3 font-medium text-white shadow-[0_10px_35px_rgba(56,189,248,0.35)] transition hover:brightness-110">Request a Quote</button>
            <p className="mt-3 text-xs text-center text-white/60">Protected by reCAPTCHA • We’ll never share your info</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-10 border-t border-white/10 md:px-6">
        <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-4">
          <div className="md:col-span-2">
            {/* <Logo /> */}
            <p className="max-w-md mt-3 text-sm text-slate-300">© {new Date().getFullYear()} InnovaEdge. Innovating Beyond Boundaries. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li><a to="#about" className="hover:text-white">About</a></li>
              <li><a to="#work" className="hover:text-white">Work</a></li>
              <li><a to="#process" className="hover:text-white">Process</a></li>
              <li><a to="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>Web Design</li>
              <li>Product Engineering</li>
              <li>AI & Automation</li>
              <li>Growth & SEO</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Inline icon components (no external deps) ---
function IconMonitor(){
  return (
    <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>
    </svg>
  );
}
function IconSpark(){
  return (
    <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 3 2.5 7.5L15 13 7.5 15.5 5 23l-2.5-7.5L-1 13l7.5-2.5L5 3Zm14-1 1.5 4.5L25 8l-4.5 1.5L19 14l-1.5-4.5L13 8l4.5-1.5L19 2Z" />
    </svg>
  );
}
function IconRobot(){
  return (
    <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2"/>
      <path d="M12 7V3"/>
      <circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/>
      <path d="M8 17h8"/>
    </svg>
  );
}
function IconMegaphone(){
  return (
    <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v2a4 4 0 0 0 4 4h1"/>
      <path d="M21 8v8"/>
      <path d="M7 15V9l14-5v16L7 15Z"/>
    </svg>
  );
}
function IconPhone(){
  return (
    <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.66 12.66 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.81.7 2 2 0 0 1 1.72 2.03Z"/>
    </svg>
  );
}
function IconShield(){
  return (
    <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
    </svg>
  );
}
