import { philosophy } from "@/lib/site-config";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-28 md:py-36 px-6 border-t border-[var(--color-border)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
            03 — Approach
          </span>
          <h2 className="font-display text-3xl md:text-4xl mt-4">
            Building with Purpose
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {philosophy.map((item) => (
            <div
              key={item.number}
              className="border-t border-[var(--color-border)] pt-6"
            >
              <span className="font-display text-sm text-[var(--color-accent)]">
                {item.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl mt-4 mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-fg-muted)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
