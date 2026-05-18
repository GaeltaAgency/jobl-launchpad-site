import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase, Users, FileText, Clock, Building2, ShieldCheck,
  CreditCard, MessageSquare, Calendar, Receipt, MapPin, BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — JOBL" },
      { name: "description", content: "Marketplace, CRM, invoicing, timesheets, contracts, certifications, accommodation and payments — every module JOBL offers." },
      { property: "og:title", content: "JOBL Features" },
      { property: "og:description", content: "Every module that powers JOBL." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: Features,
});

const items = [
  { icon: Briefcase, title: "Marketplace", text: "Match projects with available subcontractors and workers in a trusted network." },
  { icon: Users, title: "CRM", text: "Manage clients, partners, subcontractors and worker profiles with full history." },
  { icon: FileText, title: "Contracts", text: "Generate, sign and store contracts and addendums per project." },
  { icon: Receipt, title: "Automated invoicing", text: "Invoices generated from real project and timesheet data, ready to send." },
  { icon: Clock, title: "Timesheets", text: "Worker check-in, approvals, overtime rules and reminders." },
  { icon: Calendar, title: "Availability tracking", text: "See who's free, when, and where — across crews and projects." },
  { icon: ShieldCheck, title: "Certifications", text: "Track expiry dates and compliance documents for every worker." },
  { icon: Building2, title: "Accommodation", text: "Plan and manage housing for cross-border project crews." },
  { icon: MapPin, title: "Project management", text: "Tasks, milestones and on-site coordination in one place." },
  { icon: MessageSquare, title: "Communication", text: "Internal chat, alerts and structured notifications." },
  { icon: CreditCard, title: "Payments", text: "Payment workflows for projects, vendors and payroll." },
  { icon: BarChart3, title: "Reporting", text: "Operational dashboards built on real project data." },
];

function Features() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Features</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          One platform that replaces the spreadsheets, paper contracts and disconnected tools
          subcontracting teams use today.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
