export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, var(--color-accent-soft), transparent 70%), var(--color-bg)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--color-accent)] mb-6">
          Entrepreneur &amp; Business Leader
        </p>

        <h1 className="font-display text-balance text-5xl sm:text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-8">
          YATIN PARMAR
        </h1>

        <p className="font-display italic text-balance text-xl sm:text-2xl md:text-3xl text-[var(--color-fg)]/90 mb-6">
          Building Businesses. Creating Impact.
        </p>

        <p className="text-balance text-sm sm:text-base text-[var(--color-fg-muted)] max-w-2xl mx-auto leading-relaxed">
          An entrepreneur focused on building organizations, developing ideas
          and creating meaningful business opportunities across industries.
        </p>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="#ventures"
            className="inline-flex items-center gap-2 border border-[var(--color-accent)]/60 px-7 py-3 text-xs uppercase tracking-[0.2em] text-[var(--color-fg)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors duration-300"
          >
            View Ventures
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-fg-muted)]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-[var(--color-fg-muted)]/40" />
      </div>
    </section>
  );
}
