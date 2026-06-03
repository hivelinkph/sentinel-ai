import { Link } from "react-router-dom";
import { Headphones, Zap, Shield, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const features = [
  {
    icon: Headphones,
    title: "Human-Like Voice",
    desc: "Ultra-low latency conversational agents powered by Google Gemini 3.1 Flash Live.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    desc: "Sub-second response times ensuring natural, flowing conversations without awkward pauses.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    desc: "Enterprise-grade security with full PII redaction and compliance auditing built-in.",
  },
];

export default function Index() {
  return (
    <div className="bg-hero-bg min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Features teaser */}
      <section id="features" className="py-24 px-6 border-t border-border/50 bg-background/60">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground tracking-tight">
              Next-Gen Capabilities
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to orchestrate the perfect AI-driven customer
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-secondary/40 border border-border hover:border-primary/30 hover:bg-secondary/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium uppercase tracking-widest"
            >
              View All Features <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-24 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start deploying AI voice agents today. Scale as your operations grow,
            with no hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {[
              { name: "Starter", price: "$299", period: "/mo", cta: "Get started" },
              { name: "Professional", price: "$799", period: "/mo", cta: "Get started", featured: true },
              { name: "Enterprise", price: "Custom", period: "", cta: "Contact us" },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`p-8 rounded-2xl border transition-all ${
                  tier.featured
                    ? "bg-primary/10 border-primary/40 ring-1 ring-primary/30"
                    : "bg-secondary/40 border-border hover:border-primary/20"
                }`}
              >
                {tier.featured && (
                  <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                    Most Popular
                  </div>
                )}
                <div className="text-foreground font-semibold text-lg mb-1">{tier.name}</div>
                <div className="flex items-end gap-1 mb-6">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground mb-1">{tier.period}</span>
                </div>
                <Link
                  to="/pricing"
                  className={`block w-full text-center py-3 rounded-lg text-sm font-semibold transition-all ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium uppercase tracking-widest mt-4"
          >
            See full pricing details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6 text-center text-muted-foreground/60 text-sm">
        <p>© 2026 AI CX Agent — VoxSaaS BPO Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
