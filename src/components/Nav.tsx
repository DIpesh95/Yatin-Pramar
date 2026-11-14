"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Ventures", href: "#ventures" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-sm tracking-[0.2em] uppercase text-[var(--color-fg)]"
        >
          Yatin Parmar
        </a>

        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
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

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-px w-5 bg-[var(--color-fg)] transition-transform duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[var(--color-fg)] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[var(--color-fg)] transition-transform duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-6 px-6 pb-8 pt-2 text-sm uppercase tracking-[0.15em] text-[var(--color-fg-muted)] bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[var(--color-accent)] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
