import { contact } from "@/lib/site-config";

const links = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-lg">Yatin Parmar</p>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)] mt-1">
            Entrepreneur &amp; Business Leader
          </p>
        </div>

        <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-[0.15em] text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors duration-300"
        >
          LinkedIn ↗
        </a>
      </div>

      <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]/60 mt-10">
        © {COPYRIGHT_YEAR} Yatin Parmar. All rights reserved.
      </p>
    </footer>
  );
}
