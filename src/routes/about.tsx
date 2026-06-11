import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — JOBL" },
      {
        name: "description",
        content:
          "JOBL digitalizes subcontracting operations for construction and industrial companies — from workforce coordination to contracts and invoicing.",
      },
      { property: "og:title", content: "About JOBL" },
      { property: "og:description", content: "A product focused on operational clarity for subcontracting teams." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="section-shell rounded-xl p-8 md:p-10">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">About JOBL</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          JOBL is a workforce and project operations platform designed for construction,
          industrial and subcontracting companies. The product direction focuses on replacing
          fragmented communication, manual document handling and spreadsheet-heavy administration
          with a more structured system.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="surface-panel rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground">What the platform covers</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Based on the agreed Phase 1 scope, JOBL is being shaped around core workflows such as
            workforce offers, contacts, contracts, worked hours, invoice preparation, project-linked
            records and mobile-friendly field usage.
          </p>
        </section>
        <section className="surface-panel rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground">Who it is for</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
            <li>Construction and industrial companies managing projects and crews</li>
            <li>Subcontractors coordinating teams, staffing and compliance</li>
            <li>Freelance specialists handling work, hours and invoices</li>
            <li>Cross-border teams operating across multiple European markets</li>
          </ul>
        </section>
      </div>

      <section className="mt-10 surface-panel rounded-xl p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-foreground">Infrastructure and email operations</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          JOBL uses Amazon Web Services for scalable application infrastructure and Amazon SES for
          transactional email delivery including verification, operational notifications, contract
          communication, invoice delivery and security messages.
        </p>
      </section>

      <section className="mt-10 rounded-xl border border-border bg-card p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-foreground">Company contact</h3>
        <dl className="mt-4 grid gap-3 text-sm">
          <div><dt className="inline font-semibold">Contact person: </dt><dd className="inline text-muted-foreground">Filip Nádaždy</dd></div>
          <div><dt className="inline font-semibold">Email: </dt><dd className="inline"><a className="text-primary hover:underline" href="mailto:info@jobl.eu">info@jobl.eu</a></dd></div>
          <div><dt className="inline font-semibold">Phone: </dt><dd className="inline"><a className="text-primary hover:underline" href="tel:+421940629978">+421 940 629 978</a></dd></div>
        </dl>
      </section>
    </div>
  );
}

