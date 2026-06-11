import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  Languages,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import desktopReference from "@/assets/jobl-desktop-reference.png.asset.json";
import mobileReference from "@/assets/jobl-mobile-reference.png.asset.json";
import rolesReference from "@/assets/jobl-roles-reference.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JOBL — Workforce & project management for construction" },
      {
        name: "description",
        content:
          "JOBL helps construction and industrial teams manage workers, projects, contracts, timesheets and invoices in one operational platform.",
      },
      { property: "og:title", content: "JOBL — Workforce & project management" },
      {
        property: "og:description",
        content:
          "Operational software for construction, industrial and subcontracting companies.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const highlights = [
  "Projects, workers and subcontractors in one system",
  "Contracts, timesheets and invoices linked to real project data",
  "Prepared for multi-country operations across Europe",
  "Available as web platform with planned mobile app workflows",
];

const modules = [
  {
    icon: Users,
    title: "Workforce marketplace",
    text: "Publish needs, review worker profiles and coordinate capacity without fragmented channels.",
  },
  {
    icon: FileText,
    title: "Contracts and documents",
    text: "Store, review and track project documents with a clear audit trail and status visibility.",
  },
  {
    icon: Clock3,
    title: "Hours and invoicing",
    text: "Connect worked hours to approvals, billing workflows and invoice preparation.",
  },
  {
    icon: Building2,
    title: "Cross-border operations",
    text: "Support accommodation, certifications, language needs and region-specific project coordination.",
  },
];

const proofPoints = [
  {
    label: "Scope basis",
    value: "Phase 1 MVP",
    text: "Structured around agreed modules for marketplace, contracts, worked hours, invoicing and contacts.",
  },
  {
    label: "Delivery model",
    value: "Web + mobile",
    text: "Planned as a progressive web platform with native mobile support for on-the-go workforce workflows.",
  },
  {
    label: "Operational fit",
    value: "4 languages",
    text: "Product direction includes Slovak, Czech, Polish and Hungarian user interface support.",
  },
];

function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.98fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center rounded-md border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              Workforce operations software for Europe-based subcontracting
            </div>
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.05] text-foreground md:text-[4.5rem]">
              One operational platform for workers, projects and project administration.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              JOBL is built for construction and industrial teams that need a clearer way to manage
              staffing, documents, worked hours, invoicing and communication across active projects.
            </p>
            <ul className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/70 p-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary/92"
              >
                Contact JOBL <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/features"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                View product scope
              </Link>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.label} className="surface-panel rounded-lg p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {point.label}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-foreground">{point.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-shell rounded-xl p-4 md:p-6">
            <div className="rounded-xl border border-border/70 bg-card p-3 shadow-soft">
              <img
                src={desktopReference.url}
                alt="JOBL desktop product view showing workforce search, worker profiles and project filters"
                className="w-full rounded-lg border border-border/60"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-6 py-6 md:py-10">
        <div className="dark-panel subtle-grid rounded-xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
                Why it feels credible
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-primary-foreground md:text-4xl">
                Replacing disconnected tools with a structured operational workflow.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {modules.map((module) => (
                <div key={module.title} className="rounded-lg border border-primary-foreground/10 bg-background/6 p-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-background text-foreground">
                    <module.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary-foreground">{module.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/72">{module.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="section-shell rounded-xl p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Platform roles</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              One system for companies, subcontractors and freelancers.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              The product direction is designed around the real parties involved in project delivery:
              companies managing projects, subcontractors coordinating crews and specialists handling
              work, hours and invoices.
            </p>
            <div className="mt-8 rounded-xl border border-border bg-card p-3 shadow-soft">
              <img
                src={rolesReference.url}
                alt="JOBL role overview for companies, subcontractors and freelancers"
                className="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="surface-panel rounded-xl p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                <MonitorSmartphone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Web and mobile workflows</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                The agreed product scope covers desktop workflows and mobile-first field usage, so workers can review offers, submit hours and access project information away from the office.
              </p>
            </div>
            <div className="surface-panel rounded-xl p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                <Languages className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Built for multi-language teams</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Planned interface support includes Slovak, Czech, Polish and Hungarian to fit cross-border workforce coordination more naturally.
              </p>
            </div>
            <div className="surface-panel rounded-xl p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Clear auditability</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Document status tracking, signed records, hours reporting and linked project data are central to the product direction — not afterthoughts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="surface-panel rounded-xl p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Mobile access</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
              Operational information available away from the desk.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Mobile workflows are part of the product plan so workers and subcontractor teams can
              check availability, review tasks, see project details and keep administration moving.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <FileCheck2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>Structured records for project documents, worked hours and invoice preparation.</span>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 flex-none text-primary" />
                <span>Faster handoff between staffing, project coordination and finance workflows.</span>
              </div>
            </div>
          </div>
          <div className="section-shell rounded-xl p-4 md:p-6">
            <img
              src={mobileReference.url}
              alt="JOBL mobile interface showing project offers, rates, locations and navigation"
              className="mx-auto max-h-[760px] w-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
        <div className="rounded-xl border border-border bg-card px-6 py-8 shadow-soft md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-foreground md:text-4xl">
                Looking for a serious operational platform instead of more workflow sprawl?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                Contact JOBL to discuss the product direction, deployment timeline and whether the
                platform fits your subcontracting or workforce coordination process.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/92"
              >
                Speak with JOBL
              </Link>
              <Link
                to="/about"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                About the company
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

