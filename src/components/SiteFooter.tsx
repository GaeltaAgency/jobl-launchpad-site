import { Link } from "@tanstack/react-router";
import logo from "@/assets/jobl-horizontal.svg";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/45">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="JOBL" className="h-8 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Workforce and project operations platform for construction and industrial subcontracting teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/features" className="hover:text-foreground">Features</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            <li><Link to="/email-policy" className="hover:text-foreground">Email Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} JOBL. All rights reserved.</p>
          <p>
            <a href="mailto:info@jobl.eu" className="hover:text-foreground">info@jobl.eu</a>
            {" · "}
            <a href="tel:+421940629978" className="hover:text-foreground">+421 940 629 978</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

