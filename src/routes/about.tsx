import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JOBL" },
      { name: "description", content: "JOBL digitalizes and automates the subcontracting process for construction and industrial companies — from finding workers to invoicing and payments." },
      { property: "og:title", content: "About JOBL" },
      { property: "og:description", content: "Our mission is to digitalize subcontracting end-to-end." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About JOBL</h1>
      <p className="mt-6 text-lg text-muted-foreground">
        JOBL is an all-in-one workforce and project management platform designed for
        construction, industrial and subcontracting companies. We combine marketplace
        functionality, CRM, automated invoicing, workforce availability tracking, contracts,
        timesheets, communication tools, accommodation management, certifications and payment
        workflows into a single ecosystem.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">Our mission</h2>
      <p className="mt-3 text-muted-foreground">
        Digitalize and automate the entire subcontracting process — from finding workers and
        managing projects to invoicing and payments. The system is built around real operational
        data, creating a trusted environment where companies, subcontractors and freelancers can
        collaborate efficiently and transparently.
      </p>

      <h2 className="mt-12 text-2xl font-semibold">Who we serve</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>General contractors and construction companies</li>
        <li>Industrial and manufacturing operators</li>
        <li>Subcontractors and staffing partners</li>
        <li>Freelance specialists working across projects</li>
      </ul>

      <h2 className="mt-12 text-2xl font-semibold">Built on AWS</h2>
      <p className="mt-3 text-muted-foreground">
        JOBL runs on Amazon Web Services for the scalability, security and performance required
        by a global SaaS platform. Amazon SES powers our transactional email infrastructure —
        account verification, notifications, invoices, contracts and security alerts.
      </p>

      <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-6">
        <h3 className="text-lg font-semibold">Company contact</h3>
        <dl className="mt-3 grid gap-2 text-sm">
          <div><dt className="inline font-medium">Contact person: </dt><dd className="inline text-muted-foreground">Filip Nádaždy</dd></div>
          <div><dt className="inline font-medium">Email: </dt><dd className="inline"><a className="text-primary hover:underline" href="mailto:info@jobl.eu">info@jobl.eu</a></dd></div>
          <div><dt className="inline font-medium">Phone: </dt><dd className="inline"><a className="text-primary hover:underline" href="tel:+421940629978">+421 940 629 978</a></dd></div>
        </dl>
      </div>
    </div>
  );
}
