import { Link } from "react-router-dom";
import {
  Headphones,
  Zap,
  Shield,
  FileText,
  BookOpen,
  BarChart3,
  ShoppingCart,
  Layers,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const coreFeatures = [
  {
    icon: Headphones,
    title: "Human-Like Voice",
    desc: "Ultra-low latency conversational agents powered by Google Gemini 3.1 Flash Live. Natural cadence, accurate intonation, and contextual awareness make every call indistinguishable from a human agent.",
    badge: "Core",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    desc: "Sub-second response times ensuring natural, flowing conversations without awkward pauses. Our edge-optimized pipeline processes audio in under 300ms end-to-end.",
    badge: "Core",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    desc: "Enterprise-grade security with full PII redaction and compliance auditing built-in. HIPAA-ready architecture, encrypted transcripts, and automatic data retention controls.",
    badge: "Core",
  },
];

const platformFeatures = [
  {
    icon: FileText,
    title: "Live Transcription",
    desc: "Real-time transcript of every call, automatically saved and searchable. Export as PDF or push to your CRM via webhook.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base Integration",
    desc: "Upload PDFs, SOPs, or FAQs and the AI agent automatically searches and surfaces relevant information mid-call — eliminating hold time.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Monitor call volume, average handle time, resolution rates, and agent performance in real time. Export reports on demand.",
  },
  {
    icon: ShoppingCart,
    title: "Order Management",
    desc: "AI agents capture orders, line items, and totals during calls. All order data syncs to your database instantly for fulfillment.",
  },
  {
    icon: Layers,
    title: "Campaign Management",
    desc: "Create multiple campaigns with distinct AI agents, scripts, voices, and routing rules. Perfect for multi-client BPO operations.",
  },
];

export default function Features() {
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
            Next-Gen <span className="text-primary">Capabilities</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Everything you need to orchestrate the perfect AI-driven customer
            experience, from first ring to resolved ticket.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-primary/30 text-primary text-xs font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            Gemini 3.1 Flash Live Support Active
          </div>
        </div>
      </div>

      {/* Core features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Foundation</div>
            <h2 className="text-2xl font-bold text-foreground">Core Technology</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coreFeatures.map(({ icon: Icon, title, desc, badge }) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-secondary/40 border border-border hover:border-primary/40 hover:bg-secondary/60 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-primary/60 font-semibold border border-primary/20 rounded-full px-2 py-0.5">
                    {badge}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform features */}
      <section className="py-24 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Platform</div>
            <h2 className="text-2xl font-bold text-foreground">Built for Operations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-7 rounded-2xl bg-secondary/30 border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/50 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Ready to Deploy?</h2>
          <p className="text-muted-foreground">
            Start with a plan that fits your operation and scale as you grow.
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
              to="/pricing"
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-8 py-3 rounded-sm text-sm font-bold hover:bg-secondary/80 transition-all active:scale-[0.97]"
            >
              View Pricing
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
