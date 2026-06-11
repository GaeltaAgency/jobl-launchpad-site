import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  CreditCard,
  FileText,
  MapPin,
  MessageSquare,
  Receipt,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — JOBL" },
      {
        name: "description",
        content:
          "Marketplace, contacts, contracts, hours, invoicing and operational reporting in one project workflow.",
      },
      { property: "og:title", content: "JOBL Features" },
      { property: "og:description", content: "Core modules that power JOBL operational workflows." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: Features,
});

const items = [
  { icon: Briefcase, title: "Marketplace", text: "Publish worker or project demand and review relevant opportunities in a structured environment." },
  { icon: Users, title: "Contacts", text: "Maintain companies, subcontractors, crews and worker profiles in one shared operational database." },
  { icon: FileText, title: "Contracts", text: "Track project-linked contracts, amendments and signed records with clear status handling." },
  { icon: Receipt, title: "Invoice preparation", text: "Prepare billing outputs from approved hours and project-linked records instead of disconnected spreadsheets." },
  { icon: Clock, title: "Worked hours", text: "Capture hours, review approvals and keep payroll and billing inputs aligned with delivery." },
  { icon: Calendar, title: "Availability tracking", text: "Understand who is available, where, and when across multiple projects and teams." },
  { icon: ShieldCheck, title: "Compliance records", text: "Keep certifications, project documentation and operational records attached to the right people and jobs." },
  { icon: Building2, title: "Accommodation", text: "Support logistics and housing workflows for crews operating outside their home market." },
  { icon: MapPin, title: "Project-linked coordination", text: "Keep tasks, records and communication attached to the actual project context." },
  { icon: MessageSquare, title: "Communication", text: "Reduce reliance on fragmented chat groups and email threads for key workflow steps." },
  { icon: CreditCard, title: "Finance workflows", text: "Bring operational data closer to payments and invoice processing decisions." },
  { icon: BarChart3, title: "Reporting", text: "Create clearer visibility across active projects, hours, documents and pending actions." },
];

function Features() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="section-shell max-w-3xl rounded-xl p-8 md:p-10">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Features</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          JOBL is designed to connect workforce coordination, project administration and finance-adjacent workflows in one operational layer.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="surface-panel rounded-xl p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

