import { contact } from "@/lib/site-config";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6 border-t border-[var(--color-border)]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
          04 — Contact
        </span>
        <h2 className="font-display text-3xl md:text-5xl mt-4 mb-10">
          Let&apos;s Connect
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-base md:text-lg">
          <a
            href={`mailto:${contact.email}`}
            className="text-[var(--color-fg)]/90 hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            {contact.email}
          </a>
          <span className="hidden sm:block h-4 w-px bg-[var(--color-border)]" />
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-fg)]/90 hover:text-[var(--color-accent)] transition-colors duration-300"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}
