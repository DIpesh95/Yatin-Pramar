import { ventures } from "@/lib/site-config";

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="py-28 md:py-36 px-6 border-t border-[var(--color-border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            02 — Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-4 mb-4">
            Businesses &amp; Ventures
          </h2>
          <p className="text-[var(--color-fg-muted)] text-base md:text-lg">
            Building and leading businesses across different industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {ventures.map((venture, i) => (
            <a
              key={venture.id}
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden border border-[var(--color-border)] bg-[var(--color-panel)] p-8 md:p-10 min-h-[22rem] transition-all duration-500 hover:border-[var(--color-accent)]/60 hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, var(--color-accent-soft), transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-fg-muted)]">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {venture.id === "teamyp" ? "Political" : "Technology"}
                </span>
                <h3 className="font-display text-3xl md:text-4xl mt-5 mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                  {venture.brand}
                </h3>
                <p className="text-sm uppercase tracking-[0.15em] text-[var(--color-fg-muted)] mb-6">
                  {venture.tagline}
                </p>
                <p className="text-[var(--color-fg)]/80 leading-relaxed max-w-md">
                  {venture.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 flex items-center gap-2 text-sm uppercase tracking-[0.15em]">
                <span className="relative">
                  {venture.cta}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
