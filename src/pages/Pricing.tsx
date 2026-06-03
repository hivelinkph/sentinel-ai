import { Link } from "react-router-dom";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const tiers = [
  {
    name: "Starter",
    price: "$299",
    period: "/month",
    desc: "Perfect for small operations getting started with AI voice agents.",
    features: [
      "1 AI Voice Agent",
      "500 calls / month",
      "Live transcription",
      "Basic analytics dashboard",
      "Email support",
      "Standard Gemini voice",
      "1 campaign",
    ],
    cta: "Get started",
    href: "https://aibpo.vercel.app/dashboard",
    featured: false,
  },
  {
    name: "Professional",
    price: "$799",
    period: "/month",
    desc: "For growing teams that need more agents, volume, and advanced tooling.",
    features: [
      "5 AI Voice Agents",
      "2,500 calls / month",
      "Live transcription + export",
      "Advanced analytics & reporting",
      "Knowledge base integration",
      "Order management",
      "Priority support",
      "Custom voice training",
      "Up to 10 campaigns",
    ],
    cta: "Get started",
    href: "https://aibpo.vercel.app/dashboard",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Unlimited scale, dedicated infrastructure, and white-glove onboarding.",
    features: [
      "Unlimited AI Voice Agents",
      "Unlimited calls",
      "Dedicated account manager",
      "SLA guarantee (99.9% uptime)",
      "Custom integrations & webhooks",
      "On-premise deployment option",
      "HIPAA / SOC 2 compliance",
      "Unlimited campaigns",
      "24/7 phone support",
    ],
    cta: "Contact us",
    href: "mailto:hivelinkph@gmail.com",
    featured: false,
  },
];

const faqs = [
  {
    q: "Can I change plans at any time?",
    a: "Yes. You can upgrade or downgrade your plan at any time. Changes take effect on the next billing cycle.",
  },
  {
    q: "What happens if I exceed my call limit?",
    a: "Additional calls are billed at $0.45/call on Starter and $0.30/call on Professional. Enterprise has no overage fees.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — new accounts receive 50 free calls to test the platform before committing to a plan.",
  },
  {
    q: "What AI model powers the agents?",
    a: "All agents run on Google Gemini 3.1 Flash Live, providing ultra-low latency and natural conversation.",
  },
];

export default function Pricing() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />

      {/* Page header */}
      <div className="pt-40 pb-16 px-6 text-center border-b border-border/50">
        <div className="max-w-3xl mx-auto space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-foreground tracking-tight leading-tight">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Start deploying AI voice agents today. Scale as your operations
            grow — no hidden fees, no lock-in.
          </p>
        </div>
      </div>

      {/* Pricing tiers */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all ${
                  tier.featured
                    ? "bg-primary/10 border-primary/50 ring-1 ring-primary/30"
                    : "bg-secondary/40 border-border"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-foreground font-bold text-xl mb-1">{tier.name}</div>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && (
                      <span className="text-muted-foreground mb-1 text-sm">{tier.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tier.desc}</p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  target={tier.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3.5 rounded-lg text-sm font-bold transition-all active:scale-[0.97] ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Common questions about billing and the platform.</p>
          </div>
          <dl className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="p-6 rounded-xl bg-secondary/30 border border-border">
                <dt className="text-foreground font-semibold mb-2">{q}</dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 border-t border-border/50 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Start with 50 Free Calls</h2>
          <p className="text-muted-foreground">
            No credit card required. Deploy your first AI agent in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://aibpo.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-sm text-sm font-bold hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Enter Dashboard <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-8 py-3 rounded-sm text-sm font-bold hover:bg-secondary/80 transition-all active:scale-[0.97]"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6 text-center text-muted-foreground/60 text-sm">
        <p>© 2026 AI CX Agent — VoxSaaS BPO Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
