import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — JOBL" },
      { name: "description", content: "How JOBL collects, uses and protects personal data, including transactional email communications." },
      { property: "og:title", content: "JOBL Privacy Policy" },
      { property: "og:description", content: "Our GDPR-aligned privacy practices." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

      <div className="prose-jobl mt-10 space-y-8 text-[15px] leading-relaxed text-foreground/90">
        <section>
          <h2 className="text-xl font-semibold">1. Who we are</h2>
          <p className="mt-2 text-muted-foreground">
            JOBL ("we", "us") operates the JOBL workforce and project management platform.
            For any privacy question, contact <a className="text-primary hover:underline" href="mailto:info@jobl.eu">info@jobl.eu</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Data we collect</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Account data: name, email, phone, company, role.</li>
            <li>Operational data: projects, timesheets, contracts, certifications, invoices.</li>
            <li>Communication data: messages and notifications sent through the platform.</li>
            <li>Technical data: IP, device, browser, log data needed for security and reliability.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. How we use data</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Provide and operate the JOBL platform.</li>
            <li>Authenticate users and protect accounts.</li>
            <li>Send transactional emails (see section 5).</li>
            <li>Comply with legal and accounting obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Legal basis (GDPR)</h2>
          <p className="mt-2 text-muted-foreground">
            We process personal data under contract performance, legitimate interest (security,
            fraud prevention, service improvement), legal obligation, and — where required —
            consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Transactional email</h2>
          <p className="mt-2 text-muted-foreground">
            JOBL uses Amazon Simple Email Service (Amazon SES) in the eu-central-1 Region to
            deliver transactional emails. These include:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>Account verification and OTP / login codes</li>
            <li>Password resets and security alerts</li>
            <li>Job, project and timesheet notifications</li>
            <li>Billing notifications and invoice delivery</li>
            <li>Important platform notices</li>
          </ul>
          <p className="mt-2 text-muted-foreground">
            Transactional emails are sent only to users who register or actively interact with
            the platform. We do not buy, rent or scrape email addresses.
          </p>
          <p className="mt-2 text-muted-foreground">
            We configure SPF, DKIM, DMARC and a custom MAIL FROM domain, and handle bounces and
            complaints through SES event publishing, Amazon SNS and backend processing with
            automatic suppression of hard bounces and complaints.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Data sharing</h2>
          <p className="mt-2 text-muted-foreground">
            We share data only with vetted processors needed to run JOBL (cloud hosting on AWS,
            email delivery via Amazon SES, payment providers, accounting), or where required by
            law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Retention</h2>
          <p className="mt-2 text-muted-foreground">
            We retain personal data for as long as the account is active and as required by tax,
            accounting and legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Your rights</h2>
          <p className="mt-2 text-muted-foreground">
            You can request access, correction, deletion, restriction, portability and object to
            certain processing. Contact <a className="text-primary hover:underline" href="mailto:info@jobl.eu">info@jobl.eu</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Security</h2>
          <p className="mt-2 text-muted-foreground">
            JOBL runs on AWS with encryption in transit and at rest, access controls, audit
            logging and regular security reviews.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Contact</h2>
          <p className="mt-2 text-muted-foreground">
            Filip Nádaždy · <a className="text-primary hover:underline" href="mailto:info@jobl.eu">info@jobl.eu</a> · +421 940 629 978
          </p>
        </section>
      </div>
    </article>
  );
}
