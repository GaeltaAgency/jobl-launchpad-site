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
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question about JOBL, an integration request or want a demo? We'd love to hear
          from you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-secondary/40 p-6">
          <h2 className="text-lg font-semibold">Direct contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
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
          className="rounded-2xl border border-border bg-card p-6"
        >
          <h2 className="text-lg font-semibold">Send a message</h2>
          <div className="mt-4 space-y-3">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Message</span>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button type="submit"
              className="inline-flex h-10 items-center rounded-full bg-brand-gradient px-5 text-sm font-medium text-white shadow-brand transition-transform hover:-translate-y-0.5">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
