export default function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-36 px-6 border-t border-[var(--color-border)]"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            01 — Introduction
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-4">
            About Yatin
          </h2>
        </div>

        <div className="space-y-6 text-[var(--color-fg)]/90 text-base md:text-lg leading-relaxed">
          <p>
            Yatin Parmar is an entrepreneur and business leader dedicated to
            building organizations that create real, lasting value. His work
            spans distinct industries, united by a consistent focus on
            strategy, execution and long-term growth.
          </p>
          <p>
            Across his ventures, Yatin brings a disciplined, hands-on
            approach to leadership — identifying opportunities, assembling
            the right teams and building the structures needed to turn ideas
            into functioning businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
