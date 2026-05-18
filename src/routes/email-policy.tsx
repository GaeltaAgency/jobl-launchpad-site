import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/email-policy")({
  head: () => ({
    meta: [
      { title: "Email & Anti-spam Policy — JOBL" },
      { name: "description", content: "How JOBL sends transactional email via Amazon SES, handles bounces, complaints and suppression." },
      { property: "og:title", content: "JOBL Email Policy" },
      { property: "og:description", content: "Our transactional email and anti-spam practices." },
      { property: "og:url", content: "/email-policy" },
    ],
    links: [{ rel: "canonical", href: "/email-policy" }],
  }),
  component: EmailPolicy,
});

function EmailPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Email & Anti-spam Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Who we send to</h2>
          <p className="mt-2">
            JOBL only sends emails to users who register an account on the platform or actively
            interact with it (e.g. submit an inquiry, sign a contract). We do not purchase, rent
            or scrape email lists.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Types of email we send</h2>
          <p className="mt-2">All emails are transactional and tied to a specific user action or event:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Account verification and OTP / login codes</li>
            <li>Password reset and security alerts</li>
            <li>Job, project and timesheet notifications</li>
            <li>Invoice delivery and billing notifications</li>
            <li>Contract communication and platform notices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Sending infrastructure</h2>
          <p className="mt-2">
            JOBL uses Amazon Simple Email Service (Amazon SES) in the eu-central-1 Region.
            Our sending domain is configured with SPF, DKIM, DMARC and a custom MAIL FROM domain
            to ensure proper authentication and deliverability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Bounce and complaint handling</h2>
          <p className="mt-2">
            We process SES bounce and complaint events through Amazon SNS into our backend.
            Hard bounces and complaints are added to a suppression list and excluded from future
            sends automatically. We monitor bounce and complaint rates continuously.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Unsubscribe</h2>
          <p className="mt-2">
            Transactional emails are required for the operation of the service (for example,
            password resets and invoices). Users can disable optional notification categories
            from their account settings. Any marketing communication, where applicable, includes
            a one-click unsubscribe link and respects the suppression list.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Abuse reports</h2>
          <p className="mt-2">
            To report unwanted email or abuse, contact{" "}
            <a className="text-primary hover:underline" href="mailto:info@jobl.eu">info@jobl.eu</a>.
            We act on every report and remove affected addresses from future sends.
          </p>
        </section>
      </div>
    </article>
  );
}
