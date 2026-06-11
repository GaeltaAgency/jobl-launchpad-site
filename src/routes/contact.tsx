import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — JOBL" },
      { name: "description", content: "Get in touch with the JOBL team. Email info@jobl.eu or call +421 940 629 978." },
      { property: "og:title", content: "Contact JOBL" },
      { property: "og:description", content: "Reach the JOBL team by email or phone." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:info@jobl.eu?subject=${encodeURIComponent(
    `Website inquiry from ${name || "visitor"}`
  )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)}`;

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="section-shell max-w-3xl rounded-xl p-8 md:p-10">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Contact JOBL</h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          For product questions, partnership discussions or implementation interest, contact us directly.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="surface-panel rounded-xl p-6">
          <h2 className="text-lg font-semibold text-foreground">Direct contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-foreground">
            <li className="flex items-center gap-3">
              <User className="h-4 w-4 text-primary" />
              Filip Nádaždy
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@jobl.eu" className="hover:underline">info@jobl.eu</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+421940629978" className="hover:underline">+421 940 629 978</a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
          className="rounded-xl border border-border bg-card p-6 shadow-soft"
        >
          <h2 className="text-lg font-semibold text-foreground">Send a message</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-foreground">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-foreground">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium text-foreground">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5}
                className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button type="submit"
              className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/92">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

