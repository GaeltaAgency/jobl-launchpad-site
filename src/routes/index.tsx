import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Briefcase, Users, FileText, Clock, Building2, ShieldCheck,
  CreditCard, MessageSquare, ArrowRight, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOBL — Workforce & project management for construction" },
      { name: "description", content: "Digitalize subcontracting end-to-end: marketplace, CRM, invoicing, timesheets, contracts, certifications and payments — in one platform." },
      { property: "og:title", content: "JOBL — Workforce & project management" },
      { property: "og:description", content: "All-in-one platform for construction, industrial and subcontracting companies." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  { icon: Briefcase, title: "Marketplace", text: "Find workers, subcontractors and projects in a trusted network." },
  { icon: Users, title: "CRM", text: "Manage clients, partners and subcontractors in one place." },
  { icon: FileText, title: "Automated invoicing", text: "Generate and send invoices straight from project data." },
  { icon: Clock, title: "Timesheets", text: "Track hours, approvals and shift reminders automatically." },
  { icon: ShieldCheck, title: "Certifications", text: "Store and verify worker certifications and compliance." },
  { icon: Building2, title: "Accommodation", text: "Manage housing and logistics for cross-border crews." },
  { icon: CreditCard, title: "Payments", text: "Streamlined payment workflows for projects and payroll." },
  { icon: MessageSquare, title: "Communication", text: "Project chat, alerts and notifications in one feed." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              Built for construction, industrial & subcontracting
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              The operating system for{" "}
              <span className="text-brand-gradient">modern subcontracting</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              JOBL unifies marketplace, CRM, invoicing, timesheets, contracts and payments into one
              trusted platform — so companies, subcontractors and freelancers can collaborate
              transparently from quote to paycheck.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-gradient px-6 text-sm font-medium text-white shadow-brand transition-transform hover:-translate-y-0.5">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/features" className="inline-flex h-11 items-center rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-secondary">
                Explore features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Everything you need in one platform</h2>
          <p className="mt-3 text-muted-foreground">
            Replace spreadsheets, scattered tools and paper contracts with a single workspace built
            around real operational data.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-brand">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Why teams choose JOBL</h2>
              <p className="mt-3 text-muted-foreground">
                A trusted environment where construction and industrial companies can find capacity,
                manage projects, and get paid — without juggling five different tools.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Real operational data, not stale spreadsheets",
                "End-to-end workflow from quote to invoice",
                "Cross-border ready: accommodation, certifications, contracts",
                "Transparent collaboration for clients and subcontractors",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
