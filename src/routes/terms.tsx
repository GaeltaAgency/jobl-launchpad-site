import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — JOBL" },
      { name: "description", content: "Terms of service for using the JOBL platform." },
      { property: "og:title", content: "JOBL Terms of Service" },
      { property: "og:description", content: "The terms that govern your use of JOBL." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: May 18, 2026</p>

      <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Acceptance</h2>
          <p className="mt-2">By creating an account or using JOBL, you agree to these terms.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Accounts</h2>
          <p className="mt-2">You are responsible for safeguarding your credentials and for activity under your account.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Acceptable use</h2>
          <p className="mt-2">No unlawful, abusive, fraudulent or infringing activity. No attempt to disrupt or compromise the service.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Customer data</h2>
          <p className="mt-2">You retain ownership of data you upload. You grant JOBL the rights needed to operate the service for you.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Fees</h2>
          <p className="mt-2">Paid plans are billed according to the order form or pricing page. Taxes are added where applicable.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Termination</h2>
          <p className="mt-2">You may stop using JOBL at any time. We may suspend accounts for breach of these terms.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Disclaimer & liability</h2>
          <p className="mt-2">JOBL is provided "as is". To the extent permitted by law, our liability is limited to fees paid in the prior 12 months.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Governing law</h2>
          <p className="mt-2">These terms are governed by the laws of the Slovak Republic.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
          <p className="mt-2">Questions: <a href="mailto:info@jobl.eu" className="text-primary hover:underline">info@jobl.eu</a></p>
        </section>
      </div>
    </article>
  );
}
